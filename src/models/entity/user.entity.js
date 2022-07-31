import Joi from 'joi';
import { BaseEntity } from './_.export.js';

/**
 * @extends BaseEntity
 * @method _getJoiInstance
 * @property `nickname` 이름
 * @property `password` 비밀번호
 */
export default class UserEntity extends BaseEntity {

    nickname;
    password;

    /** @param {{ nickname: string, password: string }} IUserEntity */
    constructor({ nickname, password }) {

        super();

        this.nickname = nickname;
        this.password = password;
        
    }

    /**
     * @override
     * @returns { {  nickname: Joi.string, password: Joi.string } } joiInstance
     */
    _getJoiInstance() {
        return {
            nickname: Joi.string().min(3).max(50),
            password: Joi.string().min(4).max(30)
        }
    }

}