import { FormFactory, JoiValidator } from '../../modules/_.loader.js';
import { BoardEntity } from '../../models/entity/_.export.js';
import { BoardDto } from '../../models/dtos/_.export.js';
import Joi from 'joi';

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const getAllBoard = (req, res, next) => {
    return res.json('get all board');
}

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const postBoard = async (req, res, next) => {

    try {

        const boardDto = new BoardDto({ ...req.body });
        const result = await new JoiValidator().validate(boardDto, boardDto._getJoiInstance());

        const formFactory = new FormFactory();
        return res.json(
            formFactory.getSuccessForm('게시글 작성에 성공하셨습니다.', result));

    } catch(err) {
        
        res.locals.error = err;

        return next();

    }

}

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const getBoardById = async (req, res, next) => {

    try {
     
        const { boardId } = req.params;

        const joiValidator = new JoiValidator();
        const result = await joiValidator.validate({ boardId }, { boardId: Joi.number() });
        
        const formFactory = new FormFactory();
        return res.json(
            formFactory.getSuccessForm('게시글 불러오기에 성공했습니다.', result));

    } catch(err) {

        res.locals.error = err;

        return next();

    }

}

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const putBoardById = async (req, res, next) => {

    try {
     
        const { boardId } = req.params;
        const boardDto = new BoardDto({ ...req.body });
        boardDto.setBoardId = boardId;

        const boardJoi = boardDto._getJoiInstance();
        boardJoi.boardId = boardJoi.boardId.required();

        const joiValidator = new JoiValidator();
        const result = await joiValidator.validate(boardDto, boardJoi);
        
        const formFactory = new FormFactory();
        return res.json(
            formFactory.getSuccessForm('게시글 수정에 성공했습니다.', result));

    } catch(err) {

        res.locals.error = err;

        return next();

    }
}

export const delBoardById = async (req, res, next) => {

    try {
     
        const { boardId } = req.params;

        const joiValidator = new JoiValidator();
        const result = await joiValidator.validate({ boardId }, { boardId: Joi.number() });
        
        const formFactory = new FormFactory();
        return res.json(
            formFactory.getSuccessForm('게시글 삭제에 성공했습니다.', result));

    } catch(err) {

        res.locals.error = err;

        return next();

    }

}

export const increaseBoardLike = (req, res, next) => {
    return res.json('increase board like');
}