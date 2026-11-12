const assert=require('node:assert/strict');
const {chromium}=require('C:/Users/OWNER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{const b=await chromium.launch({headless:true,channel:'msedge'});const p=await b.newPage({viewport:{width:320,height:640},reducedMotion:'reduce'});await p.route('**/*',r=>r.request().url().startsWith('http://127.0.0.1:4183')?r.continue():r.abort());
for(const lang of ['ko','en','ja','zh','ru','mn','hi','ar','vi']){
 await p.goto('http://127.0.0.1:4183/global-hk/'+lang+'/');await p.waitForSelector('.doctor-slider.swiper-initialized');
 const toggle=p.locator('.contact-quick-toggle');await toggle.click();
 assert.equal(await toggle.getAttribute('aria-expanded'),'true');
 const bad=await p.locator('.contact-quick-link').evaluateAll(els=>els.filter(el=>{const r=el.getBoundingClientRect();return r.left<0||r.right>innerWidth+1||r.top<0||r.bottom>innerHeight-100||r.width<44;}).length);assert.equal(bad,0,lang+' dial bounds');
 assert.equal(await p.locator('.contact-quick-panel').evaluate(el=>el.inert),false);
 await p.keyboard.press('Escape');assert.equal(await toggle.getAttribute('aria-expanded'),'false');assert.equal(await p.locator('.contact-quick-panel').evaluate(el=>el.inert),true);
 await p.locator('.doctor-department-nav').scrollIntoViewIfNeeded();await p.locator('.doctor-department-nav summary').first().click();
 assert.equal(await p.locator('.doctor-slider').evaluate(el=>el.swiper.realIndex),0);
 await p.locator('.doctor-department-nav button[data-doctor-target="3"]').click();await p.waitForTimeout(100);
 assert.equal(await p.locator('.doctor-slider').evaluate(el=>el.swiper.realIndex),3,lang+' doctor');
 assert.equal(await p.locator('.doctor-slider').evaluate(el=>el.swiper.autoplay.running),false);
 if(lang==='ko'||lang==='ar')await p.screenshot({path:'tmp/doctor-final-'+lang+'.png'});
 console.log(lang,'PASS');
}
await p.setViewportSize({width:1440,height:900});await p.goto('http://127.0.0.1:4183/global-hk/ar/');await p.locator('#knee-center').scrollIntoViewIfNeeded();const left=await p.locator('.center-menu').boundingBox(),right=await p.locator('.contact-quick').boundingBox();assert(left.x+left.width<right.x);console.log('RTL rails separated',left.x,right.x);
await p.locator('.doctor-department-nav').scrollIntoViewIfNeeded();await p.screenshot({path:'tmp/doctor-final-pc.png'});
await p.setViewportSize({width:700,height:390});await p.locator('.contact-quick-toggle').click();await p.screenshot({path:'tmp/quick-landscape.png'});
assert.equal(await p.locator('.contact-quick-link').evaluateAll(els=>els.filter(e=>{let r=e.getBoundingClientRect();return r.top<0||r.bottom>innerHeight}).length),0);
console.log('landscape PASS');await b.close();})().catch(e=>{console.error(e);process.exit(1)});
