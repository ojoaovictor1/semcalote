<?php 

require_once __DIR__ . '/../api/client.php';

function buscarUsuario(string $email){
    try{
        $resultado = api_get('/usuarios/email/:'. $email);
        return $resultado['response'];
    }catch(Exception $e){
        error_log("Erro ao buscar usuário: " . $e->getMessage());
        return [];
    }
}

function fazerLogin(string $email, string $senha){
        $resultado = api_post('/login', [
            'email' => $email,
            'senha' => $senha
        ]);
        return $resultado['response'];
}

?>