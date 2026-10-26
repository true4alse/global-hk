<?php
declare(strict_types=1);
function smsConfig(): array {
    $path=dirname(__DIR__).'/config/sms.local.php';
    $config=is_file($path) ? require $path : [];
    return array_replace(['mode'=>'disabled','api_key'=>'','api_secret'=>'','from'=>'','admin_url'=>''], $config);
}
function smsQueue(PDO $db,int $reservationId,array $config): void {
    if (!in_array($config['mode'],['simulate','live'],true)) return;
    $q=$db->prepare("INSERT IGNORE INTO sms_jobs (reservation_id,phone,mode,next_attempt,created_at,updated_at) SELECT ?,notification_phone,?,UTC_TIMESTAMP(),UTC_TIMESTAMP(),UTC_TIMESTAMP() FROM admin_users WHERE active=1 AND notify_new_reservations=1 AND notification_phone REGEXP '^010[0-9]{8}$'");
    $q->execute([$reservationId,$config['mode']]);
}
function smsMessage(array $config): string {
    $text='[흥K병원] 새 예약이 접수되었습니다. 관리자 페이지에서 확인해주세요.';
    if ($config['admin_url']!=='') {
        $parts=parse_url($config['admin_url']);
        if (!$parts || ($parts['scheme'] ?? '')!=='https' || empty($parts['host']) || isset($parts['user']) || isset($parts['pass'])) throw new RuntimeException('Invalid admin URL');
        $text.="\n".$config['admin_url'];
    }
    if (strlen(mb_convert_encoding($text,'EUC-KR','UTF-8'))>2000) throw new RuntimeException('Message too long');
    return $text;
}
function smsResponse(int $http,?array $body,int $networkError=0): array {
    // Ambiguous responses must never be retried automatically: the provider may have accepted them.
    if ($networkError!==0 || $http>=500 || $body===null) return ['unknown','CHECK_SOLAPI',null];
    $message=$body['messageList'][0] ?? null;
    if ($http>=200 && $http<300 && is_array($message) && ($message['statusCode'] ?? '')==='2000' && !empty($message['messageId'])) return ['accepted','2000',$message['messageId']];
    if ($http===429) return ['retry','HTTP_429',null];
    $code=$body['failedMessageList'][0]['statusCode'] ?? ('HTTP_'.$http);
    if ($http>=400 || !empty($body['failedMessageList'])) return ['failed',substr((string)$code,0,80),null];
    return ['unknown','CHECK_SOLAPI',null];
}
function smsSend(array $config,string $phone): array {
    $text=smsMessage($config);
    if ($config['mode']==='simulate') return ['simulated','NO_NETWORK',null];
    if ($config['mode']!=='live' || !$config['api_key'] || !$config['api_secret'] || !preg_match('/^[0-9]{8,11}$/D',$config['from'])) throw new RuntimeException('SMS configuration incomplete');
    if (!preg_match('/^010[0-9]{8}$/D',$phone)) throw new RuntimeException('Invalid recipient');
    $date=gmdate('Y-m-d\TH:i:s\Z'); $salt=bin2hex(random_bytes(16));
    $signature=hash_hmac('sha256',$date.$salt,$config['api_secret']);
    $payload=['messages'=>[['to'=>$phone,'from'=>$config['from'],'text'=>$text,'type'=>strlen(mb_convert_encoding($text,'EUC-KR','UTF-8'))<=90?'SMS':'LMS']]];
    $ch=curl_init('https://api.solapi.com/messages/v4/send-many/detail');
    curl_setopt_array($ch,[CURLOPT_POST=>true,CURLOPT_RETURNTRANSFER=>true,CURLOPT_CONNECTTIMEOUT=>5,CURLOPT_TIMEOUT=>20,CURLOPT_HTTPHEADER=>['Content-Type: application/json','Authorization: HMAC-SHA256 apiKey='.$config['api_key'].', date='.$date.', salt='.$salt.', signature='.$signature],CURLOPT_POSTFIELDS=>json_encode($payload,JSON_UNESCAPED_UNICODE|JSON_THROW_ON_ERROR)]);
    $raw=curl_exec($ch); $http=curl_getinfo($ch,CURLINFO_HTTP_CODE); $errno=curl_errno($ch); curl_close($ch);
    return smsResponse($http,is_string($raw)?json_decode($raw,true):null,$errno);
}
function smsRun(PDO $db,array $config,?callable $send=null): int {
    if (!in_array($config['mode'],['simulate','live'],true)) return 0;
    smsMessage($config);
    if ($config['mode']==='live' && (!$config['api_key'] || !$config['api_secret'] || !preg_match('/^[0-9]{8,11}$/D',$config['from']) || !extension_loaded('curl'))) throw new RuntimeException('SMS configuration incomplete');
    if (!(int)$db->query("SELECT GET_LOCK('hk_sms_worker',0)")->fetchColumn()) return 0;
    try {
        // A previous worker stopped after claiming a job. Never blindly resend it.
        $db->exec("UPDATE sms_jobs SET state='unknown',result_code='WORKER_INTERRUPTED',updated_at=UTC_TIMESTAMP() WHERE state='sending'");
        $jobs=$db->query("SELECT * FROM sms_jobs WHERE state IN ('pending','retry') AND next_attempt<=UTC_TIMESTAMP() ORDER BY id LIMIT 50")->fetchAll();
        $count=0;
        foreach($jobs as $job) {
            $q=$db->prepare('SELECT COUNT(*) FROM admin_users WHERE active=1 AND notify_new_reservations=1 AND notification_phone=?'); $q->execute([$job['phone']]);
            if ($job['mode']!==$config['mode'] || !$q->fetchColumn() || strtotime($job['created_at'].' UTC')<time()-86400) {
                $state='cancelled'; $code='DISABLED_CHANGED_OR_EXPIRED'; $provider=null;
            } else {
                $q=$db->prepare("UPDATE sms_jobs SET state='sending',attempts=attempts+1,updated_at=UTC_TIMESTAMP() WHERE id=?"); $q->execute([$job['id']]);
                try { [$state,$code,$provider]=($send ?? 'smsSend')($config,$job['phone']); }
                catch(Throwable $ex) { $state='unknown'; $code='CHECK_SOLAPI'; $provider=null; }
                if($state==='retry' && (int)$job['attempts']>=2) $state='failed';
            }
            $q=$db->prepare('UPDATE sms_jobs SET state=?,result_code=?,provider_id=?,next_attempt=DATE_ADD(UTC_TIMESTAMP(),INTERVAL 5 MINUTE),updated_at=UTC_TIMESTAMP() WHERE id=?');
            $q->execute([$state,$code,$provider,$job['id']]); $count++;
        }
        return $count;
    } finally { $db->query("SELECT RELEASE_LOCK('hk_sms_worker')"); }
}
