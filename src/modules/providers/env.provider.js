import { Env } from '../../models/_.loader.js';

/**
 * 안정적인 Env 공급자 클래스 입니다.
 * 
 * @property { Env: { BasicEnv, DatabaseEnv } } env
 * @static_method getEnvInstance
 * @static_method validateEnvInstance
 */
export default class EnvProvider {

    /** @type { Env }*/
    static env;

    constructor() {}

    /** @returns { Env } : env */
    static getEnvInstance() {

        if (this.env) return this.env;

        this.env = this.validateEnvInstance(new Env());

        return this.env;

    }

    /**
     * @param { Env } env 
     * @returns { Env } env
     * @throws { Error } 
     */
    static validateEnvInstance(env) {

        for (const val of env) {

            if (typeof val === 'object')
                for (const v of val) {
                    if (v === '' || v === undefined)
                        throw new Error('Empty Environment Values');

                }

            else if (val === '' || val === undefined)
                throw new Error('Empty Environment Values');

        }

        return env;
        
    }




}