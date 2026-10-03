import test from 'node:test';
import assert from 'node:assert/strict';
import { localeHref, requestedLocale } from '../js/site-paths.js';
const codes = ['ko', 'en'];
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
