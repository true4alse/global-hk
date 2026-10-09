<?php
require dirname(__DIR__).'/php/admin.php';
$user=requireSuperAdmin(); $db=database(); $error=''; $name=''; $display='';
if($_SERVER['REQUEST_METHOD']==='POST') {
    checkCsrf(); $action=$_POST['action'] ?? '';
    if($action==='create') {
        $name=is_string($_POST['username'] ?? null) ? trim($_POST['username']) : '';
        $display=is_string($_POST['display_name'] ?? null) ? trim($_POST['display_name']) : '';
        $password=is_string($_POST['password'] ?? null) ? $_POST['password'] : '';
        if(!preg_match('/^[A-Za-z0-9_.-]{4,64}$/',$name) || $display==='' || mb_strlen($display)>100 || mb_strlen($password,'UTF-8')<6 || strlen($password)>72 || str_contains($password,"\0") || $password!==($_POST['confirm'] ?? null)) {
            $error='아이디·담당자 이름을 확인하고, 비밀번호를 최소 6자 이상으로 입력해주세요. 비밀번호 확인 값도 같아야 합니다.';
        } else {
            try {
                // A submitted role is deliberately ignored; this form only issues staff accounts.
                $q=$db->prepare("INSERT INTO admin_users (username,display_name,password_hash,role,active,created_at) VALUES (?,?,?,'admin',1,UTC_TIMESTAMP())");
                $q->execute([$name,$display,password_hash($password,PASSWORD_DEFAULT)]);
                $createdId=$db->lastInsertId();
                $check=$db->prepare("SELECT username FROM admin_users WHERE id=? AND active=1 AND role='admin'");
                $check->execute([$createdId]);
                $createdUsername=$check->fetchColumn();
                if($createdUsername!==$name) throw new RuntimeException('Account verification failed');
                $_SESSION['account_created']=$createdUsername;
                $_SESSION['account_message']='담당자 계정을 추가했습니다. 아이디: '.$createdUsername; go('accounts.php');
            } catch(PDOException $ex) {
                if(($ex->errorInfo[1] ?? null)===1062) $error='이미 사용한 아이디입니다. 삭제한 계정의 아이디도 재사용할 수 없습니다.';
                else throw $ex;
            }
        }
    } elseif($action==='delete') {
        $target=filter_var($_POST['id'] ?? null,FILTER_VALIDATE_INT);
        if(!$target || $target===(int)$user['id'] || ($_POST['confirmed'] ?? '')!=='yes') $error='삭제 확인 항목을 선택해주세요. 본인 계정은 삭제할 수 없습니다.';
        else {
            $q=$db->prepare("UPDATE admin_users SET active=0 WHERE id=? AND role='admin' AND active=1"); $q->execute([$target]);
            if($q->rowCount()===1) { $_SESSION['account_message']='계정을 삭제했습니다. 해당 계정은 더 이상 로그인할 수 없으며 처리 이력은 유지됩니다.'; go('accounts.php'); }
            $error='삭제할 수 없는 계정입니다. 슈퍼관리자는 삭제할 수 없습니다.';
        }
    } else { http_response_code(400); $error='잘못된 요청입니다.'; }
}
$accounts=$db->query('SELECT id,username,display_name,role,active,created_at FROM admin_users ORDER BY active DESC,id')->fetchAll();
$message=$_SESSION['account_message'] ?? ''; unset($_SESSION['account_message']);
$createdUsername=$_SESSION['account_created'] ?? null; unset($_SESSION['account_created']);
pageStart('관리자 계정 관리',$user); ?>
<?php if(is_string($createdUsername)): ?>
<dialog class="account-success" aria-labelledby="account-success-title" aria-describedby="account-success-description">
<p class="eyebrow">ACCOUNT CREATED</p><h2 id="account-success-title">담당자 계정을 추가했습니다.</h2>
<p id="account-success-description">정상적으로 등록된 로그인 아이디를 확인해주세요.</p>
<p class="created-username"><span>로그인 아이디</span><strong><?=e($createdUsername)?></strong></p>
<form method="dialog"><button class="primary wide" autofocus>확인</button></form>
</dialog><script nonce="<?=e($adminScriptNonce)?>" src="./accounts.js?v=20261009"></script>
<?php endif; ?>
<a class="quiet back" href="index.php">← 예약 목록으로</a>
<div class="heading"><div><p class="eyebrow">STAFF ACCOUNTS</p><h1>관리자 계정 관리</h1><p class="muted">슈퍼관리자가 담당자별 로그인 계정을 발급하고 관리합니다.</p></div><span class="badge confirmed">슈퍼관리자 전용</span></div>
<?php if($message): ?><p class="notice" role="status"><?=e($message)?></p><?php endif; ?><?php if($error): ?><p class="notice error" role="alert"><?=e($error)?></p><?php endif; ?>
<div class="accounts-grid"><section class="card"><h2>담당자 계정 목록</h2><p class="muted">일반 관리자는 예약 조회·상태 변경·메모 작성을 할 수 있습니다. 계정 관리는 슈퍼관리자만 가능합니다.</p><div class="table-wrap"><table><thead><tr><th>담당자 / 아이디</th><th>권한</th><th>상태</th><th>관리</th></tr></thead><tbody>
<?php foreach($accounts as $account): ?><tr><td><b><?=e($account['display_name'])?></b><small><?=e($account['username'])?></small></td><td><?=$account['role']==='superadmin'?'슈퍼관리자':'일반 관리자'?></td><td><span class="badge <?=$account['active']?'confirmed':'cancelled'?>"><?=$account['active']?'사용 중':'삭제됨'?></span></td><td>
<?php if($account['role']==='admin' && $account['active'] && (int)$account['id']!==(int)$user['id']): ?><details class="account-delete"><summary>계정 삭제</summary><form method="post"><?php csrf(); ?><input type="hidden" name="action" value="delete"><input type="hidden" name="id" value="<?=e($account['id'])?>"><p>이 담당자의 로그인을 차단합니다. 기존 예약 처리 이력은 남습니다.</p><label class="delete-confirm"><input type="checkbox" name="confirmed" value="yes" required> 계정 삭제를 확인했습니다.</label><button class="danger">삭제 확정</button></form></details><?php else: ?><span class="muted"><?=$account['active']?'삭제 불가':'—'?></span><?php endif; ?></td></tr><?php endforeach; ?>
</tbody></table></div></section>
<section class="card"><h2>담당자 추가</h2><form method="post" autocomplete="off"><?php csrf(); ?><input type="hidden" name="action" value="create"><label>담당자 이름<input name="display_name" placeholder="예: 흥K병원 김은지 간호사" maxlength="100" value="<?=e($display)?>" required></label><label>로그인 아이디<input name="username" minlength="4" maxlength="64" pattern="[A-Za-z0-9_.\-]{4,64}" value="<?=e($name)?>" required><small>영문·숫자·밑줄·마침표·하이픈, 4~64자</small></label><label>비밀번호<input type="password" name="password" autocomplete="new-password" minlength="6" maxlength="72" required><small>최소 6자 이상, 영문·숫자·특수문자 조합 조건 없음</small></label><label>비밀번호 확인<input type="password" name="confirm" autocomplete="new-password" minlength="6" maxlength="72" required></label><p class="muted">추가되는 계정의 권한은 일반 관리자입니다.</p><button class="primary wide">담당자 계정 추가</button></form></section></div>
<?php pageEnd(); ?>
