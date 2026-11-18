import test from 'node:test';
import assert from 'node:assert/strict';
import { auditPageInput } from '../src/seo/audit.js';

test('SEO audit rewards complete submitted page metadata', () => {
  const result = auditPageInput({ title: 'A useful and descriptive page title for search', meta_description: 'A detailed page description that explains the value of this page and gives searchers a clear reason to visit.', canonical_url: 'https://example.com/page', h1_count: 1, word_count: 850, image_count: 3, images_without_alt: 0, has_viewport: true, indexable: true });
  assert.equal(result.score, 100);
  assert.equal(result.recommendations.length, 0);
});

test('SEO audit flags non-indexable pages and missing metadata', () => {
  const result = auditPageInput({ page_url: 'https://example.com', indexable: false, h1_count: 0, word_count: 20, image_count: 2, images_without_alt: 1, has_viewport: false });
  assert.ok(result.score < 50);
  assert.ok(result.findings.some((x) => x.key === 'indexability' && x.status === 'critical'));
  assert.ok(result.recommendations.length >= 5);
});

test('SEO audit does not claim word count is a ranking factor', () => {
  const result = auditPageInput({ word_count: 100 });
  assert.match(result.findings.find((x) => x.key === 'content').recommendation, /not a ranking factor/i);
});
