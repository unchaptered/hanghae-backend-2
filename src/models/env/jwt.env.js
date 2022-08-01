import 'dotenv/config';
import { classIterator } from '../_.loader.js';

/**
 * Jwt 공급자 클래스를 가동시키기 위한 최소한의 환경 변수 입니다.
 * 
 * @property { string } SECRET
 * @property { string } ALGORITHM
 */
export default class JwtEnv {

    /** @type { string } */
    SECRET;

    /** @type { string } */
    ALGORITHM;

    [Symbol.iterator]

    constructor() {

        this.SECRET = process.env.JWT_SECRET;
        this.ALGORITHM = process.env.JWT_ALGORITHM;
        this[Symbol.iterator] = classIterator;

    }

}