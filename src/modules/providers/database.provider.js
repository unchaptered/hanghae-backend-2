import mysql from 'mysql2';
import { DatabaseEnv } from '../../models/_.loader.js';

export default class DatabaseProvider {

    static pool;

    constructor() {}

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