import {Router} from 'express';
import { adicionarConsulta, deletarConsulta, editarConsultas, getConsultas } from '../controllers/consultaController.js';

const consultaRouter = Router();

consultaRouter.get('/consulta', getConsultas);
consultaRouter.patch('/consulta/:id', editarConsultas);
consultaRouter.delete('/consulta/:id', deletarConsulta);
consultaRouter.post('/consulta', adicionarConsulta);

export default consultaRouter;