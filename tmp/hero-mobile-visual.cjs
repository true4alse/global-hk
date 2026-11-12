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
   await page.evaluate(async()=>{await Promise.all([...document.querySelectorAll('.hero-slide.swiper-slide-active img')].map(i=>i.decode().catch(()=>{})));});await page.waitForTimeout(250);
   await page.locator('.hero').screenshot({path:`tmp/hero-ko-${i}.png`});
 }
 await page.setViewportSize({width:393,height:950});
 for(let i=0;i<4;i++){
 await page.evaluate(i=>document.querySelector('.hero-slider').swiper.slideToLoop(i,0),i);
 await page.evaluate(async()=>{await Promise.all([...document.querySelectorAll('.hero-slide.swiper-slide-active img')].map(i=>i.decode().catch(()=>{})));});await page.waitForTimeout(250);
 await page.locator('.hero').screenshot({path:`tmp/hero-mobile-${i}.png`});
 }
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
