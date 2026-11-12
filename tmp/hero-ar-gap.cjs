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
 const page=await browser.newPage({viewport:{width:484,height:1050},reducedMotion:'no-preference'});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.route('**/*',serve);
 await page.goto(base+'ar/');await page.waitForFunction(()=>document.querySelector('.hero-slider').swiper);
 await page.locator('.language-toggle').click();await page.locator('[data-language=ar]').click();await page.evaluate(()=>document.fonts.ready);
 await page.evaluate(()=>document.querySelector('.hero-slider').swiper.slideToLoop(2,0));await page.waitForTimeout(4500);
 console.log(await page.evaluate(()=>['html','body','main','.hero','.hero-slider','.hero .swiper-wrapper','.hero-slide.swiper-slide-active','.hero-slide.swiper-slide-active .hero-background-layer'].map(sel=>{const e=document.querySelector(sel),r=e.getBoundingClientRect(),s=getComputedStyle(e);return {sel,left:r.left,width:r.width,padding:s.padding,margin:s.margin,dir:s.direction,transform:s.transform};})));
 await page.locator('.hero').screenshot({path:'tmp/hero-ar-gap.png'});
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});


