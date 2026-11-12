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
 try {
 for(const width of [320,484,1440]) {
 const page=await browser.newPage({viewport:{width,height:950}});await page.route('**/*',serve);
 await page.goto(base); await page.waitForFunction(()=>document.querySelector('.hero-slider').swiper);
 await page.locator('.language-toggle').click(); await page.locator('[data-language=ar]').click();
 await page.waitForFunction(()=>document.querySelector('[data-hero-slide="0"]').classList.contains('is-arrived'));
 await page.waitForTimeout(3500);
 assert.equal(await page.locator('.hero-slide--or .hero-thumbnails').count(),0);
 for(const pos of ['top','bottom','top']) {
 await page.evaluate(pos=>window.scrollTo(0,pos==='bottom'?document.body.scrollHeight:0),pos);await page.waitForTimeout(300);
 const r=await page.evaluate(()=>{window.scrollBy(-10000,0);return {x:scrollX,w:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth};});
 assert.equal(r.x,0,JSON.stringify({width,pos,...r}));
 }
 await page.reload(); await page.waitForFunction(()=>document.querySelector('.hero-slide.swiper-slide-active.is-arrived'));await page.waitForTimeout(3500);
 const opacity=await page.locator('.hero-slide.swiper-slide-active .hero-background-layer').evaluate(e=>getComputedStyle(e).opacity);assert.equal(opacity,'1');
 await page.screenshot({path:'tmp/hero-fixed-'+width+'.png'});
 console.log('PASS Arabic scroll + reload:',width);await page.close();
 }
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
