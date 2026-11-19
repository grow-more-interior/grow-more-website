import assert from 'node:assert/strict';
import vm from 'node:vm';

const base = process.argv[2] || 'http://127.0.0.1:3000';
const pages = new Map();
const pending = ['/', '/shop', '/gallery', '/projects', '/blog', '/products', '/enquiry', '/services/home-interior', '/services/office-fit-out', '/services/modular-kitchen'];
const failures = [];
while (pending.length) {
  const path = pending.shift();
  if (pages.has(path)) continue;
  const response = await fetch(new URL(path, base));
  const html = await response.text();
  pages.set(path, html);
  if (response.status !== 200) failures.push(`${path}: HTTP ${response.status}`);
  for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const href = match[1].replaceAll('&amp;', '&');
    if (href.startsWith('/') && !href.startsWith('//') && !pages.has(href) && !pending.includes(href)) pending.push(href);
  }
}
assert.deepEqual(failures, [], 'Internal navigation contains failed routes');
const home = pages.get('/');
const head = home.match(/<head>([\s\S]*?)<\/head>/)[1];
const consent = head.match(/<script id="consent-defaults">([\s\S]*?)<\/script>/)?.[1];
const bootstrap = head.match(/<script id="google-tag-manager">([\s\S]*?)<\/script>/)?.[1];
assert.ok(consent && bootstrap, 'GTM and consent must be present in the server-rendered head');
assert.ok(head.indexOf('consent-defaults') < head.indexOf('google-tag-manager'));
assert.ok(home.includes('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5NQWM67T"'), 'GTM noscript fallback is present');
const injected = [];
const context = {
  localStorage: { removeItem() {} },
  document: {
    getElementsByTagName: () => [{ parentNode: { insertBefore: (script) => injected.push(script) } }],
    createElement: () => ({}),
  },
};
context.window = context;
vm.createContext(context);
vm.runInContext(consent, context);
vm.runInContext(bootstrap, context);
assert.equal(context.dataLayer[0][0], 'consent');
assert.equal(context.dataLayer[0][2].analytics_storage, 'denied');
assert.equal(context.dataLayer.at(-1).event, 'gtm.js');
assert.equal(injected.length, 1);
assert.equal(injected[0].src, 'https://www.googletagmanager.com/gtm.js?id=GTM-5NQWM67T');
assert.equal(injected[0].async, true);
assert.match(pages.get('/shop'), /https:\/\/wa.me\/9779840801600\?text=Hi%20Grow%20More%20Interior/);
assert.doesNotMatch(pages.get('/shop'), /Add to Enquiry/);
for (const [path, html] of pages) {
  for (const match of html.matchAll(/https:\/\/wa.me\/(\d+)/g)) assert.equal(match[1], '9779840801600', path);
}
for (const [path, title] of [['/projects/2', 'The Noir Club'], ['/projects/7', 'Celestial Office'], ['/blog/2', 'The Art of Layered Lighting']]) {
  assert.ok(pages.get(path)?.includes(title), `${path} must show its selected entry`);
}
for (const path of ['/projects/999', '/blog/999', '/collection/unknown']) {
  assert.equal((await fetch(new URL(path, base))).status, 404, path);
}
const office = pages.get('/products?room=Corporate%20Office');
assert.ok(office?.includes('Design ideas for'));
assert.ok(office?.includes('1<!-- --> collections'));
const minimalist = pages.get('/products?look=Minimalist');
assert.ok(minimalist?.includes('1<!-- --> collections'));
assert.ok(pages.get('/enquiry').includes('Send via WhatsApp'), 'Enquiry form must provide a direct WhatsApp path');
const rejectedOrigin = await fetch(new URL('/api/lead', base), {
  method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}',
});
assert.equal(rejectedOrigin.status, 403);
const invalidLead = await fetch(new URL('/api/lead', base), {
  method: 'POST', headers: { 'Content-Type': 'application/json', Origin: base }, body: '{}',
});
assert.equal(invalidLead.status, 400);
console.log(`PASS: ${pages.size} linked routes; GTM head placement, consent ordering and script injection; WhatsApp destinations; filters; selected detail routes; unknown IDs.`);
