const fs = require('node:fs');
const path = require('node:path');
const root = process.cwd();
const copy = {
ko: ['흥K병원 | 관절·척추 진료 및 국제환자 안내', '경기도 시흥시 흥K병원의 무릎·어깨·손발·척추 진료, 의료진과 시설을 확인하세요. 국제환자를 위한 진료예약, 방문 및 의료서비스 안내를 제공합니다.'],
en: ['HEUNG-K Hospital | Joint & Spine Care in Korea', 'Explore knee, shoulder, hand, foot and spine care at HEUNG-K Hospital in Siheung, Korea. Meet our doctors and find appointments, facilities and international patient services.'],
zh: ['兴K医院 | 韩国关节与脊柱诊疗及国际患者服务', '了解韩国京畿道始兴市兴K医院的膝、肩、手足及脊柱诊疗、医疗团队和院内设施，查看国际患者预约、来院交通及医疗服务指南。'],
ja: ['Heung-K病院 | 韓国の関節・脊椎診療と海外患者サポート', '韓国・京畿道始興市のHeung-K病院。膝・肩・手足・脊椎の診療、医師紹介、院内設備のほか、海外からの患者様向けに診療予約やアクセスをご案内します。'],
ru: ['Больница Heung-K | Лечение суставов и позвоночника в Корее', 'Больница Heung-K в Сихыне, Южная Корея: лечение колена, плеча, кисти, стопы и позвоночника. Врачи, запись на приём и услуги для иностранных пациентов.'],
mn: ['Heung-K эмнэлэг | Солонгос дахь үе мөч, нурууны эмчилгээ', 'БНСУ-ын Шихын хотын Heung-K эмнэлгийн өвдөг, мөр, гар, хөл, нурууны эмчилгээ, эмч нар болон орчинтой танилцаарай. Гадаад өвчтөнд зориулсан цаг захиалга, ирэх замын мэдээлэл.'],
hi: ['Heung-K अस्पताल | कोरिया में जोड़ और रीढ़ की देखभाल', 'दक्षिण कोरिया के सिहुंग स्थित Heung-K अस्पताल में घुटने, कंधे, हाथ, पैर और रीढ़ के उपचार की जानकारी पाएं। डॉक्टरों, सुविधाओं, अपॉइंटमेंट और अंतरराष्ट्रीय रोगी सेवाओं के बारे में जानें।'],
vi: ['Bệnh viện Heung-K | Điều trị khớp và cột sống tại Hàn Quốc', 'Tìm hiểu dịch vụ điều trị đầu gối, vai, bàn tay, bàn chân và cột sống tại Bệnh viện Heung-K ở Siheung, Hàn Quốc. Thông tin bác sĩ, đặt lịch và hỗ trợ bệnh nhân quốc tế.'],
ar: ['مستشفى Heung-K | رعاية المفاصل والعمود الفقري في كوريا', 'تعرّف على رعاية الركبة والكتف واليد والقدم والعمود الفقري في مستشفى Heung-K بمدينة سيهيونغ في كوريا. معلومات الأطباء والمرافق وحجز المواعيد وخدمات المرضى الدوليين.']
};
fs.mkdirSync('tmp/seo-locale-backup', {recursive:true});
for (const [code, [title, description]] of Object.entries(copy)) {
  const file = `locales/${code === 'ja' ? 'jp' : code}.js`;
  const text = fs.readFileSync(file, 'utf8');
  if (text.includes('const seo =')) throw new Error('Already patched: ' + file);
  fs.copyFileSync(file, 'tmp/seo-locale-backup/' + path.basename(file));
  fs.writeFileSync(file, text.replace('export default {', `// 검색 결과 및 공유 미리보기 문구. 기존 본문 번역은 유지합니다.\nconst seo = ${JSON.stringify({title,description}, null, 2)};\n\nexport default {\n  seo,`));
}
let html = fs.readFileSync('index.html','utf8');
// Real links are crawlable and still work when scripts are unavailable.
html = html.replace(/<button type="button" data-language="([a-z]+)"([\s\S]*?)<\/button>/g, (_,code,rest) => `<a href="./${code}/" data-language="${code}"${rest.replace(/\sdisabled\b/g, '')}</a>`);
fs.writeFileSync('index.html', html);
let css=fs.readFileSync('css/header.css','utf8').replaceAll('.language-options button', '.language-options [data-language]');
css=css.replace('.language-options [data-language] {', '.language-options [data-language] {\n  text-decoration: none;');
fs.writeFileSync('css/header.css',css);
let js=fs.readFileSync('js/header.js','utf8');
js="import { updateSeo } from './seo.js';\n"+js;
js=js.replaceAll('applyTranslations(selected.content);', 'applyTranslations(selected.content);\n  updateSeo(selected.code, selected.content);');
js=js.replace("  button.addEventListener('click', () => {", "  button.setAttribute('href', localeUrl(button.dataset.language));\n  button.addEventListener('click', event => {\n    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;\n    event.preventDefault();");
fs.writeFileSync('js/header.js',js);
// A generated foreign page must retain the Korean HTML override when switching back.
js=fs.readFileSync('js/translations.js','utf8').replace('koreanHtmlText.set(element, element.textContent)', "koreanHtmlText.set(element, element.getAttribute('data-i18n-ko-text') ?? element.textContent)");
fs.writeFileSync('js/translations.js',js);
js=fs.readFileSync('js/i18n.js','utf8').replace('// URL을 우선하고 쿠키는 언어 없는 최초 진입에만 사용합니다.', '// 언어 URL을 우선합니다. 기본 주소는 항상 한국어로 유지해 검색 결과와 일치시킵니다.').replace("  const cookie = document.cookie.split('; ').find(value => value.startsWith('site_language='))?.split('=')[1];\n",'').replace('code || requested || cookie','code || requested || document.documentElement.lang');
fs.writeFileSync('js/i18n.js',js);
