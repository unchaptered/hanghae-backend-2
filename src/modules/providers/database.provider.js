import mysql from 'mysql2';
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
            waitForConnections: databaseEnv.WAIT_FOR_CONNECTION,
            connectionLimit: databaseEnv.CONNECTION_LIMIT
        });

        return this.pool;

    }
    
}