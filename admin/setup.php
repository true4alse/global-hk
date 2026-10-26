<?php
require dirname(__DIR__).'/php/admin.php';
if (!localAdmin() || (int)database()->query('SELECT COUNT(*) FROM admin_users')->fetchColumn()!==0) { http_response_code(404); exit; }
$error='';
if($_SERVER['REQUEST_METHOD']==='POST') {
    checkCsrf();
    $name=$_POST['username'] ?? ''; $display=$_POST['display_name'] ?? ''; $password=$_POST['password'] ?? ''; $confirm=$_POST['confirm'] ?? '';
    if(!is_string($name) || !preg_match('/^[A-Za-z0-9_.-]{4,64}$/',$name) || !is_string($display) || trim($display)==='' || mb_strlen($display)>100 || !is_string($password) || mb_strlen($password,'UTF-8')<6 || strlen($password)>72 || $password!==$confirm) {
        $error='아이디 형식, 담당자 이름, 비밀번호 길이와 일치 여부를 확인해주세요.';
    } else {
        // Serialize first-account creation across local requests.
        $db=database(); $lock=$db->query("SELECT GET_LOCK('hk_first_admin',5)")->fetchColumn();
        if((int)$lock!==1) throw new RuntimeException('lock');
        try {
            if((int)$db->query('SELECT COUNT(*) FROM admin_users')->fetchColumn()===0) {
                $q=$db->prepare('INSERT INTO admin_users (username,display_name,password_hash,created_at,role) VALUES (?,?,?,UTC_TIMESTAMP(),\'superadmin\')');
                $q->execute([$name,trim($display),password_hash($password,PASSWORD_DEFAULT)]);
            }
        } finally { $db->query("SELECT RELEASE_LOCK('hk_first_admin')"); }
        go('login.php');
    }
}
pageStart('최초 관리자 설정'); ?>
<section class="login card"><p class="eyebrow">INITIAL SETUP</p><h1>최초 관리자 설정</h1><p class="muted">이 컴퓨터에서만 열리는 초기 설정입니다. 계정을 만들면 이 페이지는 닫힙니다.</p>
<?php if($error): ?><p class="notice error" role="alert"><?=e($error)?></p><?php endif; ?>
<form method="post"><?php csrf(); ?><label>아이디<input name="username" autocomplete="username" pattern="[A-Za-z0-9_.\-]{4,64}" maxlength="64" required><small>영문·숫자·밑줄·마침표·하이픈, 4~64자</small></label><label>담당자 이름<input name="display_name" placeholder="예: 흥K병원 김은지 간호사" maxlength="100" required></label><label>비밀번호<input name="password" type="password" autocomplete="new-password" minlength="6" maxlength="72" required><small>최소 6자 이상, 영문·숫자·특수문자 조합 조건 없음</small></label><label>비밀번호 확인<input name="confirm" type="password" autocomplete="new-password" minlength="6" maxlength="72" required></label><button class="primary wide">관리자 계정 만들기</button></form></section>
<?php pageEnd(); ?>
