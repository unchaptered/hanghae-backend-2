import { Router } from 'express';
import { BoardController } from '../controllers/_.export.js';
import { accessGuard, refreshGuard } from '../../modules/_.loader.js';

const boardRouter = Router();

boardRouter.route('')
    .get(BoardController.getAllBoard)
    .post(accessGuard, BoardController.postBoard);

boardRouter.route('/:boardId')
    .get(BoardController.getBoardById)
    .put(BoardController.putBoardById)
    .delete(BoardController.delBoardById);

boardRouter.route('/:boardId/like')
    .patch(BoardController.increaseBoardLike);


export default boardRouter;