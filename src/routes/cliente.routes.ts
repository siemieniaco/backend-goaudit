import { Router } from 'express';
import { clienteControllers } from '../controllers/clienteControllers';

const clientesRouter = Router();

//CLIENTES

clientesRouter.post('/', clienteControllers.novoCliente);

clientesRouter.get('/:busca', clienteControllers.getCliente);

clientesRouter.get('/all', clienteControllers.getAllClientes);

clientesRouter.put('/', clienteControllers.attCliente);

clientesRouter.delete('/', clienteControllers.delCliente);

export default clientesRouter;