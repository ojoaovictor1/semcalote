<?php 
    if(strpos($_SERVER['HTTP_HOST'], 'localhost') !== false){
        define('BASE_URL', 'http://localhost/semcalote');
    } else {
        define('BASE_URL', 'http://' . $_SERVER['HTTP_HOST']);
    }

    // CSS GLOBAL
    define('BASE_CSS', BASE_URL . '/public/assets/css/estilo.css');

    // PARTIALS
    define('BASE_PARTIALS', BASE_URL . '/public/partials');
?>