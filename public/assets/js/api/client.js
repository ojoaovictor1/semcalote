const API_BASE_URL = 'api.semcalote.me';

async function apiRequest(endpoint, options = {}){
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
            'Content-Type': 'aplication/json',
            ...options.headers
        },
        ...options
    });

    const dados = await response.json();

    if(!response.ok){
        throw new Error(dados.message || 'Erro ao acessar a API');
    }

    return dados;
}