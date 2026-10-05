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
  if (isStaticPreview(result)) {
    result.searchParams.set('lang', code);
  } else {
    let route = result.pathname.startsWith(base.pathname) ? result.pathname.slice(base.pathname.length) : result.pathname.slice(1);
    const parts = route.split('/').filter(Boolean);
    if (codes.includes(parts[0])) parts.shift();
    if (parts[0] === 'index.html') parts.shift();
    result.pathname = base.pathname + [code, ...parts].join('/') + (parts.length ? '' : '/');
    result.searchParams.delete('lang');
  }
  return result.pathname + result.search + result.hash;
}

export function requestedLocale(url, baseUrl, codes) {
  if (isStaticPreview(url)) return url.searchParams.get('lang');
  const base = new URL(baseUrl);
  const route = url.pathname.startsWith(base.pathname) ? url.pathname.slice(base.pathname.length) : url.pathname.slice(1);
  const first = route.split('/').filter(Boolean)[0];
  return codes.includes(first) ? first : undefined;
}
