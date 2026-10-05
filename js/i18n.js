import { localeHref, requestedLocale } from './site-paths.js';
import ko from '../locales/ko.js';
import en from '../locales/en.js';
import zh from '../locales/zh.js';
import ja from '../locales/jp.js';
import ru from '../locales/ru.js';
import mn from '../locales/mn.js';
import hi from '../locales/hi.js';
import vi from '../locales/vi.js';
import ar from '../locales/ar.js';

export const languages = [
  { code: 'ko', label: '한국어', dir: 'ltr', content: ko },
  { code: 'en', label: 'English', dir: 'ltr', content: en },
  { code: 'zh', label: '中文', dir: 'ltr', content: zh },
  { code: 'ja', label: '日本語', dir: 'ltr', content: ja },
  { code: 'ru', label: 'Русский', dir: 'ltr', content: ru },
  { code: 'mn', label: 'Монгол', dir: 'ltr', content: mn },
  { code: 'hi', label: 'हिन्दी', dir: 'ltr', content: hi },
  { code: 'vi', label: 'Tiếng Việt', dir: 'ltr', content: vi },
  { code: 'ar', label: 'العربية', dir: 'rtl', content: ar },
];

// URL을 우선하고 쿠키는 언어 없는 최초 진입에만 사용합니다.
export function localeUrl(code, url = new URL(location.href)) {
  return localeHref(code, url, document.baseURI, languages.map(language => language.code));
}

export function initializeLocale(code) {
  const requested = requestedLocale(new URL(location.href), document.baseURI, languages.map(language => language.code));
  const cookie = document.cookie.split('; ').find(value => value.startsWith('site_language='))?.split('=')[1];
  const selected = languages.find(language => language.code === (code || requested || cookie) && language.content) || languages[0];
  document.documentElement.lang = selected.code;
  document.documentElement.dir = selected.dir;
  document.body.className = `lang-${selected.code}`;
  document.cookie = `site_language=${selected.code}; Max-Age=31536000; Path=${new URL(document.baseURI).pathname}; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`;
  const canonical = localeUrl(selected.code);
  if (canonical !== location.pathname + location.search + location.hash) history.replaceState(null, '', canonical);
  return selected;
}
