import e from 'express';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import Rodadas from '../models/Rodadas.js';

dotenv.config();

export const Cadastrar = async (req, res) => {
    const {nome, email, senha, data_nasc} = req.body;
    try {
        const novaRodada = await Rodadas.create({nome, email, senha, data_nasc});
        res.status(201).json(novaRodada);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar rodada' });
    }
}

export const Listar = async (req, res) => {
    try {
        const rodadas = await Rodadas.findAll();
        res.json(rodadas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar rodadas' });
    }
}
export const Buscar = async (req, res) => {
    try {
        const id = req.params.id;
        const rodada = await Rodadas.findByPk(id);
        if (rodada) {
            res.json(rodada);
            res.status(200).json(rodada);
        } else {
            res.status(404).json({ error: 'Rodada não encontrada' });
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
        if(req.body.data_nasc) dados_atualizados.data_nasc = req.body.data_nasc
        if(Object.values(dados_atualizados).length > 0){
            const rodadaAtualizada = await Rodadas.update(dados_atualizados, {
                where: {id: req.params.id}
            })

            if(rodadaAtualizada[0] > 0){
                return res.json({ response: true, mensagem: "Dados da rodada atualizados"});
            }else{
                return res.status(500).json({ response: false, mensagem: "Erro ao atualizar rodada"})
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
        const rodada = await Rodadas.destroy({
            where: {
                id: id
            }
        })
        if(rodada){
            res.status(200).json({ response: true, mensagem: "Rodada Deletada com Sucesso!"});
        }
    } catch (error) {
            res.status(404).json({ error: "Rodada não encontrada"});
    }
}
