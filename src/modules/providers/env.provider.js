import { Env } from '../../models/_.loaders.js';


export default class EnvProvider {

    env;

    constructor() {}

    static async getEnvInstance() {

        if (this.env) return this.env;

        this.env = await this.validateEnvInstance(new Env());

        return this.env;

    }

    static async validateEnvInstance(env) {

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