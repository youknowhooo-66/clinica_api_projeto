import express from 'express';
import cors from 'cors';
import consultaRouter from './routes/consulta.js';
import usuarioRouter from './routes/usuario.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Teste');
})

app.use(usuarioRouter);
app.use(consultaRouter);

export {app};