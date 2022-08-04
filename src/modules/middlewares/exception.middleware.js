import { FormFactory, exceptionHandler } from '../_.loader.js';

/**
 * @param { Request } req 
 * @param { Response } res 
 * @param { NextFunction } next 
 * @returns 
 */
export const exceptionMiddleware = (req, res, next) => {

    const formFactory = res.locals.formFactory ?? new FormFactory();

    if (Object.values(res.locals).length === 0)
        return res.status(404).json(
            new FormFactory().getFailureForm('지원하지 않는 경로입니다.'));
    
    const error = res.locals?.error;
    if (!error)
        return res.status(500).json(
            new FormFactory().getFailureForm('알 수 없는 에러가 발생하였습니다. (핸들러 에러)'));

    const except = exceptionHandler(error);
    return res.status(except.statusCode).json(
        formFactory.getFailureForm(except.message, {}));

}