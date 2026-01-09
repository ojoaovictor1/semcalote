import {Router} from 'express';
import * as Usuarios from '../controller/Usuarios.js';
import { Auth } from '../middlewares/auth.js';
const route = Router();

route.post('/usuarios', Usuarios.Cadastrar)
route.post('/login',  Usuarios.Login)
route.get('/usuarios', Auth.private, Usuarios.Listar)
route.get('/usuarios/:id', Usuarios.Buscar)
route.put('/usuarios/:id', Usuarios.Atualizar)
route.delete('/usuarios/:id', Usuarios.Excluir)

export default route;