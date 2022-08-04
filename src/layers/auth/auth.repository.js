import { PoolConnection } from 'mysql2';
import { QueryBuilder, BoardQueryBuilder, DatabaseProvider } from '../../modules/_.loader.js';

/**
 * @param { PoolConnection } connection
 * @returns { Promise<boolean> }
 * */
export const isExistsUser = async (connection, author) => {
    // [ [ 쿼리 결과 ], [ 쿼리 결과 (상세히) ] ]
    const result = await connection.query(`SELECT * FROM user WHERE nickname = '${author}';`);

    return result[0].length === 1;
}