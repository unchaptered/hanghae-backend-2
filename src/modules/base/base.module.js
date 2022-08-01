import { CustomException, UnkownServerError } from '../../models/_.loader.js';

/**
 * @method _exceptionHandler
 */
export default class BaseModule {

    constructor() {}

    /**
     * @param { Error | CustomException } err 
     * @returns { CustomException } `err`
     */
    _exceptionHandler(err) {

        if (err instanceof CustomException) return err;
        else return new UnkownServerError(`${err?.name} : ${err?.message}`);

    }

}