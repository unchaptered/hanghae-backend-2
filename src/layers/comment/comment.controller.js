// Models
import { CommentDto, CommentPostDto, CommentPutDto } from '../../models/dtos/_.export.js';

// Modules
import { CommentService } from '../_.layer.loader.js';
import { FormFactory, JoiValidator } from '../../modules/_.loader.js';

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const getAllCommentByBoardId = async (req, res, next) => {
}

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const postComment = async (req, res, next) => {

    try {

        const commentPostDto = new CommentPostDto({ ...req.body });

        await new JoiValidator().validate(commentPostDto, commentPostDto._getJoiInstance());
        
        const result = await CommentService.postComment(commentPostDto);
        

        return res.json(
            new FormFactory().getSuccessForm('댓글 작성에 성공하셨습니다.', result));

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

        await new JoiValidator().validate(commentPutDto, commentPutDto._getJoiInstance());

        const result = await CommentService.putCommentByCommentId(commentPutDto);


        return res.json(
            new FormFactory().getSuccessForm('댓글 수정에 성공했습니다.', result));

        
    } catch (err) {
        
        res.locals.error = err;

        return next();

    }
}

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const delCommentByComment = async (req, res, next) => {

    try {

        const { commentId } = req.params;
        
        await new JoiValidator().validate({ commentId }, { commentId: Joi.number() });
        

        return res.json(
            new FormFactory().getSuccessForm('댓글 삭제에 성공했습니다.', commentId ));

    } catch(err) {
        
        res.locals.error = err;

        return next();

    }

}

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const increaseCommetLikeByCommentId = async (req, res, next) => {
}

