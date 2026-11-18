import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const route = await readFile(new URL('../src/routes/marketing.js', import.meta.url), 'utf8');
const publicRoute = await readFile(new URL('../src/routes/publicMarketing.js', import.meta.url), 'utf8');
const schema = await readFile(new URL('../prisma/sales-assistant.prisma', import.meta.url), 'utf8');
const migration = await readFile(new URL('../prisma/migrations/20261118210000_marketing_email_delivery/migration.sql', import.meta.url), 'utf8');

test('marketing send is restricted to approved email assets', () => {
  assert.match(route, /asset\.status !== 'approved'/);
  assert.match(route, /asset\.asset_type !== 'email'/);
});

test('only consented, non-opted-out workspace leads are eligible', () => {
  assert.match(route, /tenant_id: req\.user\.id, email_consent: true, email_opted_out_at: null/);
  assert.match(route, /stillEligible/);
});

test('delivery is capped and rate limited', () => {
  assert.match(route, /max\(Number\(process\.env\.MARKETING_EMAIL_MAX_PER_SEND/);
  assert.match(route, /rateLimit: \{ max: 3, timeWindow: '1 minute' \}/);
});

test('delivery idempotency and unsubscribe support are present', () => {
  assert.match(schema, /@@unique\(\[tenant_id, asset_id, lead_id\]/);
  assert.match(route, /marketingDelivery\.update/);
  assert.match(publicRoute, /app\.get\('\/unsubscribe'/);
  assert.match(publicRoute, /app\.post\('\/unsubscribe'/);
});

test('migration is additive', () => {
  assert.match(migration, /CREATE TABLE IF NOT EXISTS sales_assistant\.marketing_deliveries/);
  assert.doesNotMatch(migration, /\b(DROP|TRUNCATE)\s+/i);
});
