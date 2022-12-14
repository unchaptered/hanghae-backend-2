import { JwtProvider } from '../../../modules/_.loader.js';
import { FormFactory } from '../../_.loader.js';

/**
 * req.headers.authorization 에 담긴 토큰이 유효하면,
 * req.body.userId 을 채워넣습니다.
 * 
 * @param { Request } req 
 * @param { Response } res 
 * @param { NextFunction } next 
 * @returns 
 */
export const accessGuard = (req, res, next) => {

    const formFactory = new FormFactory();

    if (!req.headers.authorization)
        return res.status(401).json(
            formFactory.getFailureForm('accessToken 이 누락되었습니다.'));

    const jwtProvider = new JwtProvider();
    const token = jwtProvider.extract(req.headers.authorization);

    try {

        const payload = jwtProvider.verifyToken(token);
        req.body.author = payload?.nickname ?? '';
        
        return next();

    } catch (err) {

        return res.status(401).json(
            formFactory.getFailureForm(`${err.name} : ${err.message}`));

    }


}