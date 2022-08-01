import { NotFoundException } from '../../models/_.loader.js';


export const NotFoundedPage = (req, res, next) => {

    const pathname = req.baseUrl === '' ? req.path : req.baseUrl;
    const method = req.method;

    res.locals.error = new NotFoundException(`${method} ${pathname} 경로는 존재하지 않습니다.`);
    
    return next();
    
}