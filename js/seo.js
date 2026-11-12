// Shared by the static-page build and client-side language switching.
export const siteOrigin = 'https://heungkglobal.com';
export const seoLanguages = ['ko', 'en', 'zh', 'ja', 'ru', 'mn', 'hi', 'vi', 'ar'];
const ogLocales = {ko:'ko_KR', en:'en_US', zh:'zh_CN', ja:'ja_JP', ru:'ru_RU', mn:'mn_MN', hi:'hi_IN', vi:'vi_VN', ar:'ar_AR'};
export const languageUrl = code => `${siteOrigin}/${code}/`;
export function hospitalSchema() {
  return {
    '@context': 'https://schema.org', '@type': 'Hospital',
    '@id': `${siteOrigin}/#hospital`, name: '흥K병원', alternateName: 'HEUNG-K Hospital',
    url: siteOrigin + '/', logo: siteOrigin + '/assets/logo-symbol.png',
    image: siteOrigin + '/assets/social-preview.png', telephone: '1551-1119',
    address: {'@type':'PostalAddress', streetAddress:'능곡번영길 22', addressLocality:'시흥시', addressRegion:'경기도', addressCountry:'KR'},
    sameAs: ['https://www.youtube.com/@Heung_K', 'https://blog.naver.com/heung-k', 'https://pf.kakao.com/_eGxoxmb']
  };
}
const escape = value => String(value).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
export function seoMarkup(code, seo) {
  const meta = (name, value, property = false) => `<meta ${property ? 'property' : 'name'}="${name}" content="${escape(value)}">`;
  return [
    '<!-- SEO:START -->',
    `<title data-i18n="seo.title">${escape(seo.title)}</title>`,
    meta('description', seo.description),
    meta('robots', 'index,follow,max-image-preview:large'),
    `<link rel="canonical" href="${languageUrl(code)}">`,
    ...seoLanguages.map(lang => `<link rel="alternate" hreflang="${lang}" href="${languageUrl(lang)}">`),
    `<link rel="alternate" hreflang="x-default" href="${languageUrl('en')}">`,
    meta('og:type', 'website', true), meta('og:site_name', 'HEUNG-K Hospital', true),
    meta('og:title', seo.title, true), meta('og:description', seo.description, true),
    meta('og:url', languageUrl(code), true), meta('og:locale', ogLocales[code], true),
    meta('og:image', siteOrigin + '/assets/social-preview.png', true),
    meta('og:image:width', '1200', true), meta('og:image:height', '630', true),
    meta('og:image:alt', 'HEUNG-K Hospital', true),
    meta('twitter:card', 'summary_large_image'), meta('twitter:title', seo.title),
    meta('twitter:description', seo.description), meta('twitter:image', siteOrigin + '/assets/social-preview.png'),
    `<script type="application/ld+json">${JSON.stringify(hospitalSchema()).replaceAll('<','\\u003c')}</script>`,
    '<!-- SEO:END -->'
  ].join('\n  ');
}
export function updateSeo(code, content, root = document) {
  if (!content.seo || !seoLanguages.includes(code)) return;
  root.title = content.seo.title;
  const set = (selector, value) => root.querySelector(selector)?.setAttribute('content', value);
  set('meta[name="description"]', content.seo.description);
  set('meta[property="og:title"]', content.seo.title);
  set('meta[property="og:description"]', content.seo.description);
  set('meta[property="og:url"]', languageUrl(code));
  set('meta[property="og:locale"]', ogLocales[code]);
  set('meta[name="twitter:title"]', content.seo.title);
  set('meta[name="twitter:description"]', content.seo.description);
  root.querySelector('link[rel="canonical"]')?.setAttribute('href', languageUrl(code));
}
