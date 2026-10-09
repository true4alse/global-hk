<?php
declare(strict_types=1);
require_once __DIR__ . '/database.php';
ini_set('display_errors', '0');
header('Cache-Control: no-store, private');
header('X-Robots-Tag: noindex, nofollow, noarchive');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');
$adminScriptNonce=base64_encode(random_bytes(18));
header("Content-Security-Policy: default-src 'self'; script-src 'nonce-$adminScriptNonce'; style-src 'self'; img-src 'self'; font-src 'self'; frame-ancestors 'none'; form-action 'self'; base-uri 'none'");
function localAdmin(): bool { return in_array($_SERVER['REMOTE_ADDR'] ?? '', ['127.0.0.1','::1'], true); }
if (!localAdmin() && (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === 'off')) {
    http_response_code(403); exit('HTTPS 연결이 필요합니다.');
}
session_name('hk_admin');
session_set_cookie_params(['httponly'=>true,'secure'=>!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off','samesite'=>'Strict','path'=>rtrim(dirname($_SERVER['SCRIPT_NAME']), '/') . '/']);
session_start(['use_strict_mode'=>true]);
$_SESSION['csrf'] ??= bin2hex(random_bytes(32));
set_exception_handler(function(Throwable $error): void {
    http_response_code(500); echo '처리하지 못했습니다. 잠시 후 다시 시도해주세요.';
});
function e($value): string { return htmlspecialchars((string)$value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); }
function go(string $path): void { header('Location: '.$path, true, 303); exit; }
function csrf(): void { echo '<input type="hidden" name="csrf" value="'.e($_SESSION['csrf']).'">'; }
function checkCsrf(): void {
    if (!is_string($_POST['csrf'] ?? null) || !hash_equals($_SESSION['csrf'], $_POST['csrf'])) {
        http_response_code(403); exit('화면을 새로고침한 뒤 다시 시도해주세요.');
    }
}
function adminUser(): ?array {
    if (!isset($_SESSION['admin_id'])) return null;
    $q=database()->prepare('SELECT id,username,display_name,role FROM admin_users WHERE id=? AND active=1');
    $q->execute([$_SESSION['admin_id']]); $user=$q->fetch();
    if (!$user) { unset($_SESSION['admin_id']); return null; }
    return $user;
}
function requireAdmin(): array { $user=adminUser(); if (!$user) go('login.php'); return $user; }
function requireSuperAdmin(): array {
    $user=requireAdmin();
    if ($user['role']!=='superadmin') { http_response_code(403); exit('슈퍼관리자만 접근할 수 있습니다.'); }
    return $user;
}
function statuses(): array { return ['received'=>'접수','reviewing'=>'확인 중','confirmed'=>'예약 확정','cancelled'=>'취소']; }
function koreanTime(?string $value): string {
    if (!$value) return '—';
    return (new DateTimeImmutable($value,new DateTimeZone('UTC')))->setTimezone(new DateTimeZone('Asia/Seoul'))->format('Y.m.d H:i');
}
function pageStart(string $title, ?array $user=null): void { ?>
<!doctype html><html lang="ko" data-i18n-static="관리자 전용 한국어 화면"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title><?=e($title)?> | 흥K병원 예약 관리</title><link rel="stylesheet" href="./admin.css?v=20261009-popup"></head><body>
<header class="top"><a class="brand" href="index.php">HEUNG-K <span>예약 관리</span></a><?php if($user): ?><div class="account"><?php if($user['role']==='superadmin'): ?><a class="quiet" href="accounts.php">관리자 계정 관리</a><?php endif; ?><span><?=e($user['display_name'])?> 담당자</span><form action="logout.php" method="post"><?php csrf(); ?><button class="quiet">로그아웃</button></form></div><?php endif; ?></header><main>
<?php }
function pageEnd(): void { echo '</main><footer>흥K병원 · 관계자 전용</footer></body></html>'; }
