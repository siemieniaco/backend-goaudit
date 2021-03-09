import { Router } from 'express';
import { questionarioControllers } from '../controllers/questionarioController';

const questionarioRouter = Router();

questionarioRouter.post('/', questionarioControllers.novoQuestionario);
questionarioRouter.get('/:nome', questionarioControllers.getQuestionario);
questionarioRouter.put('/:nome', questionarioControllers.attQuestionario);
questionarioRouter.delete('/:nome', questionarioControllers.delQuestionario);

export default questionarioRouter;