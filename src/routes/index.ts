import { Router } from 'express';
import empresaRouter from './empresa.routes';
import clientesRouter from './cliente.routes';
import questionarioRouter from './questionario.routes';
import userRouter from './user.routes';


const routes = Router();

routes.use('/empresa', empresaRouter);
routes.use('/clientes', clientesRouter);
routes.use('/user', userRouter);
routes.use('/questionario',questionarioRouter);

export default routes;