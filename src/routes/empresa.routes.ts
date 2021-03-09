import { Router } from 'express';
import { empresaControllers } from '../controllers/empresaControllers';

const empresaRouter = Router();

//EMPRESA

empresaRouter.post('/', empresaControllers.novaEmpresa);

empresaRouter.get('/:id', empresaControllers.getEmpresa);

empresaRouter.put('/:id', empresaControllers.attEmpresa);

empresaRouter.delete('/:id', empresaControllers.delEmpresa);

export default empresaRouter;