function abrirModalRodada() {
    console.log('Abrindo modal de rodada...');
    $('#modal-rodada').css('display', 'flex');
}

$(document).on('click', '#modal-rodada .fechar', function() {
    $('#modal-rodada').hide();
});

$(document).on('click', '#modal-rodada', function(event) {
    if (event.target === this) {
        $(this).hide();
    }
});