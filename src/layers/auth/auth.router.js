import { Router } from 'express';

// Modules
import { AuthController } from '../_.layer.loader.js';

const authRouter = Router();

authRouter.post('/join', AuthController.join);
authRouter.post('/login', AuthController.login);

authRouter.get('/my-profile', AuthController.myProfile);
authRouter.get('/my-board', AuthController.myBoard);
authRouter.get('/my-comment', AuthController.myComment);

export default authRouter;