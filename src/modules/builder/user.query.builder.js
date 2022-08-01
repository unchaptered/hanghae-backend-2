import { UserJoinDto } from '../../models/dtos/_.export.js'

export default class UserQueryBulider {

    constructor() {}

    /**
     * mySql 에서 true 는 1로 저장이 됩니다.
     * JavaScript 에서 true 와 1은 암묵적으로 동일합니다.
     * 따라서, Boolean(1) 은 true 가 됩니다.
     * 
     * @param { UserJoinDto } userJoinDto @returns { string } */
    isExists(nickname) {
        return `SELECT
                    (CASE
                        WHEN count(nickname) = 0 THEN false
                        ELSE true
                    END) as isExists
                FROM user
                WHERE nickname = '${nickname}';`;
    }

    /** @param { string } nickname @returns { string } */
    getUser(nickname) {
        return `SELECT nickname, password FROM user WHERE nickname = '${nickname}';`;
    }

    /** @param { UserJoinDto } userJoinDto @returns { string } */
    createUser(nickname, password) {
        return `INSERT INTO user (nickname, password) VALUES ('${nickname}', '${password}');`;
    }
    
}