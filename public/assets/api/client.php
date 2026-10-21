<?php 

// CONSTANTE GLOBAL API
define('API_URL', 'https://api.semcalote.me');

function api_request($rota, $metodo = 'GET', $dados = null, $headers = []) {
    $url = API_URL . $rota;

    $headers = array_merge([
        'Content-Type: application/json',
        'Accept: application/json'
    ], $headers);

    $ch = curl_init($url);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, strtoupper($metodo));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    if($dados !== null) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($dados));
    }

    $response = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    if ($response === false) {
        $error = curl_error($ch);
        // curl_close($ch);
        throw new Exception("Erro ao fazer a requisição para a API." . $error);
    }

    // curl_close($ch);

    if ($status < 200 || $status >= 300) {
        throw new Exception("Erro na requisição para a API. Status: $status. Resposta: $response");
    } 

    if($status >= 200 && $status < 300) {
        return ['status' => $status, 'response' => json_decode($response, true)];
    }

}

// Atalhos

function api_get($rota, $headers = []) {
    return api_request($rota, 'GET', null, $headers);
}

function api_post($rota, $dados, $headers = []) {
    return api_request($rota, 'POST', $dados, $headers);
}

function api_put($rota, $dados, $headers = []) {
    return api_request($rota, 'PUT', $dados, $headers);
}

function api_delete($rota, $dados = null, $headers = []) {
    return api_request($rota, 'DELETE', $dados, $headers);
}
