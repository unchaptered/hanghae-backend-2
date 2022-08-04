import { Router } from 'express';
import { BoardController } from '../_.layer.loader.js';
import { accessGuard, refreshGuard } from '../../modules/_.loader.js';

const boardRouter = Router();

boardRouter.route('')
    .get(BoardController.getAllBoard)
    .post(accessGuard, BoardController.postBoard);

boardRouter.route('/:boardId')
    .get(BoardController.getBoardById)
    .put(accessGuard, BoardController.putBoardById)
    .delete(accessGuard, BoardController.delBoardById);

boardRouter.route('/:boardId/like')
    .patch(accessGuard, BoardController.increaseBoardLike);


export default boardRouter;