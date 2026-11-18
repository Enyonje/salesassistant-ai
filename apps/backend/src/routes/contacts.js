import { randomUUID } from 'node:crypto';
import { prisma } from '../config/prisma.js';
import { requireAuth } from '../security/authMiddleware.js';

function cleanEmail(value) { return String(value || '').trim().toLowerCase(); }

export default async function contactRoutes(app) {
  app.addHook('preHandler', requireAuth);

  app.get('/prospect/:prospectId', async (req, reply) => {
    const prospect = await prisma.marketProspect.findFirst({ where: { id: req.params.prospectId, tenant_id: req.user.id } });
    if (!prospect) return reply.code(404).send({ success: false, error: 'Prospect not found.' });
    const contacts = await prisma.prospectContact.findMany({ where: { tenant_id: req.user.id, prospect_id: prospect.id }, orderBy: [{ confidence: 'desc' }, { created_at: 'desc' }] });
    return { success: true, contacts };
  });

  app.post('/prospect/:prospectId/enrich', async (req, reply) => {
    const prospect = await prisma.marketProspect.findFirst({ where: { id: req.params.prospectId, tenant_id: req.user.id } });
    if (!prospect) return reply.code(404).send({ success: false, error: 'Prospect not found.' });
    if (!process.env.HUNTER_API_KEY) return reply.code(503).send({ success: false, error: 'Contact enrichment is not configured. Add HUNTER_API_KEY to the backend environment.' });

    const endpoint = new URL('https://api.hunter.io/v2/domain-search');
    endpoint.searchParams.set('domain', prospect.domain);
    endpoint.searchParams.set('api_key', process.env.HUNTER_API_KEY);
    endpoint.searchParams.set('limit', '20');
    const response = await fetch(endpoint, { signal: AbortSignal.timeout(25000) });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) return reply.code(response.status === 429 ? 429 : 502).send({ success: false, error: body?.errors?.[0]?.details || body?.errors?.[0]?.id || `Contact provider returned HTTP ${response.status}.` });

    const sourceContacts = (body.data?.emails || []).filter(item => cleanEmail(item.value));
    const saved = [];
    for (const item of sourceContacts) {
      const email = cleanEmail(item.value);
      const data = {
        full_name: [item.first_name, item.last_name].filter(Boolean).join(' ') || null,
        first_name: item.first_name || null, last_name: item.last_name || null,
        title: item.position || null, email, email_type: item.type || null,
        confidence: Number.isFinite(Number(item.confidence)) ? Number(item.confidence) : null,
        verification: item.verification?.status || 'unverified', source_provider: 'hunter',
        source_url: item.sources?.[0]?.uri || prospect.website,
      };
      const existing = await prisma.prospectContact.findFirst({ where: { tenant_id: req.user.id, prospect_id: prospect.id, email } });
      if (existing) saved.push(await prisma.prospectContact.update({ where: { id: existing.id }, data }));
      else saved.push(await prisma.prospectContact.create({ data: { id: randomUUID(), tenant_id: req.user.id, prospect_id: prospect.id, ...data } }));
    }
    await prisma.workforceEvent.create({ data: { id: randomUUID(), tenant_id: req.user.id, event_type: 'prospect_contacts_enriched', message: `Contact provider returned ${saved.length} contact records for ${prospect.company_name}.`, metadata: { prospect_id: prospect.id, provider: 'hunter', count: saved.length } } });
    return { success: true, provider: 'hunter', count: saved.length, contacts: saved, note: 'Provider-reported verification status is preserved. Confirm lawful basis and permission before outreach.' };
  });
}
