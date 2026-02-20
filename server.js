import express from 'express';
import dotenv from 'dotenv';
import Rotas from './src/routes/api.js';

dotenv.config();

const route = express();
route.use(express.json());
route.use(Rotas);
const port = process.env.PORT;

route.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
})

