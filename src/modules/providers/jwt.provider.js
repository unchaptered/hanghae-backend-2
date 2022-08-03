import Jwt from 'jsonwebtoken';
import { JwtEnv } from '../../models/_.loader.js';

export default class JwtProvider {

    static SECRET;
    static ALGORITHM;

    constructor() {}

    /** @param { JwtEnv } jwtEnv */
    static initialize(jwtEnv) {

        this.SECRET = jwtEnv.SECRET;
        this.ALGORITHM = jwtEnv.ALGORITHM;
        
    }

    /**
     * @param { object } payload 
     * @returns { string }
     */
    sign(payload) {

        return Jwt.sign(payload, JwtProvider.SECRET, {
            algorithm: JwtProvider.ALGORITHM
        });

    }

    /**
     * @param { string } token 
     * @returns { string | Jwt.payload }
     * @throws `JsonWebTokenError`: invalid signature
     */
    verifyToken(token) {

        return Jwt.verify(token, JwtProvider.SECRET);

    }

    /**
     * @param { string } token 
     * @returns { string | Jwt.payload}
     */
    decodeToken(token) {

        return Jwt.decode(token);

    }

    /**
     * Bearer jsonwebtoken
     * @param { string } bearerToken 
     */
    extract(bearerToken) {

        return bearerToken.substring(7);
        
    }
    

}