<?php

session_start();
require_once __DIR__ . '/../assets/api/login.php';

$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$senha = isset($_POST['senha']) ? $_POST['senha'] : '';

try{
    
    $login = fazerLogin($email, $senha);
    if($login && isset($login['token'])) {
        session_regenerate_id(true);
        $_SESSION['token'] = $login['token'];
        header('Location: ../views/index.php');
        exit();
    } else {
        header('Location: login.php?erro=1');
        exit();
    }

}catch (Throwable $e) {
    echo $e->getMessage();
}
?>