<?php
declare(strict_types=1);

// Database-backed rolling windows cannot be reset by clearing browser cookies.
function reservationGuard(PDO $db, array $data, string $ip): bool {
    $canonical=$data;
    unset($canonical['requestId'], $canonical['screenLanguage']);
    foreach ($canonical as &$value) $value=trim($value);
    unset($value);
    $canonical['phone']=preg_replace('/[^0-9]/','',$data['phone']);
    $canonical['email']=strtolower(trim($data['email']));
    $limits=[
        'ip:'.$ip=>5,
        'phone:'.$canonical['phone']=>3,
        'email:'.$canonical['email']=>3,
        'content:'.json_encode($canonical,JSON_UNESCAPED_UNICODE|JSON_THROW_ON_ERROR)=>1,
    ];
    if (!(int)$db->query("SELECT GET_LOCK('hk_reservation_guard',5)")->fetchColumn()) return false;
    try {
        $db->beginTransaction();
        $db->exec('DELETE FROM reservation_guard_events WHERE created_at < DATE_SUB(UTC_TIMESTAMP(), INTERVAL 10 MINUTE)');
        $q=$db->prepare('SELECT COUNT(*) FROM reservation_guard_events WHERE bucket=?');
        foreach($limits as $key=>$limit) {
            $q->execute([hash('sha256',$key)]);
            if ((int)$q->fetchColumn()>=$limit) { $db->rollBack(); return false; }
        }
        $q=$db->prepare('INSERT INTO reservation_guard_events(bucket,created_at) VALUES (?,UTC_TIMESTAMP())');
        foreach($limits as $key=>$limit) $q->execute([hash('sha256',$key)]);
        $db->commit();
        return true;
    } catch(Throwable $error) {
        if ($db->inTransaction()) $db->rollBack();
        throw $error;
    } finally { $db->query("SELECT RELEASE_LOCK('hk_reservation_guard')"); }
}
