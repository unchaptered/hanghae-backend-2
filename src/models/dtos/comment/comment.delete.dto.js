import Joi from 'joi';
import { BaseEntity, CommentEntity } from '../../entity/_.export.js';

/**
 * @extends CommentEntity
 * @method _getJoiInstance
 * @property { number } commentId
 * @property { number } boardId
 * @property { string } author
 */
export default class CommentDeleteDto extends BaseEntity {

    /** @type { number } commentId */
    commentId;

    /** @type { number } boardId */
    boardId;

    /** @type { string } author */
    author;


    /** @param {{ commentId: number, boardId: number, author: string }} ICommentDeleteDto */
    constructor({ commentId, boardId, author }) {

        super();

        this.commentId = +commentId;
        this.boardId = +boardId;
        this.author = author;

    }

    /** @override @returns {{ commentId: Joi.NumberSchema, boardId: Joi.NumberSchema, author: Joi.StringSchema, context: Joi.StringSchema }} */
    _getJoiInstance() {
        return {
            commentId: Joi.number().required(),
            boardId: Joi.number().required(),
            author: Joi.string().min(1).max(50).required()
        }
    }

}