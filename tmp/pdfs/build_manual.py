from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from pathlib import Path
pdfmetrics.registerFont(TTFont('KR','C:/Windows/Fonts/malgun.ttf'))
pdfmetrics.registerFont(TTFont('KRB','C:/Windows/Fonts/malgunbd.ttf'))
pdfmetrics.registerFontFamily('KR',normal='KR',bold='KRB',italic='KR',boldItalic='KRB')
out=Path('output/pdf/흥K병원_간호사_예약관리_사용매뉴얼.pdf')
c=canvas.Canvas(str(out),pagesize=(595.28,841.89));c.setTitle('흥K병원 예약관리 사용 매뉴얼 | 간호사·예약 담당자용');c.setAuthor('HEUNG-K Hospital')
navy='#103B51';mint='#36B6BA';ink='#263B45'
def para(text,x,y,w=491,size=11,font='KR',color=ink):
 p=Paragraph(text,ParagraphStyle('p',fontName=font,fontSize=size,leading=size*1.65,textColor=HexColor(color),wordWrap='CJK'));_,h=p.wrap(w,700);p.drawOn(c,x,y-h);return y-h

def page(n,title,sub):
 c.setFillColor(HexColor(mint));c.rect(0,829,595.28,13,fill=1,stroke=0)
 para('HEUNG-K HOSPITAL  /  직원용 업무 안내',48,798,size=9,color=navy)
 para(title,48,761,size=25,font='KRB',color=navy)
 para(sub,48,712,size=11,color='#617783')
 c.setStrokeColor(HexColor('#DCE8EB'));c.line(48,51,547,51)
 para('예약 관리 매뉴얼 · 2026.11 · 실제 관리자 기능 기준',48,39,size=8,color='#617783')
 para(str(n)+' / 3',510,39,w=40,size=9,color=navy)
def step(num,title,body,y):
 c.setFillColor(HexColor(mint));c.circle(62,y-12,14,fill=1,stroke=0)
 para(str(num),53,y-2,w=20,size=12,font='KRB',color='#FFFFFF')
 para(title,88,y+3,w=455,size=15,font='KRB',color=navy)
 return para(body,88,y-30,w=450,size=11)-26

def box(title,body,y,height=102):
 c.setFillColor(HexColor('#EAF7F7'));c.roundRect(48,y-height,499,height,10,fill=1,stroke=0)
 para(title,64,y-14,w=467,size=12,font='KRB',color=navy)
 para(body,64,y-42,w=467,size=10.5)
page(1,'예약 확인하기','간호사·예약 담당자가 매일 사용하는 기본 순서입니다.')
y=step(1,'관리자 페이지에 로그인', '아래 주소를 열고 전달받은 <b>아이디</b>와 <b>비밀번호</b>를 입력한 뒤<br/><b>로그인</b>을 누릅니다. 계정이 없으면 병원 관리자에게 요청하세요.',657)
# Font mappings for bold paragraphs are registered below in source setup.
para('https://heungkglobal.com/admin/',88,y+14,w=450,size=12,font='KRB',color='#227FAB')
c.linkURL('https://heungkglobal.com/admin/',(88,y-6,400,y+20),relative=0)
y-=35
y=step(2,'새 예약 찾기','상단의 <b>접수</b>를 누르면 아직 처리하지 않은 신청을 볼 수 있습니다.<br/>특정 환자는 <b>예약 검색</b>에 이름·이메일·연락처를 입력하고 <b>검색</b>을 누릅니다.',y)
y=step(3,'예약의 「보기 →」 클릭','예약 목록은 최신 접수 순이며 한 페이지에 20건씩 표시됩니다.<br/>목록 오른쪽의 <b>보기 →</b>를 누르면 환자 상세 정보가 열립니다.<br/>새 신청이 보이지 않으면 <b>새로고침</b>을 누르세요.',y)
box('접수는 예약 확정이 아닙니다','환자가 선택한 날짜는 「희망 진료일」입니다. 실제 진료 가능 일정을 확인하고 환자와 연락한 뒤 확정해주세요.',195,104)
c.showPage()
page(2,'환자 연락 후 처리하기','상세 화면 오른쪽의 「접수 처리」에서 진행 상황을 기록합니다.')
y=step(1,'환자 정보와 증상 확인','이름, 연락처, 희망 진료일, 통증 부위와 보험 정보를 확인합니다.<br/><b>증상 원문</b>은 자동 번역되지 않습니다. 필요하면 통역 담당자에게 확인하세요.<br/>접수 시각과 처리 이력의 시각은 한국 시간으로 표시됩니다.',660)
y=step(2,'환자에게 연락하고 상태 선택','전화·이메일 등 병원에서 사용하는 연락 방법으로 일정을 조율합니다.<br/>「접수 처리」의 <b>처리 상태</b>에서 아래 기준에 맞는 항목을 선택합니다.',y)
rows=[('접수','새로 들어온 신청. 아직 확인 전'),('확인 중','연락 시도 중이거나 일정·진료 가능 여부 확인 중'),('예약 확정','환자와 일정을 조율하고 예약을 확정한 경우'),('취소','환자가 취소했거나 진행하지 않기로 확인한 경우')]
for a,b in rows:
 c.setFillColor(HexColor('#F2F6F8'));c.roundRect(88,y-34,450,32,4,fill=1,stroke=0);para(a,100,y-7,w=90,size=10.5,font='KRB',color=navy);para(b,193,y-7,w=335,size=10);y-=39
y-=16
y=step(3,'메모 작성 후 「예약 내용 저장」','<b>담당자 메모</b>에 연락 결과와 확인 사항을 적고 <b>예약 내용 저장</b>을 누릅니다.<br/>「변경 내용을 저장했습니다.」 안내와 아래 <b>처리 이력</b>을 확인하세요.<br/>예: “11/8 전화 연결. 11/12 오전 진료로 조율 완료. 통역 요청.”',y)
box('환자 안내는 별도로 해야 합니다','상태 변경과 담당자 메모는 내부 기록입니다. 「예약 확정」으로 저장해도 환자에게 문자나 이메일이 자동 발송되지 않습니다.',174,92)
c.showPage()
page(3,'인수인계와 자주 묻는 상황','문자 알림보다 관리자 예약 목록을 기준으로 업무를 확인해주세요.')
y=step(1,'근무 시작·인수인계','<b>접수</b>와 <b>확인 중</b> 예약을 확인하고, 각 예약의 <b>처리 이력</b>을 읽습니다.<br/>이력에는 담당자·변경 시각·상태·메모가 남습니다. 다음 담당자가 이어서<br/>처리할 수 있도록 연락 결과와 남은 업무를 메모해주세요.',657)
y=step(2,'문자가 오지 않을 때','먼저 관리자 페이지에서 <b>새로고침</b>하여 예약 목록을 확인합니다.<br/>문자 미수신만으로 예약이 없다고 판단하지 마세요. 알림 설정·잔액·발송<br/>문제는 병원 관리자 또는 유지보수 담당자에게 확인을 요청하세요.',y)
y=step(3,'저장이 안 되거나 다른 담당자가 수정했을 때','「다른 담당자가 먼저 수정했습니다」가 나오면 작성 중인 메모를 따로<br/>복사해 둡니다. 새로고침하여 최신 이력을 읽은 뒤 필요한 내용만 다시<br/>입력하고 저장하세요. 같은 예약을 중복 처리하지 않도록 확인합니다.',y)
y=step(4,'검색 결과가 없거나 로그인이 안 될 때','검색 결과가 없으면 <b>처리 상태</b>를 <b>전체 상태</b>로 바꾸고 검색어를 지운 뒤<br/><b>검색</b>을 누릅니다. 비밀번호를 잊었거나 접속 문제가 계속되면 병원<br/>관리자에게 문의하세요. 오류 화면을 보낼 때는 환자 정보를 가려주세요.',y)
box('업무를 마치면','공용 PC에서는 상단의 「로그아웃」을 누릅니다. 환자 정보와 계정 비밀번호를 개인 메신저·공용 문서에 남기지 마세요.',153,82)
c.save()
print(out.resolve())
import fitz
doc=fitz.open(out)
for i,p in enumerate(doc):
 p.get_pixmap(matrix=fitz.Matrix(1.1,1.1)).save(f'tmp/pdfs/manual-{i+1}.png')
print('Rendered',len(doc),'pages')

