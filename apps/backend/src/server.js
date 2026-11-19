import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import rateLimit from '@fastify/rate-limit';
import { prisma } from './config/prisma.js';
import authRoutes from './routes/auth.js';
import salesAssistantRoutes from './routes/salesAssistant.js';
import workforceRoutes from './routes/workforce.js';
import prospectingRoutes from './routes/prospecting.js';
import contactRoutes from './routes/contacts.js';
import adminRoutes from './routes/admin.js';
import marketingRoutes from './routes/marketing.js';
import publicMarketingRoutes from './routes/publicMarketing.js';
import seoRoutes from './routes/seo.js';
import socialRoutes from './routes/social.js';
import billingRoutes from './routes/billing.js';
import { assertSubscriptionAccess } from './billing/service.js';
import { startSocialPublisher } from './worker/socialPublisher.js';
import { startMorningSalesScheduler } from "./worker/morningCronScheduler.js";
import { startWorkforceWorker } from './worker/workforceWorker.js';


const app = Fastify({ logger: true, bodyLimit: 2 * 1024 * 1024 });
const required = ['SALES_ASSISTANT_DATABASE_URL', 'JWT_SECRET'];
for (const key of required) { if (!process.env[key]) { app.log.error(`${key} must be configured`); process.exit(1) } }
if (process.env.JWT_SECRET.length < 32) { app.log.error('JWT_SECRET must contain at least 32 characters'); process.exit(1) }
await app.register(cors, { origin: (origin, cb) => { const allowed = (process.env.CORS_ORIGINS || 'http://localhost:5173,http://127.0.0.1:5173,https://salesassistant.nexusthecore.com').split(',').map(x => x.trim()); if (!origin || allowed.includes('*') || allowed.includes(origin)) cb(null, true); else cb(new Error('Origin is not allowed by CORS'), false) }, credentials: true });
await app.register(jwt, { secret: process.env.JWT_SECRET });
await app.register(rateLimit, { max: 120, timeWindow: '1 minute' });
// Preserve the exact request bytes for Stripe webhook signature verification.
app.removeContentTypeParser('application/json');
app.addContentTypeParser('application/json', { parseAs: 'buffer' }, (request, body, done) => {
  request.rawBody = body;
  try { done(null, JSON.parse(body.toString('utf8'))); } catch (error) { done(error); }
});
app.get('/health', async (request, reply) => { try { await prisma.$queryRaw`SELECT 1`; return { ok: true, service: 'sales-assistant-ai', database: 'connected' }; } catch (error) { request.log.error(error); return reply.code(503).send({ ok: false, service: 'sales-assistant-ai', database: 'unavailable' }); } });
await app.register(authRoutes, { prefix: '/api/auth' });
await app.register(billingRoutes, { prefix: '/api/billing' });
await app.register(salesAssistantRoutes, { prefix: '/api/sales-assistant' });
await app.register(workforceRoutes, { prefix: '/api/workforce' });
await app.register(prospectingRoutes, { prefix: '/api/prospecting' });
await app.register(contactRoutes, { prefix: '/api/contacts' });
await app.register(adminRoutes, { prefix: '/api/admin' });
await app.register(marketingRoutes, { prefix: '/api/marketing' });
await app.register(publicMarketingRoutes, { prefix: '/api/public/marketing' });
await app.register(seoRoutes, { prefix: '/api/seo' });
await app.register(socialRoutes, { prefix: '/api/social' });
app.setErrorHandler((error, request, reply) => { request.log.error(error); reply.code(error.statusCode && error.statusCode < 500 ? error.statusCode : 500).send({ success: false, error: error.statusCode && error.statusCode < 500 ? error.message : 'An unexpected server error occurred.' }) });
const port = Number(process.env.PORT || 4000);
const host = process.env.HOST || "0.0.0.0";
try {
    await app.listen({ port, host });
    app.log.info(`Sales Assistant API listening on ${host}:${port}`);

    // Start the daily 8:00 AM autonomous sales cron scheduler
    startMorningSalesScheduler(app.log);
    globalThis.stopSalesAssistantWorkforceWorker = startWorkforceWorker(app.log);
    globalThis.stopSalesAssistantSocialPublisher = startSocialPublisher(app.log);

} catch (error) {
    app.log.error(error);
    process.exit(1);
}

for (const signal of ['SIGINT', 'SIGTERM']) {
    process.on(signal, async () => {
        globalThis.stopSalesAssistantWorkforceWorker?.();
        globalThis.stopSalesAssistantSocialPublisher?.();
        await app.close();
        await prisma.$disconnect();
        process.exit(0);
    });
}
