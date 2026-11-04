<?php
declare(strict_types=1);
if(PHP_SAPI!=='cli'){http_response_code(404);exit;}
require dirname(__DIR__).'/php/database.php';
require dirname(__DIR__).'/php/sms.php';
try { echo 'Processed: '.smsRun(database(),smsConfig()).PHP_EOL; }
catch(Throwable $e){fwrite(STDERR,"SMS worker failed. Check configuration/database; no secrets are logged.\n");exit(1);}
