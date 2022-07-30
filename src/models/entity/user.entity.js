/**
 * @property `nickanme` 사용자 이름
 * @property `password` 비밀 번호
 */
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

    constructor(nickname, password) {

        this.nickname = nickname;
        this.password = password;
        
    }

}