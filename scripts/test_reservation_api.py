import json, urllib.request, urllib.error, http.cookiejar, uuid, subprocess
from pathlib import Path
url='http://localhost/hk-global/api/reservations.php'
jar=http.cookiejar.CookieJar(); client=urllib.request.build_opener(urllib.request.HTTPCookieProcessor(jar))
token=json.load(client.open(url))['csrf']
ids=[]
def send(data,csrf=token):
    req=urllib.request.Request(url,json.dumps(data,ensure_ascii=False).encode(),{'Content-Type':'application/json','X-CSRF-Token':csrf})
    try:
        with client.open(req) as r: return r.status,json.load(r)
    except urllib.error.HTTPError as e: return e.code,json.load(e)
def sample():
    return dict(requestId=str(uuid.uuid4()),screenLanguage='ja',painArea='knee',givenName='TEST',familyName='LOCAL',email='reservation-test@example.invalid',phone='000-0000-0000',symptoms='【動作確認用・架空データ】\n日本語 العربية 😀',consent='on')
x=sample(); ids.append(x['requestId'])
try:
    assert send(x,'wrong')[0]==403
    bad=dict(x,consent=''); assert send(bad)[0]==422
    bad=dict(x,birthday='2025-02-30'); assert send(bad)[0]==422
    bad=dict(x,appointmentDate='2000-01-01'); assert send(bad)[0]==422
    bad=dict(x,painArea='unknown'); assert send(bad)[0]==422
    bad=dict(x,symptoms='x'*5001); assert send(bad)[0]==422
    assert send(x)[0]==201
    assert send(x)[0]==200
    assert send(dict(x,symptoms='changed'))[0]==409
    y=sample(); ids.append(y['requestId']); assert send(y)[0]==429
    php='''<?php require getcwd().'/php/database.php'; $q=database()->prepare('SELECT symptoms_original, screen_language, status FROM reservations WHERE request_id=?'); $q->execute([$argv[1]]); echo json_encode($q->fetch(), JSON_UNESCAPED_UNICODE);'''
    check=Path('scripts/.test-reservation-check.php'); check.write_text(php,encoding='utf-8')
    row=json.loads(subprocess.check_output(['D:/xampp/php/php.exe',str(check),x['requestId']]))
    assert row==dict(symptoms_original=x['symptoms'],screen_language='ja',status='received'),row
    print('PASS: CSRF, consent, dates, choices, length, Unicode roundtrip, duplicate retry, conflict, rate limit')
finally:
    check=Path('scripts/.test-reservation-check.php')
    check.write_text("<?php require getcwd().'/php/database.php'; $q=database()->prepare('DELETE FROM reservations WHERE request_id=? AND email=?'); foreach(array_slice($argv,1) as $id) $q->execute([$id,'reservation-test@example.invalid']);",encoding='utf-8')
    subprocess.run(['D:/xampp/php/php.exe',str(check),*ids],check=True)
    check.unlink()
