import { randomUUID } from 'node:crypto';
import { z } from 'zod';
import { prisma } from '../config/prisma.js';
import { requireAuth } from '../security/authMiddleware.js';
import { encryptToken } from '../social/tokenVault.js';
import { publishSocialPost } from '../social/publish.js';

const platforms = ['linkedin', 'facebook', 'instagram', 'x'];
const accountInput = z.object({ platform: z.enum(platforms), display_name: z.string().trim().min(2).max(120), account_ref: z.string().trim().min(2).max(240), access_token: z.string().trim().min(12).max(10000) });
const postInput = z.object({ connection_id: z.string().uuid(), title: z.string().max(180).optional().default(''), body: z.string().trim().min(1).max(3000), media_url: z.string().url().optional().nullable(), scheduled_at: z.string().datetime().optional().nullable() });

export default async function socialRoutes(app) {
  app.addHook('preHandler', requireAuth);
  app.get('/overview', async (req) => {
    const tenant_id = req.user.id;
    const [accounts, posts, scheduled, published, failed] = await Promise.all([
      prisma.socialConnection.count({ where: { tenant_id, status: 'connected' } }),
      prisma.socialPost.count({ where: { tenant_id } }),
      prisma.socialPost.count({ where: { tenant_id, status: 'scheduled' } }),
      prisma.socialPost.count({ where: { tenant_id, status: 'published' } }),
      prisma.socialPost.count({ where: { tenant_id, status: 'failed' } }),
    ]);
    return { success: true, metrics: { accounts, posts, scheduled, published, failed }, platforms };
  });
  app.get('/accounts', async (req) => ({ success: true, accounts: await prisma.socialConnection.findMany({ where: { tenant_id: req.user.id }, select: { id: true, platform: true, display_name: true, account_ref: true, status: true, created_at: true, updated_at: true }, orderBy: { created_at: 'desc' } }) }));
  app.post('/accounts', async (req, reply) => {
    const parsed = accountInput.safeParse(req.body);
    if (!parsed.success) return reply.code(400).send({ success: false, error: 'Provide a supported platform, account name, account ID/URN and access token.' });
    let encrypted;
    try { encrypted = encryptToken(parsed.data.access_token); }
    catch (error) { return reply.code(503).send({ success: false, error: error.message }); }
    const existing = await prisma.socialConnection.findFirst({ where: { tenant_id: req.user.id, platform: parsed.data.platform, account_ref: parsed.data.account_ref }, select: { id: true } });
    const data = { display_name: parsed.data.display_name, access_token_encrypted: encrypted, status: 'connected' };
    const account = existing
      ? await prisma.socialConnection.update({ where: { id: existing.id }, data, select: { id: true, platform: true, display_name: true, account_ref: true, status: true, created_at: true } })
      : await prisma.socialConnection.create({ data: { id: randomUUID(), tenant_id: req.user.id, platform: parsed.data.platform, account_ref: parsed.data.account_ref, ...data }, select: { id: true, platform: true, display_name: true, account_ref: true, status: true, created_at: true } });
    return reply.code(existing ? 200 : 201).send({ success: true, account, credential_storage: 'AES-256-GCM encrypted; secret is never returned.' });
  });
  app.delete('/accounts/:id', async (req, reply) => {
    const account = await prisma.socialConnection.findFirst({ where: { id: req.params.id, tenant_id: req.user.id }, select: { id: true } });
    if (!account) return reply.code(404).send({ success: false, error: 'Social account not found.' });
    await prisma.$transaction([
      prisma.socialConnection.update({ where: { id: account.id }, data: { status: 'disconnected', access_token_encrypted: 'revoked' } }),
      prisma.socialPost.updateMany({ where: { connection_id: account.id, status: 'scheduled' }, data: { status: 'failed', error_message: 'Social account was disconnected before scheduled publishing.' } }),
    ]);
    return { success: true, disconnected: true, history_preserved: true };
  });
  app.get('/posts', async (req) => ({ success: true, posts: await prisma.socialPost.findMany({ where: { tenant_id: req.user.id }, include: { connection: { select: { platform: true, display_name: true } } }, orderBy: { created_at: 'desc' }, take: 100 }) }));
  app.post('/posts', async (req, reply) => {
    const parsed = postInput.safeParse(req.body);
    if (!parsed.success) return reply.code(400).send({ success: false, error: 'Check the connected account, post content and optional schedule.' });
    const connection = await prisma.socialConnection.findFirst({ where: { id: parsed.data.connection_id, tenant_id: req.user.id, status: 'connected' }, select: { id: true } });
    if (!connection) return reply.code(404).send({ success: false, error: 'Connected social account not found.' });
    const scheduled_at = parsed.data.scheduled_at ? new Date(parsed.data.scheduled_at) : null;
    if (scheduled_at && scheduled_at.getTime() < Date.now() + 60_000) return reply.code(400).send({ success: false, error: 'Schedule the post at least one minute in the future.' });
    const post = await prisma.socialPost.create({ data: { id: randomUUID(), tenant_id: req.user.id, connection_id: connection.id, title: parsed.data.title, body: parsed.data.body, media_url: parsed.data.media_url || null, status: scheduled_at ? 'scheduled' : 'draft', scheduled_at } });
    return reply.code(201).send({ success: true, post, message: scheduled_at ? 'Post saved for scheduled publishing. It will publish only after approval.' : 'Draft saved. Approve it before publishing.' });
  });
  app.post('/posts/:id/approve', async (req, reply) => {
    const post = await prisma.socialPost.findFirst({ where: { id: req.params.id, tenant_id: req.user.id } });
    if (!post) return reply.code(404).send({ success: false, error: 'Social post not found.' });
    if (!['draft', 'scheduled'].includes(post.status)) return reply.code(409).send({ success: false, error: 'Only draft or scheduled posts can be approved.' });
    const updated = await prisma.socialPost.update({ where: { id: post.id }, data: { approved_at: new Date(), status: post.scheduled_at ? 'scheduled' : 'approved' } });
    return { success: true, post: updated };
  });
  app.post('/posts/:id/publish', async (req, reply) => {
    const post = await prisma.socialPost.findFirst({ where: { id: req.params.id, tenant_id: req.user.id }, include: { connection: true } });
    if (!post) return reply.code(404).send({ success: false, error: 'Social post not found.' });
    const dueScheduled = post.status === 'scheduled' && post.scheduled_at && post.scheduled_at <= new Date();
    if (post.connection.status !== 'connected') return reply.code(409).send({ success: false, error: 'Reconnect this social account before publishing.' });
    if (post.connection.platform === 'x' && [post.title, post.body].filter(Boolean).join('\n\n').length > 280) return reply.code(400).send({ success: false, error: 'X posts must be 280 characters or fewer in this release.' });
    if ((!['approved', 'failed'].includes(post.status) && !dueScheduled) || !post.approved_at) return reply.code(409).send({ success: false, error: 'The post must be approved and, if scheduled, its publish time must have arrived.' });
    const claim = await prisma.socialPost.updateMany({ where: { id: post.id, tenant_id: req.user.id, status: post.status }, data: { status: 'publishing', attempts: { increment: 1 }, error_message: null } });
    if (!claim.count) return reply.code(409).send({ success: false, error: 'This post is already being processed.' });
    try {
      const result = await publishSocialPost(post.connection, post);
      const updated = await prisma.socialPost.update({ where: { id: post.id }, data: { status: 'published', external_post_id: result.id, external_url: result.url, published_at: new Date(), error_message: null } });
      return { success: true, post: updated };
    } catch (error) {
      const updated = await prisma.socialPost.update({ where: { id: post.id }, data: { status: 'failed', error_message: String(error.message || 'Publishing failed').slice(0, 1500) } });
      return reply.code(502).send({ success: false, error: updated.error_message, post: { id: updated.id, status: updated.status, attempts: updated.attempts } });
    }
  });
}
