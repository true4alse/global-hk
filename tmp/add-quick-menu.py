from pathlib import Path
import json

root=Path(__file__).resolve().parents[1]
# New keys only: leave the hospital's completed translation text untouched.
translations={
'ko':['빠른 메뉴','빠른 메뉴 열기','빠른 메뉴 닫기','전화 문의','진료예약','이메일 문의','진료시간','월–금','토요일','진료과별 의료진 선택','무릎 센터','어깨 센터','손발 센터','척추 센터','내과','영상의학과','마취통증의학과'],
'en':['Quick menu','Open quick menu','Close quick menu','Call us','Appointment','Email us','Opening hours','MON–FRI','SAT','Choose doctors by department','Knee Center','Shoulder Center','Hand & Foot Center','Spine Center','Internal Medicine','Radiology','Anesthesiology & Pain Medicine'],
'jp':['クイックメニュー','クイックメニューを開く','クイックメニューを閉じる','電話で問い合わせ','診療予約','メールで問い合わせ','診療時間','月〜金','土曜日','診療科別に医師を選択','膝関節センター','肩関節センター','手・足センター','脊椎センター','内科','放射線科','麻酔科・疼痛科'],
'zh':['快捷菜单','打开快捷菜单','关闭快捷菜单','电话咨询','预约就诊','邮件咨询','门诊时间','周一至周五','周六','按科室选择医生','膝关节中心','肩关节中心','手足中心','脊柱中心','内科','放射科','麻醉疼痛科'],
'ru':['Быстрое меню','Открыть быстрое меню','Закрыть быстрое меню','Позвонить','Запись на приём','Написать письмо','Часы приёма','ПН–ПТ','СБ','Выбор врача по отделению','Коленный сустав','Плечевой сустав','Кисть и стопа','Позвоночник','Терапия','Лучевая диагностика','Анестезиология и лечение боли'],
'mn':['Шуурхай цэс','Шуурхай цэс нээх','Шуурхай цэс хаах','Утсаар холбогдох','Үзлэгийн цаг авах','И-мэйл илгээх','Үзлэгийн цаг','ДАВ–БАА','БЯМ','Тасгаар эмч сонгох','Өвдөгний төв','Мөрний төв','Гар, хөлийн төв','Нурууны төв','Дотрын тасаг','Дүрс оношилгоо','Мэдээгүйжүүлэг, өвдөлт намдаах тасаг'],
'hi':['त्वरित मेन्यू','त्वरित मेन्यू खोलें','त्वरित मेन्यू बंद करें','फ़ोन करें','अपॉइंटमेंट','ईमेल करें','परामर्श का समय','सोम–शुक्र','शनिवार','विभाग के अनुसार डॉक्टर चुनें','घुटना केंद्र','कंधा केंद्र','हाथ और पैर केंद्र','रीढ़ केंद्र','आंतरिक चिकित्सा','रेडियोलॉजी','एनेस्थीसियोलॉजी और दर्द चिकित्सा'],
'ar':['القائمة السريعة','فتح القائمة السريعة','إغلاق القائمة السريعة','اتصل بنا','حجز موعد','راسلنا بالبريد الإلكتروني','ساعات العيادة','الإثنين–الجمعة','السبت','اختيار الطبيب حسب القسم','مركز الركبة','مركز الكتف','مركز اليد والقدم','مركز العمود الفقري','الطب الباطني','الأشعة','التخدير وعلاج الألم'],
'vi':['Menu nhanh','Mở menu nhanh','Đóng menu nhanh','Gọi điện','Đặt lịch khám','Gửi email','Giờ khám bệnh','THỨ 2–6','THỨ 7','Chọn bác sĩ theo chuyên khoa','Trung tâm Khớp gối','Trung tâm Vai','Trung tâm Bàn tay & Bàn chân','Trung tâm Cột sống','Nội khoa','Chẩn đoán hình ảnh','Gây mê & Điều trị đau']}
qkeys=['label','open','close','phone','reserve','email','hours','weekdays','saturday']
dkeys=['label','knee','shoulder','handFoot','spine','internal','radiology','anesthesia']
for base in [root,root/'deploy/cafe24-20261104/www']:
 for lang,values in translations.items():
  path=base/'locales'/f'{lang}.js'
  src=path.read_text(encoding='utf-8')
  if 'const quickMenu =' in src: continue
  block='const quickMenu = '+json.dumps(dict(zip(qkeys,values[:9])),ensure_ascii=False,indent=2)+';\n\nconst doctorMenu = '+json.dumps(dict(zip(dkeys,values[9:])),ensure_ascii=False,indent=2)+';\n\n'
  src=src.replace('export default {',block+'export default {\n  quickMenu,\n  doctorMenu,',1)
  path.write_text(src,encoding='utf-8',newline='\n')

index=root/'index.html'
src=index.read_text(encoding='utf-8')
src=src.replace('<link rel="stylesheet" href="./css/interactions.css">','<link rel="stylesheet" href="./css/interactions.css">\n  <link rel="stylesheet" href="./css/quick-menu.css">')
names=['김종근','이수건','이명철','이준영','김세훈','조남익','윤상훈','정승진','이경화','박진형','김준성']
groups=[('knee',[0,3]),('shoulder',[1]),('handFoot',[4]),('spine',[5,6]),('internal',[2,7,8]),('radiology',[10]),('anesthesia',[9])]
labels=dict(zip(dkeys,translations['ko'][9:]))
nav='      <nav class="doctor-department-nav" aria-label="진료과별 의료진 선택" data-i18n-label="doctorMenu.label">\n'
for key,ids in groups:
 text=f'<span data-i18n="doctorMenu.{key}">{labels[key]}</span>'
 if len(ids)==1:
  nav+=f'        <button type="button" data-doctor-target="{ids[0]}" data-doctor-group="{ids[0]}">{text}</button>\n'
 else:
  nav+=f'        <details><summary data-doctor-target="{ids[0]}" data-doctor-group="{",".join(map(str,ids))}">{text}</summary>\n          <div class="doctor-department-choices">\n'
  for i in ids: nav+=f'            <button type="button" data-doctor-target="{i}"><span data-i18n="doctors.profiles.{i}.name">{names[i]}</span></button>\n'
  nav+='          </div>\n        </details>\n'
nav+='      </nav>\n'
src=src.replace('      <div class="doctor-carousel"',nav+'      <div class="doctor-carousel"',1)
hours='''<strong data-i18n="quickMenu.weekdays">월–금</strong><time>09:00 ~ 18:00</time><strong data-i18n="quickMenu.saturday">토요일</strong><time>09:00 ~ 13:00</time>'''
quick='''
  <nav class="contact-quick" aria-label="빠른 메뉴" data-i18n-label="quickMenu.label" data-figma-node="1698:3885">
    <span id="contact-quick-open-label" class="quick-sr" data-i18n="quickMenu.open">빠른 메뉴 열기</span>
    <span id="contact-quick-close-label" class="quick-sr" data-i18n="quickMenu.close">빠른 메뉴 닫기</span>
    <button class="contact-quick-toggle" type="button" aria-expanded="false" aria-controls="contact-quick-panel" aria-labelledby="contact-quick-open-label">
      <img src="./assets/quick-menu/clock.svg" alt="" width="24" height="24">
      <span class="contact-quick-hours" aria-hidden="true">'''+hours+'''</span>
    </button>
    <div class="contact-quick-panel" id="contact-quick-panel">
'''
links=[('phone','tel:15511119','quickMenu.phone','<span dir="ltr" data-i18n-static="Hospital telephone number">1551-1119</span>'),('calendar','#reservation','quickMenu.reserve','<span data-i18n="quickMenu.reserve">진료예약</span>'),('email','mailto:heung-k@naver.com','quickMenu.email','<span dir="ltr" data-i18n-static="Hospital email address">heung-k<br>@naver.com</span>'),('youtube','https://www.youtube.com/@Heung_K','contact.youtubeLabel','<span lang="en" dir="ltr" data-i18n-static="Brand name">YouTube</span>'),('naver','https://blog.naver.com/heung-k','contact.blogLabel','<span lang="en" dir="ltr" data-i18n-static="Brand name">Naver Blog</span>'),('kakao','https://pf.kakao.com/_eGxoxmb','contact.kakaoLabel','<span lang="en" dir="ltr" data-i18n-static="Brand name">Kakao Talk</span>')]
aria=['전화 문의','진료예약','이메일 문의','흥K병원 유튜브','흥K병원 네이버 블로그','흥K병원 카카오톡 채널']
for (icon,href,key,label),al in zip(links,aria):
 extra=' target="_blank" rel="noopener noreferrer"' if href.startswith('https') else ''
 quick+=f'      <a class="contact-quick-link" href="{href}" aria-label="{al}" data-i18n-label="{key}"{extra}><img src="./assets/quick-menu/{icon}.svg" alt="" width="24" height="24">{label}</a>\n'
quick+='      <a class="contact-quick-hours" href="#customer-hours-title" aria-label="진료시간" data-i18n-label="quickMenu.hours"><img src="./assets/quick-menu/clock.svg" alt="" width="24" height="24">'+hours+'</a>\n    </div>\n  </nav>\n'
src=src.replace('</body>',quick+'</body>')
index.write_text(src,encoding='utf-8',newline='\n')
p=root/'js/header.js';src=p.read_text(encoding='utf-8');src="import { renderQuickMenu } from './quick-menu.js';\n"+src;src=src.replace('renderCenterMenu();','renderCenterMenu();\nrenderQuickMenu();',1);p.write_text(src,encoding='utf-8',newline='\n')
