import Joi from 'joi';
import { UserEntity } from '../../entity/_.export.js';

/**
 * @extends UserEntity
 * @property `nickname` 닉네임
 * @property `password` 비밀번호
 */
export default class UserLoginDto  extends UserEntity {

    nickname;
    password;

    /** @param {{ nickname: string, password: string }} IUserLoginDto */
    constructor({ nickname, password }) {

        super({ nickname, password });

        this.nickname = nickname;
        this.password = password;

    }
    
    /** @override @returns { { nickname: Joi.StringSchema, password: Joi.StringSchema } } */
    _getJoiInstance() {
        return {
            nickname: Joi.string().min(3).max(50).required(),
            password: Joi.string().min(4).max(30).required()
        }
    }
}