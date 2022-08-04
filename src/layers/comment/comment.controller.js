// Models
import { CommentFkValuesDto, CommentDto, CommentPostDto, CommentPutDto } from '../../models/dtos/_.export.js';

// Modules
import { CommentService } from '../_.layer.loader.js';
import { FormFactory, JoiValidator } from '../../modules/_.loader.js';
import Joi from 'joi';

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const getAllCommentByBoardId = async (req, res, next) => {

    try {

        const { boardId } = req.body;

        await new JoiValidator().validate({ boardId }, { boardId: Joi.number().required() });

        const result = await CommentService.getAllCommentByBoardId(boardId);

        return res.json(
            new FormFactory().getSuccessForm('댓글 불러오기에 성공하셨습니다.', result));

    } catch (err) {
            
        res.locals.error = err;

        return next();

    }
}

/**
 * `accessGuard` 를 사용 중입니다.
 * 자동으로 req.body.author 가 생성됩니다.
 * 
 * @param { Request } req @param { Response } res @param { NextFunction } next */
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

/**
 * `accessGuard` 를 사용 중입니다.
 * 자동으로 req.body.author 가 생성됩니다.
 *  
 * @param { Request } req @param { Response } res @param { NextFunction } next */
export const putCommentByCommentId = async (req, res, next) => {

    try {

        const commentPutDto = new CommentPutDto({ ...req.body });
        commentPutDto.setCommentId = req.params.commentId;

        console.log(commentPutDto);

        await new JoiValidator().validate(commentPutDto, commentPutDto._getJoiInstance());

        const result = await CommentService.putCommentByDto(commentPutDto);


        return res.json(
            new FormFactory().getSuccessForm('댓글 수정에 성공했습니다.', result));

        
    } catch (err) {
        
        res.locals.error = err;

        return next();

    }
}

/**
 * `accessGuard` 를 사용 중입니다.
 * 자동으로 req.body.author 가 생성됩니다.
 *  
 * @param { Request } req @param { Response } res @param { NextFunction } next */
export const delCommentByComment = async (req, res, next) => {

    try {

        const commentFkDto = new CommentFkValuesDto({ ...req.params, ...req.body });
        
        await new JoiValidator().validate(commentFkDto, commentFkDto._getJoiInstance());
        
        const result = await CommentService.delCommentByDto(commentFkDto);

        return res.json(
            new FormFactory().getSuccessForm('댓글 삭제에 성공했습니다.', result));

    } catch(err) {
        
        res.locals.error = err;

        return next();

    }

}

/**
 * `accessGuard` 를 사용 중입니다.
 * 자동으로 req.body.author 가 생성됩니다.
 * 
 * @param { Request } req @param { Response } res @param { NextFunction } next */
export const increaseCommetLikeByCommentId = async (req, res, next) => {

    try {

        const commentFkDto = new CommentFkValuesDto({ ...req.params, ...req.body });
    
        await new JoiValidator().validate(commentFkDto, commentFkDto._getJoiInstance());

        const { commentFkDto: commentFkDtoResult, isLikeUp} = await CommentService.increaseCommentLike(commentFkDto);
        return res.json(
            new FormFactory().getSuccessForm(`게시글 좋아요가 ${isLikeUp ? '+ 1' : '- 1'} 되었습니다.`, { ...commentFkDtoResult, isLikeUp }));

    } catch(err) {

        res.locals.error = err;

        return next();

    }

}

