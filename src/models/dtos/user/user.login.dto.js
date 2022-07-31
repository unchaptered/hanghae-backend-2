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

}