async function listarUsuarios(){
    return apiRequest('/usuarios');
}

async function criarUsuario(usuario){
    return apiRequest('/usuarios', {
        method: POST,
        body: JSON.stringify(usuario)
    });
}