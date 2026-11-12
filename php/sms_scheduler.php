<?php
declare(strict_types=1);

// No query-string secrets; the scheduler must send this custom HTTP header.
function smsSchedulerAccess(array $server,array $config): int {
    if (($server['REQUEST_METHOD']??'')!=='POST') return 405;
    if (empty($server['HTTPS']) || strtolower((string)$server['HTTPS'])==='off') return 403;
    $expected=$config['scheduler_token']??'';
    if (!is_string($expected) || !preg_match('/^[a-f0-9]{64}$/D',$expected)) return 503;
    $provided=$server['HTTP_X_HK_CRON_TOKEN']??'';
    if (!is_string($provided) || !hash_equals($expected,$provided)) return 403;
    return 200;
}
