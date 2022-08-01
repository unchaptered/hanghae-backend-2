import UserQueryBulider from './user.query.builder.js';
import BoardQueryBuilder from './board.query.builder.js';
import CommentQueryBulider from './comment.query.builder.js';

export default class QueryBuilder {

    constructor() {}

    /** @returns { string } */
    startTransaction() {
        return 'START TRANSACTION;';
    }

    /** @returns { string } */
    applyChanges() {
        return 'COMMIT;';
    }

    /** @returns { string } */
    denyChanges() {
        return 'ROLLBACK;';
    }

    /** @returns { UserQueryBulider } userQueryBuilder */
    getUserQueryBulider() {
        return new UserQueryBulider();
    }

    /** @returns { BoardQueryBuilder } boardQueryBuilder */
    getBoardQueryBuilder() {
        return new BoardQueryBuilder();
    }

    /** @returns { CommentQueryBulider } commentQueryBuilder */
    getCommentQueryBuilder() {
        return new CommentQueryBulider();
    }

}