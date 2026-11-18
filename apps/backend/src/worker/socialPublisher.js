import { prisma } from '../config/prisma.js';
import { publishSocialPost } from '../social/publish.js';

let timer;
let running = false;

export async function processDueSocialPosts(log = console) {
  if (running) return { processed: 0, skipped: true };
  running = true;
  let processed = 0;
  try {
    const due = await prisma.socialPost.findMany({
      where: { status: 'scheduled', approved_at: { not: null }, scheduled_at: { lte: new Date() }, connection: { status: 'connected' } },
      orderBy: { scheduled_at: 'asc' }, take: 10, include: { connection: true },
    });
    for (const post of due) {
      const claim = await prisma.socialPost.updateMany({ where: { id: post.id, status: 'scheduled', approved_at: { not: null } }, data: { status: 'publishing', attempts: { increment: 1 }, error_message: null } });
      if (!claim.count) continue;
      try {
        const result = await publishSocialPost(post.connection, post);
        await prisma.socialPost.update({ where: { id: post.id }, data: { status: 'published', external_post_id: result.id, external_url: result.url, published_at: new Date(), error_message: null } });
      } catch (error) {
        await prisma.socialPost.update({ where: { id: post.id }, data: { status: 'failed', error_message: String(error.message || 'Scheduled publishing failed').slice(0, 1500) } });
        log.error?.({ postId: post.id, error: error.message }, 'Scheduled social post failed');
      }
      processed++;
    }
  } catch (error) { log.error?.({ error }, 'Social publisher worker failed'); }
  finally { running = false; }
  return { processed, skipped: false };
}

export function startSocialPublisher(log = console) {
  if (String(process.env.SOCIAL_PUBLISHER_ENABLED || 'true').toLowerCase() === 'false') return () => {};
  if (timer) return () => clearInterval(timer);
  timer = setInterval(() => processDueSocialPosts(log), 30_000);
  timer.unref?.();
  processDueSocialPosts(log);
  return () => { clearInterval(timer); timer = undefined; };
}
