import { CommentService } from '../services/_.export.js';
import { FormFactory, JoiValidator } from '../../modules/_.loader.js';
import { CommentDto, CommentPostDto, CommentPutDto } from '../../models/dtos/_.export.js';

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const getAllCommentByBoardId = async (req, res, next) => {
}

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const postComment = async (req, res, next) => {

    try {

        const commentPostDto = new CommentPostDto({ ...req.body });
        await new JoiValidator().validate(commentPostDto, commentPostDto._getJoiInstance());
        
        const result = await CommentService.postComment(commentPostDto);
        
        const formFactory = new FormFactory();
        return res.json(
            formFactory.getSuccessForm('댓글 작성에 성공하셨습니다.', result));

    } catch (err) {
        
        res.locals.error = err;

        return next();

    }

}

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const putCommentByCommentId = async (req, res, next) => {

    try {

        const commentPutDto = new CommentPutDto({ ...req.body });
        commentPutDto.setCommentId = req.params.commentId;

        const joiValidator = new JoiValidator();
        await joiValidator.validate(commentPutDto, commentPutDto._getJoiInstance());

        const result = await CommentService.putCommentByCommentId(commentPutDto);

        const formFactory = new FormFactory();
        return res.json(
            formFactory.getSuccessForm('댓글 수정에 성공했습니다.', result));

        
    } catch (err) {
        
        res.locals.error = err;

        return next();

    }
}

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const delCommentByComment = async (req, res, next) => {

    try {

        const { commentId } = req.params;
        
        const joiValidator = new JoiValidator();
        const result = await joiValidator.validate({ commentId }, { commentId: Joi.number() });
        
        const formFactory = new FormFactory();
        return res.json(
            formFactory.getSuccessForm('댓글 삭제에 성공했습니다.', result));

    } catch(err) {
        
        res.locals.error = err;

        return next();

    }

}

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const increaseCommetLikeByCommentId = async (req, res, next) => {
}

