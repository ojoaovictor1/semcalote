import {Router} from 'express';
import * as Usuarios from '../controller/Usuarios.js';
import { Auth } from '../middlewares/auth.js';
const route = Router();

//LOGIN
route.post('/login',  Usuarios.Login)

//USUARIOS
route.post('/usuarios', Usuarios.Cadastrar)
route.get('/usuarios', Auth.private, Usuarios.Listar)
route.get('/usuarios/:id', Auth.private, Usuarios.Buscar)
route.put('/usuarios/:id', Auth.private, Usuarios.Atualizar)
route.delete('/usuarios/:id', Auth.private, Usuarios.Excluir)

//JOGOS
route.post('/jogos', Auth.private, Jogos.Cadastrar)
route.get('/jogos', Auth.private, Jogos.Listar)
route.get('/jogos/:id', Auth.private, Jogos.Buscar)
route.put('/jogos/:id', Auth.private, Jogos.Atualizar)
route.delete('/jogos/:id', Auth.private, Jogos.Excluir)

//RODADAS
route.post('/rodadas', Auth.private, Rodadas.Cadastrar);
route.get('/rodadas', Auth.private, Rodadas.Listar);
route.get('/rodadas/:id', Auth.private, Rodadas.Buscar);
route.put('/rodadas/:id', Auth.private, Rodadas.Atualizar);
route.delete('/rodadas/:id', Auth.private, Rodadas.Excluir);


export default route;