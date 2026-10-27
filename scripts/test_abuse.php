<?php
// Only temporary tables and a fake sender: no real reservations or SMS are created.
require dirname(__DIR__).'/php/database.php';
require dirname(__DIR__).'/php/reservation-guard.php';
require dirname(__DIR__).'/php/sms.php';
function expect($ok,string $label): void { if(!$ok) throw new RuntimeException($label); }
$db=database();
foreach(['reservation_guard_events','sms_attempts','sms_jobs','admin_users'] as $table) {
    $schema=$db->query('SHOW CREATE TABLE '.$table)->fetch(PDO::FETCH_NUM)[1];
    $schema=preg_replace('/,\n\s*CONSTRAINT[^\n]+/','',$schema);
    $db->exec(str_replace('CREATE TABLE','CREATE TEMPORARY TABLE',$schema));
}
$d=['requestId'=>'a','screenLanguage'=>'ko','phone'=>'+81 90-1234-5678','email'=>'TEST@example.com','symptoms'=>'test'];
expect(reservationGuard($db,$d,'192.0.2.1'),'first request');
$d['requestId']='b'; $d['screenLanguage']='en';
expect(!reservationGuard($db,$d,'192.0.2.2'),'duplicate across sessions/IPs');
for($i=0;$i<2;$i++) { $d['symptoms']='test'.$i; expect(reservationGuard($db,$d,'192.0.2.2'),'contact allowance'); }
$d['symptoms']='fourth'; expect(!reservationGuard($db,$d,'192.0.2.3'),'contact limit');
$db->exec('DELETE FROM reservation_guard_events');
for($i=0;$i<6;$i++) {
    $d['phone']='0100000000'.$i; $d['email']=$i.'@example.com';
    expect(reservationGuard($db,$d,'192.0.2.4')===($i<5),'IP limit');
}
$db->exec('UPDATE reservation_guard_events SET created_at=DATE_SUB(UTC_TIMESTAMP(), INTERVAL 11 MINUTE)');
expect(reservationGuard($db,$d,'192.0.2.4'),'rolling expiry');
$db->exec("INSERT INTO admin_users(username,display_name,password_hash,active,notification_phone,notify_new_reservations,created_at) VALUES ('fixture','fixture','unused',1,'01000000000',1,UTC_TIMESTAMP())");
$config=['mode'=>'live','api_key'=>'fixture','api_secret'=>'fixture','from'=>'01000000000','admin_url'=>'','limit_10_minutes'=>2,'limit_24_hours'=>3];
$calls=0; $sender=function() use (&$calls) { $calls++; return ['unknown','TEST',null]; };
for($i=1;$i<=3;$i++) smsQueue($db,$i,$config);
smsRun($db,$config,$sender);
expect($calls===2,'10 minute cap counts ambiguous sends');
expect((int)$db->query("SELECT COUNT(*) FROM sms_jobs WHERE state='held'")->fetchColumn()===1,'held state');
$db->exec('UPDATE sms_attempts SET created_at=DATE_SUB(UTC_TIMESTAMP(), INTERVAL 11 MINUTE)');
smsQueue($db,4,$config); smsQueue($db,5,$config); smsRun($db,$config,$sender);
expect($calls===3,'24 hour cap');
$db->exec('UPDATE sms_attempts SET created_at=DATE_SUB(UTC_TIMESTAMP(), INTERVAL 25 HOUR)');
smsRun($db,$config,$sender); expect($calls===3,'held jobs never auto-release');
smsQueue($db,6,$config); smsRun($db,$config,$sender); expect($calls===4,'new jobs after expiry');
echo "PASS: cross-session duplicate/contact/IP limits, expiry, SMS rolling caps, ambiguous attempts, permanent holds. No network used.\n";
