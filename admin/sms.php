<?php
require dirname(__DIR__).'/php/admin.php';
require dirname(__DIR__).'/php/sms.php';
$user=requireSuperAdmin();
$config=smsConfig();
$rows=database()->query('SELECT id,reservation_id,phone,mode,state,attempts,result_code,updated_at FROM sms_jobs ORDER BY id DESC LIMIT 100')->fetchAll();
$labels=['pending'=>'발송 대기','retry'=>'재시도 대기','accepted'=>'솔라피 접수 완료','simulated'=>'모의 발송 완료','failed'=>'발송 요청 실패','unknown'=>'확인 필요','sending'=>'발송 요청 중','cancelled'=>'발송 취소'];
pageStart('문자 알림 기록',$user); ?>
<a class="quiet back" href="accounts.php">← 관리자 계정 관리</a><h1>문자 알림 기록</h1>
<p class="notice">현재 설정: <?=e(['disabled'=>'발송 꺼짐','simulate'=>'모의 발송 (문자 전송 없음)','live'=>'실제 발송'][$config['mode']] ?? '발송 꺼짐')?></p>
<p>최근 100건입니다. ‘솔라피 접수 완료’는 휴대폰 도착 완료가 아닙니다. 최종 수신 결과 및 ‘확인 필요’ 건은 솔라피 발송 내역에서 확인해주세요.</p>
<div class="card table-wrap"><table><thead><tr><th>예약</th><th>수신번호</th><th>상태</th><th>시도</th><th>결과 코드</th><th>변경 시각</th></tr></thead><tbody>
<?php foreach($rows as $row): ?><tr><td><a href="reservation.php?id=<?=e($row['reservation_id'])?>">#<?=e($row['reservation_id'])?></a></td><td><?=e(substr($row['phone'],0,3).'-****-'.substr($row['phone'],-4))?></td><td><?=e($labels[$row['state']] ?? $row['state'])?></td><td><?=e($row['attempts'])?></td><td><?=e($row['result_code'])?></td><td><?=e(koreanTime($row['updated_at']))?></td></tr><?php endforeach; ?>
<?php if(!$rows): ?><tr><td colspan="6">문자 알림 기록이 없습니다.</td></tr><?php endif; ?></tbody></table></div>
<?php pageEnd(); ?>
