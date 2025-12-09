import {Router} from 'express';
import * as Usuarios from '../controller/Usuarios.js';
const route = Router();

route.post('/usuarios', Usuarios.Cadastrar)

export default route;