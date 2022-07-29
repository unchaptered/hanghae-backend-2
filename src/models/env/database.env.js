import 'dotenv/config';
import { classIterator } from '../_.loader.js';

export default class DatabaseEnv {

    HOST;
    USER;
    DATABASE;
    WAIT_FOR_CONNECTION;
    CONNECTION_LIMIT;
    [Symbol.iterator];

    constructor() {
        this.HOST = process.env.HOST;
        this.USER = process.env.USER;
        this.DATABASE = process.env.DATABASE;
        this.WAIT_FOR_CONNECTION = process.env.WAIT_FOR_CONNECTION;
        this.CONNECTION_LIMIT = process.env.CONNECTION_LIMIT;
        this[Symbol.iterator] = classIterator;
    }

}