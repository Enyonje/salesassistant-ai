/**
 * Multi-provider AI gateway for Sales Assistant AI.
 * Supported providers: OpenAI, Google Gemini and Anthropic Claude.
 * Provider keys stay server-side. AI_PROVIDER can be a single provider or "auto".
 * In auto mode, configured providers are tried in AI_PROVIDER_FALLBACKS order.
 */
const PROVIDERS = ['openai', 'gemini', 'anthropic'];
const DEFAULT_MODELS = {
  openai: process.env.OPENAI_MODEL || process.env.SALES_ASSISTANT_MODEL || 'gpt-4o-mini',
  gemini: process.env.GEMINI_MODEL || 'gemini-2.5-flash',
  anthropic: process.env.ANTHROPIC_MODEL || 'claude-3-5-haiku-latest',
};
const KEY_NAMES = {
  openai: 'OPENAI_API_KEY',
  gemini: 'GEMINI_API_KEY',
  anthropic: 'ANTHROPIC_API_KEY',
};

function configured(provider) {
  return Boolean(process.env[KEY_NAMES[provider]]);
}

function candidates() {
  const preferred = (process.env.AI_PROVIDER || 'auto').trim().toLowerCase();
  const fallback = (process.env.AI_PROVIDER_FALLBACKS || 'gemini,openai,anthropic')
    .split(',').map((x) => x.trim().toLowerCase()).filter((x) => PROVIDERS.includes(x));
  const order = preferred === 'auto' ? fallback : [preferred, ...fallback.filter((x) => x !== preferred)];
  if (order.some((x) => !PROVIDERS.includes(x))) throw new Error(`Unsupported AI_PROVIDER. Use auto, ${PROVIDERS.join(', ')}.`);
  return [...new Set(order)].filter(configured);
}

function normalizeMessages(messages = []) {
  return messages.map((m) => ({ role: m.role, content: typeof m.content === 'string' ? m.content : JSON.stringify(m.content) }));
}

async function requestJson(url, options, timeoutMs = Number(process.env.AI_REQUEST_TIMEOUT_MS || 60000)) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      const detail = body?.error?.message || body?.message || `HTTP ${response.status}`;
      throw new Error(`${detail}`);
    }
    return body;
  } finally { clearTimeout(timer); }
}

async function callOpenAI({ messages, model, temperature, maxTokens, json }) {
  const body = await requestJson(process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1/chat/completions', {
    method: 'POST', headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: model || DEFAULT_MODELS.openai, messages: normalizeMessages(messages), temperature, ...(maxTokens ? { max_tokens: maxTokens } : {}), ...(json ? { response_format: { type: 'json_object' } } : {}) }),
  });
  return body.choices?.[0]?.message?.content || '';
}

async function callGemini({ messages, model, temperature, maxTokens, json }) {
  const items = normalizeMessages(messages);
  const system = items.filter((m) => m.role === 'system').map((m) => m.content).join('\n\n');
  const contents = items.filter((m) => m.role !== 'system').map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] }));
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model || DEFAULT_MODELS.gemini)}:generateContent?key=${encodeURIComponent(process.env.GEMINI_API_KEY)}`;
  const body = await requestJson(endpoint, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...(system ? { systemInstruction: { parts: [{ text: system }] } } : {}), contents, generationConfig: { temperature, ...(maxTokens ? { maxOutputTokens: maxTokens } : {}), ...(json ? { responseMimeType: 'application/json' } : {}) } }),
  });
  return (body.candidates?.[0]?.content?.parts || []).map((p) => p.text || '').join('');
}

async function callAnthropic({ messages, model, temperature, maxTokens, json }) {
  const items = normalizeMessages(messages);
  const system = items.filter((m) => m.role === 'system').map((m) => m.content).join('\n\n');
  const body = await requestJson('https://api.anthropic.com/v1/messages', {
    method: 'POST', headers: { 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: model || DEFAULT_MODELS.anthropic, max_tokens: maxTokens || 1200, temperature, ...(system ? { system } : {}), messages: items.filter((m) => m.role !== 'system').map((m) => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.content + (json ? '\n\nReturn valid JSON only. Do not use markdown fences.' : '') })) }),
  });
  return (body.content || []).filter((p) => p.type === 'text').map((p) => p.text).join('');
}

const CALLERS = { openai: callOpenAI, gemini: callGemini, anthropic: callAnthropic };

export function getAIProviderStatus() {
  const selected = (process.env.AI_PROVIDER || 'auto').toLowerCase();
  return {
    selected_provider: selected,
    active_provider: candidates()[0] || null,
    providers: PROVIDERS.map((provider) => ({ provider, configured: configured(provider), model: DEFAULT_MODELS[provider] })),
    fallback_enabled: selected === 'auto' || (process.env.AI_PROVIDER_FALLBACKS || '').length > 0,
  };
}

export async function generateAIText({ messages, model, temperature = 0.3, maxTokens, json = false, provider } = {}) {
  const preferred = provider || (process.env.AI_PROVIDER || 'auto').toLowerCase();
  if (preferred !== 'auto' && !PROVIDERS.includes(preferred)) throw new Error(`Unsupported AI provider: ${preferred}.`);
  const order = preferred === 'auto'
    ? candidates()
    : [preferred, ...(process.env.AI_PROVIDER_FALLBACKS || '').split(',').map((x) => x.trim().toLowerCase()).filter((x) => PROVIDERS.includes(x) && x !== preferred && configured(x))];
  if (!order.length) throw new Error('No AI provider is configured. Add GEMINI_API_KEY, OPENAI_API_KEY or ANTHROPIC_API_KEY to the backend environment.');
  const failures = [];
  for (const name of [...new Set(order)]) {
    if (!PROVIDERS.includes(name)) continue;
    if (!configured(name)) { failures.push(`${name}: API key missing`); continue; }
    try {
      const text = await CALLERS[name]({ messages, model: model || DEFAULT_MODELS[name], temperature, maxTokens, json });
      if (!text.trim()) throw new Error('Provider returned an empty response.');
      return { text, provider: name, model: model || DEFAULT_MODELS[name] };
    } catch (error) {
      failures.push(`${name}: ${String(error.message || error).slice(0, 300)}`);
      if (preferred !== 'auto' && !(process.env.AI_PROVIDER_FALLBACKS || '').trim()) break;
    }
  }
  throw new Error(`All configured AI providers failed. ${failures.join(' | ')}`);
}
