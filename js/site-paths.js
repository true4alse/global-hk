// Live Server와 GitHub Pages는 가상 언어 경로를 실제 파일로 연결하지 않습니다.
// Live Server가 주입하는 새로고침 코드를 감지하므로 사용자 지정 포트에서도 동작합니다.
export function isStaticPreview(url) {
  const liveServer = typeof document !== 'undefined' && [...document.scripts].some(script =>
    !script.src && script.textContent.includes('IsThisFirstTime_Log_From_LiveServer'));
  return liveServer || url.hostname.endsWith('.github.io') || url.protocol === 'file:';
}

export function localeHref(code, url, baseUrl, codes) {
  const result = new URL(url);
  const base = new URL(baseUrl);
  // Always reload the shared interactive entry, rather than an older SEO snapshot.
  result.pathname = result.pathname === base.pathname + 'index.html'
    ? result.pathname : base.pathname;
  result.searchParams.set('lang', code);
  return result.pathname + result.search + result.hash;
}

export function requestedLocale(url, baseUrl, codes) {
  const queryLanguage = url.searchParams.get('lang');
  if (codes.includes(queryLanguage)) return queryLanguage;
  const base = new URL(baseUrl);
  const route = url.pathname.startsWith(base.pathname) ? url.pathname.slice(base.pathname.length) : url.pathname.slice(1);
  const first = route.split('/').filter(Boolean)[0];
  return codes.includes(first) ? first : undefined;
}
