import { classIterator } from '../_.loader.js';
import BasicEnv from './basic.env.js';
import DatabaseEnv from './database.env.js';

/**
 * @property { BasicEnv } basicEnv
 * @property { DatabaseEnv } databaseEnv
 */
export default class Env {

    /** @type { BasicEnv } basicEnv */
    basicEnv;

    /** @type { DatabaseEnv } basicEnv */
    databaseEnv;
    
    [Symbol.iterator];

    constructor() {
        this.basicEnv = new BasicEnv();
        this.databaseEnv = new DatabaseEnv();
        this[Symbol.iterator] = classIterator;
    }
    
}