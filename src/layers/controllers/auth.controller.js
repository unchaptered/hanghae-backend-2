import Joi from 'joi';
import { AuthService } from '../services/_.export.js';
import { FormFactory, JoiValidator } from '../../modules/_.loader.js';
import { UserEntity } from '../../models/entity/_.export.js';
import { UserJoinDto, UserLoginDto } from '../../models/dtos/_.export.js';

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const join = async (req, res, next) => {

    try {

        const userJoinDto = new UserJoinDto({ ...req.body });
        const userJoi = userJoinDto._getJoiInstance();
        
        const joiValidator = new JoiValidator();

        await joiValidator.validate(userJoinDto, {
            nickname: userJoi.nickname.required(),
            password: userJoi.password.required(),
            passwordConfirm: Joi.ref('password')
        });

        const result = await AuthService.join(result);
        
        const formFactory = new FormFactory();
        return res.json(
            formFactory.getSuccessForm('회원가입에 성공하셨습니다.', result ));

    } catch (err) {

        res.locals.error = err;

        return next();
        
    }

};

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const login = async (req, res, next) => {

    try {

        const userLoginDto = new UserLoginDto({ ...req.body });
        const userJoi = userLoginDto._getJoiInstance();

        const joiValidator = new JoiValidator();
        await joiValidator.validate(userLoginDto, {
            nickname: userJoi.nickname.required(),
            password: userJoi.password.required()
        });

        const result = await AuthService.login(userLoginDto);

        const formFactory = new FormFactory();
        return res.json(
            formFactory.getSuccessForm('로그인에 성공하셨습니다.', result ));

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

    return res.json(formFactory.getSuccessForm('myProfile'));

};

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const myBoard = (req, res, next) => {

    const formFactory = new FormFactory();

    return res.json(formFactory.getSuccessForm('myBoard'));

};

/** @param { Request } req @param { Response } res @param { NextFunction } next */
export const myComment = (req, res, next) => {

    const formFactory = new FormFactory();

    return res.json(formFactory.getSuccessForm('myComment'));

};