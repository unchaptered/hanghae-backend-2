import { FormFactory, JoiValidator } from '../../modules/_.loader.js';
import { CommentDto } from '../../models/dtos/_.export.js';

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const getAllCommentByBoardId = async (req, res, next) => {
}

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const postComment = async (req, res, next) => {

    try {

        const commentDto = new CommentDto({ ...req.body });
        
        const result = await new JoiValidator().validate(commentDto, commentDto._getJoiInstance());
        
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

        const { commentId } = req.params;
        const commentDto = new CommentDto({ ...req.body });
        commentDto.setCommentId = commentId;

        const commnetJoi = commentDto._getJoiInstance();
        commnetJoi.commentId = commnetJoi.commentId.required();

        const joiValidator = new JoiValidator();
        const result = await joiValidator.validate(commentDto, commnetJoi);

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

