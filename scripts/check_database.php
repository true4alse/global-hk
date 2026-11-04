<?php
declare(strict_types=1);
if (PHP_SAPI !== 'cli') {
    http_response_code(404);
    exit;
}
require dirname(__DIR__) . '/php/database.php';
try {
    $result = database()->query('SELECT DATABASE() AS db, @@character_set_connection AS charset')->fetch();
    echo 'Database connection OK: ' . $result['db'] . ' (' . $result['charset'] . ')' . PHP_EOL;
} catch (Throwable $error) {
    // Never print connection details or credentials.
    fwrite(STDERR, 'Database connection failed. Check local configuration and MySQL.' . PHP_EOL);
    exit(1);
}
