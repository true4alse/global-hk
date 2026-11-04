<?php
declare(strict_types=1);

// This installer is intentionally unavailable over HTTP, even without .htaccess.
if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }

function validateFirstAdmin(string $username, string $displayName, string $password, string $confirmation): void
{
    if (!preg_match('/^[A-Za-z0-9_.-]{4,64}$/D', $username)) {
        throw new InvalidArgumentException('Username: use 4-64 letters, digits, underscores, dots or hyphens.');
    }
    if ($displayName === '' || !mb_check_encoding($displayName, 'UTF-8') || mb_strlen($displayName, 'UTF-8') > 100) {
        throw new InvalidArgumentException('Display name: enter 1-100 characters in UTF-8.');
    }
    if (!mb_check_encoding($password, 'UTF-8') || str_contains($password, "\0") || mb_strlen($password, 'UTF-8') < 12 || strlen($password) > 72) {
        throw new InvalidArgumentException('Password: use at least 12 characters and no more than 72 UTF-8 bytes.');
    }
    if ($password !== $confirmation) {
        throw new InvalidArgumentException('Passwords do not match. No account was created.');
    }
}

function createFirstAdmin(PDO $db, string $username, string $displayName, string $password, string $confirmation): void
{
    validateFirstAdmin($username, $displayName, $password, $confirmation);
    $hash = password_hash($password, PASSWORD_DEFAULT);
    // Share the lock name with the existing local-only setup page.
    if ((int)$db->query("SELECT GET_LOCK('hk_first_admin',5)")->fetchColumn() !== 1) {
        throw new RuntimeException('Another setup is running. Please try again later.');
    }
    try {
        // Inactive accounts also block first-account creation. Never reset an existing installation.
        if ((int)$db->query('SELECT COUNT(*) FROM admin_users')->fetchColumn() !== 0) {
            throw new RuntimeException('An administrator already exists. No account was changed.');
        }
        $q = $db->prepare("INSERT INTO admin_users (username,display_name,password_hash,active,created_at,role,notification_phone,notify_new_reservations) VALUES (?,?,?,1,UTC_TIMESTAMP(),'superadmin','',0)");
        $q->execute([$username, $displayName, $hash]);
    } finally {
        $db->query("SELECT RELEASE_LOCK('hk_first_admin')");
    }
}

function firstAdminInput(string $prompt, bool $hidden = false): string
{
    fwrite(STDOUT, $prompt);
    if (!$hidden) {
        $line = fgets(STDIN);
        if ($line === false) { throw new RuntimeException('Input ended. No account was created.'); }
        return rtrim($line, "\r\n");
    }
    // bash read -s handles terminal echo restoration itself, including interrupted reads.
    // The password travels through the child stdout pipe, never command arguments or a file.
    if (!function_exists('exec')) {
        throw new RuntimeException('Hidden password input is unavailable on this server. Stop and contact the developer.');
    }
    $lines = [];
    $status = 1;
    // The suffix preserves trailing spaces that PHP exec() otherwise trims.
    exec('bash -c ' . escapeshellarg('IFS= read -r -s secret < /dev/tty || exit 1; printf "%sX\n" "$secret"'), $lines, $status);
    fwrite(STDOUT, "\n");
    if ($status !== 0 || count($lines) !== 1) {
        throw new RuntimeException('Password input cancelled or unavailable. No account was created.');
    }
    return substr($lines[0], 0, -1);
}

function firstAdminMain(array $args): int
{
    if (count($args) !== 1) {
        fwrite(STDERR, "Run without arguments. Never put a password on the command line.\n");
        return 1;
    }
    if (PHP_OS_FAMILY === 'Windows' || !function_exists('stream_isatty') || !stream_isatty(STDIN)) {
        fwrite(STDERR, "Use an interactive SSH terminal on the hosting server.\n");
        return 1;
    }
    try {
        require_once dirname(__DIR__) . '/php/database.php';
        $db = database();
        if ((int)$db->query('SELECT COUNT(*) FROM admin_users')->fetchColumn() !== 0) {
            fwrite(STDERR, "An administrator already exists. No account was changed.\n");
            return 1;
        }
        fwrite(STDOUT, "Create the first production administrator. SMS notifications stay OFF.\n");
        $username = trim(firstAdminInput('Admin username: '));
        $displayName = trim(firstAdminInput('Display name: '));
        $password = firstAdminInput('Password (hidden, 12+ characters): ', true);
        $confirmation = firstAdminInput('Confirm password (hidden): ', true);
        validateFirstAdmin($username, $displayName, $password, $confirmation);
        if (firstAdminInput('Create this administrator? Type YES: ') !== 'YES') {
            fwrite(STDOUT, "Cancelled. No account was created.\n");
            return 1;
        }
        createFirstAdmin($db, $username, $displayName, $password, $confirmation);
        unset($password, $confirmation);
        fwrite(STDOUT, "Administrator created successfully.\nSign in at your HTTPS website /admin/ address.\n");
        return 0;
    } catch (PDOException $error) {
        fwrite(STDERR, "Database operation failed. Check the DB configuration and run migrations first.\n");
        return 1;
    } catch (Throwable $error) {
        // Only our validation/setup messages are shown; never print a stack trace or input values.
        fwrite(STDERR, $error instanceof InvalidArgumentException || get_class($error) === RuntimeException
            ? $error->getMessage() . "\n" : "Setup failed. Contact the developer.\n");
        return 1;
    }
}

if (realpath($_SERVER['SCRIPT_FILENAME'] ?? '') === __FILE__) {
    exit(firstAdminMain($argv));
}
