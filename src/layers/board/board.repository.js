import { PoolConnection } from 'mysql2';
import { QueryBuilder, BoardQueryBuilder, DatabaseProvider } from '../../modules/_.loader.js';

import { BoardFkValuesDto, BoardPostDto, BoardPutDto } from '../../models/dtos/_.export.js';


/**
 * @param { PoolConnection } connection
 * @param { number } boardId
 * @returns { Promise<boolean> }
 * */
export const isExistsBoard = async (connection, boardId) => {
    // [ [ 쿼리 결과 ], [ 쿼리 결과 (상세히) ] ]
    const result = await connection.query(`SELECT * FROM board WHERE board_id = ${boardId};`);

    return result[0].length === 1;

}

/**
 * @param { PoolConnection } connection
 * @returns { Promise<[{ boardId: number, author: string, title: string, context: string }] | null> }
 */
export const getBoards = async (connection) => {

    const result = await connection.query(`SELECT board_id as boardId, author, title, context FROM board LIMIT 10;`);

    return result[0];

}

/**
 * @param { PoolConnection } connection
 * @param { number } boardId
 * @returns { Promise<{ boardId: number, author: string, title: string, context: string } | null> }
 */
export const getBoardById = async (connection, boardId) => {

    const result = await connection.query(`SELECT board_id as boardId, author, title, context FROM board WHERE board_id = ${boardId};`);

    return result[0][0] ?? null;

}

/**
 * @param { PoolConnection } connection
 * @param { BoardPostDto } board
 * @returns { Promise<{ boardId: number | null }> }
 */
export const createBoard = async (connection, board) => {

    // INSERT 문은, [ ResultSetHeader: {} ] 의 형태로 나온다.
    const result = await connection.query(`INSERT INTO board (author, title, context) VALUES ('${board.author}', '${board.title}', '${board.context}');`);
    
    return result[0]?.affectedRows === 1
        ? { boardId: result[0].insertId }
        : { boardId: null };

}

/**
 * @param { PoolConnection } connection
 * @param { BoardPutDto } board
 * @returns { Promise<{ isSuccess: boolean }> }
 */
export const updateBoard = async (connection, board) => {

    const query = `UPDATE board SET title = '${board.title}', context = '${board.context}' WHERE board_id = ${board.getBoardId};`;

    const result = await connection.query(query);

    return result[0]?.affectedRows === 1
        ? { isSuccess: true }
        : { isSuccess: false };

}

/**
 * @param { PoolConnection } connection
 * @param { BoardFkValuesDto } board
 * @returns { Promise<{ isSuccess: boolean }> }
 */
export const deleteBoard = async (connection, board) => {

    const result = await connection.query(`DELETE FROM board WHERE board_id = ${board.getBoardId} AND author = '${board.author}';`);

    return result[0]?.affectedRows === 1
        ? { isSuccess: true }
        : { isSuccess: false };

};

/**
 * @param { PoolConnection } connection
 * @param { BoardFkValuesDto } board
 * @returns { Promise<{ isSuccess: boolean, isLikeUp: boolean | null }> }
 */
export const toggleBoardLike = async (connection, board) => {

    const isLikedResult = await connection.query(`SELECT * FROM board_like_list WHERE board_id = ${board.boardId};`);
    const toggler = {
        true: async (connection, board) => await connection.query(`DELETE FROM board_like_list WHERE board_id = ${board.boardId} AND author = '${board.author}';`),
        false: async (connection, board) => await connection.query(`INSERT INTO board_like_list (board_id, author) VALUES (${board.boardId}, '${board.author}');`)
    };

    // isLikedResult[0].length 가 1이라는 뜻은, 좋아요가 눌러져 있는 상태이며 따라서 true 로 반환하였다.
    const isLiked = new Boolean(isLikedResult[0].length);
    const result = await toggler[isLiked](connection, board);

    return result[0]?.affectedRows === 1
        ? { isSuccess: true, isLikeUp: !isLiked.valueOf() }
        : { isSuccess: false, isLikeUp: null };

}