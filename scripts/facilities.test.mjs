import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const source=(await readFile(new URL('../js/facilities.js',import.meta.url),'utf8')).replace('export function','function');
function element(dataset={}) {return {dataset,hidden:false,attrs:{},events:{},classList:{add(){}},setAttribute(k,v){this.attrs[k]=v},removeAttribute(k){delete this.attrs[k]},addEventListener(k,fn){this.events[k]=fn},focus(){this.focused=true}};}
function setup(reduce=false) {
 const floors=['5','6'].map(floor=>element({floor}));
 const panels=['5','6'].map(floor=>{
  const panel=element({floorPanel:floor});panel.links=['1','2'].map(photo=>element({photo}));
  panel.photos=['1','2'].map(facilitiesPhoto=>{const p=element({facilitiesPhoto});p.image={getAnimations:()=>[],animate:()=>{p.animations=(p.animations||0)+1}};p.querySelector=()=>p.image;return p});
  panel.strip={scrollWidth:600,clientWidth:300,scrollLeft:0,addEventListener(){},scrollBy(options){this.lastScroll=options}};
  panel.prev=element({scroll:'prev'});panel.next=element({scroll:'next'});
  panel.querySelectorAll=s=>s==='[data-photo]'?panel.links:s==='[data-facilities-photo]'?panel.photos:[panel.prev,panel.next];
  panel.querySelector=s=>s==='.facilities-thumbnails'?panel.strip:s==='[data-photo]'?panel.links[0]:s.includes('prev')?panel.prev:panel.next;return panel;
 });
 const section=element();section.querySelectorAll=s=>s==='[data-floor]'?floors:panels;
 const context=vm.createContext({document:{querySelector:()=>section,getElementById:()=>null},location:{hash:''},matchMedia:()=>({matches:reduce}),window:{addEventListener(){}}});
 vm.runInContext(source+'\nrenderFacilities();',context);
 const click=el=>el.events.click({preventDefault(){}});
 return {floors,panels,click};
}
test('층 변경은 해당 사진 목록만 보여주고 이전 사진 선택을 기억한다',()=>{
 const {floors,panels,click}=setup();assert.equal(panels[0].hidden,true);assert.equal(panels[1].hidden,false);
 click(panels[1].links[1]);assert.equal(panels[1].photos[1].hidden,false);assert.equal(panels[1].photos[0].hidden,true);
 click(floors[0]);assert.equal(panels[0].hidden,false);assert.equal(panels[1].hidden,true);
 click(floors[1]);assert.equal(panels[1].photos[1].hidden,false);assert.equal(floors[1].attrs['aria-current'],'true');
});
test('키보드로 끝 사진을 선택하고 동작 줄이기에서는 블러 없이 가로 이동한다',()=>{
 const {panels}=setup(true);const panel=panels[1];panel.links[0].events.keydown({key:'End',preventDefault(){}});
 assert.equal(panel.links[1].focused,true);assert.equal(panel.photos[1].hidden,false);assert.equal(panel.photos[1].animations,undefined);
 panel.next.events.click();assert.equal(panel.strip.lastScroll.left,225);assert.equal(panel.strip.lastScroll.behavior,'instant');
});
