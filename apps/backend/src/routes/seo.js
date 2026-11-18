import { randomUUID } from 'node:crypto';
import { z } from 'zod';
import { prisma } from '../config/prisma.js';
import { requireAuth } from '../security/authMiddleware.js';
import { generateAIText } from '../ai/provider.js';
import { auditPageInput } from '../seo/audit.js';

const projectInput = z.object({ name: z.string().trim().min(2).max(120), website: z.string().url().max(500), target_market: z.string().max(300).optional(), target_country: z.string().max(100).optional(), language: z.string().min(2).max(12).default('en') });
const keywordInput = z.object({ keyword: z.string().trim().min(2).max(180), search_intent: z.string().max(40).optional(), priority: z.enum(['low','medium','high']).default('medium'), notes: z.string().max(2000).optional() });
const auditInput = z.object({ page_url: z.string().url().max(1000), title: z.string().max(500).optional(), meta_description: z.string().max(1000).optional(), canonical_url: z.string().max(1000).optional(), h1_count: z.number().int().min(0).max(100).default(0), word_count: z.number().int().min(0).max(1000000).default(0), image_count: z.number().int().min(0).max(10000).default(0), images_without_alt: z.number().int().min(0).max(10000).default(0), has_viewport: z.boolean().default(false), indexable: z.boolean().default(true) });
const projectForTenant = (id, tenant_id) => prisma.seoProject.findFirst({ where: { id, tenant_id } });

export default async function seoRoutes(app) {
  app.addHook('preHandler', requireAuth);
  app.get('/department', async () => ({ success: true, department: 'Search Engine Optimization', employees: [
    { role: 'SEO Director', responsibility: 'Own organic growth strategy, priorities and outcomes.' },
    { role: 'Technical SEO Manager', responsibility: 'Coordinate crawlability, indexability, performance and site architecture audits.' },
    { role: 'Keyword Research Specialist', responsibility: 'Build keyword clusters and map search intent.' },
    { role: 'Competitor SEO Analyst', responsibility: 'Identify competitor visibility and content gaps using connected data sources.' },
    { role: 'On-Page SEO Specialist', responsibility: 'Improve titles, descriptions, headings, internal links and page relevance.' },
    { role: 'Content SEO Strategist', responsibility: 'Create evidence-led editorial briefs and content calendars.' },
    { role: 'Link Building Specialist', responsibility: 'Research relevant, legitimate partnership and citation opportunities.' },
    { role: 'Local SEO Specialist', responsibility: 'Improve local landing pages and business profile consistency.' },
    { role: 'Programmatic SEO Specialist', responsibility: 'Design useful scalable landing-page systems with quality controls.' },
    { role: 'SEO Performance Analyst', responsibility: 'Measure impressions, clicks, rankings, conversions and revenue.' },
  ] }));
  app.get('/projects', async (req) => ({ success: true, projects: await prisma.seoProject.findMany({ where: { tenant_id: req.user.id }, orderBy: { updated_at: 'desc' }, take: 100 }) }));
  app.post('/projects', async (req, reply) => {
    const parsed = projectInput.safeParse(req.body);
    if (!parsed.success) return reply.code(400).send({ success: false, error: 'Provide a project name and valid website URL.' });
    const project = await prisma.seoProject.create({ data: { id: randomUUID(), tenant_id: req.user.id, ...parsed.data } });
    return reply.code(201).send({ success: true, project });
  });
  app.get('/projects/:id/keywords', async (req, reply) => {
    const project = await projectForTenant(req.params.id, req.user.id);
    if (!project) return reply.code(404).send({ success: false, error: 'SEO project not found.' });
    return { success: true, keywords: await prisma.seoKeyword.findMany({ where: { tenant_id: req.user.id, project_id: project.id }, orderBy: [{ priority: 'desc' }, { created_at: 'desc' }], take: 500 }) };
  });
  app.post('/projects/:id/keywords', async (req, reply) => {
    const project = await projectForTenant(req.params.id, req.user.id);
    if (!project) return reply.code(404).send({ success: false, error: 'SEO project not found.' });
    const parsed = keywordInput.safeParse(req.body);
    if (!parsed.success) return reply.code(400).send({ success: false, error: 'Enter a valid keyword.' });
    try {
      const keyword = await prisma.seoKeyword.create({ data: { id: randomUUID(), tenant_id: req.user.id, project_id: project.id, ...parsed.data } });
      return reply.code(201).send({ success: true, keyword });
    } catch (error) { if (error.code === 'P2002') return reply.code(409).send({ success: false, error: 'That keyword is already in this project.' }); throw error; }
  });
  app.post('/projects/:id/keyword-ideas', async (req, reply) => {
    const project = await projectForTenant(req.params.id, req.user.id);
    if (!project) return reply.code(404).send({ success: false, error: 'SEO project not found.' });
    const seed = z.object({ seed_keyword: z.string().trim().min(2).max(180), audience: z.string().max(500).optional() }).safeParse(req.body);
    if (!seed.success) return reply.code(400).send({ success: false, error: 'Provide a seed keyword.' });
    try {
      const result = await generateAIText({ temperature: 0.3, maxTokens: 1800, json: true, messages: [
        { role: 'system', content: 'You are an SEO keyword strategist. Return JSON with an ideas array of 12 objects: keyword, intent (informational|commercial|transactional|navigational), priority (low|medium|high), rationale. Suggest relevant long-tail queries and topic clusters. Do not invent search volume, keyword difficulty, CPC, rankings or traffic metrics. Clearly treat all ideas as hypotheses requiring validation in a keyword data provider.' },
        { role: 'user', content: JSON.stringify({ website: project.website, market: project.target_market, country: project.target_country, seed_keyword: seed.data.seed_keyword, audience: seed.data.audience }) },
      ] });
      let parsed; try { parsed = JSON.parse(result.text); } catch { return reply.code(502).send({ success: false, error: 'AI returned an invalid keyword idea response. Retry.' }); }
      return { success: true, source: 'ai_hypotheses_not_search_volume_data', provider: result.provider, model: result.model, ideas: Array.isArray(parsed.ideas) ? parsed.ideas.slice(0, 20) : [] };
    } catch (error) { return reply.code(503).send({ success: false, error: error.message }); }
  });
  app.post('/projects/:id/audits', async (req, reply) => {
    const project = await projectForTenant(req.params.id, req.user.id);
    if (!project) return reply.code(404).send({ success: false, error: 'SEO project not found.' });
    const parsed = auditInput.safeParse(req.body);
    if (!parsed.success) return reply.code(400).send({ success: false, error: 'Provide page metadata and technical checks. This audit evaluates submitted page data; it does not crawl the URL.' });
    const audit = auditPageInput(parsed.data);
    const record = await prisma.seoAudit.create({ data: { id: randomUUID(), tenant_id: req.user.id, project_id: project.id, page_url: parsed.data.page_url, score: audit.score, findings: audit.findings, recommendations: audit.recommendations } });
    return reply.code(201).send({ success: true, audit: record, scope: 'submitted_page_data_only' });
  });
  app.get('/projects/:id/audits', async (req, reply) => {
    const project = await projectForTenant(req.params.id, req.user.id);
    if (!project) return reply.code(404).send({ success: false, error: 'SEO project not found.' });
    return { success: true, audits: await prisma.seoAudit.findMany({ where: { tenant_id: req.user.id, project_id: project.id }, orderBy: { created_at: 'desc' }, take: 50 }) };
  });
  app.post('/projects/:id/content-briefs', async (req, reply) => {
    const project = await projectForTenant(req.params.id, req.user.id);
    if (!project) return reply.code(404).send({ success: false, error: 'SEO project not found.' });
    const input = z.object({ keyword: z.string().trim().min(2).max(180), audience: z.string().max(500).optional(), product_context: z.string().max(1200).optional() }).safeParse(req.body);
    if (!input.success) return reply.code(400).send({ success: false, error: 'Provide a target keyword.' });
    try {
      const result = await generateAIText({ temperature: 0.4, maxTokens: 2200, messages: [
        { role: 'system', content: 'You are a senior SEO content strategist. Produce a useful editorial brief with search intent hypothesis, reader problem, angle, suggested title, meta description, H1, H2/H3 outline, questions to answer, evidence and expert input to gather, internal-link opportunities, schema suggestions, CTA and quality checks. Do not claim keyword volume or ranking guarantees. Avoid thin or repetitive content.' },
        { role: 'user', content: JSON.stringify({ website: project.website, market: project.target_market, country: project.target_country, language: project.language, ...input.data }) },
      ] });
      const brief = await prisma.seoContentBrief.create({ data: { id: randomUUID(), tenant_id: req.user.id, project_id: project.id, keyword: input.data.keyword, title: `${input.data.keyword} — SEO content brief`.slice(0, 180), brief: result.text, provider: result.provider, model: result.model } });
      return reply.code(201).send({ success: true, brief });
    } catch (error) { return reply.code(503).send({ success: false, error: error.message }); }
  });
  app.get('/projects/:id/content-briefs', async (req, reply) => {
    const project = await projectForTenant(req.params.id, req.user.id);
    if (!project) return reply.code(404).send({ success: false, error: 'SEO project not found.' });
    return { success: true, briefs: await prisma.seoContentBrief.findMany({ where: { tenant_id: req.user.id, project_id: project.id }, orderBy: { created_at: 'desc' }, take: 50 }) };
  });
}
