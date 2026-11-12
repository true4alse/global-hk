import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import ko from '../locales/ko.js';
import { seoMarkup, seoLanguages, languageUrl, siteOrigin } from '../js/seo.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
// Install Playwright, or supply an existing installation through this variable.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
let source = await fs.readFile(path.join(root, 'index.html'), 'utf8');
const metadata = seoMarkup('ko', ko.seo);
source = source.includes('<!-- SEO:START -->')
  ? source.replace(/<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/, metadata)
  : source.replace(/<title[^>]*>[\s\S]*?<\/title>/, metadata);
await fs.writeFile(path.join(root, 'index.html'), source);

const browser = await chromium.launch({ headless:true, channel:process.env.BROWSER_CHANNEL || 'msedge' });
try {
  const page = await browser.newPage();
  // Build offline: no application initialization, live APIs, or reservations.
  await page.route('**/*', async route => {
    const url = new URL(route.request().url());
    if (url.origin !== 'http://seo-build.local') return route.abort();
    if (url.pathname === '/') return route.fulfill({contentType:'text/html', body:'<!doctype html><html><head></head><body></body></html>'});
    const file = path.resolve(root, '.' + decodeURIComponent(url.pathname));
    if (!file.startsWith(root + path.sep) || !file.endsWith('.js')) return route.abort();
    try { await route.fulfill({contentType:'text/javascript', body:await fs.readFile(file)}); }
    catch { await route.abort(); }
  });
  await page.goto('http://seo-build.local/');
  for (const code of seoLanguages) {
    const output = await page.evaluate(async ({source, code}) => {
      const { applyTranslations } = await import('/js/translations.js');
      const { languages } = await import('/js/i18n.js');
      const { seoMarkup } = await import('/js/seo.js');
      const language = languages.find(item => item.code === code);
      const doc = new DOMParser().parseFromString(source, 'text/html');
      doc.documentElement.lang = code;
      doc.documentElement.dir = language.dir;
      doc.body.className = `lang-${code}`;
      doc.querySelector('base').setAttribute('href', '../');
      doc.querySelectorAll('[data-i18n-ko-source="html"]').forEach(el => el.setAttribute('data-i18n-ko-text', el.textContent));
      applyTranslations(language.content, doc);
      const current = doc.querySelector('.current-language-name');
      current.textContent = language.label;
      current.lang = code;
      current.dir = language.dir;
      doc.querySelectorAll('[data-language]').forEach(link => {
        if (link.dataset.language === code) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
      return '<!doctype html>\n' + doc.documentElement.outerHTML.replace(/<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/, seoMarkup(code, language.content.seo)) + '\n';
    }, {source, code});
    await fs.mkdir(path.join(root, code), {recursive:true});
    await fs.writeFile(path.join(root, code, 'index.html'), output);
  }
  // Code-native social card using the existing logo.
  const logo = await fs.readFile(path.join(root,'assets/logo.svg'),'utf8');
  await page.setViewportSize({width:1200,height:630});
  await page.setContent(`<html><head><style>body{margin:0;width:1200px;height:630px;display:grid;place-content:center;background:linear-gradient(125deg,#f5fcfd,#fff 60%,#e5f5f9);font-family:Arial,sans-serif;border-bottom:18px solid #35b6bc;box-sizing:border-box}img{width:940px;height:auto}p{text-align:center;color:#154567;font-size:27px;letter-spacing:4px;margin-top:50px}</style></head><body><img src="data:image/svg+xml;base64,${Buffer.from(logo).toString('base64')}" alt="HEUNG-K Hospital"><p>JOINT &amp; SPINE CARE IN KOREA</p></body></html>`);
  await page.locator('img').evaluate(img => img.decode());
  await page.screenshot({path:path.join(root,'assets/social-preview.png')});
} finally { await browser.close(); }

await fs.writeFile(path.join(root,'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${seoLanguages.map(code => `  <url><loc>${languageUrl(code)}</loc></url>`).join('\n')}\n</urlset>\n`);
await fs.writeFile(path.join(root,'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /api/\nDisallow: /config/\nDisallow: /private/\nDisallow: /php/\nDisallow: /scripts/\nDisallow: /deploy/\nDisallow: /tmp/\nDisallow: /docs/\nDisallow: /output/\n\nSitemap: ${siteOrigin}/sitemap.xml\n`);
console.log('Built 9 translated HTML pages, metadata, sitemap, robots and social preview.');
