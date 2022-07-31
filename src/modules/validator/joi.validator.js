import Joi from 'joi';
import { CommentEntity, BoardEntity, UserEntity } from '../../models/entity/_.export.js';
import { BadRequestException, BadValidateException, CustomException, UnkownServerError } from '../../models/_.loader.js';

import { BaseModule } from '../_.loader.js';

/**
 * 검사를 위임 받아 진행할, 유효성 검사 클래스입니다.
 * 
 * @extends BaseModule
 * @method validate
 * @method _exceptionHandler
 */
export default class JoiValidator extends BaseModule {

    constructor() {
        super();
    }

    /**
     * @param { Class } dtoInstance 
     * @param { Joi.object } joiInstance 
     * @returns { Class } `dtoInstance`
     * @throws { CustomException } `-`
     */
    async validate(dtoInstance, joiInstance) {

        try {

            return await Joi.object(joiInstance).validateAsync({ ...dtoInstance });

        } catch(err) {

            throw this._exceptionHandler(err);

        }

    }

    /**
     * @override
     * @param { Error | CustomException } err 
     * @returns { CustomException } err
     */
    _exceptionHandler(err) {

        if (err?.name === 'ValidationError') return new BadValidateException(err?.message);
        else return new UnkownServerError(`${err.name} : ${err.message}`);

    }

}