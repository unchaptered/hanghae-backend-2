/**
 * @property `nickanme` 사용자 이름
 * @property `password` 비밀 번호
 */
export default class UserEntity {
    
    nickname;
    password;

    constructor(nickname, password) {

        this.nickname = nickname;
        this.password = password;
        
    }

}