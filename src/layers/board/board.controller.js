import Joi from 'joi';

// Models
import { BoardEntity } from '../../models/entity/_.export.js';
import { BoardDto, BoardFkValuesDto, BoardPostDto, BoardPutDto } from '../../models/dtos/_.export.js';

// Modules
import { BoardService } from '../_.layer.loader.js';
import { FormFactory, JoiValidator, JwtProvider } from '../../modules/_.loader.js';

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const getAllBoard = async (req, res, next) => {

    try {

        const result = await BoardService.getBoards();

        return res.json(
            new FormFactory().getSuccessForm('게시글 읽기에 성공하셨습니다.', result));

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
export const postBoard = async (req, res, next) => {

    try {

        const boardPostDto = new BoardPostDto({ ...req.body });

        await new JoiValidator().validate(boardPostDto, boardPostDto._getJoiInstance());

        const result = await BoardService.postBoard(boardPostDto);

        return res.json(
            new FormFactory().getSuccessForm('게시글 작성에 성공하셨습니다.', result));

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

        const result = await BoardService.getBoardById(boardId);
        
        return res.json(
            new FormFactory().getSuccessForm('게시글 불러오기에 성공했습니다.', result));

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
export const putBoardById = async (req, res, next) => {

    try {

        const boardPutDto = new BoardPutDto({ ...req.body });
        boardPutDto.setBoardId = +req.params.boardId;
        
        await new JoiValidator().validate(boardPutDto, boardPutDto._getJoiInstance());

        const result = await BoardService.putBoardById(boardPutDto);
        
        return res.json(
            new FormFactory().getSuccessForm('게시글 수정에 성공했습니다.', result));

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
export const delBoardById = async (req, res, next) => {

    try {
     
        const {
            params: { boardId },
            body: { author }
        } = req;
        const boardFkDto = new BoardFkValuesDto({ boardId, author });

        await new JoiValidator().validate(boardFkDto, boardFkDto._getJoiInstance());

        await BoardService.delBoardByDto(boardFkDto);
        
        return res.json(
            new FormFactory().getSuccessForm('게시글 삭제에 성공했습니다.', boardFkDto));

    } catch(err) {

        res.locals.error = err;

        return next();

    }

}

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const increaseBoardLike = async (req, res, next) => {

    try {

        const {
            params: { boardId },
            body: { author }
        } = req;
        const boardFkDto = new BoardFkValuesDto({ boardId, author });
    
        await new JoiValidator().validate(boardFkDto, boardFkDto._getJoiInstance());

        const { boardFkDto: boardFkDtoResult, isLikeUp } = await BoardService.increaseBoardLike(boardFkDto);
        return res.json(
            new FormFactory().getSuccessForm(`게시글 좋아요가 ${isLikeUp ? '+ 1' : '- 1'} 되었습니다.`, { ...boardFkDtoResult, isLikeUp }));

    } catch(err) {

        res.locals.error = err;

        return next();

    }
    
}