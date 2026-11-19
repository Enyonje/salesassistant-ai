import { assertSubscriptionAccess } from '../billing/service.js';
export async function requireAuth(request,reply){
 try {
  await request.jwtVerify();
  if (!request.user?.id) throw new Error('Invalid session');
  const platformAdmins = new Set((process.env.ADMIN_EMAILS || '').split(',').map(value => value.trim().toLowerCase()).filter(Boolean));
  const isAdmin = platformAdmins.has(String(request.user.email || '').toLowerCase());
  if (!isAdmin && !request.url.startsWith('/api/billing/')) await assertSubscriptionAccess(request.user.id, request.user.id);
 } catch (error) {
  if (error.statusCode === 402) return reply.code(402).send({ success:false, code:error.code || 'SUBSCRIPTION_REQUIRED', error:error.message, details:error.details || undefined });
  return reply.code(401).send({success:false,error:'Your session is invalid or has expired. Please sign in again.'});
 }
}
