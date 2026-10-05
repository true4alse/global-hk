import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
const source=(await readFile(new URL('../js/about.js',import.meta.url),'utf8')).replace('export function','function');

test('통계는 모든 언어에서 화면 재진입과 재초기화 시 원본 숫자로 다시 카운트한다',()=>{
  const frames=new Map(); let id=0, observer, reduced=false;
  const counters=['82','400','6,152','90','7,208'].map(textContent=>({textContent,dataset:{},
    classList:{contains:name=>name==='about-stat-value'},setAttribute(){},
    closest:()=>({querySelector:()=>({textContent:'통계'}),setAttribute(){}})}));
  const section={querySelectorAll:s=>s==='.about-stat-value'?counters:[],querySelector:()=>null};
  const document={documentElement:{lang:'ko'},querySelector:()=>section};
  const context=vm.createContext({document,Intl,window:{IntersectionObserver:true},
    matchMedia:()=>({matches:reduced,addEventListener(){},removeEventListener(){}}),
    requestAnimationFrame:fn=>{frames.set(++id,fn);return id},cancelAnimationFrame:id=>frames.delete(id),
    IntersectionObserver:class {constructor(fn){this.fn=fn;observer=this}observe(){}unobserve(){throw Error('통계 관찰을 중단하면 안 됩니다')}disconnect(){}}
  });
  vm.runInContext(source,context);
  const tick=time=>{const callbacks=[...frames.values()];frames.clear();callbacks.forEach(fn=>fn(time))};
  const enter=visible=>observer.fn(counters.map(target=>({target,isIntersecting:visible})));
  const values=()=>counters.map(x=>x.textContent);
  for(const language of ['ko','en','zh','ja','ru','mn','hi','ar','vi']) {
    document.documentElement.lang=language;
    vm.runInContext('renderAbout()',context);
    enter(true);tick(0);tick(1200);
    assert.deepEqual(values(),['72','350','5,383','79','6,307']);
    enter(false);assert.equal(frames.size,0);
    enter(true);tick(0);assert.deepEqual(values(),['0','0','0','0','0']);
    tick(2400);assert.deepEqual(values(),['82','400','6,152','90','7,208']);
  }
  reduced=true;vm.runInContext('renderAbout()',context);
  assert.deepEqual(values(),['82','400','6,152','90','7,208']);assert.equal(frames.size,0);
});
