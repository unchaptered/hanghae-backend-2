import mysql from 'mysql2';

export default class Sql {

    static pool;

    constructor() {}

    static setConnection(HOST, USER, DATABASE, WAIT_FOR_CONNECTION, CONNECTION_LIMIT) {

        if (this.pool) return this.pool;

        this.pool = mysql.createPool({
            host: HOST,
            user: USER,
            database: DATABASE,
            waitForConnections: WAIT_FOR_CONNECTION,
            connectionLimit: CONNECTION_LIMIT
        });

        return this.pool;

    }
    
}