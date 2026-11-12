<?php
declare(strict_types=1);
ini_set('display_errors','0');
ini_set('zend.exception_ignore_args','1');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex, nofollow');
require dirname(__DIR__).'/php/sms.php';
require dirname(__DIR__).'/php/sms_scheduler.php';
try {
    $config=smsConfig();
    $status=smsSchedulerAccess($_SERVER,$config);
    if ($status!==200) {
        http_response_code($status);
        if ($status===405) header('Allow: POST');
        echo '{"ok":false}';
        exit;
    }
    // A configuration check can be performed without opening the database or sending SMS.
    if (($_SERVER['HTTP_X_HK_CRON_CHECK']??'')==='1') {
        echo json_encode(['ok'=>true,'check'=>true,'mode'=>$config['mode']]);
        exit;
    }
    if (!in_array($config['mode'],['live','simulate'],true)) {
        http_response_code(503);
        echo '{"ok":false,"status":"disabled"}';
        exit;
    }
    require dirname(__DIR__).'/php/database.php';
    $processed=smsRun(database(),$config,null,24);
    // Processed is not a delivery receipt. Check SOLAPI for final delivery status.
    echo json_encode(['ok'=>true,'processed'=>$processed]);
} catch (Throwable $error) {
    http_response_code(503);
    echo '{"ok":false,"status":"worker_error"}';
}
