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

(async()=>{const b=await chromium.launch({headless:true,channel:'msedge'});try{for(const width of [320,1440]){const p=await b.newPage({viewport:{width,height:900},reducedMotion:'reduce'});await p.route('**/*',serve);await p.goto(base);await p.locator('.doctor-department-next').click();await p.waitForTimeout(200);assert.equal(await p.locator('.doctor-slider').evaluate(e=>e.swiper.realIndex),1);await p.locator('.doctor-department-previous').click();await p.waitForTimeout(200);assert.equal(await p.locator('.doctor-slider').evaluate(e=>e.swiper.realIndex),0);const r=await p.locator('.doctor-department-controls').boundingBox();assert(r.x>=0&&r.x+r.width<=width);console.log('PASS arrows and width',width);await p.close();}}finally{await b.close();}})();