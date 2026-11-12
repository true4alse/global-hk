const {chromium}=require('C:/Users/OWNER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const base='http://127.0.0.1:4174/global-hk/';
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.woff2':'font/woff2','.ttf':'font/ttf'};
async function serve(route){
 const u=new URL(route.request().url());
 if(u.origin!=='http://127.0.0.1:4174'||route.request().method()!=='GET')return route.abort();
 let name=decodeURIComponent(u.pathname).replace('/global-hk/','');
 if(!name||/^(ko|en|zh|ja|ru|mn|hi|vi|ar)\/$/.test(name))name='index.html';
 const file=path.resolve(name);
 if(!file.startsWith(process.cwd()+path.sep)||!fs.existsSync(file))return route.fulfill({status:404,body:''});
 return route.fulfill({contentType:types[path.extname(file)]||'application/octet-stream',body:fs.readFileSync(file)});
}
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'msedge'});
 try{
 const page=await browser.newPage({viewport:{width:1920,height:1100},reducedMotion:'reduce'});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.route('**/*',serve);
 await page.goto(base+'?lang=ko');await page.waitForFunction(()=>document.querySelector('.hero-slider').swiper);
 await page.evaluate(()=>document.fonts.ready);
 for(let i=0;i<4;i++){
   await page.evaluate(i=>document.querySelector('.hero-slider').swiper.slideToLoop(i,0),i);
   await page.waitForTimeout(200);
   await page.locator('.hero').screenshot({path:`tmp/hero-ko-${i}.png`});
 }
 for(const width of [320,390,760,1024,1440]){
  await page.setViewportSize({width,height:950});
  for(const lang of ['ko','en','zh','ja','ru','mn','hi','vi','ar']){
   await page.locator('.language-toggle').click();await page.locator(`[data-language="${lang}"]`).click();
   await page.evaluate(()=>document.fonts.ready);
   for(let i=0;i<4;i++){
    await page.evaluate(i=>document.querySelector('.hero-slider').swiper.slideToLoop(i,0),i);await page.waitForTimeout(80);
    const bad=await page.evaluate(()=>{
     const slide=document.querySelector('.hero-slide.swiper-slide-active'),r=slide.getBoundingClientRect();
     return [...slide.querySelectorAll('h1,h2,p,.hero-number,.hero-thumbnails')].filter(e=>!e.classList.contains('hero-brand')).flatMap(e=>{
      const b=e.getBoundingClientRect();return b.left<r.left-1||b.right>r.right+1||e.scrollWidth>e.clientWidth+2||b.bottom>r.bottom-70?[{text:e.textContent.slice(0,60),width:e.clientWidth,scroll:e.scrollWidth,left:b.left-r.left,right:b.right-r.right,bottom:b.bottom-r.bottom}]:[];
     });
    });
    assert.deepEqual(bad,[],`${lang} ${width}px slide ${i}`);
   }
   const overflow=await page.evaluate(()=>{window.scrollTo(100,0);return window.scrollX;});assert.equal(overflow,0,lang+' page overflow');
   if(width===320&&['ko','ru','ar','zh'].includes(lang))await page.locator('.hero').screenshot({path:`tmp/hero-${lang}-320.png`});
  }
  console.log('PASS layout all 9 languages:',width);
 }
 await page.emulateMedia({reducedMotion:'no-preference'});
 await page.goto(base+'?lang=ko');await page.waitForFunction(()=>document.querySelector('.hero-slide.is-arrived'));
 await page.locator('.hero-toggle').click();
 await page.evaluate(()=>document.querySelector('.hero-slider').swiper.slideToLoop(0,0));
 await page.mouse.move(0,1100);await page.waitForTimeout(4200);
 assert.equal(await page.locator('.hero-number').textContent(),'2,500');
 const firstNodes=await page.locator('[data-hero-slide]').count();
 for(let i=0;i<8;i++){
  await page.evaluate(()=>document.querySelector('.hero-slider').swiper.slideNext(0));await page.waitForTimeout(150);
  assert.equal(await page.evaluate(()=>document.querySelector('.hero-slider').swiper.realIndex),(i+1)%4);
  assert.equal(await page.locator('.hero-slide.is-arrived').count(),Math.min(i+2,4));
 }
 assert.equal(await page.locator('[data-hero-slide]').count(),firstNodes);
 assert.equal(await page.evaluate(()=>document.querySelector('.hero-slider').swiper.autoplay.running),false);
 await page.locator('.hero-toggle').click();await page.locator('.hero-toggle').blur();await page.mouse.move(0,1100);
 const before=await page.evaluate(()=>document.querySelector('.hero-slider').swiper.realIndex);await page.waitForTimeout(11200);
 assert.notEqual(await page.evaluate(()=>document.querySelector('.hero-slider').swiper.realIndex),before);
 await page.evaluate(()=>window.scrollTo(0,2000));await page.waitForTimeout(200);assert.equal(await page.evaluate(()=>document.querySelector('.hero-slider').swiper.autoplay.running),false);
 assert.deepEqual(errors,[]);
 const context=await browser.newContext({javaScriptEnabled:false,viewport:{width:320,height:800}}),plain=await context.newPage();await plain.route('**/*',serve);await plain.goto(base);
 assert.equal(await plain.locator('.hero-slide:visible').count(),4);assert.equal(await plain.locator('.hero-controls:visible').count(),0);
 console.log('PASS loop, autoplay, pause, offscreen, count, JS-free fallback; no browser exceptions.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
