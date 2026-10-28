const notyf = new Notyf({
    duration: 5000,
    position: { x: 'right', y: 'top' },
    types: [{
        type: 'warning',
        background: 'orange',
        icon: {
            className: 'material-icons',
            tagName: 'i',
            text: 'warning',
        },
    }],
});

function mostrarToast(tipo, mensagem) {
    if (tipo === 'success') {
        notyf.success(mensagem);
    } else if (tipo === 'error') {
        notyf.error(mensagem);
    } else if (tipo === 'warning') {
        notyf.open({ type: 'warning', message: mensagem });
    }
}
 
