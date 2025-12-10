import e from 'express';
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
export const Buscar = async (req, res) => {
    try {
        const id = req.params.id;
        const usuario = await Usuario.findByPk(id);
        if (usuario) {
            res.json(usuario);
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    } catch (error) {
        
    }
}

export const Atualizar = async(req, res) => {
    try {
        const dados_atualizados = {};        
        if(req.body.nome) dados_atualizados.nome = req.body.nome;
        if(req.body.email) dados_atualizados.email = req.body.email;
        if(req.body.senha) dados_atualizados.senha = req.body.senha;
        if(req.body.data_nasc) dados_atualizados.data_nasc = req.body.data_nasc;

        if(Object.values(dados_atualizados).length > 0){
            const usuarioAtualizado = await Usuario.update(dados_atualizados, {
                where: {id: req.params.id}
            })

            if(usuarioAtualizado[0] > 0){
                return res.json({ response: true, mensagem: "Dados do usuário atualizados"});
            }else{
                return res.status(500).json({ response: false, mensagem: "Erro ao atualizar usuário"})
            }
        }else{
            return res.status(400).json({ response: false, mensagem: "Nenhum campo para atualizar"})
        }
    } catch (error) {
        
    }
}

export const Excluir = async(req, res) =>{
    try {
        const id = req.params.id;
        const usuario = await Usuario.destroy({
            where: {
                id: id
            }
        })

        if(usuario){
            res.status(200).json({ response: true, mensagem: "Usuário Deletado com Sucesso!"});
        }
    } catch (error) {
            res.status(404).json({ error: "Usuário não encontrado"});
    }
}

export const Login = async (req, res) => {
    try {
        const {email, senha} = req.body;
        if(email && senha){
            const usuario = await Usuario.findOne({
                where: {
                    email: email,
                    senha: senha
                }
            })
            if(usuario){
                res.status(200).json({ status: true, dados: usuario});
                return;
            }
        }
        res.status(403).json({ status: false, mensagem: "Login Inválido"});
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
}