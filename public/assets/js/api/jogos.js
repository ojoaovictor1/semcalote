async function listarJogos(){
    return apiRequest('/jogos');
}

async function criarJogo(jogo){
    return apiRequest('/jogo', {
        method: POST,
        body: JSON.stringify(jogo)
    });
}