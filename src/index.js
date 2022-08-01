import App from './server.js';

import { EnvProvider, BcryptProvider, JwtProvider, DatabaseProvider } from './modules/_.loader.js';

(
    /**
     * I want to hide Logic of `index.js`.
     * 
     * This skill for protect Singleton Pattern.
     * 
     * Please visit : https://github.com/Boiler-Express/.github/blob/main/notes/design/SINGLETON.md
     */
    async () => {
        
        try {

            const env = EnvProvider.getEnvInstance();

            BcryptProvider.initialize(env.bcryptEnv);
            JwtProvider.initialize(env.jwtEnv);

            const pool = DatabaseProvider.getConnection(env.databaseEnv);
            const result = await DatabaseProvider.validateConnection();
            
            const app = App.getAppInstance(env.basicEnv);

        } catch(err) {

            console.error('초기 실행 에러');
            console.error(err);

        }
    
    }
)()