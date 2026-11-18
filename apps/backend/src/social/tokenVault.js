import { createCipheriv, createDecipheriv, randomBytes } from 'node:crypto';

function encryptionKey() {
  const raw = process.env.SOCIAL_TOKEN_ENCRYPTION_KEY || '';
  let key;
  if (/^[a-f0-9]{64}$/i.test(raw)) key = Buffer.from(raw, 'hex');
  else { try { key = Buffer.from(raw, 'base64'); } catch { key = null; } }
  if (!key || key.length !== 32) throw new Error('SOCIAL_TOKEN_ENCRYPTION_KEY must be a 32-byte hex or base64 key.');
  return key;
}

export function encryptToken(value) {
  if (typeof value !== 'string' || !value.trim()) throw new Error('A non-empty access token is required.');
  const iv = randomBytes(12);
  const cipher = createCipheriv('aes-256-gcm', encryptionKey(), iv);
  const encrypted = Buffer.concat([cipher.update(value, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return `v1.${iv.toString('base64url')}.${tag.toString('base64url')}.${encrypted.toString('base64url')}`;
}

export function decryptToken(payload) {
  const [version, ivText, tagText, dataText] = String(payload || '').split('.');
  if (version !== 'v1' || !ivText || !tagText || !dataText) throw new Error('Stored social credential has an unsupported format.');
  const decipher = createDecipheriv('aes-256-gcm', encryptionKey(), Buffer.from(ivText, 'base64url'));
  decipher.setAuthTag(Buffer.from(tagText, 'base64url'));
  return Buffer.concat([decipher.update(Buffer.from(dataText, 'base64url')), decipher.final()]).toString('utf8');
}
