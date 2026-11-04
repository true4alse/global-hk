<?php
require dirname(__DIR__).'/php/admin.php';
$user=requireAdmin(); $db=database(); $id=filter_var($_GET['id'] ?? '',FILTER_VALIDATE_INT); $labels=statuses();
$q=$db->prepare('SELECT * FROM reservations WHERE id=?'); $q->execute([$id ?: 0]); $r=$q->fetch();
if(!$r) { http_response_code(404); pageStart('예약을 찾을 수 없음',$user); echo '<section class="card"><h1>예약을 찾을 수 없습니다.</h1><a href="index.php">목록으로</a></section>'; pageEnd(); exit; }
$error=''; $note=''; $selected=$r['status'];
if($_SERVER['REQUEST_METHOD']==='POST') {
    checkCsrf(); $selected=is_string($_POST['status'] ?? null) ? $_POST['status'] : ''; $note=is_string($_POST['note'] ?? null) ? trim($_POST['note']) : '';
    if(!isset($labels[$selected]) || mb_strlen($note)>5000 || !mb_check_encoding($note,'UTF-8')) $error='상태를 선택하고 메모는 5,000자 이내로 작성해주세요.';
    else {
        $db->beginTransaction();
        try {
            $q=$db->prepare('SELECT status FROM reservations WHERE id=? FOR UPDATE'); $q->execute([$id]); $previous=$q->fetchColumn();
            $q=$db->prepare('SELECT COALESCE(MAX(id),0) FROM reservation_history WHERE reservation_id=?'); $q->execute([$id]); $version=(string)$q->fetchColumn();
            if(!is_string($_POST['version'] ?? null) || $_POST['version']!==$version) { $db->rollBack(); $error='다른 담당자가 먼저 수정했습니다. 새로고침 후 최신 내용을 확인해주세요. 작성한 메모는 아래에 유지됩니다.'; }
            elseif($previous===$selected && $note==='') { $db->rollBack(); $error='변경할 상태를 선택하거나 메모를 입력해주세요.'; }
            else {
                $q=$db->prepare('UPDATE reservations SET status=?,updated_at=UTC_TIMESTAMP() WHERE id=?'); $q->execute([$selected,$id]);
                $q=$db->prepare('INSERT INTO reservation_history (reservation_id,admin_id,previous_status,new_status,note,created_at) VALUES (?,?,?,?,?,UTC_TIMESTAMP())'); $q->execute([$id,$user['id'],$previous,$selected,$note]);
                $db->commit(); $_SESSION['saved_reservation']=$id; go('reservation.php?id='.$id);
            }
        } catch(Throwable $ex) { if($db->inTransaction()) $db->rollBack(); throw $ex; }
    }
}
$q=$db->prepare('SELECT h.*,u.display_name FROM reservation_history h JOIN admin_users u ON u.id=h.admin_id WHERE reservation_id=? ORDER BY h.id DESC'); $q->execute([$id]); $history=$q->fetchAll(); $version=$history[0]['id'] ?? 0;
$saved=($_SESSION['saved_reservation'] ?? null)===$id; unset($_SESSION['saved_reservation']);
pageStart('예약 #'.$id,$user); ?>
<a class="back quiet" href="index.php">← 예약 목록으로</a><div class="heading"><div><p class="eyebrow">RESERVATION #<?=e($id)?></p><h1><bdi><?=e($r['family_name'].' '.$r['given_name'])?></bdi></h1><p class="muted">접수 <?=e(koreanTime($r['created_at']))?> · 한국 시간</p></div><span class="badge <?=e($r['status'])?>"><?=e($labels[$r['status']] ?? $r['status'])?></span></div>
<?php if($saved): ?><p class="notice" role="status">변경 내용을 저장했습니다.</p><?php endif; ?><?php if($error): ?><p class="notice error" role="alert"><?=e($error)?></p><?php endif; ?>
<div class="detail-grid"><section class="card"><h2>환자 정보</h2><dl class="info">
<?php
$pain=['knee'=>'무릎','shoulder'=>'어깨','hand'=>'손·팔꿈치','foot'=>'발·발목','spine'=>'허리'];
$language=['ko'=>'한국어','en'=>'영어','zh'=>'중국어','ja'=>'일본어','ru'=>'러시아어','mn'=>'몽골어','hi'=>'힌디어','ar'=>'아랍어','vi'=>'베트남어'];
$gender=['male'=>'남성','female'=>'여성','unspecified'=>'응답하지 않음'];
$insurance=['yes'=>'있음','national'=>'한국 국민건강보험','international'=>'국제 건강보험','none'=>'없음'];
$countries=['KR'=>'대한민국','US'=>'미국','GB'=>'영국','CN'=>'중국','JP'=>'일본','RU'=>'러시아','MN'=>'몽골','IN'=>'인도','SA'=>'사우디아라비아','VN'=>'베트남','OTHER'=>'기타'];
$fields=['이름'=>$r['given_name'],'성'=>$r['family_name'],'생일'=>$r['birthday'],'성별'=>$gender[$r['gender']] ?? null,'국적'=>$countries[$r['nationality']] ?? $r['nationality'],'이메일'=>$r['email'],'연락처'=>$r['phone'],'통증 부위'=>$pain[$r['pain_area']] ?? $r['pain_area'],'희망 진료일'=>$r['appointment_date'],'보험'=>$insurance[$r['insurance']] ?? null,'기타 보험'=>$r['other_insurance'],'신청 화면 언어'=>$language[$r['screen_language']] ?? $r['screen_language'],'수집·이용 동의 시각'=>koreanTime($r['consent_at'])];
foreach($fields as $label=>$value): ?><div><dt><?=e($label)?></dt><dd dir="auto"><?=e($value ?: '미입력')?></dd></div><?php endforeach; ?></dl>
<h2>증상 원문</h2><p class="muted">환자가 입력한 내용 그대로 표시합니다. 번역되지 않은 원문입니다.</p><div class="original" dir="auto"><?=e($r['symptoms_original'] ?: '입력된 증상이 없습니다.')?></div></section>
<aside><section class="card"><h2>접수 처리</h2><form method="post"><?php csrf(); ?><input type="hidden" name="version" value="<?=e($version)?>"><label>처리 상태<select name="status"><?php foreach($labels as $key=>$label): ?><option value="<?=e($key)?>" <?=$selected===$key?'selected':''?>><?=e($label)?></option><?php endforeach; ?></select></label><label>담당자 메모<textarea name="note" rows="6" maxlength="5000" placeholder="연락 내용이나 확인 사항을 기록하세요."><?=e($note)?></textarea><small>메모는 처리 이력에 추가됩니다. 환자에게 전송되지 않습니다.</small></label><button class="primary wide">예약 내용 저장</button><a class="quiet wide list-return" href="index.php">예약 목록으로</a><p class="muted">상태 변경만으로 환자에게 예약 확정 알림이 발송되지는 않습니다.</p></form></section>
<section class="card history"><h2>처리 이력</h2><?php if(!$history): ?><p class="muted">아직 처리 이력이 없습니다.</p><?php endif; ?><?php foreach($history as $item): ?><article><div><b><?=e($item['display_name'])?></b><small><?=e(koreanTime($item['created_at']))?></small></div><p><?=e($labels[$item['previous_status']] ?? $item['previous_status'])?> → <?=e($labels[$item['new_status']] ?? $item['new_status'])?></p><?php if($item['note']!==''): ?><p class="original" dir="auto"><?=e($item['note'])?></p><?php endif; ?></article><?php endforeach; ?></section></aside></div>
<?php pageEnd(); ?>
