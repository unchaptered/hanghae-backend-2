import { PoolConnection } from 'mysql2';
import { CommentDeleteDto, CommentPostDto, CommentPutDto } from '../../models/dtos/_.export.js';
import { QueryBuilder, BoardQueryBuilder, DatabaseProvider } from '../../modules/_.loader.js';

/**
 * @param { PoolConnection } connection
 * @param { number } commentId
 * @returns { Promise<boolean> }
 * */
 export const isExistsComment = async (connection, commentId) => {
    // [ [ 쿼리 결과 ], [ 쿼리 결과 (상세히) ] ]
    const result = await connection.query(`SELECT * FROM comment WHERE comment_id = ${commentId};`);

    return result[0].length === 1;

}

/**
 * @param { PoolConnection } connection
 * @param { CommentPostDto } comment
 * @returns { Promise<{ commentId: number | null }> }
 */
export const createComment = async (connection, comment) => {
    

    const result = await connection.query(`INSERT INTO comment (board_id, author, context) VALUES (${comment.boardId}, '${comment.author}', '${comment.context}');`);
    
    return result[0]?.affectedRows === 1
        ? { commentId: result[0].insertId }
        : { commentId: null }

}

/**
 * @param { PoolConnection } connection
 * @param { CommentPutDto } comment
 * @returns { Promise<{ commentId: number | null }> }
 */
export const updateComment = async (connection, comment) => {

    const query = `UPDATE comment SET context = '${comment.context}' WHERE comment_id = ${comment.commentId};`;

    const result = await connection.query(query);

    return result[0]?.affectedRows === 1
        ? { isSuccess: true }
        : { isSuccess: false };

}

/**
 * 
 * @param { PoolConnection } connection 
 * @param { CommentDeleteDto } comment 
 * @returns { Promise<{ isSuccess: boolean }> }
 */
export const deleteComment = async (connection, comment) => {

    const result = await connection.query(`DELETE FROM comment WHERE comment_id = ${comment.commentId};`);

    return result[0]?.affectedRows === 1
        ? { isSuccess: true }
        : { isSuccess: false }
        
};