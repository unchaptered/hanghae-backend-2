import UserEntity from '../entity/user.entity.js';

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

    constructor(nickname, password, passwordConfirm) {

        supser(nickname, password);
        this.passwordConfirm = passwordConfirm;
        
    }

}