import { randomUUID, createHmac, timingSafeEqual } from 'node:crypto';
import { prisma } from '../config/prisma.js';

export const PLANS = {
  starter: { key: 'starter', name: 'Starter', amount: 2900, currency: 'usd', interval: 'month', limits: { workforce_tasks: 100, prospecting_runs: 25, leads_created: 500 }, employees: 3 },
  professional: { key: 'professional', name: 'Professional', amount: 9900, currency: 'usd', interval: 'month', limits: { workforce_tasks: 500, prospecting_runs: 150, leads_created: 2500 }, employees: 10 },
  business: { key: 'business', name: 'Business', amount: 24900, currency: 'usd', interval: 'month', limits: { workforce_tasks: 2000, prospecting_runs: 600, leads_created: 10000 }, employees: 25 },
};
export const TRIAL_DAYS = 14;
const ACTIVE = new Set(['trialing', 'active']);
const monthWindow = (date = new Date()) => ({ start: new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1)), end: new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth()+1, 1)) });

export async function ensureSubscription(tenantId, userId = tenantId) {
  let sub = await prisma.subscription.findUnique({ where: { tenant_id: tenantId } });
  if (sub) return normalizeStatus(sub);
  const now = new Date();
  try {
    return await prisma.subscription.create({ data: { id: randomUUID(), tenant_id: tenantId, user_id: userId, plan_key: 'starter', status: 'trialing', trial_start: now, trial_end: new Date(now.getTime()+TRIAL_DAYS*86400000) } });
  } catch (e) {
    if (e.code === 'P2002') return prisma.subscription.findUnique({ where: { tenant_id: tenantId } });
    throw e;
  }
}

export async function normalizeStatus(sub) {
  if (!sub) return sub;
  if (sub.status === 'trialing' && sub.trial_end && sub.trial_end <= new Date()) {
    return prisma.subscription.update({ where: { id: sub.id }, data: { status: 'expired' } });
  }
  if (sub.status === 'active' && sub.current_period_end && sub.current_period_end <= new Date() && !sub.cancel_at_period_end) {
    return prisma.subscription.update({ where: { id: sub.id }, data: { status: 'past_due' } });
  }
  if (sub.status === 'active' && sub.cancel_at_period_end && sub.current_period_end && sub.current_period_end <= new Date()) {
    return prisma.subscription.update({ where: { id: sub.id }, data: { status: 'canceled', canceled_at: new Date() } });
  }
  return sub;
}

export async function getBillingSnapshot(tenantId, userId = tenantId) {
  const sub = await normalizeStatus(await ensureSubscription(tenantId, userId));
  const plan = PLANS[sub.plan_key] || PLANS.starter;
  const { start, end } = monthWindow();
  const rows = await prisma.usageRecord.groupBy({ by: ['metric'], where: { tenant_id: tenantId, period_start: start, period_end: end }, _sum: { quantity: true } });
  const usage = Object.fromEntries(rows.map(x => [x.metric, x._sum.quantity || 0]));
  return { subscription: sub, plan, plans: Object.values(PLANS), usage: Object.fromEntries(Object.entries(plan.limits).map(([metric, limit]) => [metric, { used: usage[metric] || 0, limit, remaining: Math.max(0, limit-(usage[metric]||0)), percent: Math.min(100, Math.round(((usage[metric]||0)/limit)*100)) }])), billing_period: { start, end }, stripe_configured: Boolean(process.env.STRIPE_SECRET_KEY) };
}

export async function assertSubscriptionAccess(tenantId, userId = tenantId) {
  const sub = await normalizeStatus(await ensureSubscription(tenantId, userId));
  if (!ACTIVE.has(sub.status)) {
    const error = new Error(sub.status === 'past_due' ? 'Your payment is past due. Update your payment method to continue.' : 'Your free trial or subscription has ended. Choose a plan to restore access.');
    error.statusCode = 402; error.code = 'SUBSCRIPTION_REQUIRED'; throw error;
  }
  return sub;
}

export async function assertAgentEntitlement(tenantId, agentId) {
  const sub = await assertSubscriptionAccess(tenantId);
  const plan = PLANS[sub.plan_key] || PLANS.starter;
  const assignments = await prisma.workforceTask.findMany({
    where: { tenant_id: tenantId, agent_id: { not: null } },
    select: { agent_id: true }, orderBy: { created_at: 'asc' }, take: 5000,
  });
  const allowedAgents = new Set();
  for (const assignment of assignments) {
    if (assignment.agent_id && allowedAgents.size < plan.employees) allowedAgents.add(assignment.agent_id);
  }
  if (!allowedAgents.has(agentId) && allowedAgents.size >= plan.employees) {
    const error = new Error(`Your ${plan.name} plan includes up to ${plan.employees} AI employees. Upgrade to assign more employees to tasks.`);
    error.statusCode = 402; error.code = 'AGENT_LIMIT_REACHED';
    error.details = { limit: plan.employees, used: allowedAgents.size, plan: sub.plan_key };
    throw error;
  }
  return { limit: plan.employees, used: allowedAgents.size };
}

export async function consumeUsage({ tenantId, metric, sourceKey, quantity = 1, metadata = {} }) {
  const sub = await assertSubscriptionAccess(tenantId);
  const plan = PLANS[sub.plan_key] || PLANS.starter;
  const limit = plan.limits[metric];
  if (limit == null) throw new Error(`Unknown usage metric: ${metric}`);
  const { start, end } = monthWindow();
  return prisma.$transaction(async tx => {
    await tx.$queryRaw`SELECT pg_advisory_xact_lock(hashtext(${tenantId}), hashtext(${metric}))::text AS locked`;
    if (sourceKey) {
      const prior = await tx.usageRecord.findUnique({ where: { source_key: sourceKey } });
      if (prior) return { recorded: false, duplicate: true };
    }
    const aggregate = await tx.usageRecord.aggregate({ where: { tenant_id: tenantId, metric, period_start: start, period_end: end }, _sum: { quantity: true } });
    const used = aggregate._sum.quantity || 0;
    if (used + quantity > limit) {
      const error = new Error(`You've reached your ${plan.name} allowance of ${limit} ${metric.replaceAll('_',' ')} this month. Upgrade your plan to continue.`);
      error.statusCode = 402; error.code = 'USAGE_LIMIT_REACHED'; error.details = { metric, used, limit, plan: sub.plan_key }; throw error;
    }
    await tx.usageRecord.create({ data: { id: randomUUID(), tenant_id: tenantId, metric, quantity, period_start: start, period_end: end, source_key: sourceKey || null, metadata } });
    return { recorded: true, used: used + quantity, limit };
  });
}

export async function createStripeRequest(path, body, method = 'POST') {
  if (!process.env.STRIPE_SECRET_KEY) { const e = new Error('Stripe billing is not configured. Add STRIPE_SECRET_KEY to the backend environment.'); e.statusCode = 503; throw e; }
  const params = new URLSearchParams();
  const append = (obj, prefix='') => Object.entries(obj || {}).forEach(([k,v]) => { const key = prefix ? `${prefix}[${k}]` : k; if (v && typeof v === 'object' && !Array.isArray(v)) append(v,key); else if (v !== undefined && v !== null) params.append(key,String(v)); });
  append(body);
  const response = await fetch(`https://api.stripe.com/v1/${path}`, { method, headers: { Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`, 'Content-Type': 'application/x-www-form-urlencoded' }, body: method === 'GET' ? undefined : params.toString() });
  const data = await response.json();
  if (!response.ok) { const e = new Error(data.error?.message || 'Stripe request failed.'); e.statusCode = 502; throw e; }
  return data;
}

export function verifyStripeSignature(rawBody, signature, secret) {
  if (!signature || !secret) return false;
  const parts = Object.fromEntries(signature.split(',').map(x => x.split('=')));
  if (!parts.t || !parts.v1) return false;
  const expected = createHmac('sha256', secret).update(`${parts.t}.${rawBody}`).digest('hex');
  const a = Buffer.from(expected); const b = Buffer.from(parts.v1);
  return a.length === b.length && timingSafeEqual(a,b) && Math.abs(Date.now()/1000-Number(parts.t)) <= 300;
}

export async function syncStripeSubscription(stripeSub) {
  const tenantId = stripeSub.metadata?.tenant_id;
  if (!tenantId) return;
  const statusMap = { trialing: 'trialing', active: 'active', past_due: 'past_due', unpaid: 'past_due', canceled: 'canceled', incomplete_expired: 'expired', incomplete: 'incomplete', paused: 'paused' };
  const item = stripeSub.items?.data?.[0];
  const inferredPlan = Object.values(PLANS).find(plan => plan.amount === item?.price?.unit_amount);
  const planKey = inferredPlan?.key || (PLANS[stripeSub.metadata?.plan_key] ? stripeSub.metadata.plan_key : undefined);
  const data = { ...(planKey ? { plan_key: planKey } : {}), status: statusMap[stripeSub.status] || stripeSub.status, stripe_subscription_id: stripeSub.id, stripe_customer_id: typeof stripeSub.customer === 'string' ? stripeSub.customer : stripeSub.customer?.id, stripe_price_id: item?.price?.id || null, current_period_start: stripeSub.current_period_start ? new Date(stripeSub.current_period_start*1000) : null, current_period_end: stripeSub.current_period_end ? new Date(stripeSub.current_period_end*1000) : null, cancel_at_period_end: Boolean(stripeSub.cancel_at_period_end), canceled_at: stripeSub.canceled_at ? new Date(stripeSub.canceled_at*1000) : null };
  await prisma.subscription.updateMany({ where: { tenant_id: tenantId }, data });
}
