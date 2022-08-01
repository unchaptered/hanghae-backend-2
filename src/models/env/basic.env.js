import 'dotenv/config';
import { classIterator } from '../_.loader.js';

export default class BasicEnv {

    MODE;
    PORT;
    [Symbol.iterator]

    constructor() {
        this.MODE = process.env.NODE_ENV;
        this.PORT = +process.env.PORT;
        this[Symbol.iterator] = classIterator;
    }

}