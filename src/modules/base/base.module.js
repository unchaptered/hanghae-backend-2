import { CustomException, UnkownServerError } from '../../models/_.loader.js';

export default class BaseModule {

    constructor() {}

    _exceptionHandler(err) {

        if (err instanceof CustomException) return err;
        else return new UnkownServerError(`${err?.name} : ${err?.message}`);

    }

}