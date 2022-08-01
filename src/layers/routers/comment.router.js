import { Router } from 'express';
import { CommentController } from '../controllers/_.export.js';

const commentRouter = Router();

commentRouter.route('')
    .get(CommentController.getAllCommentByBoardId)
    .post(CommentController.postComment);

commentRouter.route('/:commentId')
    .put(CommentController.putCommentByCommentId)
    .delete(CommentController.delCommentByComment);

commentRouter.route('/:commentId/like')
    .patch(CommentController.increaseCommetLikeByCommentId);

export default commentRouter;