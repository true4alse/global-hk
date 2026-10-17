<?php
// Local synthetic fixtures only; no network, no settings changes, always rollback.
ini_set('zend.exception_ignore_args','1');
require dirname(__DIR__).'/php/database.php';
require dirname(__DIR__).'/php/sms.php';
function check($ok) { if(!$ok) throw new RuntimeException('SMS test failed'); }
$config=['mode'=>'simulate','api_key'=>'','api_secret'=>'','from'=>'','admin_url'=>''];
check(smsSend($config,'01000000000')[0]==='simulated');
check(smsResponse(200,['messageList'=>[['statusCode'=>'2000','messageId'=>'fixture']]])[0]==='accepted');
check(smsResponse(429,[])[0]==='retry');
check(smsResponse(500,[])[0]==='unknown');
check(smsResponse(200,null,28)[0]==='unknown');
check(smsResponse(200,['failedMessageList'=>[['statusCode'=>'3040']]])[0]==='failed');
check(smsResponse(200,[])[0]==='unknown');
$db=database(); $db->beginTransaction();
try {
    // Use an isolated temporary table so the worker never touches real jobs or staff.
    $schema=$db->query('SHOW CREATE TABLE sms_jobs')->fetch(PDO::FETCH_NUM)[1];
    $schema=preg_replace('/,\n\s*CONSTRAINT[^\n]+/','',$schema);
    $db->exec(str_replace('CREATE TABLE','CREATE TEMPORARY TABLE',$schema));
    $schema=$db->query('SHOW CREATE TABLE admin_users')->fetch(PDO::FETCH_NUM)[1];
    $db->exec(str_replace('CREATE TABLE','CREATE TEMPORARY TABLE',$schema));
    $q=$db->prepare("INSERT INTO admin_users(username,display_name,password_hash,active,notification_phone,notify_new_reservations,created_at) VALUES (?,'TEST',?,1,'01000000000',1,UTC_TIMESTAMP())");
    $q->execute(['test_sms_a',password_hash(bin2hex(random_bytes(20)),PASSWORD_DEFAULT)]);
    $q->execute(['test_sms_b',password_hash(bin2hex(random_bytes(20)),PASSWORD_DEFAULT)]);
    smsQueue($db,1,$config); smsQueue($db,1,$config);
    check((int)$db->query('SELECT COUNT(*) FROM sms_jobs')->fetchColumn()===1);
    smsRun($db,$config); check($db->query('SELECT state FROM sms_jobs')->fetchColumn()==='simulated');
    check(smsRun($db,$config)===0);
    smsQueue($db,2,$config); $db->exec('UPDATE admin_users SET notify_new_reservations=0'); smsRun($db,$config);
    check($db->query('SELECT state FROM sms_jobs WHERE reservation_id=2')->fetchColumn()==='cancelled');
    $db->exec('UPDATE admin_users SET notify_new_reservations=1');
    smsQueue($db,3,$config);
    for($i=0;$i<3;$i++) { $db->exec('UPDATE sms_jobs SET next_attempt=UTC_TIMESTAMP()'); smsRun($db,$config,fn()=>['retry','HTTP_429',null]); }
    check($db->query('SELECT state FROM sms_jobs WHERE reservation_id=3')->fetchColumn()==='failed');
    smsQueue($db,4,$config); smsRun($db,$config,fn()=>['unknown','CHECK_SOLAPI',null]); check(smsRun($db,$config)===0);
    smsQueue($db,5,$config); $db->exec("UPDATE sms_jobs SET state='sending' WHERE reservation_id=5"); smsRun($db,$config);
    check($db->query('SELECT state FROM sms_jobs WHERE reservation_id=5')->fetchColumn()==='unknown');
    $config['mode']='disabled'; smsQueue($db,6,$config); check((int)$db->query('SELECT COUNT(*) FROM sms_jobs WHERE reservation_id=6')->fetchColumn()===0);
    echo "PASS: simulation, deduplication, opt-out, bounded retries, ambiguous responses, interrupted jobs, disabled mode. No network used.\n";
} finally { $db->rollBack(); }
