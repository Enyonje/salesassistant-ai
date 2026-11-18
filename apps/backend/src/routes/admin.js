import { prisma } from '../config/prisma.js';
import { requirePlatformAdmin } from '../security/adminMiddleware.js';
import { getAIProviderStatus, generateAIText } from '../ai/provider.js';
import { searchWeb } from '../agents/marketDiscovery.js';
import nodemailer from 'nodemailer';
import { encryptToken, decryptToken } from '../social/tokenVault.js';

export default async function adminRoutes(app) {
  app.addHook('preHandler', requirePlatformAdmin);

  app.get('/overview', async () => {
    const [users, leads, prospects, runs, tasks, agents, departments, objectives, marketingCampaigns, marketingAssets, marketingDeliveries, seoProjects, seoKeywords, seoAudits, seoBriefs, socialAccounts, socialPosts, recentTasks] = await Promise.all([
      prisma.user.count({ where: { deleted_at: null } }),
      prisma.salesLead.count(), prisma.marketProspect.count(), prisma.prospectingRun.count(),
      prisma.workforceTask.count(), prisma.workforceAgent.count(), prisma.workforceDepartment.count(),
      prisma.workforceObjective.count(),
      prisma.marketingCampaign.count(), prisma.marketingAsset.count(), prisma.marketingDelivery.count(),
      prisma.seoProject.count(), prisma.seoKeyword.count(), prisma.seoAudit.count(), prisma.seoContentBrief.count(),
      prisma.socialConnection.count({ where: { status: 'connected' } }), prisma.socialPost.count(),
      prisma.workforceTask.findMany({ orderBy: { created_at: 'desc' }, take: 12, select: { id: true, title: true, status: true, error: true, created_at: true, completed_at: true, tenant_id: true } }),
    ]);
    return { success: true, metrics: { users, leads, prospects, prospecting_runs: runs, tasks, agents, departments, objectives, marketing_campaigns: marketingCampaigns, marketing_assets: marketingAssets, marketing_email_deliveries: marketingDeliveries, seo_projects: seoProjects, seo_keywords: seoKeywords, seo_audits: seoAudits, seo_content_briefs: seoBriefs, social_connected_accounts: socialAccounts, social_posts: socialPosts }, recent_tasks: recentTasks };
  });

  app.get('/diagnostics', async () => ({ success: true, checked_at: new Date().toISOString(),
    database: 'connected', ai: getAIProviderStatus(),
    integrations: {
      web_search: Boolean(process.env.TAVILY_API_KEY || process.env.SERPER_API_KEY),
      hunter_contact_enrichment: Boolean(process.env.HUNTER_API_KEY),
      email_smtp: Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.SMTP_FROM && process.env.PUBLIC_API_URL),
      whatsapp: Boolean(process.env.WHATSAPP_ACCESS_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID),
      stripe: Boolean(process.env.STRIPE_SECRET_KEY),
      marketing_email_delivery: Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.SMTP_FROM && process.env.PUBLIC_API_URL),
      social_publishing: Boolean(process.env.SOCIAL_TOKEN_ENCRYPTION_KEY),
      social_token_vault: Boolean(process.env.SOCIAL_TOKEN_ENCRYPTION_KEY),
    },
    runtime: { node: process.version, environment: process.env.NODE_ENV || 'development', uptime_seconds: Math.floor(process.uptime()) },
  }));

  app.post('/tests/database', async () => {
    await prisma.$queryRaw`SELECT 1`;
    const [users, leads, tasks] = await Promise.all([prisma.user.count(), prisma.salesLead.count(), prisma.workforceTask.count()]);
    return { success: true, test: 'database', result: 'passed', counts: { users, leads, tasks } };
  });

  app.post('/tests/search', async (req, reply) => {
    try { const result = await searchWeb('official company website', 1); return { success: true, test: 'web_search', result: 'passed', provider: result.provider, results: result.results.length }; }
    catch (error) { return reply.code(502).send({ success: false, test: 'web_search', result: 'failed', error: error.message }); }
  });

  app.post('/tests/ai', async (req, reply) => {
    try {
      const result = await generateAIText({ messages: [
        { role: 'system', content: 'You are a provider connectivity test. Reply with exactly: SALES_ASSISTANT_AI_OK' },
        { role: 'user', content: 'Connectivity check. Reply with the exact required token.' },
      ], temperature: 0, maxTokens: 30 });
      return { success: true, test: 'ai_provider', result: 'passed', provider: result.provider, model: result.model, response: result.text.trim().slice(0, 100) };
    } catch (error) {
      req.log.warn({ err: error }, 'Admin AI connectivity test failed');
      return reply.code(502).send({ success: false, test: 'ai_provider', result: 'failed', error: error.message });
    }
  });


  app.post('/tests/social-vault', async (req, reply) => {
    try {
      const sample = `sales-assistant-vault-check-${Date.now()}`;
      const encrypted = encryptToken(sample);
      const decrypted = decryptToken(encrypted);
      if (decrypted !== sample || encrypted.includes(sample)) throw new Error('Social token encryption round-trip failed.');
      return { success: true, test: 'social_token_vault', result: 'passed', algorithm: 'AES-256-GCM' };
    } catch (error) {
      return reply.code(503).send({ success: false, test: 'social_token_vault', result: 'failed', error: error.message });
    }
  });

  app.post('/tests/email', async (req, reply) => {
    const required = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM'];
    const missing = required.filter(k => !process.env[k]);
    if (missing.length) return reply.code(503).send({ success: false, test: 'smtp', result: 'not_configured', missing });
    const transport = nodemailer.createTransport({ host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT || 587), secure: String(process.env.SMTP_SECURE || 'false') === 'true', auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }, connectionTimeout: 12000 });
    try { await transport.verify(); return { success: true, test: 'smtp', result: 'passed', host: process.env.SMTP_HOST }; }
    catch (error) { req.log.warn({ err: error }, 'SMTP connectivity test failed'); return reply.code(502).send({ success: false, test: 'smtp', result: 'failed', error: error.message }); }
    finally { transport.close(); }
  });

}
