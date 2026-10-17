<?php
// Copy outside the web root, then point config/sms.local.php to that file.
return [
    'mode' => 'disabled', // disabled | simulate | live
    'api_key' => '',
    'api_secret' => '',
    'from' => '', // Verified SOLAPI sender, digits only
    'admin_url' => '', // Optional public HTTPS admin URL. Empty for local tests.
];
