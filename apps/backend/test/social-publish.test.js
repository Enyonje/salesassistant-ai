import test from 'node:test';
import assert from 'node:assert/strict';
import { encryptToken } from '../src/social/tokenVault.js';
import { publishSocialPost } from '../src/social/publish.js';

process.env.SOCIAL_TOKEN_ENCRYPTION_KEY = '22'.repeat(32);
const originalFetch = globalThis.fetch;
const connection = (platform, account_ref = 'account-123') => ({ platform, account_ref, access_token_encrypted: encryptToken('mock-social-access-token-123456') });
const post = { title: 'Product update', body: 'We have launched a new feature.', media_url: null };
const jsonResponse = (payload, status = 200) => new Response(JSON.stringify(payload), { status, headers: { 'content-type': 'application/json' } });

test('LinkedIn publisher sends a public UGC post using the encrypted token', async () => {
  globalThis.fetch = async (url, options) => {
    assert.equal(String(url), 'https://api.linkedin.com/v2/ugcPosts');
    assert.equal(options.headers.Authorization, 'Bearer mock-social-access-token-123456');
    assert.equal(JSON.parse(options.body).author, 'urn:li:organization:123');
    return jsonResponse({ id: 'urn:li:share:456' });
  };
  const result = await publishSocialPost(connection('linkedin', 'urn:li:organization:123'), post);
  assert.equal(result.id, 'urn:li:share:456');
});

test('Facebook publisher keeps access token out of the request URL', async () => {
  globalThis.fetch = async (url, options) => {
    assert.match(String(url), /\/page-123\/feed/);
    assert.equal(new URL(url).searchParams.has('access_token'), false);
    assert.equal(options.headers.Authorization, 'Bearer mock-social-access-token-123456');
    return jsonResponse({ id: 'page-123_post-456' });
  };
  const result = await publishSocialPost(connection('facebook', 'page-123'), post);
  assert.equal(result.id, 'page-123_post-456');
});

test('Instagram publisher creates and publishes an image container', async () => {
  let calls = 0;
  globalThis.fetch = async (url, options) => {
    calls++;
    assert.equal(options.headers.Authorization, 'Bearer mock-social-access-token-123456');
    if (calls === 1) { assert.match(String(url), /\/ig-123\/media/); return jsonResponse({ id: 'container-1' }); }
    assert.match(String(url), /\/ig-123\/media_publish/);
    assert.equal(new URL(url).searchParams.get('creation_id'), 'container-1');
    return jsonResponse({ id: 'published-1' });
  };
  const result = await publishSocialPost(connection('instagram', 'ig-123'), { ...post, media_url: 'https://cdn.example.com/image.jpg' });
  assert.equal(calls, 2);
  assert.equal(result.id, 'published-1');
});

test('Instagram publisher requires an HTTPS image URL', async () => {
  await assert.rejects(() => publishSocialPost(connection('instagram', 'ig-123'), post), /HTTPS image URL/);
});

test('X publisher creates a post through the X API', async () => {
  globalThis.fetch = async (url, options) => {
    assert.equal(String(url), 'https://api.x.com/2/tweets');
    assert.equal(options.headers.Authorization, 'Bearer mock-social-access-token-123456');
    assert.equal(JSON.parse(options.body).text, 'Product update\n\nWe have launched a new feature.');
    return jsonResponse({ data: { id: 'tweet-123' } });
  };
  const result = await publishSocialPost(connection('x'), post);
  assert.equal(result.url, 'https://x.com/i/web/status/tweet-123');
});

test.after(() => { globalThis.fetch = originalFetch; });
