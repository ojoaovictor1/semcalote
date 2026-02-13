import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import Jogos from '../models/Jogos.js';
import e from 'express';

dotenv.config();

export const Cadastrar = async (req, res) => {
    const {nome, img, descricao} = req.body;
    try {
        const novoJogo = await Jogos.create({nome, img, descricao});
        res.status(201).json(novoJogo);
    } catch(error){
        return res.status(500).json({ msg: "Erro ao cadastar o Jogo."});
    }
}

export const Listar = async (req, res) => {
    try {
        const jogos = await Jogos.findAll();
        res.json(jogos);
    } catch (error) {
        console.error('Erro ao listar jogos:', error);
        res.status(500).json({ error: 'Erro ao listar jogos' });
    }
}

export const Buscar = async (req, res) => {
    try {
        const id = req.params.id;
        const jogo = await Jogos.findByPk(id);
        if (jogo) {
            res.json(jogo);
            res.status(200).json(jogo);
        } else {
            res.status(404).json({ error: 'Jogo não encontrado' });
        }
    } catch (error) {
        
    }
}

export const Atualizar = async(req, res) => {
    try {
        const dados_atualizados = {};
        if(req.body.nome) dados_atualizados.nome = req.body.nome;
        if(req.body.img) dados_atualizados.img = req.body.img;
        if(req.body.descricao) dados_atualizados.descricao = req.body.descricao;

        if(Object.values(dados_atualizados).length > 0){
            const jogoAtualizado = await Jogos.update(dados_atualizados, {
                where: {id: req.params.id}
            })
            if(jogoAtualizado[0] > 0){
                return res.json({ response: true, mensagem: "Dados do jogo atualizados"});
            }else{
                return res.status(500).json({ response: false, mensagem: "Erro ao atualizar jogo"})
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
        const jogo = await Jogos.destroy({
            where: {
                id: id
            }
        })

        if(jogo){
            res.status(200).json({ response: true, mensagem: "Jogo Deletado com Sucesso!"});
        }
    } catch (error) {
            res.status(404).json({ error: "Jogo não encontrado"});
    }
}