export function auditPageInput(input) {
  const findings = [];
  const title = String(input.title || '').trim();
  const description = String(input.meta_description || '').trim();
  const canonical = String(input.canonical_url || '').trim();
  const h1Count = Number(input.h1_count || 0);
  const wordCount = Number(input.word_count || 0);
  const imageCount = Number(input.image_count || 0);
  const imagesWithoutAlt = Number(input.images_without_alt || 0);
  const hasViewport = Boolean(input.has_viewport);
  const indexable = input.indexable !== false;
  findings.push({ key: 'title', label: 'Title tag', status: title.length >= 30 && title.length <= 60 ? 'pass' : 'warning', detail: title ? `Title is ${title.length} characters.` : 'No title tag supplied.', recommendation: 'Use a unique, descriptive title, ideally around 30–60 characters.' });
  findings.push({ key: 'meta_description', label: 'Meta description', status: description.length >= 70 && description.length <= 160 ? 'pass' : 'warning', detail: description ? `Description is ${description.length} characters.` : 'No meta description supplied.', recommendation: 'Write a useful, page-specific description, generally around 70–160 characters.' });
  findings.push({ key: 'h1', label: 'H1 heading', status: h1Count === 1 ? 'pass' : 'warning', detail: `${h1Count} H1 headings reported.`, recommendation: 'Use one clear primary H1 that reflects the page topic.' });
  findings.push({ key: 'content', label: 'Content depth', status: wordCount >= 300 ? 'pass' : 'warning', detail: `${wordCount} words reported.`, recommendation: 'Ensure the page fully satisfies search intent; word count alone is not a ranking factor.' });
  findings.push({ key: 'canonical', label: 'Canonical URL', status: canonical ? 'pass' : 'warning', detail: canonical ? 'Canonical URL supplied.' : 'No canonical URL supplied.', recommendation: 'Set a self-referencing canonical where appropriate and avoid conflicting canonical signals.' });
  findings.push({ key: 'viewport', label: 'Mobile viewport', status: hasViewport ? 'pass' : 'warning', detail: hasViewport ? 'Viewport metadata reported.' : 'Viewport metadata not reported.', recommendation: 'Include a responsive viewport meta tag and test mobile usability.' });
  findings.push({ key: 'images_alt', label: 'Image alternative text', status: imagesWithoutAlt === 0 ? 'pass' : 'warning', detail: `${imagesWithoutAlt} of ${imageCount} images reported without alt text.`, recommendation: 'Add meaningful alt text to informative images; use empty alt for decorative images.' });
  findings.push({ key: 'indexability', label: 'Indexability', status: indexable ? 'pass' : 'critical', detail: indexable ? 'Page reported as indexable.' : 'Page reported as non-indexable.', recommendation: 'Check robots directives, HTTP status and canonical signals if this page should rank.' });
  const weights = { pass: 1, warning: 0.5, critical: 0 };
  const score = Math.round(findings.reduce((sum, item) => sum + weights[item.status], 0) / findings.length * 100);
  return { score, findings, recommendations: findings.filter((x) => x.status !== 'pass').map(({ label, recommendation, status }) => ({ label, recommendation, severity: status })) };
}
