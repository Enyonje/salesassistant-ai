import { decryptToken } from './tokenVault.js';

async function readProviderResponse(response) {
  const text = await response.text();
  let data = {};
  try { data = text ? JSON.parse(text) : {}; } catch { data = { raw: text.slice(0, 500) }; }
  if (!response.ok) {
    const detail = data?.error?.message || data?.message || data?.error_description || `Provider returned HTTP ${response.status}`;
    throw new Error(String(detail).slice(0, 1200));
  }
  return data;
}

export async function publishSocialPost(connection, post) {
  const token = decryptToken(connection.access_token_encrypted);
  const text = [post.title, post.body].filter(Boolean).join('\n\n').trim();
  if (!text) throw new Error('Post content is empty.');
  if (connection.platform === 'linkedin') {
    if (!connection.account_ref || !connection.account_ref.startsWith('urn:')) throw new Error('LinkedIn account reference must be a valid person or organization URN.');
    const data = await readProviderResponse(await fetch('https://api.linkedin.com/v2/ugcPosts', {
      method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', 'X-Restli-Protocol-Version': '2.0.0' },
      body: JSON.stringify({ author: connection.account_ref, lifecycleState: 'PUBLISHED', specificContent: { 'com.linkedin.ugc.ShareContent': { shareCommentary: { text }, shareMediaCategory: 'NONE' } }, visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' } }),
    }));
    return { id: data.id || data.value || null, url: data.id ? `https://www.linkedin.com/feed/update/${encodeURIComponent(data.id)}` : null };
  }
  if (connection.platform === 'facebook') {
    if (!connection.account_ref) throw new Error('Facebook Page ID is required as the account reference.');
    const url = new URL(`https://graph.facebook.com/${process.env.META_GRAPH_VERSION || 'v23.0'}/${encodeURIComponent(connection.account_ref)}/feed`);
    url.searchParams.set('message', text);
    const data = await readProviderResponse(await fetch(url, { method: 'POST', headers: { Authorization: `Bearer ${token}` } }));
    return { id: data.id || null, url: data.id ? `https://www.facebook.com/${data.id}` : null };
  }
  if (connection.platform === 'instagram') {
    if (!connection.account_ref) throw new Error('Instagram Business Account ID is required as the account reference.');
    if (!post.media_url || !/^https:\/\//i.test(post.media_url)) throw new Error('Instagram publishing requires a publicly accessible HTTPS image URL.');
    const base = `https://graph.facebook.com/${process.env.META_GRAPH_VERSION || 'v23.0'}`;
    const createUrl = new URL(`${base}/${encodeURIComponent(connection.account_ref)}/media`);
    createUrl.searchParams.set('image_url', post.media_url); createUrl.searchParams.set('caption', text);
    const container = await readProviderResponse(await fetch(createUrl, { method: 'POST', headers: { Authorization: `Bearer ${token}` } }));
    if (!container.id) throw new Error('Instagram did not return a media container ID.');
    const publishUrl = new URL(`${base}/${encodeURIComponent(connection.account_ref)}/media_publish`);
    publishUrl.searchParams.set('creation_id', container.id);
    const published = await readProviderResponse(await fetch(publishUrl, { method: 'POST', headers: { Authorization: `Bearer ${token}` } }));
    return { id: published.id || null, url: null };
  }
  if (connection.platform === 'x') {
    const data = await readProviderResponse(await fetch('https://api.x.com/2/tweets', { method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ text }) }));
    return { id: data.data?.id || null, url: data.data?.id ? `https://x.com/i/web/status/${data.data.id}` : null };
  }
  throw new Error(`Unsupported social platform: ${connection.platform}`);
}
