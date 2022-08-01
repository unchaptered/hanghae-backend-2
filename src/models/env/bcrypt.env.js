import 'dotenv/config';
import { classIterator } from '../_.loader.js';

/**
 * Bcrypt 공급자 클래스를 가동시키기 위한 최소한의 환경 변수 입니다.
 * 
 * @property { string } SALT
 */
export default class BcryptEnv {

    /** @type { number } */
    SALT;

    [Symbol.iterator]

    constructor() {
        
        this.SALT = +process.env.SALT;
        this[Symbol.iterator] = classIterator;

    }
}