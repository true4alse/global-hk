<?php
require dirname(__DIR__).'/php/admin.php';
if($_SERVER['REQUEST_METHOD']!=='POST') { http_response_code(405); exit; }
checkCsrf(); $_SESSION=[]; session_destroy(); go('login.php');
