import e from 'express';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import Usuario from '../models/Jogadores.js';

dotenv.config();

export const Cadastrar = async (req, res) => {
    const {nome, data_nasc, chave_pix} = req.body;
    try {
        const novoUsuario = await Usuario.create({nome, data_nasc, chave_pix});
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
}

export const Listar = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
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
        if(req.body.data_nasc) dados_atualizados.data_nasc = req.body.data_nasc;
        if(req.body.chave_pix) dados_atualizados.chave_pix = req.body.chave_pix;
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