import Env from './env.js';
import Sql from './sql.js';
import App from './server.js';


(
    /**
     * I want to hide Logic of `index.js`.
     * 
     * This skill for protect Singleton Pattern.
     * 
     * Please visit : https://github.com/Boiler-Express/.github/blob/main/notes/design/SINGLETON.md
     */
    () => {

        const {
            MODE, PORT,
            HOST, USER, DATABASE, WAIT_FOR_CONNECTION, CONNECTION_LIMIT
        } = Env.getEnvInstance();

        const pool = Sql.setConnection(HOST, USER, DATABASE, WAIT_FOR_CONNECTION, CONNECTION_LIMIT);
        const app = App.getAppInstance(MODE, PORT);
    
    }
)()