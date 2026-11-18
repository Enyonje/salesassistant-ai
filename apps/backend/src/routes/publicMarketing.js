import { prisma } from '../config/prisma.js';

export default async function publicMarketingRoutes(app) {
  const unsubscribe = async (req, reply) => {
    const token = typeof req.query?.token === 'string' ? req.query.token : '';
    if (!token) return reply.code(400).type('text/plain').send('Missing unsubscribe token.');
    let payload;
    try { payload = app.jwt.verify(token); } catch { return reply.code(400).type('text/plain').send('This unsubscribe link is invalid or expired.'); }
    if (payload.purpose !== 'marketing_unsubscribe' || !payload.tenant_id || !payload.lead_id) return reply.code(400).type('text/plain').send('This unsubscribe link is invalid.');
    await prisma.salesLead.updateMany({ where: { id: payload.lead_id, tenant_id: payload.tenant_id }, data: { email_opted_out_at: new Date() } });
    return reply.type('text/html').send('<!doctype html><html><head><meta charset="utf-8"><title>Unsubscribed</title></head><body style="font-family:system-ui;max-width:600px;margin:15vh auto;padding:24px"><h1>You are unsubscribed</h1><p>This email address will no longer receive marketing emails from this workspace.</p></body></html>');
  };
  app.get('/unsubscribe', unsubscribe);
  app.post('/unsubscribe', unsubscribe);
}
