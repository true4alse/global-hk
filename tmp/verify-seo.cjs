const {chromium}=require('C:/Users/OWNER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const base='http://127.0.0.1:4186/global-hk/';
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'msedge'});
 try {
  const page=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  // Block remote embeds and all mutations during verification.
  const serve=async route=>{
    if(!route.request().url().startsWith('http://127.0.0.1:4186/') || route.request().method()!=='GET') return route.abort();
    let name=decodeURIComponent(new URL(route.request().url()).pathname).replace('/global-hk/','');
    if(name.endsWith('/')||!name) name+='index.html';
    const file=path.resolve(name);
    if(!file.startsWith(process.cwd()+path.sep)||!fs.existsSync(file)) return route.fulfill({status:404,body:''});
    const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.woff2':'font/woff2','.ttf':'font/ttf'};
    return route.fulfill({contentType:types[path.extname(file)]||'application/octet-stream',body:fs.readFileSync(file)});
  };
  await page.route('**/*',serve);
  for(const code of ['ko','en','zh','ja','ru','mn','hi','vi','ar']) {
    await page.goto(base+code+'/',{waitUntil:'domcontentloaded'});
    await page.waitForFunction(()=>!document.querySelector('.language-toggle').disabled);
    assert.equal(await page.locator('html').getAttribute('lang'),code);
    assert.equal(await page.locator('link[rel=canonical]').getAttribute('href'),`https://heungkglobal.com/${code}/`);
    assert.equal(await page.locator('a[data-language]').count(),9);
    assert.equal(await page.locator('.header-phone').getAttribute('href'),'tel:15511119');
    await page.locator('.language-toggle').click();
    await page.locator('[data-language="ko"]').click();
    assert.equal(await page.locator('html').getAttribute('lang'),'ko');
    assert.equal(await page.locator('[data-cadaver="workshop"]').textContent(),'2025 2026 카데바 워크샵 2년 연속 성황리 개최');
    assert.equal(await page.locator('link[rel=canonical]').getAttribute('href'),'https://heungkglobal.com/ko/');
    await page.setViewportSize({width:320,height:800});
    await page.locator('.language-toggle').click();
    await page.locator(`[data-language="${code}"]`).click();
    await page.waitForTimeout(100);
    const overflow=await page.evaluate(()=>{window.scrollTo(100,0);return window.scrollX;});
    assert.equal(overflow,0,code+' horizontal page scroll');
    if(['ar','zh'].includes(code)) await page.screenshot({path:`tmp/seo-${code}-mobile.png`});
    await page.setViewportSize({width:1440,height:900});
    console.log('PASS browser:',code);
  }
  assert.deepEqual(errors,[]);
  await page.goto(base+'en/');
  await page.screenshot({path:'tmp/seo-en-desktop.png'});
  const plain=await browser.newContext({javaScriptEnabled:false});
  const raw=await plain.newPage();
  await raw.route('**/*',serve);
  for(const code of ['ko','en','zh','ja','ru','mn','hi','vi','ar']) {
    await raw.goto(base+code+'/',{waitUntil:'domcontentloaded'});
    assert.equal(await raw.locator('html').getAttribute('lang'),code);
    assert.ok(await raw.locator('h1').innerText());
    const imgs=await raw.locator('img').evaluateAll(els=>els.slice(0,15).every(el=>el.src.includes('/global-hk/assets/')));
    assert.ok(imgs,code+' static asset paths');
  }
  console.log('PASS: 9 languages with JavaScript disabled.');
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
