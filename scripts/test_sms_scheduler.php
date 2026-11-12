<?php
// Isolated fixtures only: no configuration files, real database, or network.
declare(strict_types=1);
require dirname(__DIR__).'/php/sms.php';
require dirname(__DIR__).'/php/sms_scheduler.php';
function expectSms(bool $condition): void { if (!$condition) throw new RuntimeException('Test failed'); }
$token=str_repeat('a',64);
$config=['scheduler_token'=>$token];
$server=['REQUEST_METHOD'=>'POST','HTTPS'=>'on','HTTP_X_HK_CRON_TOKEN'=>$token];
expectSms(smsSchedulerAccess($server,$config)===200);
foreach (['GET','HEAD','OPTIONS'] as $method) expectSms(smsSchedulerAccess(array_replace($server,['REQUEST_METHOD'=>$method]),$config)===405);
expectSms(smsSchedulerAccess(array_replace($server,['HTTPS'=>'off']),$config)===403);
expectSms(smsSchedulerAccess(array_replace($server,['HTTPS'=>'','HTTP_X_FORWARDED_PROTO'=>'https']),$config)===403);
expectSms(smsSchedulerAccess(array_replace($server,['HTTP_X_HK_CRON_TOKEN'=>'wrong']),$config)===403);
expectSms(smsSchedulerAccess(array_diff_key($server,['HTTP_X_HK_CRON_TOKEN'=>1]),$config)===403);
expectSms(smsSchedulerAccess($server,[])===503);
expectSms(smsSchedulerAccess($server,['scheduler_token'=>'short'])===503);
expectSms(smsResponse(200,['messageList'=>[['statusCode'=>2000,'messageId'=>'fixture']]])===['accepted','2000','fixture']);
expectSms(smsResponse(200,['messageList'=>[['statusCode'=>'2000','messageId'=>'fixture']]])[0]==='accepted');
expectSms(smsResponse(403,['errorCode'=>'InvalidAPIKey'])===['failed','InvalidAPIKey',null]);
expectSms(smsResponse(402,['errorCode'=>'private text 01012345678'])[1]==='HTTP_402');
expectSms(smsResponse(200,[]) [0]==='unknown');
expectSms(smsResponse(500,[]) [0]==='unknown');
expectSms(smsResponse(200,[],28) [0]==='unknown');
expectSms(smsResponse(429,[]) [0]==='retry');

class FixtureStatement extends PDOStatement {
    private array $rows;
    public function __construct(array $rows=[]) { $this->rows=$rows; }
    public function execute(?array $params=null): bool { return true; }
    public function fetchColumn(int $column=0): mixed { return 1; }
    public function fetchAll(int $mode=PDO::FETCH_DEFAULT,mixed ...$args): array { return $this->rows; }
}
class FixtureDatabase extends PDO {
    public bool $released=false;
    public function __construct() {}
    public function query(string $query,?int $fetchMode=null,mixed ...$args): PDOStatement|false {
        if (str_contains($query,'RELEASE_LOCK')) $this->released=true;
        $job=['id'=>1,'phone'=>'01000000000','mode'=>'simulate','created_at'=>gmdate('Y-m-d H:i:s'),'attempts'=>0];
        return new FixtureStatement(str_contains($query,'SELECT *') ? [$job,array_replace($job,['id'=>2])] : []);
    }
    public function exec(string $statement): int|false { return 0; }
    public function prepare(string $query,array $options=[]): PDOStatement|false { return new FixtureStatement(); }
}
$db=new FixtureDatabase();
$calls=0;
$count=smsRun($db,['mode'=>'simulate','admin_url'=>''],function() use (&$calls) { $calls++; sleep(2); return ['simulated','NO_NETWORK',null]; },4);
expectSms($count===1 && $calls===1 && $db->released);
echo "PASS: HTTPS/header authentication, fail-closed configuration, response parsing, bounded worker, lock release. No SMS sent.\n";
