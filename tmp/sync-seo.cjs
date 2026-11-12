const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const folder='deploy/cafe24-20261104';
const target=folder+'/www';
const langs=['ko','en','zh','ja','ru','mn','hi','vi','ar'];
const files=['index.html','.htaccess','robots.txt','sitemap.xml','assets/social-preview.png','css/header.css','js/header.js','js/i18n.js','js/translations.js','js/seo.js',...langs.map(l=>`locales/${l==='ja'?'jp':l}.js`),...langs.map(l=>`${l}/index.html`)];
const manifest=JSON.parse(fs.readFileSync(folder+'/manifest.json','utf8'));
for(const relative of files) {
 const dest=path.join(target,relative);fs.mkdirSync(path.dirname(dest),{recursive:true});
 fs.copyFileSync(relative,dest);
 const bytes=fs.readFileSync(dest);
 const entry={path:relative,bytes:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex')};
 const n=manifest.files.findIndex(f=>f.path===relative);
 if(n>=0) manifest.files[n]=entry; else manifest.files.push(entry);
}
fs.writeFileSync(folder+'/manifest.json',JSON.stringify(manifest,null,2)+'\n');
fs.writeFileSync(folder+'/seo-upload-files.txt',files.join('\n')+'\n');
fs.copyFileSync('docs/seo-deployment.md',folder+'/SEO-배포안내.md');
console.log('Synced '+files.length+' SEO files; credentials and unrelated files untouched.');
