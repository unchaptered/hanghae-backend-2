import { classIterator, BasicEnv, BcryptEnv, DatabaseEnv, JwtEnv } from '../_.loader.js';

/**
 * @property { JwtEnv } jwtEnv
 * @property { BasicEnv } basicEnv
 * @property { BcryptEnv } bcryptEnv
 * @property { DatabaseEnv } databaseEnv
 */
export default class Env {

    /** @type { JwtEnv } */
    jwtEnv;

    /** @type { BasicEnv } */
    basicEnv;

    /** @type { BcryptEnv } */
    bcryptEnv;

    /** @type { DatabaseEnv } */
    databaseEnv;
    
    [Symbol.iterator];

    constructor() {

        this.jwtEnv = new JwtEnv();
        this.basicEnv = new BasicEnv();
        this.bcryptEnv = new BcryptEnv();
        this.databaseEnv = new DatabaseEnv();
        this[Symbol.iterator] = classIterator;
        
    }
    
}