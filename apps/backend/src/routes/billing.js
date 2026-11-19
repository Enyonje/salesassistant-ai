import { prisma } from '../config/prisma.js';
import { isPlatformAdmin } from '../security/adminMiddleware.js';
import { PLANS, ensureSubscription, getBillingSnapshot, createStripeRequest, verifyStripeSignature, syncStripeSubscription } from '../billing/service.js';

async function billingAuth(req, reply) {
  try { await req.jwtVerify(); if (!req.user?.id) throw new Error('Invalid session'); }
  catch { return reply.code(401).send({ success:false, error:'Your session is invalid or has expired. Please sign in again.' }); }
}

export default async function billingRoutes(app) {
  app.get('/plans', async () => ({ success: true, plans: Object.values(PLANS), trial_days: 14 }));
  app.post('/webhook', { config: { rawBody: true } }, async (req, reply) => {
    const raw = req.rawBody;
    if (!raw || !verifyStripeSignature(raw, req.headers['stripe-signature'], process.env.STRIPE_WEBHOOK_SECRET)) return reply.code(400).send({ success: false, error: 'Invalid Stripe webhook signature.' });
    let event; try { event = JSON.parse(raw.toString('utf8')); } catch { return reply.code(400).send({ success: false, error: 'Invalid webhook payload.' }); }
    const obj = event.data?.object;
    if (event.type === 'checkout.session.completed' && obj?.mode === 'subscription') {
      const tenantId = obj.metadata?.tenant_id || obj.subscription_data?.metadata?.tenant_id;
      if (tenantId) await prisma.subscription.updateMany({ where: { tenant_id: tenantId }, data: { stripe_customer_id: typeof obj.customer === 'string' ? obj.customer : obj.customer?.id, stripe_subscription_id: typeof obj.subscription === 'string' ? obj.subscription : obj.subscription?.id, } });
    } else if (event.type?.startsWith('customer.subscription.') && obj?.id) {
      await syncStripeSubscription(obj);
    } else if (event.type === 'invoice.payment_failed' && obj?.subscription) {
      await prisma.subscription.updateMany({ where: { stripe_subscription_id: typeof obj.subscription === 'string' ? obj.subscription : obj.subscription.id, status: { in: ['active','trialing','past_due'] } }, data: { status: 'past_due' } });
    } else if (event.type === 'invoice.payment_succeeded' && obj?.subscription) {
      await prisma.subscription.updateMany({ where: { stripe_subscription_id: typeof obj.subscription === 'string' ? obj.subscription : obj.subscription.id, status: 'past_due' }, data: { status: 'active' } });
    }
    return { received: true };
  });
  app.get('/me', { preHandler: billingAuth }, async req => ({ success: true, ...(await getBillingSnapshot(req.user.id, req.user.id)) }));
  app.post('/checkout', { preHandler: billingAuth }, async (req, reply) => {
    const planKey = req.body?.plan;
    const plan = PLANS[planKey];
    if (!plan) return reply.code(400).send({ success: false, error: 'Choose a valid subscription plan.' });
    if (planKey === 'starter' && !process.env.STRIPE_SECRET_KEY) return reply.code(503).send({ success: false, error: 'Stripe is not configured yet.' });
    const sub = await ensureSubscription(req.user.id, req.user.id);
    if (sub.stripe_subscription_id && ['active','trialing'].includes(sub.status)) return reply.code(409).send({ success:false, error:'You already have an active Stripe subscription. Use Manage billing to change or cancel it.' });
    let customerId = sub.stripe_customer_id;
    if (!customerId) {
      const customer = await createStripeRequest('customers', { email: req.user.email, name: req.user.name || undefined, 'metadata[tenant_id]': req.user.id });
      customerId = customer.id;
      await prisma.subscription.update({ where: { tenant_id: req.user.id }, data: { stripe_customer_id: customerId } });
    }
    const now = Math.floor(Date.now()/1000);
    const trialEnd = sub.status === 'trialing' && sub.trial_end && sub.trial_end > new Date() ? Math.floor(sub.trial_end.getTime()/1000) : undefined;
    const base = process.env.APP_BASE_URL || 'https://salesassistant.nexusthecore.com';
    const session = await createStripeRequest('checkout/sessions', { mode: 'subscription', customer: customerId, success_url: `${base}/app?billing=success`, cancel_url: `${base}/app?billing=cancelled`, 'line_items[0][price_data][currency]': plan.currency, 'line_items[0][price_data][product_data][name]': `Sales Assistant AI ${plan.name}`, 'line_items[0][price_data][unit_amount]': plan.amount, 'line_items[0][price_data][recurring][interval]': 'month', 'line_items[0][quantity]': 1, 'subscription_data[metadata][tenant_id]': req.user.id, 'subscription_data[metadata][plan_key]': planKey, ...(trialEnd && trialEnd > now ? { 'subscription_data[trial_end]': trialEnd } : {}), 'metadata[tenant_id]': req.user.id, 'metadata[plan_key]': planKey });
    return { success: true, url: session.url };
  });
  app.post('/portal', { preHandler: billingAuth }, async (req, reply) => {
    const sub = await ensureSubscription(req.user.id, req.user.id);
    if (!sub.stripe_customer_id) return reply.code(409).send({ success: false, error: 'No Stripe customer exists yet. Choose a plan first.' });
    const base = process.env.APP_BASE_URL || 'https://salesassistant.nexusthecore.com';
    const session = await createStripeRequest('billing_portal/sessions', { customer: sub.stripe_customer_id, return_url: `${base}/app` });
    return { success: true, url: session.url };
  });
  app.get('/admin/overview', { preHandler: async (req, reply) => { await billingAuth(req, reply); if (reply.sent) return; if (!isPlatformAdmin(req.user?.email)) return reply.code(403).send({ success:false, error:'Platform administrator access is required.' }); } }, async () => {
    const [total, active, trialing, pastDue, canceled, subscriptions] = await Promise.all([
      prisma.subscription.count(), prisma.subscription.count({ where: { status: 'active' } }),
      prisma.subscription.count({ where: { status: 'trialing' } }), prisma.subscription.count({ where: { status: 'past_due' } }),
      prisma.subscription.count({ where: { status: 'canceled' } }),
      prisma.subscription.findMany({ orderBy: { updated_at: 'desc' }, take: 100 })
    ]);
    const users = await prisma.user.findMany({ where: { id: { in: [...new Set(subscriptions.map(s => s.user_id))] } }, select: { id: true, email: true, name: true } });
    const byId = new Map(users.map(user => [user.id, user]));
    return { success:true, metrics:{ total, active, trialing, past_due:pastDue, canceled }, subscriptions: subscriptions.map(s => ({ ...s, customer: byId.get(s.user_id) || null })) };
  });
  app.get('/invoices', { preHandler: billingAuth }, async req => {
    const sub = await ensureSubscription(req.user.id, req.user.id);
    if (!sub.stripe_customer_id || !process.env.STRIPE_SECRET_KEY) return { success: true, invoices: [] };
    const data = await createStripeRequest(`invoices?customer=${encodeURIComponent(sub.stripe_customer_id)}&limit=20`, {}, 'GET');
    return { success: true, invoices: (data.data || []).map(i => ({ id: i.id, number: i.number, status: i.status, amount_paid: i.amount_paid, currency: i.currency, created: i.created, hosted_invoice_url: i.hosted_invoice_url, invoice_pdf: i.invoice_pdf })) };
  });
}
