const {chromium}=require('C:/Users/OWNER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'msedge'});
 const page=await browser.newPage({viewport:{width:1440,height:900}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.route('**/*',route=>route.request().url().startsWith('http://127.0.0.1:4183')?route.continue():route.abort());
 await page.goto('http://127.0.0.1:4183/global-hk/ko/');
 await page.waitForSelector('.doctor-slider.swiper-initialized');
 await page.screenshot({path:'tmp/quick-desktop.png'});
 console.log('desktop',await page.locator('.contact-quick').boundingBox());
 await page.setViewportSize({width:390,height:844});
 await page.locator('.contact-quick-toggle').click();await page.waitForTimeout(850);
 await page.screenshot({path:'tmp/quick-mobile.png'});
 console.log('mobile',await page.locator('.contact-quick-link').evaluateAll(els=>els.map(el=>({r:el.getBoundingClientRect().toJSON(),opacity:getComputedStyle(el).opacity,transform:getComputedStyle(el).transform}))));
 await page.keyboard.press('Escape');
 console.log('escape',await page.locator('.contact-quick-toggle').getAttribute('aria-expanded'));
 for(const lang of ['ko','en','ja','zh','ru','mn','hi','ar','vi']) {
  await page.setViewportSize({width:320,height:640});
  await page.goto('http://127.0.0.1:4183/global-hk/'+lang+'/');
  await page.waitForSelector('.doctor-slider.swiper-initialized');
  await page.locator('.contact-quick-toggle').click();await page.waitForTimeout(800);
  const dimensions=await page.evaluate(()=>({width:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth,links:[...document.querySelectorAll('.contact-quick-link')].map(el=>{const r=el.getBoundingClientRect();return [Math.round(r.x),Math.round(r.y),Math.round(r.width),Math.round(r.height)]}),label:document.querySelector('#contact-quick-open-label').textContent}));
  console.log(lang,JSON.stringify(dimensions));
  await page.keyboard.press('Escape');
  await page.locator('.doctor-department-nav').scrollIntoViewIfNeeded();
  if(lang==='ar')await page.screenshot({path:'tmp/doctors-ar.png'});
 }
 await page.setViewportSize({width:1440,height:900});
 await page.locator('.doctor-department-nav').scrollIntoViewIfNeeded();
 for(const i of [0,3,1,4,5,6,2,7,8,10,9]){
  const button=page.locator('.doctor-department-nav [data-doctor-target="'+i+'"]').last();
  await button.evaluate(el=>{const d=el.closest('details');if(d)d.open=true;});
  await button.click(); await page.waitForTimeout(750);
  const active=await page.locator('.doctor-slider').evaluate(el=>el.swiper.realIndex);
  if(active!==i)throw Error(`doctor ${i}: actual ${active}`);
 }
 await page.screenshot({path:'tmp/doctors-desktop-ar.png'});
 console.log('all 11 doctor targets passed; errors:',errors);
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
