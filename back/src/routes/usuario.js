import {Router} from 'express';
import { adicionarUsuario, deletarUsuario, editarUsuarios, getUsuarios } from '../controllers/usuarioController.js';

const usuarioRouter = Router();

usuarioRouter.get('/usuario', getUsuarios);
usuarioRouter.patch('/usuario/:id', editarUsuarios);
usuarioRouter.delete('/usuario/:id', deletarUsuario);
usuarioRouter.post('/usuario', adicionarUsuario);

export default usuarioRouter;