import e from 'express';
import JWT from 'jsonwebtoken';
import Rodada_Intermediaria from '../models/rodada_intermediaria.js';
import dotenv from 'dotenv';

dotenv.config();

export const CriarRodada = async (req, res) => {
    try {
        const {id_rodada, id_jogador, id_jogo} = req.body;
        const novaRodada = await Rodada_Intermediaria.create({id_rodada, id_jogador, id_jogo});
        res.status(201).json(novaRodada);
    } catch (error) {
        console.error('Erro ao criar rodada intermediária:', error);
        res.status(500).json({ error: 'Erro ao criar rodada intermediária' });
    }
}

export const ListarRodadas = async (req, res) => {
    try {
        const rodadas = await Rodada_Intermediaria.findAll();
        res.status(200).json(rodadas);
    } catch (error) {
        console.error('Erro ao listar rodadas intermediárias:', error);
        res.status(500).json({ error: 'Erro ao listar rodadas intermediárias' });
    }
}