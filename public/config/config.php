<?php 

$protocolo = 'http';
if (
    (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ||
    (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https')
) {
    $protocolo = 'https';
}

define('BASE_URL', $protocolo . '://' . $_SERVER['HTTP_HOST']);

// CSS GLOBAL
define('BASE_CSS', BASE_URL . '/assets/css/estilo.css');

// PARTIALS
define('BASE_PARTIALS', BASE_URL . '/partials');