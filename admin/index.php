<?php
require dirname(__DIR__).'/php/admin.php';
$user=requireAdmin(); $db=database(); $labels=statuses();
$status=is_string($_GET['status'] ?? null) ? $_GET['status'] : '';
if(!isset($labels[$status])) $status='';
$search=is_string($_GET['q'] ?? null) ? mb_substr(trim($_GET['q']),0,100) : '';
$page=max(1,(int)($_GET['page'] ?? 1)); $where=[]; $params=[];
if($status!=='') { $where[]='status=?'; $params[]=$status; }
if($search!=='') { $where[]="(given_name LIKE ? OR family_name LIKE ? OR email LIKE ? OR phone LIKE ?)"; for($i=0;$i<4;$i++) $params[]='%'.$search.'%'; }
$sql=$where ? ' WHERE '.implode(' AND ',$where) : '';
$q=$db->prepare('SELECT COUNT(*) FROM reservations'.$sql); $q->execute($params); $total=(int)$q->fetchColumn();
$pages=max(1,(int)ceil($total/20)); $page=min($page,$pages); $offset=($page-1)*20;
$q=$db->prepare('SELECT id,given_name,family_name,screen_language,pain_area,appointment_date,status,created_at FROM reservations'.$sql.' ORDER BY id DESC LIMIT 20 OFFSET '.$offset); $q->execute($params); $rows=$q->fetchAll();
$counts=array_fill_keys(array_keys($labels),0); foreach($db->query('SELECT status,COUNT(*) AS total FROM reservations GROUP BY status') as $r) $counts[$r['status']]=(int)$r['total'];
$languages=['ko'=>'한국어','en'=>'영어','zh'=>'중국어','ja'=>'일본어','ru'=>'러시아어','mn'=>'몽골어','hi'=>'힌디어','ar'=>'아랍어','vi'=>'베트남어'];
$pain=['knee'=>'무릎','shoulder'=>'어깨','hand'=>'손·팔꿈치','foot'=>'발·발목','spine'=>'허리'];
pageStart('예약 목록',$user); ?>
<div class="heading"><div><p class="eyebrow">RESERVATIONS</p><h1>예약 접수 현황</h1><p class="muted">환자의 신청 내용을 확인하고 진행 상태를 관리하세요.</p></div><a class="quiet" href="index.php">새로고침</a></div>
<nav class="stats" aria-label="상태별 예약"><a class="stat" <?= $status === '' ? 'aria-current="page"' : '' ?> href="index.php"><span>전체 예약</span><strong><?=array_sum($counts)?></strong></a><?php foreach($labels as $key=>$label): ?><a class="stat" <?= $status === $key ? 'aria-current="page"' : '' ?> href="?status=<?=e($key)?>"><span><?=e($label)?></span><strong><?=$counts[$key]?></strong></a><?php endforeach; ?></nav>
<section class="card"><form method="get" class="filters"><label>처리 상태<select name="status"><option value="">전체 상태</option><?php foreach($labels as $key=>$label): ?><option value="<?=e($key)?>" <?=$status===$key?'selected':''?>><?=e($label)?></option><?php endforeach; ?></select></label><label class="search">예약 검색<input name="q" value="<?=e($search)?>" maxlength="100" placeholder="이름, 이메일 또는 연락처"></label><button class="primary">검색</button></form>
<div class="list-top"><h2>예약 목록</h2><span class="muted">총 <?=$total?>건 · 최신 접수 순</span></div>
<?php if(!$rows): ?><div class="empty"><h3>표시할 예약이 없습니다.</h3><p>접수된 예약이 없거나 검색 조건에 맞는 예약이 없습니다.</p></div><?php else: ?>
<div class="table-wrap"><table><thead><tr><th>접수 번호 / 일시</th><th>환자 이름</th><th>신청 언어</th><th>통증 부위</th><th>희망 진료일</th><th>상태</th><th>상세</th></tr></thead><tbody><?php foreach($rows as $r): ?><tr><td><b>#<?=e($r['id'])?></b><small><?=e(koreanTime($r['created_at']))?></small></td><td><bdi><?=e($r['family_name'].' '.$r['given_name'])?></bdi></td><td><?=e($languages[$r['screen_language']] ?? $r['screen_language'])?></td><td><?=e($pain[$r['pain_area']] ?? $r['pain_area'])?></td><td><?=e($r['appointment_date'] ?: '미입력')?></td><td><span class="badge <?=e($r['status'])?>"><?=e($labels[$r['status']] ?? $r['status'])?></span></td><td><a class="detail-link" href="reservation.php?id=<?=e($r['id'])?>" aria-label="예약 <?=e($r['id'])?> 상세 보기">보기 →</a></td></tr><?php endforeach; ?></tbody></table></div><?php endif; ?>
<nav class="pagination" aria-label="목록 페이지"><?php if($page>1): ?><a href="?<?=e(http_build_query(['status'=>$status,'q'=>$search,'page'=>$page-1]))?>">← 이전</a><?php endif; ?><span><?=$page?> / <?=$pages?></span><?php if($page<$pages): ?><a href="?<?=e(http_build_query(['status'=>$status,'q'=>$search,'page'=>$page+1]))?>">다음 →</a><?php endif; ?></nav></section>
<?php pageEnd(); ?>
