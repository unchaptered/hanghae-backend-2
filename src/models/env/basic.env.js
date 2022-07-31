import 'dotenv/config';
import { classIterator } from '../_.loader.js';

/**
 * Express 를 가동시키기 위한 최소한의 환경 변수입니다.
 * 
 * @property { string } MODE
 * @property { string } PORT
 */
export default class BasicEnv {

    /** @type { string } */
    MODE;

    /** @type { number } */
    PORT;

    [Symbol.iterator]

    constructor() {
        this.MODE = process.env.NODE_ENV;
        this.PORT = +process.env.PORT;
        this[Symbol.iterator] = classIterator;
    }

}