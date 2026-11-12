import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {seoLanguages, languageUrl} from '../js/seo.js';

for (const code of seoLanguages) {
  test(`${code}: translated HTML and reciprocal SEO links are available without JS`, async () => {
    const content = (await import(`../locales/${code === 'ja' ? 'jp' : code}.js`)).default;
    const html = fs.readFileSync(new URL(`../${code}/index.html`, import.meta.url), 'utf8');
    assert.match(html, new RegExp(`<html lang="${code}" dir="${code === 'ar' ? 'rtl' : 'ltr'}"`));
    assert.equal((html.match(/<title\b/g) || []).length, 1);
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
    assert.ok(html.includes(`rel="canonical" href="${languageUrl(code)}"`));
    assert.ok(html.includes(content.seo.title.replaceAll('&','&amp;')));
    assert.ok(html.includes(content.hero.title.replaceAll('&','&amp;').replaceAll('<','&lt;')));
    for (const lang of seoLanguages) {
      assert.ok(html.includes(`hreflang="${lang}" href="${languageUrl(lang)}"`));
      assert.ok(html.includes(`href="./${lang}/" data-language="${lang}"`));
    }
    assert.ok(html.includes('<base href="../">'));
    assert.ok(!html.includes('swiper-initialized'));
    assert.ok(!html.includes('reveal-pending'));
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    assert.equal(schema['@type'], 'Hospital');
    assert.equal(schema.address.addressCountry, 'KR');
    // No made-up reviews/ratings or SEO-only claims.
    assert.equal(schema.aggregateRating, undefined);
  });
}
test('sitemap lists only canonical public language pages; required JS remains crawlable', () => {
  const sitemap = fs.readFileSync(new URL('../sitemap.xml',import.meta.url),'utf8');
  assert.equal((sitemap.match(/<loc>/g)||[]).length, seoLanguages.length);
  seoLanguages.forEach(code => assert.ok(sitemap.includes(`<loc>${languageUrl(code)}</loc>`)));
  const robots = fs.readFileSync(new URL('../robots.txt',import.meta.url),'utf8');
  assert.ok(!/Disallow: \/(?:js|css|assets|locales)\//.test(robots));
  assert.ok(robots.includes('Disallow: /admin/'));
});
