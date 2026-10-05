import test from 'node:test';
import assert from 'node:assert/strict';
import { localeHref, requestedLocale } from '../js/site-paths.js';
const codes = ['ko', 'en'];
test('Live Server는 저장 후 새로고침 가능한 실제 파일 주소를 유지한다', () => {
 const previous = globalThis.document;
 globalThis.document = {scripts:[{src:'',textContent:'IsThisFirstTime_Log_From_LiveServer'}]};
 try {
  const base='http://127.0.0.1:5500/project/';
  const url=new URL(base+'index.html#about');
  const switched=localeHref('en',url,base,codes);
  assert.equal(switched,'/project/index.html?lang=en#about');
  assert.equal(requestedLocale(new URL(switched,base),base,codes),'en');
  assert.equal(localeHref('ko',new URL('http://localhost:5600/'), 'http://localhost:5600/',codes),'/?lang=ko');
 } finally {
  if(previous===undefined) delete globalThis.document;
  else globalThis.document=previous;
 }
});
test('local language routes retain search/hash and replace the existing language', () => {
 const url = new URL('http://127.0.0.1:4173/ko/?preview=1#reservation');
 assert.equal(localeHref('en', url, 'http://127.0.0.1:4173/', codes), '/en/?preview=1#reservation');
 assert.equal(requestedLocale(url, 'http://127.0.0.1:4173/', codes), 'ko');
});
test('GitHub Pages preserves the repository path and a refreshable static entry point', () => {
 const url = new URL('https://true4alse.github.io/global-hk/?preview=1#service-360');
 assert.equal(localeHref('ko', url, 'https://true4alse.github.io/global-hk/', codes), '/global-hk/?preview=1&lang=ko#service-360');
 assert.equal(requestedLocale(new URL('https://true4alse.github.io/global-hk/?lang=ko'), 'https://true4alse.github.io/global-hk/', codes), 'ko');
});
test('a deployed subfolder retains its prefix for language routes', () => {
 const url = new URL('https://hospital.example/global/ko/#doctors');
 assert.equal(localeHref('en', url, 'https://hospital.example/global/', codes), '/global/en/#doctors');
});
