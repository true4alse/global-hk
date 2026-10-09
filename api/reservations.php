<?php
declare(strict_types=1);
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
function respond(int $status, array $body): void { http_response_code($status); echo json_encode($body); exit; }
$method = $_SERVER['REQUEST_METHOD'];
if (!in_array($method, ['GET','POST'], true)) { header('Allow: GET, POST'); respond(405, ['error'=>'method']); }
if (($_SERVER['HTTP_SEC_FETCH_SITE'] ?? '') === 'cross-site') respond(403, ['error'=>'csrf']);
session_name('hk_reservation');
session_set_cookie_params(['httponly'=>true,'secure'=>!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off','samesite'=>'Strict','path'=>rtrim(dirname(dirname($_SERVER['SCRIPT_NAME'])), '/') . '/']);
session_start(['use_strict_mode'=>true]);
$_SESSION['csrf'] ??= bin2hex(random_bytes(32));
if ($method === 'GET') respond(200, ['csrf'=>$_SESSION['csrf']]);
if (!hash_equals($_SESSION['csrf'], $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '')) respond(403, ['error'=>'csrf']);
if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 40000) respond(413, ['error'=>'validation']);
require dirname(__DIR__) . '/php/database.php';
require dirname(__DIR__) . '/php/reservation-validation.php';
try {
    $input = json_decode(file_get_contents('php://input', false, null, 0, 40001), true, 32, JSON_THROW_ON_ERROR);
    if (!is_array($input)) throw new InvalidArgumentException('body');
    $data = validateReservation($input);
    $hash = hash('sha256', json_encode($data, JSON_UNESCAPED_UNICODE));
    $db = database();
    $find = $db->prepare('SELECT payload_hash FROM reservations WHERE request_id = ?');
    $find->execute([$data['requestId']]);
    $existing = $find->fetchColumn();
    if ($existing !== false) {
        if (!hash_equals($existing, $hash)) respond(409, ['error'=>'conflict']);
        respond(200, ['ok'=>true]);
    }
    if (time() - ($_SESSION['last_reservation'] ?? 0) < 30) respond(429, ['error'=>'rate']);
    $now = gmdate('Y-m-d H:i:s');
    $query = $db->prepare('INSERT INTO reservations (request_id,payload_hash,screen_language,pain_area,given_name,family_name,birthday,gender,symptoms_original,nationality,email,phone,appointment_date,insurance,other_insurance,consent_at,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)');
    $query->execute([$data['requestId'],$hash,$data['screenLanguage'],$data['painArea'],$data['givenName'],$data['familyName'],$data['birthday'] ?: null,$data['gender'] ?: null,$data['symptoms'],$data['nationality'] ?: null,$data['email'],$data['phone'],$data['appointmentDate'] ?: null,$data['insurance'] ?: null,$data['otherInsurance'],$now,$now,$now]);
    $_SESSION['last_reservation'] = time();
    respond(201, ['ok'=>true]);
} catch (InvalidArgumentException | JsonException $error) {
    respond(422, ['error'=>'validation']);
} catch (Throwable $error) {
    respond(500, ['error'=>'server']);
}
