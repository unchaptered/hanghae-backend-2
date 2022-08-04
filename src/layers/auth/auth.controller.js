import Joi from 'joi';

// Models
import { UserEntity } from '../../models/entity/_.export.js';
import { UserJoinDto, UserLoginDto } from '../../models/dtos/_.export.js';

// Modules
import { AuthService } from '../_.layer.loader.js';
import { FormFactory, JoiValidator } from '../../modules/_.loader.js';


/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const join = async (req, res, next) => {

    try {

        const userJoinDto = new UserJoinDto({ ...req.body });
        
        await new JoiValidator().validate(userJoinDto, userJoinDto._getJoiInstance());

        const result = await AuthService.join(userJoinDto);

        return res.json(
            new FormFactory().getSuccessForm('회원가입에 성공하셨습니다.', result ));
            
    } catch (err) {

        res.locals.error = err;

        return next();
        
    }

};

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const login = async (req, res, next) => {

    try {

        const userLoginDto = new UserLoginDto({ ...req.body });

        await new JoiValidator().validate(userLoginDto, userLoginDto._getJoiInstance());

        const result = await AuthService.login(userLoginDto);

        return res.json(
            new FormFactory().getSuccessForm('로그인에 성공하셨습니다.', result ));

    } catch (err) {

        res.locals.error = err;

        return next();
        
    }

};

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const isExistsUser = (req, res, next) => {

    const formFactory = new FormFactory();

    return res.json(formFactory.getSuccessForm('isExistsUser'));
    
}

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const myProfile = (req, res, next) => {

    const formFactory = new FormFactory();

    return res.json(formFactory.getSuccessForm('미구현 항목'));

};

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const myBoard = (req, res, next) => {

    const formFactory = new FormFactory();

    return res.json(formFactory.getSuccessForm('미구현 항목'));

};

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const myComment = (req, res, next) => {

    const formFactory = new FormFactory();

    return res.json(formFactory.getSuccessForm('미구현 항목'));

};