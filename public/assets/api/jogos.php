<?php

require_once __DIR__ . '/../api/client.php';

function jogos_listar() {
    try {
        $resultado = api_get('/jogos');
        return $resultado['response'];
    } catch (Exception $e) {
        error_log("Erro ao listar jogos: " . $e->getMessage());
        return [];
    }
}

function jogos_buscar_por_id($id) {
    try {
        $resultado = api_get('/jogos/' . $id);
        return $resultado['response'];
    } catch (Exception $e) {
        error_log("Erro ao buscar jogo por ID: " . $e->getMessage());
        return null;
    }
}