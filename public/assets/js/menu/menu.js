// navegação com jquery
$(document).ready(function() {

    $('#menu-inicio').click(function() {
        $.ajax({
            url: 'views/inicio.php',
            method: 'GET',
            success: function(response) {
                $('.conteudo-vazio').html(response);
            },
            error: function(xhr, status, error) {
                console.error('Erro ao carregar a view de início:', error);
            }
        });
    });

    $('#menu-jogos').click(function() {
    
        $.ajax({
            url: 'views/jogos.php',
            method: 'GET',
            success: function(response) {
                $('.conteudo-vazio').html(response);
                carregarJogos();
            },
            error: function(xhr, status, error) {
                alert('Erro ao carregar a view de jogos.');
                console.error('Erro ao carregar a view de jogos.' + error);
            }
        });
    });

    $('#menu-relatorios').click(function() {
    
    });

    $('#menu-pagamento').click(function() {
    
    });

    $('#menu-configuracoes').click(function() {

    });
});