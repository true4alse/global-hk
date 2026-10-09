<?php
declare(strict_types=1);
if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }
require dirname(__DIR__) . '/php/database.php';
try {
    database()->exec(file_get_contents(dirname(__DIR__) . '/database/001_reservations.sql'));
    database()->exec(file_get_contents(dirname(__DIR__) . '/database/002_admin.sql'));
    if (!database()->query("SHOW COLUMNS FROM admin_users LIKE 'role'")->fetch()) {
        database()->exec("ALTER TABLE admin_users ADD role VARCHAR(20) NOT NULL DEFAULT 'admin'");
        // Only the first existing active account becomes the initial superadmin.
        $first=database()->query('SELECT id FROM admin_users WHERE active=1 ORDER BY id LIMIT 1')->fetchColumn();
        if ($first !== false) {
            $q=database()->prepare("UPDATE admin_users SET role='superadmin' WHERE id=?");
            $q->execute([$first]);
        }
    }
    echo "Reservation table ready.\n";
} catch (Throwable $error) {
    fwrite(STDERR, "Migration failed. Check database configuration and permissions.\n");
    exit(1);
}
