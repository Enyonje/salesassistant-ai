import { randomUUID } from 'node:crypto';
import { z } from 'zod';
import { prisma } from '../config/prisma.js';
import { requireAuth } from '../security/authMiddleware.js';
import { discoverMarketProspects } from '../agents/marketDiscovery.js';
import { consumeUsage } from '../billing/service.js';

const searchSchema = z.object({
  industry: z.string().trim().min(2).max(120), location: z.string().trim().max(120).optional(),
  keywords: z.string().trim().max(300).optional(), ideal_customer: z.string().trim().max(500).optional(),
  limit: z.number().int().min(1).max(25).default(10),
});

export default async function prospectingRoutes(app) {
  app.addHook('preHandler', requireAuth);

  app.get('/status', async () => ({ success: true, providers: {
    tavily: Boolean(process.env.TAVILY_API_KEY), serper: Boolean(process.env.SERPER_API_KEY),
    selected: process.env.WEB_SEARCH_PROVIDER || 'auto',
  }, note: 'Discovery returns sourced company websites and snippets. It does not invent decision-makers or contact details.' }));

  app.post('/discover', async (req, reply) => {
    const parsed = searchSchema.safeParse(req.body || {});
    if (!parsed.success) return reply.code(400).send({ success: false, error: 'Provide an industry and valid discovery settings.' });
    try {
      await consumeUsage({ tenantId: req.user.id, metric: 'prospecting_runs', sourceKey: `prospecting:${randomUUID()}`, metadata: { industry: parsed.data.industry } });
      const result = await discoverMarketProspects({ tenantId: req.user.id, userId: req.user.id,
        industry: parsed.data.industry, location: parsed.data.location, keywords: parsed.data.keywords,
        idealCustomer: parsed.data.ideal_customer, limit: parsed.data.limit });
      return reply.code(201).send({ success: true, ...result });
    } catch (error) {
      req.log.error({ err: error }, 'Prospect discovery failed');
      return reply.code(502).send({ success: false, error: error.message || 'Prospect discovery failed.' });
    }
  });

  app.get('/runs', async (req) => ({ success: true, runs: await prisma.prospectingRun.findMany({
    where: { tenant_id: req.user.id }, orderBy: { created_at: 'desc' }, take: 50,
  }) }));

  app.get('/prospects', async (req) => {
    const status = typeof req.query.status === 'string' ? req.query.status : undefined;
    return { success: true, prospects: await prisma.marketProspect.findMany({
      where: { tenant_id: req.user.id, ...(status ? { status } : {}) },
      orderBy: [{ fit_score: 'desc' }, { created_at: 'desc' }], take: 250,
    }) };
  });

  app.post('/prospects/:id/convert', async (req, reply) => {
    const prospect = await prisma.marketProspect.findFirst({ where: { id: req.params.id, tenant_id: req.user.id } });
    if (!prospect) return reply.code(404).send({ success: false, error: 'Prospect not found.' });
    if (prospect.status === 'converted' && prospect.converted_lead_id) return { success: true, lead_id: prospect.converted_lead_id, message: 'Prospect already converted.' };
    await consumeUsage({ tenantId: req.user.id, metric: 'leads_created', sourceKey: `prospect-convert:${prospect.id}`, metadata: { source: 'market_discovery_conversion' } });
    const lead = await prisma.salesLead.create({ data: {
      id: randomUUID(), tenant_id: req.user.id, owner_user_id: req.user.id,
      full_name: prospect.contact_name || 'Decision-maker not yet identified', company: prospect.company_name,
      website: prospect.website, email: prospect.contact_email, source: `market_discovery:${prospect.source_provider}`,
      stage: 'new', score: prospect.fit_score, notes: 'Imported from sourced market discovery. Contact details have not been independently identified.',
      research_summary: prospect.description, research_source_url: prospect.source_url,
    }});
    await prisma.marketProspect.update({ where: { id: prospect.id }, data: { status: 'converted', converted_lead_id: lead.id, updated_at: new Date() } });
    await prisma.salesActivity.create({ data: { id: randomUUID(), tenant_id: req.user.id, owner_user_id: req.user.id,
      lead_id: lead.id, activity_type: 'market_discovery_import', summary: `Imported ${prospect.company_name} from ${prospect.source_url}.`,
      metadata: { prospect_id: prospect.id, source_provider: prospect.source_provider } } });
    return reply.code(201).send({ success: true, lead });
  });
}
