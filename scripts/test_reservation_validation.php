<?php
require dirname(__DIR__).'/php/reservation-validation.php';
$today=(new DateTimeImmutable('now',new DateTimeZone('Asia/Seoul')))->format('Y-m-d');
$base=['requestId'=>'00000000-0000-4000-8000-000000000001','screenLanguage'=>'ko','painArea'=>'knee','givenName'=>'TEST','familyName'=>'TEST','email'=>' test@example.com ','phone'=>'01000000000','consent'=>'on','birthday'=>'2000-01-01','appointmentDate'=>$today];
if(validateReservation($base)['email']!=='test@example.com') throw new RuntimeException('Email normalization');
foreach (['birthday'=>date('Y-m-d',strtotime($today.' +1 day')),'appointmentDate'=>date('Y-m-d',strtotime($today.' -1 day'))] as $key=>$value) {
    try { validateReservation(array_replace($base,[$key=>$value])); throw new RuntimeException('Expected rejection: '.$key); }
    catch(InvalidArgumentException $e) { if($e->getMessage()!==$key) throw $e; }
}
try { validateReservation(array_replace($base,['birthday'=>'2026-02-30'])); throw new RuntimeException('Invalid date accepted'); }
catch(InvalidArgumentException $e) { if($e->getMessage()!=='birthday') throw $e; }
validateReservation(array_replace($base,['birthday'=>'','appointmentDate'=>'']));
echo "PASS: valid/today/optional dates, past appointment, future birthday, invalid calendar date, email whitespace. No DB or SMS.\n";
