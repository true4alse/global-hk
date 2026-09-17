import ko from '../locales/ko.js';

export const languages = [
  { code: 'ko', label: '한국어', dir: 'ltr', content: ko },
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'zh', label: '中文', dir: 'ltr' },
  { code: 'ja', label: '日本語', dir: 'ltr' },
  { code: 'ru', label: 'Русский', dir: 'ltr' },
  { code: 'mn', label: 'Монгол', dir: 'ltr' },
  { code: 'hi', label: 'हिन्दी', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
];

// URL을 우선하고 쿠키는 언어 없는 최초 진입에만 사용합니다.
export function localeUrl(code, url = new URL(location.href)) {
  const parts = url.pathname.split('/').filter(Boolean);
  if (languages.some(language => language.code === parts[0])) parts.shift();
  if (parts[0] === 'index.html') parts.shift();
  url.pathname = '/' + [code, ...parts].join('/') + (parts.length ? '' : '/');
  return url.pathname + url.search + url.hash;
}

export function initializeLocale() {
  const requested = location.pathname.split('/')[1];
  const cookie = document.cookie.split('; ').find(value => value.startsWith('site_language='))?.split('=')[1];
  const selected = languages.find(language => language.code === (requested || cookie) && language.content) || languages[0];
  document.documentElement.lang = selected.code;
  document.documentElement.dir = selected.dir;
  document.body.className = `lang-${selected.code}`;
  document.cookie = `site_language=${selected.code}; Max-Age=31536000; Path=/; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`;
  const canonical = localeUrl(selected.code);
  if (canonical !== location.pathname + location.search + location.hash) history.replaceState(null, '', canonical);
  return selected;
}
