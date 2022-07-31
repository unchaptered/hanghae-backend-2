import { BoardDto, BoardPostDto, BoardPutDto } from '../../models/dtos/_.export.js';

/** @param { BoardPostDto } boardPostDto */
export const postBoard = async (boardPostDto) => {
    return boardPostDto;
}

/**
 * @param { number } boardId
 * @returns { boardId: number }
 */
export const getBoardById = async (boardId) => {
    return { boardId }
}


/** @param { BoardPutDto } boardPutDto */
export const putBoardById = async (boardPutDto) => {
    return boardPutDto
}

/**
 * @param { number } boardId
 * @returns { boardId: number }
 */
export const delBoardById = async (boardId) => {
    return { boardId }
}