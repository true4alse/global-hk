// GitHub Pages serves static files without language-route rewrites.
export function isStaticPreview(url) {
  return url.hostname.endsWith('.github.io') || url.protocol === 'file:';
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
