import { randomUUID } from 'node:crypto';
import { prisma } from '../config/prisma.js';

const MAX_RESULTS = 25;
const blockedHosts = new Set(['localhost', '127.0.0.1', '0.0.0.0']);

function safeUrl(value) {
  try {
    const url = new URL(value);
    if (!['http:', 'https:'].includes(url.protocol) || blockedHosts.has(url.hostname)) return null;
    return url.toString();
  } catch { return null; }
}
function domainOf(value) {
  try { return new URL(value).hostname.toLowerCase().replace(/^www\./, ''); } catch { return null; }
}
function safeDate(value) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function scoreResult(item, terms) {
  const text = `${item.title || ''} ${item.content || ''} ${item.url || ''}`.toLowerCase();
  const matches = terms.filter((term) => term && text.includes(term.toLowerCase())).length;
  const evidence = Math.min(30, Math.round((String(item.content || '').length / 120) * 3));
  const domain = domainOf(item.url || '');
  const nonDirectory = domain && !/(linkedin|facebook|instagram|crunchbase|yelp|yellowpages|wikipedia)\./.test(domain) ? 15 : 0;
  return Math.max(15, Math.min(95, 35 + matches * 8 + evidence + nonDirectory));
}

async function tavilySearch(query, limit) {
  const response = await fetch('https://api.tavily.com/search', {
    method: 'POST', headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ api_key: process.env.TAVILY_API_KEY, query, search_depth: 'advanced', max_results: limit, include_answer: false, include_raw_content: false }),
    signal: AbortSignal.timeout(30000),
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body?.detail || body?.message || `Tavily search failed (${response.status})`);
  return (body.results || []).map((r) => ({ title: r.title, url: safeUrl(r.url), content: r.content || '', published_date: r.published_date || null, source: 'tavily', raw_score: r.score ?? null }));
}

async function serperSearch(query, limit) {
  const response = await fetch('https://google.serper.dev/search', {
    method: 'POST', headers: { 'X-API-KEY': process.env.SERPER_API_KEY, 'content-type': 'application/json' },
    body: JSON.stringify({ q: query, num: limit }), signal: AbortSignal.timeout(30000),
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body?.message || `Serper search failed (${response.status})`);
  return (body.organic || []).map((r) => ({ title: r.title, url: safeUrl(r.link), content: r.snippet || '', published_date: r.date || null, source: 'serper', raw_score: null }));
}

export async function searchWeb(query, limit) {
  const provider = (process.env.WEB_SEARCH_PROVIDER || 'auto').toLowerCase();
  const order = provider === 'auto' ? ['tavily', 'serper'] : [provider];
  const errors = [];
  for (const name of order) {
    if (name === 'tavily' && process.env.TAVILY_API_KEY) {
      try { return { provider: name, results: await tavilySearch(query, limit) }; } catch (e) { errors.push(`tavily: ${e.message}`); }
    }
    if (name === 'serper' && process.env.SERPER_API_KEY) {
      try { return { provider: name, results: await serperSearch(query, limit) }; } catch (e) { errors.push(`serper: ${e.message}`); }
    }
  }
  if (!process.env.TAVILY_API_KEY && !process.env.SERPER_API_KEY) throw new Error('Configure TAVILY_API_KEY or SERPER_API_KEY to enable real web discovery.');
  throw new Error(`All configured search providers failed: ${errors.join(' | ')}`);
}

export async function discoverMarketProspects({ tenantId, userId, industry, location, keywords, idealCustomer, limit = 10 }) {
  const safeLimit = Math.max(1, Math.min(MAX_RESULTS, Number(limit) || 10));
  const parts = [industry, location, keywords, idealCustomer, 'companies businesses official website'];
  const query = parts.filter(Boolean).join(' ');
  const { provider, results } = await searchWeb(query, safeLimit);
  const unique = new Map();
  for (const item of results) {
    if (!item.url) continue;
    const domain = domainOf(item.url);
    if (!domain || unique.has(domain)) continue;
    unique.set(domain, item);
  }
  const rows = [...unique.values()].slice(0, safeLimit).map((item) => {
    const domain = domainOf(item.url);
    const terms = [industry, location, keywords, idealCustomer].filter(Boolean);
    return {
      id: randomUUID(), tenant_id: tenantId, run_id: null,
      company_name: String(item.title || domain).split(/[|–—-]/)[0].trim().slice(0, 180) || domain,
      domain, website: item.url, description: String(item.content || '').slice(0, 5000),
      source_provider: item.source, source_url: item.url, source_published_at: safeDate(item.published_date),
      fit_score: scoreResult(item, terms), status: 'discovered', contact_name: null, contact_title: null, contact_email: null,
      created_at: new Date(), updated_at: new Date(),
    };
  });
  const run = await prisma.prospectingRun.create({ data: {
    id: randomUUID(), tenant_id: tenantId, created_by: userId, query,
    industry, location: location || null, keywords: keywords || null,
    ideal_customer: idealCustomer || null, provider, result_count: rows.length, status: 'completed',
  }});
  const saved = [];
  for (const row of rows) {
    row.run_id = run.id;
    const existing = await prisma.marketProspect.findFirst({ where: { tenant_id: tenantId, domain: row.domain } });
    if (existing) {
      saved.push(await prisma.marketProspect.update({ where: { id: existing.id }, data: {
        run_id: run.id, company_name: row.company_name, website: row.website, description: row.description,
        source_provider: row.source_provider, source_url: row.source_url, fit_score: row.fit_score,
        status: existing.status === 'converted' ? 'converted' : 'discovered', updated_at: new Date(),
      }}));
    } else saved.push(await prisma.marketProspect.create({ data: row }));
  }
  await prisma.workforceEvent.create({ data: {
    id: randomUUID(), tenant_id: tenantId, event_type: 'market_prospects_discovered',
    message: `Market Intelligence discovered ${saved.length} real company websites using ${provider}.`,
    metadata: { run_id: run.id, provider, query, result_count: saved.length },
  }});
  return { run, prospects: saved, provider, query };
}
