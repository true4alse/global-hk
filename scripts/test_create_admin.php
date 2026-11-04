<?php
declare(strict_types=1);
require __DIR__ . '/create_admin.php';

function check(bool $value, string $message): void {
    if (!$value) { throw new RuntimeException($message); }
}
function rejected(callable $action): void {
    try { $action(); } catch (InvalidArgumentException | RuntimeException $error) { return; }
    throw new Exception('Expected setup to refuse the operation.');
}

// Isolated in-memory database. No project credentials, real accounts, reservations or SMS.
$db = new PDO('sqlite::memory:', null, null, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
$available = true;
$released = 0;
$db->sqliteCreateFunction('GET_LOCK', function () use (&$available) { return $available ? 1 : 0; }, 2);
$db->sqliteCreateFunction('RELEASE_LOCK', function () use (&$released) { $released++; return 1; }, 1);
$db->sqliteCreateFunction('UTC_TIMESTAMP', fn() => gmdate('Y-m-d H:i:s'), 0);
$db->exec('CREATE TABLE admin_users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, display_name TEXT, password_hash TEXT, active INTEGER, created_at TEXT, role TEXT, notification_phone TEXT, notify_new_reservations INTEGER)');
$password = 'Test-only password  ';
rejected(fn() => createFirstAdmin($db, 'bad name', '테스트 담당자', $password, $password));
rejected(fn() => createFirstAdmin($db, 'staff', '', $password, $password));
rejected(fn() => createFirstAdmin($db, 'staff', '담당자', 'short', 'short'));
rejected(fn() => createFirstAdmin($db, 'staff', '담당자', str_repeat('가', 25), str_repeat('가', 25)));
rejected(fn() => createFirstAdmin($db, 'staff', '담당자', $password, 'different'));
check((int)$db->query('SELECT COUNT(*) FROM admin_users')->fetchColumn() === 0, 'Invalid data inserted.');
$available = false;
rejected(fn() => createFirstAdmin($db, 'staff', '담당자', $password, $password));
check((int)$db->query('SELECT COUNT(*) FROM admin_users')->fetchColumn() === 0, 'Inserted without lock.');
$available = true;
createFirstAdmin($db, 'staff', '테스트 담당자', $password, $password);
$row = $db->query('SELECT * FROM admin_users')->fetch(PDO::FETCH_ASSOC);
check($row['role'] === 'superadmin' && (int)$row['active'] === 1, 'Incorrect privileges.');
check(password_verify($password, $row['password_hash']), 'Password hash does not round-trip.');
check(!password_verify(trim($password), $row['password_hash']), 'Password whitespace lost.');
check($row['notification_phone'] === '' && (int)$row['notify_new_reservations'] === 0, 'SMS enabled.');
check($released === 1, 'Lock not released on success.');
rejected(fn() => createFirstAdmin($db, 'other', '다른 담당자', $password, $password));
$db->exec('UPDATE admin_users SET active=0');
rejected(fn() => createFirstAdmin($db, 'other', '다른 담당자', $password, $password));
check((int)$db->query('SELECT COUNT(*) FROM admin_users')->fetchColumn() === 1, 'Existing account changed.');
check($released === 3, 'Lock not released after refusal.');
$db->exec('DELETE FROM admin_users');
$db->exec("CREATE TRIGGER reject_insert BEFORE INSERT ON admin_users BEGIN SELECT RAISE(ABORT, 'test failure'); END");
try { createFirstAdmin($db, 'staff', '담당자', $password, $password); } catch (PDOException $error) {}
check($released === 4, 'Lock not released after failed insert.');
echo "First-admin validation, hash, SMS defaults, lock and existing-account checks passed.\n";
