import { requireAuth } from './authMiddleware.js';

const adminEmails = () => new Set((process.env.ADMIN_EMAILS || '').split(',').map(v => v.trim().toLowerCase()).filter(Boolean));

export async function requirePlatformAdmin(request, reply) {
  const authResult = await requireAuth(request, reply);
  if (reply.sent) return authResult;
  const email = String(request.user?.email || '').toLowerCase();
  if (!email || !adminEmails().has(email)) {
    return reply.code(403).send({ success: false, error: 'Platform administrator access is required.' });
  }
}

export function isPlatformAdmin(email) {
  return adminEmails().has(String(email || '').toLowerCase());
}
