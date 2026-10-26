<?php
require dirname(__DIR__).'/php/admin.php';
if (adminUser()) go('index.php');
$error='';
if ($_SERVER['REQUEST_METHOD']==='POST') {
    checkCsrf();
    $name=is_string($_POST['username'] ?? null) ? trim($_POST['username']) : '';
    $password=is_string($_POST['password'] ?? null) ? $_POST['password'] : '';
    $buckets=[hash('sha256','ip:'.($_SERVER['REMOTE_ADDR'] ?? '')),hash('sha256','user:'.strtolower($name))];
    $blocked=false;
    foreach($buckets as $i=>$bucket) {
        $q=database()->prepare('SELECT failures FROM admin_login_limits WHERE bucket=? AND last_failure > DATE_SUB(UTC_TIMESTAMP(), INTERVAL 15 MINUTE)');
        $q->execute([$bucket]); if ((int)$q->fetchColumn() >= ($i===0 ? 20 : 5)) $blocked=true;
    }
    if ($blocked) { http_response_code(429); $error='로그인 시도가 많습니다. 15분 후 다시 시도해주세요.'; }
    else {
        $q=database()->prepare('SELECT * FROM admin_users WHERE username=? AND active=1'); $q->execute([substr($name,0,64)]); $user=$q->fetch();
        $hash=$user['password_hash'] ?? '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2uheWG/igi.';
        $valid=strlen($password)<=1024 && password_verify($password,$hash);
        if ($user && $valid && strlen($name)<=64) {
            session_regenerate_id(true);
            $_SESSION=['admin_id'=>$user['id'],'csrf'=>bin2hex(random_bytes(32))];
            $q=database()->prepare('DELETE FROM admin_login_limits WHERE bucket=?'); $q->execute([$buckets[1]]);
            go('index.php');
        }
        foreach($buckets as $bucket) {
            $q=database()->prepare('INSERT INTO admin_login_limits (bucket,failures,last_failure) VALUES (?,1,UTC_TIMESTAMP()) ON DUPLICATE KEY UPDATE failures=IF(last_failure < DATE_SUB(UTC_TIMESTAMP(), INTERVAL 15 MINUTE),1,failures+1),last_failure=UTC_TIMESTAMP()'); $q->execute([$bucket]);
        }
        $error='아이디 또는 비밀번호를 확인해주세요.';
    }
}
pageStart('관리자 로그인'); ?>
<section class="login card"><p class="eyebrow">STAFF ONLY</p><h1>예약 관리자 로그인</h1><p class="muted">병원 담당자 계정으로 로그인해주세요.</p>
<?php if($error): ?><p role="alert" class="notice error"><?=e($error)?></p><?php endif; ?>
<form method="post"><?php csrf(); ?><label>아이디<input name="username" autocomplete="username" maxlength="64" required></label><label>비밀번호<input name="password" type="password" autocomplete="current-password" maxlength="1024" required></label><button class="primary wide">로그인</button></form>
<?php if(localAdmin() && (int)database()->query('SELECT COUNT(*) FROM admin_users')->fetchColumn()===0): ?><p class="muted">첫 사용인가요? <a href="setup.php">최초 관리자 계정 만들기</a></p><?php endif; ?></section>
<?php pageEnd(); ?>
