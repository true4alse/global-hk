<?php
declare(strict_types=1);
function validateReservation(array $input): array {
    $limits = ['requestId'=>36,'screenLanguage'=>5,'painArea'=>16,'givenName'=>100,'familyName'=>100,'birthday'=>10,'gender'=>16,'symptoms'=>5000,'nationality'=>8,'email'=>254,'phone'=>50,'appointmentDate'=>10,'insurance'=>16,'otherInsurance'=>200,'consent'=>2];
    $data = [];
    foreach ($limits as $key => $limit) {
        $value = $input[$key] ?? '';
        if (!is_string($value) || !mb_check_encoding($value, 'UTF-8') || mb_strlen($value, 'UTF-8') > $limit || str_contains($value, "\0")) throw new InvalidArgumentException($key);
        $data[$key] = $value; // Preserve original text and line breaks.
    }
    foreach (['givenName','familyName','email','phone'] as $key) {
        if (trim($data[$key]) === '') throw new InvalidArgumentException($key);
    }
    $choices = ['screenLanguage'=>['ko','en','zh','ja','ru','mn','hi','ar','vi'],'painArea'=>['knee','shoulder','hand','foot','spine'],'gender'=>['','male','female','unspecified'],'nationality'=>['','KR','US','GB','CN','JP','RU','MN','IN','SA','VN','OTHER'],'insurance'=>['','yes','national','international','none'],'consent'=>['on']];
    foreach ($choices as $key => $allowed) {
        if (!in_array($data[$key], $allowed, true)) throw new InvalidArgumentException($key);
    }
    if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) throw new InvalidArgumentException('email');
    if (!preg_match('/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i', $data['requestId'])) throw new InvalidArgumentException('requestId');
    $today = (new DateTimeImmutable('now', new DateTimeZone('Asia/Seoul')))->format('Y-m-d');
    foreach (['birthday','appointmentDate'] as $key) {
        if ($data[$key] === '') continue;
        $date = DateTimeImmutable::createFromFormat('!Y-m-d', $data[$key]);
        if (!$date || $date->format('Y-m-d') !== $data[$key] || $data[$key] < '1900-01-01' || ($key === 'birthday' && $data[$key] > $today) || ($key === 'appointmentDate' && $data[$key] < $today)) throw new InvalidArgumentException($key);
    }
    return $data;
}
