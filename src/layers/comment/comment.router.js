import { Router } from 'express';
import { CommentController } from '../_.layer.loader.js';
import { accessGuard, refreshGuard } from '../../modules/_.loader.js';

const commentRouter = Router();

commentRouter.route('')
    .get(CommentController.getAllCommentByBoardId)
    .post(accessGuard, CommentController.postComment);

commentRouter.route('/:commentId')
    .put(accessGuard, CommentController.putCommentByCommentId)
    .delete(accessGuard, CommentController.delCommentByComment);

commentRouter.route('/:commentId/like')
    .patch(accessGuard, CommentController.increaseCommetLikeByCommentId);

export default commentRouter;