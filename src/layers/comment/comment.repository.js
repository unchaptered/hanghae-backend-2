import { PoolConnection } from 'mysql2';
import { CommentFkValuesDto, CommentPostDto, CommentPutDto } from '../../models/dtos/_.export.js';
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

export const getAllCommentByBoardId = async (connection, boardId) => {
    
    const result = await connection.query(`SELECT comment_id as commentId, board_id as boardId, author, context FROM comment WHERE board_id = ${boardId} LIMIT 10;`);

    return result[0];
    
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
 * @param { CommentFkValuesDto } comment 
 * @returns { Promise<{ isSuccess: boolean }> }
 */
export const deleteComment = async (connection, comment) => {

    const result = await connection.query(`DELETE FROM comment WHERE comment_id = ${comment.commentId};`);

    return result[0]?.affectedRows === 1
        ? { isSuccess: true }
        : { isSuccess: false }
        
};

/**
 * @param { PoolConnection } connection
 * @param { CommentFkValuesDto } comment
 * @returns { Promise<{ isSuccess: boolean, isLikeUp: boolean | null }> }
 */
export const toggleCommentLike = async (connection, comment) => {

    const isLikedResult = await connection.query(`SELECT * FROM comment_like_list WHERE comment_id = ${comment.commentId};`);
    const toggler = {
        true: async (connection, comment) => await connection.query(`DELETE FROM comment_like_list WHERE comment_id = ${comment.commentId} AND author = '${comment.author}';`),
        false: async (connection, comment) => await connection.query(`INSERT INTO comment_like_list (comment_id, author) VALUES (${comment.commentId}, '${comment.author}');`)
    };

    // isLikedResult[0].length 가 1이라는 뜻은, 좋아요가 눌러져 있는 상태이며 따라서 true 로 반환하였다.
    const isLiked = new Boolean(isLikedResult[0].length);
    const result = await toggler[isLiked](connection, comment);

    return result[0]?.affectedRows === 1
        ? { isSuccess: true, isLikeUp: !isLiked.valueOf() }
        : { isSuccess: false, isLikeUp: null };

}