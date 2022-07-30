import Joi from 'joi';
import { CommentEntity, BoardEntity, UserEntity } from '../../models/entity/_.export.js';
import { BadRequestException, BadValidateException, UnkownServerError } from '../../models/_.loader.js';

import { BaseModule } from '../_.loader.js';

export default class JoiValidator extends BaseModule {

    constructor() {
        super();
    }

    async validate(dtoInstance, joiInstance) {

        try {

            return await Joi.object(joiInstance).validateAsync({ ...dtoInstance });

        } catch(err) {

            throw this._exceptionHandler(err);

        }

    }

    _exceptionHandler(err) {

        if (err?.name === 'ValidationError') return new BadValidateException(err?.message);
        else return new UnkownServerError(`${err.name} : ${err.message}`);

    }

}