async function carregarJogos(){
    const containerJogos = document.getElementById('container-jogos');

    try {
        const listaJogos = await listarJogos();
        
        if(listaJogos.length === 0){
            containerJogos.innerHTML = '<p>Nenhum jogo encontrado.</p>';
            return;
        }

        listaJogos.forEach((jogo) => {
            // criar lógica para exibir os cards.
        });
    } catch (error) {
        console.error('Erro ao carregar jogos:', error);
    }
}