import mysql from 'mysql2/promise';
// title : npm mysql2: Too many connections when using promises and a connection pool
// link : https://stackoverflow.com/questions/41252627/npm-mysql2-too-many-connections-when-using-promises-and-a-connection-pool

import { DatabaseEnv } from '../../models/_.loader.js';

/**
 * DB Pooling 을 위한 DB 공급자 클래스입니다.
 * 
 * @static { mysql.Pool } pool
 * @static_method getConnection
 */
export default class DatabaseProvider {

    /**@type { mysql.Pool }*/
    static pool;

    constructor() {}

    /**
     * @param { DatabaseEnv } databaseEnv 
     * @returns { mysql.Pool } pool
     */
    static getConnection(databaseEnv) {

        if (this.pool) return this.pool;
        
        this.pool = mysql.createPool({
            host: databaseEnv.HOST,
            user: databaseEnv.USER,
            database: databaseEnv.DATABASE,
            password: databaseEnv.PASSWORD,
            waitForConnections: databaseEnv.WAIT_FOR_CONNECTION,
            connectionLimit: databaseEnv.CONNECTION_LIMIT
        });

        return this.pool;

    }

    /**
     * @returns { Promise<void> }
     * @throws { Error }
     * */
    static async validateConnection() {

        try {

            const conn = await DatabaseProvider.pool.getConnection();
            conn.release();

        } catch(err) {
            
            throw err;

        }

    }

    /** @returns { Promise<mysql.PoolConnection> } */
    async getConnection() {
        return await DatabaseProvider.pool.getConnection();
    }
    
}