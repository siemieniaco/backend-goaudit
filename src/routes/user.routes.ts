import { Router } from 'express';
import { userControllers } from '../controllers/userControllers'

const userRouter = Router();

//LOGIN e CADASTRO

//userRouter.post('/login', userControllers.loginUser);

userRouter.post('/cadastro', userControllers.createUser);

export default userRouter;