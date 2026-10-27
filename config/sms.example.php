<?php
// Copy outside the web root, then point config/sms.local.php to that file.
return [
    'mode' => 'disabled', // disabled | simulate | live
    'api_key' => '',
    'api_secret' => '',
    'from' => '', // Verified SOLAPI sender, digits only
    'admin_url' => '', // Optional public HTTPS admin URL. Empty for local tests.
    'limit_10_minutes' => 20, // All recipients combined; live attempts, including retries
    'limit_24_hours' => 100, // Rolling window; exceeded jobs are held, never auto-released
];
