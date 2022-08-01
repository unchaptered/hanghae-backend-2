import { FormFactory, exceptionHandler } from '../_.loader.js';

/**
 * @param { Request } req 
 * @param { Response } res 
 * @param { NextFunction } next 
 * @returns 
 */
export const exceptionMiddleware = (req, res, next) => {

    const formFactory = res.locals.formFactory ?? new FormFactory();
    const error = res.locals.error;

    const except = exceptionHandler(error);

    return res.status(except.statusCode).json(
        formFactory.getFailureForm(except.message, {}));

}