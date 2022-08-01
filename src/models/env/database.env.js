import 'dotenv/config';
import { classIterator } from '../_.loader.js';

/**
 * Database 를 가동시키기 위한 최소한의 환경 변수입니다.
 * 
 * @property { string } HOST
 * @property { string } USER
 * @property { string } DATABASE
 * @property { string } WAIT_FOR_CONNECTION
 * @property { number } CONNECTION_LIMIT
 */
export default class DatabaseEnv {

    /** @type { string } */
    HOST;

    /** @type { string } */ 
    USER;

    /** @type { string } */ 
    DATABASE;

    /** @type { string } */ 
    PASSWORD;

    /** @type { string } */ 
    WAIT_FOR_CONNECTION;

    /** @type { string } */ 
    CONNECTION_LIMIT;
    
    [Symbol.iterator];

    constructor() {
        this.HOST = process.env.MYSQL_HOST;
        this.USER = process.env.MYSQL_USER;
        this.DATABASE = process.env.MYSQL_DATABASE;
        this.PASSWORD = process.env.MYSQL_PASSWORD;
        this.WAIT_FOR_CONNECTION = process.env.MYSQL_WAIT_FOR_CONNECTION;
        this.CONNECTION_LIMIT = +process.env.MYSQL_CONNECTION_LIMIT;
        this[Symbol.iterator] = classIterator;
    }

}