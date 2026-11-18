// apps/frontend/src/lib/api.js

const PRODUCTION_API = 'https://salesassistant-ai.onrender.com';
const DEVELOPMENT_API = 'http://localhost:4000';

const API_BASE_URL = String(
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? DEVELOPMENT_API : PRODUCTION_API)
).trim().replace(/\/+$/, '');

export async function apiFetch(endpoint, options = {}) {
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${API_BASE_URL}/api${path}`;

  const headers = new Headers(options.headers || {});

  if (
    options.body !== undefined &&
    !(options.body instanceof FormData)
  ) {
    headers.set('Content-Type', 'application/json');
  }

  const token = localStorage.getItem('salesAssistantAccessToken');

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  let response;

  try {
    response = await fetch(url, {
      ...options,
      headers,
      body:
        options.body === undefined
          ? undefined
          : options.body instanceof FormData
            ? options.body
            : JSON.stringify(options.body),
    });
  } catch {
    throw new Error(
      `Cannot reach the Sales Assistant API at ${API_BASE_URL}. ` +
      'Check that the Render backend is running and its CORS configuration allows https://salesassistant.nexusthecore.com.'
    );
  }

  const contentType = response.headers.get('content-type') || '';

  const payload = contentType.includes('application/json')
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem('salesAssistantAccessToken');
      localStorage.removeItem('salesAssistantUser');

      window.dispatchEvent(
        new CustomEvent('sales-assistant:unauthorized')
      );
    }

    throw new Error(
      (payload &&
        typeof payload === 'object' &&
        (payload.error || payload.message)) ||
      (typeof payload === 'string' && payload) ||
      `Request failed (${response.status})`
    );
  }

  return payload;
}