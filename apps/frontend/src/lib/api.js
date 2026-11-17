// In development, call the standalone API directly. This avoids depending on
// the Vite proxy being loaded from the correct working directory. Fastify
// allows localhost:5173 through its default CORS configuration.
const defaultDevApi = import.meta.env.DEV ? 'http://localhost:4000' : '';
const API_BASE_URL = String(import.meta.env.VITE_API_URL || defaultDevApi).trim().replace(/\/$/, '');

export async function apiFetch(endpoint, options = {}) {
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${API_BASE_URL}/api${path}`;
  const headers = new Headers(options.headers || {});
  if (options.body !== undefined && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }
  const token = localStorage.getItem('salesAssistantAccessToken');
  if (token) headers.set('Authorization', `Bearer ${token}`);

  let response;
  try {
    response = await fetch(url, {
      ...options,
      headers,
      body: options.body === undefined
        ? undefined
        : options.body instanceof FormData
          ? options.body
          : JSON.stringify(options.body),
    });
  } catch {
    throw new Error('Cannot reach the Sales Assistant API. Start the backend on port 4000, or configure VITE_API_URL with your deployed API address.');
  }

  const type = response.headers.get('content-type') || '';
  const payload = type.includes('application/json') ? await response.json() : await response.text();
  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem('salesAssistantAccessToken');
      localStorage.removeItem('salesAssistantUser');
      window.dispatchEvent(new CustomEvent('sales-assistant:unauthorized'));
    }
    throw new Error(
      (payload && typeof payload === 'object' && (payload.error || payload.message)) ||
      (typeof payload === 'string' && payload) ||
      `Request failed (${response.status})`
    );
  }
  return payload;
}
