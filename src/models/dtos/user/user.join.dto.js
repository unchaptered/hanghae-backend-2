import Joi from 'joi';
import { UserEntity } from '../../entity/_.export.js';

/**
 * 
 * @extends UserEntity
 * @property `nickname` 닉네임
 * @property `password` 비밀번호
 * @property `passwordConrfirm` 비밀번호 확인
 */
export default class UserJoinDto extends UserEntity {

    nickname;
    password;
    passwordConfirm;

    /** @param {{ nickname: string, password: string, password: string }} IUserJoinDto */
    constructor({ nickname, password, passwordConfirm }) {

        super({ nickname, password });

        this.nickname = nickname;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        
    }

    /** @override @returns { { nickname: Joi.StringSchema, password: Joi.StringSchema, passwordConfirm: Joi.Reference } } */
    _getJoiInstance() {
        return {
            nickname: Joi.string().min(3).max(50).required(),
            password: Joi.string().min(4).max(50).required(),
            passwordConfirm: Joi.ref('password')
        }
    }


}