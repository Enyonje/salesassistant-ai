import test from 'node:test';
import assert from 'node:assert/strict';
import { encryptToken, decryptToken } from '../src/social/tokenVault.js';

const original = process.env.SOCIAL_TOKEN_ENCRYPTION_KEY;
process.env.SOCIAL_TOKEN_ENCRYPTION_KEY = '11'.repeat(32);

test('social token vault encrypts and decrypts access tokens', () => {
  const token = 'test-provider-access-token-123456';
  const encrypted = encryptToken(token);
  assert.notEqual(encrypted, token);
  assert.equal(decryptToken(encrypted), token);
});

test('social token vault uses authenticated encryption', () => {
  const encrypted = encryptToken('another-provider-token-123456');
  const pieces = encrypted.split('.');
  pieces[3] = `${pieces[3].slice(0, -2)}AA`;
  assert.throws(() => decryptToken(pieces.join('.')));
});

test('social token vault rejects missing or weak encryption keys', () => {
  process.env.SOCIAL_TOKEN_ENCRYPTION_KEY = 'weak';
  assert.throws(() => encryptToken('valid-looking-token-123456'), /32-byte/);
  process.env.SOCIAL_TOKEN_ENCRYPTION_KEY = '11'.repeat(32);
  assert.throws(() => encryptToken(''), /non-empty/);
});

test.after(() => { if (original === undefined) delete process.env.SOCIAL_TOKEN_ENCRYPTION_KEY; else process.env.SOCIAL_TOKEN_ENCRYPTION_KEY = original; });
