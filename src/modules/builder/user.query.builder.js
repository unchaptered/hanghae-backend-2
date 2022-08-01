import { UserJoinDto } from '../../models/dtos/_.export.js'

export default class UserQueryBulider {

    constructor() {}

    /** @param { UserJoinDto } userJoinDto @returns { string } */
    isExists(nickname) {
        return `SELECT
                    (CASE
                        WHEN count(nickname) = 0 THEN false
                        ELSE true
                    END) as isExists
                FROM user
                WHERE nickname = '${nickname};'`;
    }

    /** @param { string } nickname @returns { string } */
    getUser(nickname) {
        return `SELECT nickname, password FROM user WHERE nickanme = '${nickname}';`;
    }

    /** @param { UserJoinDto } userJoinDto @returns { string } */
    createUser(nickname, password) {
        return `INSERT INTO user (nickname, password) VALUES ('${nickname}', '${password}');`;
    }
    
}