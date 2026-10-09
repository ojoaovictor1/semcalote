const listaJogos = document.querySelector('#lista-jogos');
const mensagem = document.querySelector('#mensagem');

async function carregarJogos(){
    try {
        mensagem.textContent = 'Carregando jogos...'
        const jogos = await listaJogos();

        listaJogos.innerHTML = '';

        if(jogos.lenght === 0){
            mensagem.textContent = "Nenhum jogo encontrado";
            return;
        }

        jogos.foreach((jogo) =>{
            console.log(jogo)
        })

        mensagem.textContent = '';

    } catch (error) {
        mensagem.textContent = error.message;
    }
}

carregarJogos();