import mysql from 'mysql2/promise';
// title : npm mysql2: Too many connections when using promises and a connection pool
// link : https://stackoverflow.com/questions/41252627/npm-mysql2-too-many-connections-when-using-promises-and-a-connection-pool

import { BadDatabaseConnection, DatabaseEnv } from '../../models/_.loader.js';
import { BaseModule } from '../_.loader.js';

/**
 * DB Pooling 을 위한 DB 공급자 클래스입니다.
 * 
 * @static { mysql.Pool } pool
 * @static_method getConnection
 */
export default class DatabaseProvider extends BaseModule {

    /**@type { mysql.Pool }*/
    static pool;

    constructor() {
        super();
    }

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

    /** @returns { Promise<void> } @throws { BadDatabaseConnection } */
    static async validateConnection() {

        try {

            const conn = await DatabaseProvider.pool.getConnection();
            conn.release();

        } catch(err) {
            
            throw this._exceptionHandler(err);

        }

    }

    /** @returns { Promise<mysql.PoolConnection> } @throws { BadDatabaseConnection } */
    async getConnection() {
        try {

            const connection = await DatabaseProvider.pool.getConnection();
            return connection;

        } catch(err) {

            throw this._exceptionHandler(err);

        }
    }

    
    /** @override @param { Error | CustomException } err @returns { BadDatabaseConnection } */
     _exceptionHandler(err) {

        if (err instanceof CustomException) return err;
        else return new BadDatabaseConnection(`${err?.name} : ${err?.message}`);

    }
    
    
}