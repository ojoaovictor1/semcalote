<?php

require_once __DIR__ . '/../api/client.php';
session_start();

function jogos_listar() {

    if (empty($_SESSION['token'])) {
        throw new RuntimeException('Sessão expirada. Faça login novamente.');
    }

    $resultado = api_get('/jogos', [
        'Authorization: Bearer ' . $_SESSION['token']
    ]);

    return $resultado['response'];
}

function jogos_buscar_por_id(int $id) {
    try {
        $resultado = api_get('/jogos/' . $id);
        return $resultado['response'];
    } catch (Exception $e) {
        error_log("Erro ao buscar jogo por ID: " . $e->getMessage());
        return null;
    }
}