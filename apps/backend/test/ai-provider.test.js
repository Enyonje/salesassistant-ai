import test from 'node:test';
import assert from 'node:assert/strict';

process.env.OPENAI_API_KEY = 'test-openai-key';
process.env.GEMINI_API_KEY = 'test-gemini-key';
process.env.ANTHROPIC_API_KEY = 'test-anthropic-key';
process.env.AI_PROVIDER_FALLBACKS = 'gemini,openai,anthropic';

const originalFetch = globalThis.fetch;
const { generateAIText, getAIProviderStatus } = await import('../src/ai/provider.js');
function response(body, status = 200) {
  return { ok: status >= 200 && status < 300, status, json: async () => body };
}

test.afterEach(() => { globalThis.fetch = originalFetch; });

test('Gemini adapter maps system/user messages and returns normalized text', async () => {
  process.env.AI_PROVIDER = 'gemini';
  globalThis.fetch = async (url, options) => {
    assert.match(String(url), /generativelanguage.googleapis.com/);
    const body = JSON.parse(options.body);
    assert.equal(body.systemInstruction.parts[0].text, 'system');
    assert.equal(body.contents[0].parts[0].text, 'hello');
    return response({ candidates: [{ content: { parts: [{ text: '{"ok":true}' }] } }] });
  };
  const result = await generateAIText({ json: true, messages: [{ role: 'system', content: 'system' }, { role: 'user', content: 'hello' }] });
  assert.equal(result.provider, 'gemini');
  assert.equal(JSON.parse(result.text).ok, true);
});

test('OpenAI adapter returns normalized text', async () => {
  process.env.AI_PROVIDER = 'openai';
  globalThis.fetch = async (url, options) => {
    assert.match(String(url), /chat\/completions/);
    assert.equal(options.headers.Authorization, 'Bearer test-openai-key');
    return response({ choices: [{ message: { content: 'openai answer' } }] });
  };
  const result = await generateAIText({ messages: [{ role: 'user', content: 'hello' }] });
  assert.equal(result.provider, 'openai');
  assert.equal(result.text, 'openai answer');
});

test('Anthropic adapter returns normalized text', async () => {
  process.env.AI_PROVIDER = 'anthropic';
  globalThis.fetch = async (url, options) => {
    assert.match(String(url), /api.anthropic.com\/v1\/messages/);
    assert.equal(options.headers['x-api-key'], 'test-anthropic-key');
    return response({ content: [{ type: 'text', text: 'claude answer' }] });
  };
  const result = await generateAIText({ messages: [{ role: 'system', content: 'rules' }, { role: 'user', content: 'hello' }] });
  assert.equal(result.provider, 'anthropic');
  assert.equal(result.text, 'claude answer');
});

test('auto mode fails over to the next configured provider', async () => {
  process.env.AI_PROVIDER = 'auto';
  let calls = 0;
  globalThis.fetch = async (url) => {
    calls += 1;
    if (String(url).includes('generativelanguage')) return response({ error: { message: 'temporary Gemini failure' } }, 503);
    return response({ choices: [{ message: { content: 'fallback answer' } }] });
  };
  const result = await generateAIText({ messages: [{ role: 'user', content: 'hello' }] });
  assert.equal(result.provider, 'openai');
  assert.equal(result.text, 'fallback answer');
  assert.equal(calls, 2);
});

test('provider status exposes readiness but never credentials', () => {
  process.env.AI_PROVIDER = 'auto';
  const status = getAIProviderStatus();
  assert.equal(status.providers.length, 3);
  assert.ok(status.providers.every((item) => item.configured));
  assert.equal(JSON.stringify(status).includes('test-openai-key'), false);
});
