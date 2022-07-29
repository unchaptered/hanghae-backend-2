// import Env from './env.js';
import App from './server.js';

import { EnvProvider, DatabaseProvider } from './modules/_.loader.js';

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

            const env = await EnvProvider.getEnvInstance();

            const pool = DatabaseProvider.getConnection(env.databaseEnv);
            const app = App.getAppInstance(env.basicEnv);

        } catch(err) {

            console.log(err);

        }
    
    }
)()