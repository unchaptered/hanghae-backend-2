import Joi from 'joi';
import { CommentEntity } from '../../entity/_.export.js';

/**
 * @deprecated
 * 
 * @extends CommentDto
 * @method _getJoiInstance
 * @property { number } commentId
 * @property { number } boardId
 * @property { string } author
 * @property { string } context
 */
export default class CommentDto extends CommentEntity {

    /** @type { number } commentId */
    commentId;

    /** @type { number } boardId */
    boardId;

    /** @type { string } author */
    author;

    /** @type { string } context */
    context;

    /** @param {{ author: string, context: string }} ICommentDto */
    constructor({ author, context, boardId, commentId }) {

        super({ author, context });

        this.commentId = commentId;
        this.boardId = boardId;
        this.author = author;
        this.context = context;

    }

    /** @param { number } commentId */
    set setCommentId(commentId) {
        this.commentId = commentId;
    }

    /** @returns { number } commentId */
    get getCommentId() {
        return this.commentId;
    }

    /** @override @returns {{ commentId: Joi.NumberSchema, author: Joi.StringSchema, context: Joi.StringSchema } } */
    _getJoiInstance() {
        return {
            commentId: Joi.number(),
            boardId: Joi.number(),
            author: Joi.string().min(1).max(50).required(),
            context: Joi.string().min(1).max(300).required()
        }
    }



}