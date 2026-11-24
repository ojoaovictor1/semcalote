<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    exit('Método não permitido.');
}

session_start();
$_SESSION = [];

if (ini_get('session.use_cookies')) {
    $cookieParams = session_get_cookie_params();
    setcookie(
        session_name(),
        '',
        time() - 42000,
        $cookieParams['path'],
        $cookieParams['domain'],
        $cookieParams['secure'],
        $cookieParams['httponly']
    );
}

session_destroy();

header('Location: /login/login.php');
exit();
