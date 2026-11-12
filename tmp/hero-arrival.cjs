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

(async()=>{const b=await chromium.launch({headless:true,channel:'msedge'});const p=await b.newPage();await p.route('**/*',serve);await p.goto(base,{waitUntil:'domcontentloaded'});await p.waitForFunction(()=>document.querySelector('.hero .is-arrived'));for(let i=0;i<8;i++){console.log(await p.locator('[data-hero-slide="0"]').evaluate(e=>({cls:e.className,bg:getComputedStyle(e.querySelector('.hero-background-layer')).animationName,opacity:getComputedStyle(e.querySelector('.hero-background-layer')).opacity})));await p.waitForTimeout(400);}await b.close();})();