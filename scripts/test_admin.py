"""Local-only integration test. Removes its own account/reservation in finally."""
import urllib.request, urllib.error, urllib.parse, http.cookiejar
import re, json, subprocess, secrets, uuid, base64
BASE='http://localhost/hk-global/admin/'
PHP='D:/xampp/php/php.exe'
def php(code):
    return subprocess.check_output([PHP],input=('<?php require getcwd()."/php/database.php"; '+code).encode()).decode('utf-8-sig')
def literal(value):
    return "json_decode(base64_decode('"+base64.b64encode(json.dumps(value).encode()).decode()+"'),true)"
user='test_'+secrets.token_hex(8); password=secrets.token_urlsafe(22); rid=str(uuid.uuid4())
client=urllib.request.build_opener(urllib.request.HTTPCookieProcessor(http.cookiejar.CookieJar()))
def req(path,data=None):
    request=urllib.request.Request(BASE+path,urllib.parse.urlencode(data).encode() if data is not None else None)
    try:
        with client.open(request,timeout=15) as r: return r.status,r.read().decode(),r.url,dict(r.headers)
    except urllib.error.HTTPError as e: return e.code,e.read().decode(),e.url,dict(e.headers)
def token(html): return re.search('name="csrf" value="([^"]+)"',html)[1]
try:
    fixture=json.loads(php("$v="+literal([user,password,rid])+"; $q=database()->prepare('INSERT INTO admin_users (username,display_name,password_hash,created_at) VALUES (?,?,?,UTC_TIMESTAMP())'); $q->execute([$v[0],'검증 담당자',password_hash($v[1],PASSWORD_DEFAULT)]); $a=database()->lastInsertId(); $q=database()->prepare(\"INSERT INTO reservations (request_id,payload_hash,screen_language,pain_area,given_name,family_name,symptoms_original,email,phone,other_insurance,consent_at,created_at,updated_at) VALUES (?,?,'ja','knee','TEST','가상환자',?,'admin-test@example.invalid','000-0000-0000','',UTC_TIMESTAMP(),UTC_TIMESTAMP(),UTC_TIMESTAMP())\"); $q->execute([$v[2],str_repeat('0',64),'動作確認用の架空データ العربية <script>alert(1)</script>']); echo json_encode(['admin'=>$a,'reservation'=>database()->lastInsertId()]);"))
    r=req('index.php'); assert r[2].endswith('login.php') and '가상환자' not in r[1]
    detail='reservation.php?id='+fixture['reservation']
    assert req(detail)[2].endswith('login.php')
    assert req('setup.php')[0]==404
    assert req('login.php',dict(csrf='bad',username=user,password=password))[0]==403
    r=req('login.php'); r=req('login.php',dict(csrf=token(r[1]),username=user,password=password))
    assert '예약 접수 현황' in r[1] and '가상환자' in r[1]
    assert 'no-store' in r[3]['Cache-Control'] and 'noindex' in r[3]['X-Robots-Tag']
    r=req(detail); assert '&lt;script&gt;' in r[1] and '<script>alert(1)</script>' not in r[1]
    version=re.search('name="version" value="([^"]+)"',r[1])[1]; csrf=token(r[1])
    assert req(detail,dict(csrf='bad',version=version,status='confirmed',note='test'))[0]==403
    r=req(detail,dict(csrf=csrf,version=version,status='reviewing',note='가상 테스트 메모 <b>원문</b>'))
    assert '변경 내용을 저장했습니다.' in r[1] and '&lt;b&gt;' in r[1]
    r=req(detail,dict(csrf=csrf,version=version,status='confirmed',note='stale'))
    assert '다른 담당자가 먼저 수정했습니다.' in r[1]
    assert '표시할 예약이 없습니다.' in req('index.php?q='+secrets.token_hex(16))[1]
    assert req('logout.php',dict(csrf=csrf))[2].endswith('login.php')
    assert req(detail)[2].endswith('login.php')
    for i in range(5):
        r=req('login.php'); req('login.php',dict(csrf=token(r[1]),username=user,password='wrong'))
    r=req('login.php'); assert req('login.php',dict(csrf=token(r[1]),username=user,password=password))[0]==429
    row=json.loads(php("$q=database()->prepare('SELECT r.status, h.note FROM reservations r JOIN reservation_history h ON h.reservation_id=r.id WHERE r.request_id=?'); $q->execute(["+literal(rid)+"]); echo json_encode($q->fetch());"))
    assert row==dict(status='reviewing',note='가상 테스트 메모 <b>원문</b>')
    print('PASS: access control, CSRF, login/logout, escaping, status and note persistence, stale edits, search, throttling')
finally:
    # Exact random fixture identifiers only; never touch other accounts/reservations.
    php("$v="+literal([user,rid])+"; $db=database(); $db->beginTransaction(); $q=$db->prepare('DELETE h FROM reservation_history h JOIN reservations r ON r.id=h.reservation_id WHERE r.request_id=?'); $q->execute([$v[1]]); $q=$db->prepare('DELETE FROM reservations WHERE request_id=?'); $q->execute([$v[1]]); $q=$db->prepare('DELETE FROM admin_users WHERE username=?'); $q->execute([$v[0]]); $q=$db->prepare('DELETE FROM admin_login_limits WHERE bucket=?'); $q->execute([hash('sha256','user:'.$v[0])]); $db->commit();")
    print('Temporary test account, reservation and history removed.')
