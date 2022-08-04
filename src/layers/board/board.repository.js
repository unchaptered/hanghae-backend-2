import { PoolConnection } from 'mysql2';
import { QueryBuilder, BoardQueryBuilder, DatabaseProvider } from '../../modules/_.loader.js';

import { BoardDeleteDto, BoardPostDto, BoardPutDto } from '../../models/dtos/_.export.js';


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
        : { boardId: null }

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
        : { isSuccess: false }

}

/**
 * @param { PoolConnection } connection
 * @param { BoardDeleteDto } board
 * @returns { Promise<{ isSuccess: boolean }> }
 */
export const deleteBoard = async (connection, board) => {

    const result = await connection.query(`DELETE FROM board WHERE board_id = ${board.getBoardId} AND author = '${board.author}';`);

    return result[0]?.affectedRows === 1
        ? { isSuccess: true }
        : { isSuccess: false }

};