import { classIterator } from '../_.loaders.js';
import BasicEnv from './basic.env.js';
import DatabaseEnv from './database.env.js';

export default class Env {

    basicEnv;
    databaseEnv;
    [Symbol.iterator];

    constructor() {
        this.basicEnv = new BasicEnv();
        this.databaseEnv = new DatabaseEnv();
        this[Symbol.iterator] = classIterator;
    }
    
}