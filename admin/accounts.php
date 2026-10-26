<?php
require dirname(__DIR__).'/php/admin.php';
require dirname(__DIR__).'/php/sms.php';
$smsMode=smsConfig()['mode'];
$user=requireSuperAdmin(); $db=database(); $error=''; $name=''; $display=''; $phone=''; $notify=false;
if($_SERVER['REQUEST_METHOD']==='POST') {
    checkCsrf(); $action=$_POST['action'] ?? '';
    $phone=is_string($_POST['notification_phone'] ?? null) ? trim($_POST['notification_phone']) : '';
    $phone=preg_replace('/[\s-]+/u','',$phone);
    $notify=($_POST['notify_new_reservations'] ?? '')==='1';
    $phoneValid=($phone==='' && !$notify) || preg_match('/^010[0-9]{8}$/D',$phone);
    if(in_array($action,['create','notifications'],true) && !$phoneValid) {
        $error='알림 받을 휴대폰 번호를 010으로 시작하는 11자리로 입력해주세요. 새 예약 알림을 받으려면 번호가 필요합니다.';
    } elseif($action==='notifications' || $action==='disconnect_notifications') {
        $target=filter_var($_POST['id'] ?? null,FILTER_VALIDATE_INT);
        $q=$db->prepare('SELECT id FROM admin_users WHERE id=? AND active=1'); $q->execute([$target]);
        if(!$target || !$q->fetchColumn()) $error='사용 중인 계정만 알림 설정을 변경할 수 있습니다.';
        else {
            if($action==='disconnect_notifications') { $phone=''; $notify=false; }
            $q=$db->prepare('UPDATE admin_users SET notification_phone=?,notify_new_reservations=? WHERE id=? AND active=1');
            $q->execute([$phone,(int)$notify,$target]);
            $_SESSION['account_message']=$action==='disconnect_notifications' ? '알림 설정 연결을 해제했습니다.' : ($smsMode==='live'?'문자 알림 수신 설정을 저장했습니다.':'알림 설정을 저장했습니다. 실제 문자 발송은 아직 꺼져 있습니다.'); go('accounts.php');
        }
    } elseif($action==='create') {
        $name=is_string($_POST['username'] ?? null) ? trim($_POST['username']) : '';
        $display=is_string($_POST['display_name'] ?? null) ? trim($_POST['display_name']) : '';
        $password=is_string($_POST['password'] ?? null) ? $_POST['password'] : '';
        if(!preg_match('/^[A-Za-z0-9_.-]{4,64}$/',$name) || $display==='' || mb_strlen($display)>100 || mb_strlen($password,'UTF-8')<6 || strlen($password)>72 || str_contains($password,"\0") || $password!==($_POST['confirm'] ?? null)) {
            $error='아이디·담당자 이름을 확인하고, 비밀번호를 최소 6자 이상으로 입력해주세요. 비밀번호 확인 값도 같아야 합니다.';
        } else {
            try {
                // A submitted role is deliberately ignored; this form only issues staff accounts.
                $q=$db->prepare("INSERT INTO admin_users (username,display_name,password_hash,role,active,created_at,notification_phone,notify_new_reservations) VALUES (?,?,?,'admin',1,UTC_TIMESTAMP(),?,?)");
                $q->execute([$name,$display,password_hash($password,PASSWORD_DEFAULT),$phone,(int)$notify]);
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
            $q=$db->prepare("UPDATE admin_users SET active=0,notify_new_reservations=0 WHERE id=? AND role='admin' AND active=1"); $q->execute([$target]);
            if($q->rowCount()===1) { $_SESSION['account_message']='계정을 삭제했습니다. 해당 계정은 더 이상 로그인할 수 없으며 처리 이력은 유지됩니다.'; go('accounts.php'); }
            $error='삭제할 수 없는 계정입니다. 슈퍼관리자는 삭제할 수 없습니다.';
        }
    } else { http_response_code(400); $error='잘못된 요청입니다.'; }
}
$accounts=$db->query('SELECT id,username,display_name,role,active,created_at,notification_phone,notify_new_reservations FROM admin_users ORDER BY active DESC,id')->fetchAll();
$message=$_SESSION['account_message'] ?? ''; unset($_SESSION['account_message']);
$createdUsername=$_SESSION['account_created'] ?? null; unset($_SESSION['account_created']);
function displayNotificationPhone($value) { return preg_replace('/^(010)([0-9]{4})([0-9]{4})$/D','$1-$2-$3',$value); }
$createError=$error!=='' && ($_POST['action'] ?? '')==='create';
pageStart('관리자 계정 관리',$user); ?>
<?php if(is_string($createdUsername)): ?>
<dialog class="account-success" aria-labelledby="account-success-title" aria-describedby="account-success-description">
<p class="eyebrow">ACCOUNT CREATED</p><h2 id="account-success-title">담당자 계정을 추가했습니다.</h2>
<p id="account-success-description">정상적으로 등록된 로그인 아이디를 확인해주세요.</p>
<p class="created-username"><span>로그인 아이디</span><strong><?=e($createdUsername)?></strong></p>
<form method="dialog"><button class="primary wide" autofocus>확인</button></form>
</dialog>
<?php endif; ?>
<a class="quiet back" href="index.php">← 예약 목록으로</a>
<div class="heading"><div><p class="eyebrow">STAFF ACCOUNTS</p><h1>관리자 계정 관리</h1><p class="muted">슈퍼관리자가 담당자별 로그인 계정을 발급하고 관리합니다.</p></div><span class="badge confirmed">슈퍼관리자 전용</span></div>
<?php if($message): ?><p class="notice" role="status"><?=e($message)?></p><?php endif; ?><?php if($error && !$createError): ?><p class="notice error" role="alert"><?=e($error)?></p><?php endif; ?>
<p class="notice"><?=e($smsMode==='live'?'문자 발송 설정이 켜져 있습니다. 예약 접수 후 예약된 발송 작업에서 처리합니다.':($smsMode==='simulate'?'모의 발송 모드입니다. 실제 문자는 전송되지 않습니다.':'문자 발송 연결 준비 중입니다. 번호와 수신 여부만 저장되며 실제 문자는 발송되지 않습니다.'))?> <a href="sms.php">문자 알림 기록 보기</a></p><div class="accounts-grid"><section class="card"><div class="accounts-list-heading"><h2>담당자 계정 목록</h2><button type="button" class="primary account-create-open">예약담당자 추가</button></div><p class="muted">일반 관리자는 예약 조회·상태 변경·메모 작성을 할 수 있습니다. 계정 관리는 슈퍼관리자만 가능합니다.</p><div class="table-wrap"><table class="accounts-table"><thead><tr><th>담당자 / 아이디</th><th>권한</th><th>상태</th><th>예약 알림 설정</th><th>관리</th></tr></thead><tbody>
<?php foreach($accounts as $account): ?><tr><td><b><?=e($account['display_name'])?></b><small><?=e($account['username'])?></small></td><td><?=$account['role']==='superadmin'?'슈퍼관리자':'일반 관리자'?></td><td><span class="badge <?=$account['active']?'confirmed':'cancelled'?>"><?=$account['active']?'사용 중':'삭제됨'?></span></td><td>
<?php if($account['active']): ?>
<?php if($account['notify_new_reservations']): ?>
<div class="notification-saved"><span class="badge confirmed">수신 설정 저장됨</span><strong><?=e(displayNotificationPhone($account['notification_phone']))?></strong><small><?=e($smsMode==='live'?'새 예약 문자 수신 대상':'문자 발송 연결 대기 중')?></small>
<form method="post"><?php csrf(); ?><input type="hidden" name="action" value="disconnect_notifications"><input type="hidden" name="id" value="<?=e($account['id'])?>"><button class="quiet">알림 설정 연결 해제</button></form></div>
<?php else: ?>
<button type="button" class="quiet notification-open" data-dialog="notification-<?=e($account['id'])?>">핸드폰으로 알림 설정하기</button>
<dialog id="notification-<?=e($account['id'])?>" class="notification-dialog" aria-labelledby="notification-title-<?=e($account['id'])?>">
<h2 id="notification-title-<?=e($account['id'])?>">핸드폰으로 알림 설정하기</h2><p><?=e($account['display_name'])?> 담당자의 새 예약 알림을 받을 번호를 입력해주세요.</p>
<form method="post" class="notification-settings"><?php csrf(); ?><input type="hidden" name="action" value="notifications"><input type="hidden" name="id" value="<?=e($account['id'])?>"><input type="hidden" name="notify_new_reservations" value="1">
<label>알림 받을 휴대폰 번호<input type="tel" name="notification_phone" inputmode="numeric" maxlength="13" placeholder="010-1234-5678" pattern="010-?[0-9]{4}-?[0-9]{4}" required autocomplete="off"><small>문자를 받을 010 휴대폰 번호</small></label>
<p class="muted"><?=e($smsMode==='live'?'저장하면 새 예약 접수 시 이 번호로 문자 알림을 받습니다.':'현재는 수신 설정만 저장합니다. 실제 문자는 발송업체 연결 후 시작됩니다.')?></p>
<div class="notification-actions"><button type="button" class="quiet notification-cancel">취소</button><button class="primary notification-save" disabled>저장</button></div></form></dialog>
<?php endif; ?><?php else: ?><span class="muted">알림 꺼짐</span><?php endif; ?></td><td>
<?php if($account['role']==='admin' && $account['active'] && (int)$account['id']!==(int)$user['id']): ?><details class="account-delete"><summary>계정 삭제</summary><form method="post"><?php csrf(); ?><input type="hidden" name="action" value="delete"><input type="hidden" name="id" value="<?=e($account['id'])?>"><p>이 담당자의 로그인을 차단합니다. 기존 예약 처리 이력은 남습니다.</p><label class="delete-confirm"><input type="checkbox" name="confirmed" value="yes" required> 계정 삭제를 확인했습니다.</label><button class="danger">삭제 확정</button></form></details><?php else: ?><span class="muted"><?=$account['active']?'삭제 불가':'—'?></span><?php endif; ?></td></tr><?php endforeach; ?>
</tbody></table></div></section>
</div><dialog class="account-create-dialog" aria-labelledby="account-create-title" data-reopen="<?=$createError?'true':'false'?>"><h2 id="account-create-title">예약담당자 추가</h2>
<?php if($createError): ?><p class="notice error" role="alert" tabindex="-1"><?=e($error)?></p><?php endif; ?><form method="post" autocomplete="off"><?php csrf(); ?><input type="hidden" name="action" value="create"><label>담당자 이름<input name="display_name" placeholder="예: 흥K병원 김은지 간호사" maxlength="100" value="<?=e($display)?>" required></label><label>로그인 아이디<input name="username" minlength="4" maxlength="64" pattern="[A-Za-z0-9_.\-]{4,64}" value="<?=e($name)?>" required><small>영문·숫자·밑줄·마침표·하이픈, 4~64자</small></label><label>비밀번호<input type="password" name="password" autocomplete="new-password" minlength="6" maxlength="72" required><small>최소 6자 이상, 영문·숫자·특수문자 조합 조건 없음</small></label><label>비밀번호 확인<input type="password" name="confirm" autocomplete="new-password" minlength="6" maxlength="72" required></label><p class="muted">알림 번호는 계정 추가 후 목록의 ‘핸드폰으로 알림 설정하기’에서 등록할 수 있습니다.</p><p class="muted">추가되는 계정의 권한은 일반 관리자입니다.</p><div class="notification-actions"><button type="button" class="quiet account-create-cancel">취소</button><button class="primary">담당자 계정 추가</button></div></form></dialog>
<script nonce="<?=e($adminScriptNonce)?>" src="./accounts.js?v=20261009-create-dialog" defer></script>
<?php pageEnd(); ?>
