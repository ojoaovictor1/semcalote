import Usuario from '../models/Usuario.js';

export const Cadastrar = async (req, res) => {
    const {nome, email, senha, data_nasc} = req.body;
    try {
        const novoUsuario = await Usuario.create({nome, email, senha, data_nasc});
        res.status(201).json(novoUsuario);
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
}

export const Listar = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        res.status(500).json({ error: 'Erro ao listar usuários' });
    }
}