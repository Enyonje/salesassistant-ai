import { randomUUID } from 'node:crypto';
import { z } from 'zod';
import { prisma } from '../config/prisma.js';
import { requireAuth } from '../security/authMiddleware.js';
import { generateAIText } from '../ai/provider.js';
import nodemailer from 'nodemailer';

const campaignInput = z.object({
  name: z.string().trim().min(2).max(140), objective: z.string().trim().min(5).max(1200),
  channel: z.enum(['email','linkedin','facebook','instagram','x','blog','multi_channel']),
  audience: z.string().trim().min(3).max(1200), budget: z.number().min(0).max(100000000).optional(),
  currency: z.string().trim().length(3).default('USD'), start_at: z.string().datetime().optional(), end_at: z.string().datetime().optional(),
});
const assetInput = z.object({ campaign_id: z.string().uuid().optional().nullable(), asset_type: z.enum(['social_post','email','blog_outline','ad_copy','seo_brief']).default('social_post'), channel: z.string().min(2).max(40), title: z.string().min(2).max(180), body: z.string().min(5).max(20000), call_to_action: z.string().max(300).optional(), scheduled_at: z.string().datetime().optional().nullable() });

export default async function marketingRoutes(app) {
  app.addHook('preHandler', requireAuth);

  app.get('/overview', async (req) => {
    const tenant_id = req.user.id;
    const [campaigns, assets, scheduled, published, drafts, deliveries] = await Promise.all([
      prisma.marketingCampaign.count({ where: { tenant_id } }),
      prisma.marketingAsset.count({ where: { tenant_id } }),
      prisma.marketingAsset.count({ where: { tenant_id, status: 'scheduled' } }),
      prisma.marketingAsset.count({ where: { tenant_id, status: 'published' } }),
      prisma.marketingAsset.count({ where: { tenant_id, status: 'draft' } }),
      prisma.marketingDelivery.count({ where: { tenant_id } }),
    ]);
    return { success: true, metrics: { campaigns, assets, scheduled, published, drafts, email_deliveries: deliveries }, publishing: { email_configured: Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS), social_configured: false, note: 'Email delivery is available for approved assets and opted-in leads when SMTP is configured. Social publishing remains a separate connector.' } };
  });

  app.get('/campaigns', async (req) => ({ success: true, campaigns: await prisma.marketingCampaign.findMany({ where: { tenant_id: req.user.id }, include: { _count: { select: { assets: true } } }, orderBy: { updated_at: 'desc' }, take: 100 }) }));

  app.post('/campaigns', async (req, reply) => {
    const parsed = campaignInput.safeParse(req.body);
    if (!parsed.success) return reply.code(400).send({ success: false, error: 'Check the campaign name, objective, channel and audience.' });
    const d = parsed.data;
    const campaign = await prisma.marketingCampaign.create({ data: { id: randomUUID(), tenant_id: req.user.id, ...d, start_at: d.start_at ? new Date(d.start_at) : null, end_at: d.end_at ? new Date(d.end_at) : null } });
    return reply.code(201).send({ success: true, campaign });
  });

  app.post('/campaigns/:id/strategy', async (req, reply) => {
    const campaign = await prisma.marketingCampaign.findFirst({ where: { id: req.params.id, tenant_id: req.user.id } });
    if (!campaign) return reply.code(404).send({ success: false, error: 'Campaign not found.' });
    try {
      const result = await generateAIText({ temperature: 0.4, maxTokens: 1800, messages: [
        { role: 'system', content: 'You are a senior growth marketing strategist. Produce a practical, measurable campaign plan. Do not invent market research, performance data or guarantees. Return clear sections: positioning, audience insight hypotheses, message pillars, channel plan, 2-week actions, KPIs, risks and experiments.' },
        { role: 'user', content: JSON.stringify({ name: campaign.name, objective: campaign.objective, channel: campaign.channel, audience: campaign.audience, budget: campaign.budget, currency: campaign.currency }) },
      ] });
      return { success: true, strategy: result.text, provider: result.provider, model: result.model };
    } catch (error) { return reply.code(502).send({ success: false, error: error.message || 'Strategy generation failed.' }); }
  });

  app.get('/assets', async (req) => {
    const status = typeof req.query.status === 'string' ? req.query.status : undefined;
    return { success: true, assets: await prisma.marketingAsset.findMany({ where: { tenant_id: req.user.id, ...(status ? { status } : {}) }, include: { campaign: { select: { id: true, name: true } } }, orderBy: [{ scheduled_at: 'asc' }, { updated_at: 'desc' }], take: 250 }) };
  });

  app.post('/assets/generate', async (req, reply) => {
    const schema = z.object({ campaign_id: z.string().uuid().optional(), asset_type: z.enum(['social_post','email','blog_outline','ad_copy','seo_brief']), channel: z.string().min(2).max(40).default('multi_channel'), brief: z.string().trim().min(10).max(3000), tone: z.string().max(80).default('clear, credible and helpful'), audience: z.string().max(1000).optional() });
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) return reply.code(400).send({ success: false, error: 'Provide an asset type and a useful brief.' });
    let campaign = null;
    if (parsed.data.campaign_id) {
      campaign = await prisma.marketingCampaign.findFirst({ where: { id: parsed.data.campaign_id, tenant_id: req.user.id } });
      if (!campaign) return reply.code(404).send({ success: false, error: 'Campaign not found.' });
    }
    try {
      const generated = await generateAIText({ temperature: 0.65, maxTokens: 1800, messages: [
        { role: 'system', content: `You are an experienced ${parsed.data.asset_type.replace('_',' ')} specialist. Create useful, original, audience-specific marketing material. Avoid fabricated claims, fake testimonials, unverifiable statistics, deceptive urgency and unsupported product promises. Include a concise title and call to action. Return JSON with title, body, call_to_action.` },
        { role: 'user', content: JSON.stringify({ brief: parsed.data.brief, tone: parsed.data.tone, audience: parsed.data.audience || campaign?.audience, campaign: campaign?.name, channel: parsed.data.channel }) },
      ], json: true });
      let content; try { content = JSON.parse(generated.text.replace(/^```json\s*/i,'').replace(/```$/,'').trim()); } catch { content = { title: `${parsed.data.asset_type.replaceAll('_',' ')} draft`, body: generated.text, call_to_action: '' }; }
      const asset = await prisma.marketingAsset.create({ data: { id: randomUUID(), tenant_id: req.user.id, campaign_id: campaign?.id || null, asset_type: parsed.data.asset_type, channel: parsed.data.channel, title: String(content.title || 'Marketing draft').slice(0,180), body: String(content.body || generated.text), call_to_action: String(content.call_to_action || '').slice(0,300), status: 'draft' } });
      return reply.code(201).send({ success: true, asset, provider: generated.provider, model: generated.model });
    } catch (error) { return reply.code(502).send({ success: false, error: error.message || 'Content generation failed.' }); }
  });

  app.post('/assets', async (req, reply) => {
    const parsed = assetInput.safeParse(req.body);
    if (!parsed.success) return reply.code(400).send({ success: false, error: 'Invalid marketing asset.' });
    const d = parsed.data;
    if (d.campaign_id && !await prisma.marketingCampaign.findFirst({ where: { id: d.campaign_id, tenant_id: req.user.id } })) return reply.code(404).send({ success: false, error: 'Campaign not found.' });
    const asset = await prisma.marketingAsset.create({ data: { id: randomUUID(), tenant_id: req.user.id, ...d, scheduled_at: d.scheduled_at ? new Date(d.scheduled_at) : null, status: d.scheduled_at ? 'scheduled' : 'draft' } });
    return reply.code(201).send({ success: true, asset });
  });

  app.patch('/assets/:id', async (req, reply) => {
    const schema = z.object({ title: z.string().min(2).max(180).optional(), body: z.string().min(5).max(20000).optional(), call_to_action: z.string().max(300).nullable().optional(), status: z.enum(['draft','in_review','approved','scheduled','archived']).optional(), scheduled_at: z.string().datetime().nullable().optional() }).refine(v => Object.keys(v).length > 0);
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) return reply.code(400).send({ success: false, error: 'Invalid asset update.' });
    const existing = await prisma.marketingAsset.findFirst({ where: { id: req.params.id, tenant_id: req.user.id } });
    if (!existing) return reply.code(404).send({ success: false, error: 'Asset not found.' });
    const d = { ...parsed.data };
    if (Object.hasOwn(d, 'scheduled_at')) { d.scheduled_at = d.scheduled_at ? new Date(d.scheduled_at) : null; if (d.scheduled_at && !d.status) d.status = 'scheduled'; }
    const asset = await prisma.marketingAsset.update({ where: { id: existing.id }, data: d });
    return { success: true, asset };
  });

  // Send only an approved email asset to leads with explicit recorded consent.
  app.post('/assets/:id/send-email', { config: { rateLimit: { max: 3, timeWindow: '1 minute' } } }, async (req, reply) => {
    const schema = z.object({ limit: z.number().int().min(1).max(Number(process.env.MARKETING_EMAIL_MAX_PER_SEND || 100)).default(50) });
    const parsed = schema.safeParse(req.body || {});
    if (!parsed.success) return reply.code(400).send({ success: false, error: 'Invalid send limit.' });
    const asset = await prisma.marketingAsset.findFirst({ where: { id: req.params.id, tenant_id: req.user.id } });
    if (!asset) return reply.code(404).send({ success: false, error: 'Marketing asset not found.' });
    if (asset.asset_type !== 'email' || asset.channel !== 'email') return reply.code(400).send({ success: false, error: 'Only email assets can be delivered through this endpoint.' });
    if (asset.status !== 'approved') return reply.code(409).send({ success: false, error: 'The email asset must be approved before sending.' });
    const required = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM', 'PUBLIC_API_URL'];
    const missing = required.filter(k => !process.env[k]);
    if (missing.length) return reply.code(503).send({ success: false, error: `Email delivery is not configured. Missing: ${missing.join(', ')}` });

    const candidates = await prisma.salesLead.findMany({
      where: { tenant_id: req.user.id, email_consent: true, email_opted_out_at: null, email: { not: null } },
      orderBy: { created_at: 'asc' }, take: 1000,
      select: { id: true, email: true, full_name: true },
    });
    const priorRows = await prisma.marketingDelivery.findMany({ where: { tenant_id: req.user.id, asset_id: asset.id }, select: { lead_id: true, status: true } });
    const alreadySent = new Set(priorRows.filter(row => row.status === 'sent' || row.status === 'queued').map(row => row.lead_id));
    const seenEmails = new Set();
    const leads = candidates.filter(lead => { const email = String(lead.email || '').trim().toLowerCase(); if (!email || alreadySent.has(lead.id) || seenEmails.has(email)) return false; seenEmails.add(email); return true; }).slice(0, parsed.data.limit);
    if (!leads.length) return reply.code(409).send({ success: false, error: 'No eligible leads found. Leads must have an email address, recorded email consent and no opt-out.' });

    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || 'false') === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      connectionTimeout: 15000, greetingTimeout: 10000, socketTimeout: 20000,
    });
    const results = { sent: 0, failed: 0, skipped: 0 };
    for (const lead of leads) {
      const stillEligible = await prisma.salesLead.findFirst({ where: { id: lead.id, tenant_id: req.user.id, email_consent: true, email_opted_out_at: null, email: lead.email }, select: { id: true } });
      if (!stillEligible) { results.skipped++; continue; }
      // Claim this recipient before sending. The unique tenant/asset/lead key prevents concurrent duplicate sends.
      const existingDelivery = await prisma.marketingDelivery.findFirst({ where: { tenant_id: req.user.id, asset_id: asset.id, lead_id: lead.id } });
      let deliveryId;
      if (existingDelivery) {
        if (existingDelivery.status === 'sent' || existingDelivery.status === 'queued') { results.skipped++; continue; }
        const reset = await prisma.marketingDelivery.update({ where: { id: existingDelivery.id }, data: { status: 'queued', recipient: lead.email, error_message: null, provider_id: null, sent_at: null } });
        deliveryId = reset.id;
      } else {
        const created = await prisma.marketingDelivery.create({ data: { tenant_id: req.user.id, asset_id: asset.id, lead_id: lead.id, recipient: lead.email, status: 'queued', provider: 'smtp' } });
        deliveryId = created.id;
      }
      const token = app.jwt.sign({ purpose: 'marketing_unsubscribe', tenant_id: req.user.id, lead_id: lead.id }, { expiresIn: '365d' });
      const base = (process.env.PUBLIC_API_URL || '').replace(/\/$/, '');
      const unsubscribeUrl = `${base}/api/public/marketing/unsubscribe?token=${encodeURIComponent(token)}`;
      const escapeHtml = value => String(value).replace(/[&<>\"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": '&#39;' }[ch]));
      const safeName = escapeHtml(lead.full_name || 'there');
      const htmlBody = escapeHtml(asset.body).replace(/\r?\n/g, '<br>');
      const safeCta = escapeHtml(asset.call_to_action || '');
      const html = `<p>Hello ${safeName},</p><div>${htmlBody}</div>${safeCta ? `<p>${safeCta}</p>` : ''}<hr><p style="font-size:12px;color:#666">You are receiving this because you agreed to receive email from this business. <a href="${unsubscribeUrl}">Unsubscribe</a>.</p>`;
      try {
        const sent = await transport.sendMail({
          from: process.env.SMTP_FROM,
          to: lead.email,
          replyTo: process.env.SMTP_REPLY_TO || undefined,
          subject: asset.title,
          text: `Hello ${safeName},\n\n${asset.body}\n\n${asset.call_to_action || ''}\n\nUnsubscribe: ${unsubscribeUrl}`,
          html,
          headers: { 'List-Unsubscribe': `<${unsubscribeUrl}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' },
        });
        await prisma.marketingDelivery.update({ where: { id: deliveryId }, data: { status: 'sent', provider_id: sent.messageId, sent_at: new Date(), error_message: null } });
        results.sent++;
      } catch (error) {
        await prisma.marketingDelivery.update({ where: { id: deliveryId }, data: { status: 'failed', error_message: String(error.message || 'SMTP send failed').slice(0, 1500) } });
        results.failed++;
      }
    }
    await transport.close();
    return { success: true, asset_id: asset.id, results, message: 'Email delivery attempt completed. Failed and successful recipients are recorded.' };
  });

  app.get('/assets/:id/deliveries', async (req, reply) => {
    const asset = await prisma.marketingAsset.findFirst({ where: { id: req.params.id, tenant_id: req.user.id }, select: { id: true } });
    if (!asset) return reply.code(404).send({ success: false, error: 'Marketing asset not found.' });
    const [total, sent, failed, records] = await Promise.all([
      prisma.marketingDelivery.count({ where: { tenant_id: req.user.id, asset_id: asset.id } }),
      prisma.marketingDelivery.count({ where: { tenant_id: req.user.id, asset_id: asset.id, status: 'sent' } }),
      prisma.marketingDelivery.count({ where: { tenant_id: req.user.id, asset_id: asset.id, status: 'failed' } }),
      prisma.marketingDelivery.findMany({ where: { tenant_id: req.user.id, asset_id: asset.id }, orderBy: { created_at: 'desc' }, take: 100, select: { id: true, recipient: true, status: true, error_message: true, sent_at: true, created_at: true } }),
    ]);
    return { success: true, metrics: { total, sent, failed }, deliveries: records };
  });

}
