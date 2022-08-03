import Joi from 'joi';

// Models
import { BoardEntity } from '../../models/entity/_.export.js';
import { BoardDto, BoardPostDto, BoardPutDto } from '../../models/dtos/_.export.js';

// Modules
import { BoardService } from '../_.layer.loader.js';
import { FormFactory, JoiValidator } from '../../modules/_.loader.js';

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const getAllBoard = (req, res, next) => {
    return res.json('get all board');
}

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const postBoard = async (req, res, next) => {

    try {

        const boardPostDto = new BoardPostDto({ ...req.body });

        await new JoiValidator().validate(boardPostDto, boardPostDto._getJoiInstance());

        const result = await BoardService.postBoard(boardPostDto);

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

        await new JoiValidator().validate({ boardId }, { boardId: Joi.number() });
        
        const formFactory = new FormFactory();
        return res.json(
            formFactory.getSuccessForm('게시글 불러오기에 성공했습니다.', boardId ));

    } catch(err) {

        res.locals.error = err;

        return next();

    }

}

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const putBoardById = async (req, res, next) => {

    try {

        const boardPutDto = new BoardPutDto({ ...req.body });
        boardPutDto.setBoardId = +req.params.boardId;
        
        await new JoiValidator().validate(boardPutDto, boardPutDto._getJoiInstance());

        const result = await BoardService.putBoardById(boardPutDto);
        
        const formFactory = new FormFactory();
        return res.json(
            formFactory.getSuccessForm('게시글 수정에 성공했습니다.', result));

    } catch(err) {

        res.locals.error = err;

        return next();

    }
}

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const delBoardById = async (req, res, next) => {

    try {
     
        const { boardId } = req.params;

        const result = await new JoiValidator().validate({ boardId }, { boardId: Joi.number() });
        
        const formFactory = new FormFactory();
        return res.json(
            formFactory.getSuccessForm('게시글 삭제에 성공했습니다.', result));

    } catch(err) {

        res.locals.error = err;

        return next();

    }

}

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const increaseBoardLike = (req, res, next) => {

    return res.json('increase board like');
    
}