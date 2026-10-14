async function carregarJogos(){
    const listaJogosElement = document.querySelector('#lista-jogos');
    const mensagem = document.querySelector('#mensagem');

    try {
        mensagem.textContent = 'Carregando jogos...';
        const jogos = await listarJogos();
        listaJogosElement.innerHTML = '';

        if (jogos.length === 0) {
            mensagem.textContent = 'Nenhum jogo encontrado';
            return;
        }

        jogos.forEach((jogo) => {
            const item = document.createElement('li');
            item.textContent = typeof jogo === 'object' && jogo !== null
                ? JSON.stringify(jogo.nome)
                : String(jogo);
            listaJogosElement.appendChild(item);
        });

        mensagem.textContent = '';
    } catch (error) {
        console.error('Erro ao carregar jogos:', error);
        mensagem.textContent = error.message || 'Erro ao carregar os jogos.';
    }
}