import { UserEntity } from '../entity/_.export.js';

/**
 * 
 * @extends UserEntity
 * @property `nickname` 닉네임
 * @property `password` 비밀번호
 */
export default class UserLoginDto  extends UserEntity {

    nickname;
    password;


    constructor(nickname, password) {

        super(nickname, password);

    }
    
}