import Express from 'express';
import { AuthRouter, BoardRouter, CommentRouter } from './layers/_.loader.js';
import { exceptionMiddleware } from './modules/_.loader.js';
import { GlobalController } from './layers/controllers/_.export.js';

/**
 * `App` class is craeted for single instance.
 * 
 * If you don't know Singleton Pattern.
 * 
 * Please visit : https://github.com/Boiler-Express/.github/blob/main/notes/design/SINGLETON.md
 */
export default class App {

    static app;

    constructor() {}

    /**
     * getAppInstance should return `Express Instance`
     * 
     * @param {*} MODE 
     * @param {*} PORT 
     * @returns `Express Instance`
     */
    static getAppInstance(basicEnv) {

        if (this.app) return this.app;

        this.app = Express();

        this.app.use(Express.json());
        this.app.use(Express.urlencoded({ extended: true }));

        this.app.use('/auth', AuthRouter);
        this.app.use('/board', BoardRouter);
        this.app.use('/comment', CommentRouter);

        this.app.use('*', GlobalController.NotFoundedPage);

        this.app.use(exceptionMiddleware);

        this.app.listen(basicEnv.PORT, () => {
            if (basicEnv.MODE !== 'test') console.log(`Server is running on ${basicEnv.PORT}, ${basicEnv.MODE}`);
        });

        return this.app;

    }

}