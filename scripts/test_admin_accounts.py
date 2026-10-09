import urllib.request,urllib.error,urllib.parse,http.cookiejar,subprocess,json,secrets,base64,re
PHP='D:/xampp/php/php.exe'; BASE='http://localhost/hk-global/admin/'
def sql(code): return subprocess.check_output([PHP],input=('<?php require getcwd()."/php/database.php"; '+code).encode()).decode('utf-8-sig')
def lit(x): return "json_decode(base64_decode('"+base64.b64encode(json.dumps(x).encode()).decode()+"'),true)"
def client(): return urllib.request.build_opener(urllib.request.HTTPCookieProcessor(http.cookiejar.CookieJar()))
def req(c,path,data=None):
 try:
  with c.open(urllib.request.Request(BASE+path,urllib.parse.urlencode(data).encode() if data is not None else None),timeout=15) as r:return r.status,r.read().decode(),r.url
 except urllib.error.HTTPError as e:return e.code,e.read().decode(),e.url
def token(s):return re.search('name="csrf" value="([^"]+)"',s)[1]
def login(c,u,p):
 r=req(c,'login.php'); return req(c,'login.php',dict(csrf=token(r[1]),username=u,password=p))
supername='test_super_'+secrets.token_hex(6); name='test_staff_'+secrets.token_hex(6); pw='123456'
a=client();b=client()
try:
 sql('$v='+lit([supername,pw])+"; $q=database()->prepare(\"INSERT INTO admin_users(username,display_name,password_hash,role,created_at) VALUES (?,?,?,'superadmin',UTC_TIMESTAMP())\"); $q->execute([$v[0],'TEST SUPER',password_hash($v[1],PASSWORD_DEFAULT)]);")
 assert login(a,supername,pw)[0]==200
 r=req(a,'accounts.php'); csrf=token(r[1])
 payload=dict(csrf=csrf,action='create',username=name,display_name='TEST STAFF',password=pw,confirm=pw,role='superadmin')
 assert req(a,'accounts.php',dict(payload,csrf='bad'))[0]==403
 assert '최소 6자' in req(a,'accounts.php',dict(payload,password='12345',confirm='12345'))[1]
 created=req(a,'accounts.php',payload)[1]
 assert '담당자 계정을 추가했습니다.' in created and 'account-success-title' in created and '<strong>'+name+'</strong>' in created
 assert 'account-success-title' not in req(a,'accounts.php')[1]
 assert '이미 사용한 아이디' in req(a,'accounts.php',payload)[1]
 info=json.loads(sql('$q=database()->prepare("SELECT id,role FROM admin_users WHERE username=?");$q->execute(['+lit(name)+']);echo json_encode($q->fetch());'))
 assert info['role']=='admin'
 r=login(b,name,pw); assert r[0]==200 and '관리자 계정 관리' not in r[1]
 assert req(b,'accounts.php')[0]==403
 csrf_b=token(req(b,'index.php')[1]); assert req(b,'accounts.php',dict(payload,csrf=csrf_b))[0]==403
 superid=json.loads(sql('$q=database()->prepare("SELECT id FROM admin_users WHERE username=?");$q->execute(['+lit(supername)+']);echo json_encode($q->fetchColumn());'))
 assert '본인 계정은 삭제할 수 없습니다.' in req(a,'accounts.php',dict(csrf=csrf,action='delete',id=superid,confirmed='yes'))[1]
 assert '삭제 확인' in req(a,'accounts.php',dict(csrf=csrf,action='delete',id=info['id']))[1]
 assert '계정을 삭제했습니다.' in req(a,'accounts.php',dict(csrf=csrf,action='delete',id=info['id'],confirmed='yes'))[1]
 assert req(b,'index.php')[2].endswith('login.php')
 assert login(b,name,pw)[2].endswith('login.php')
 print('PASS: role gating, CSRF, staff creation, role tampering, duplicate IDs, self protection, deletion confirmation, session revocation')
finally:
 sql('$v='+lit([name,supername])+";$q=database()->prepare('DELETE FROM admin_users WHERE username=?');$l=database()->prepare('DELETE FROM admin_login_limits WHERE bucket=?');foreach($v as $u){$q->execute([$u]);$l->execute([hash('sha256','user:'.$u)]);}")
 print('Temporary accounts removed.')
