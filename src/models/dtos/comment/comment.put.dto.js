import Joi from 'joi';
import { CommentEntity } from '../../entity/_.export.js';

/**
 * @extends CommentEntity
 * @method _getJoiInstance
 * @property { number } commentId
 * @property { number } boardId
 * @property { string } author
 * @property { string } context
 */
export default class CommentPutDto extends CommentEntity {

    /** @type { number } commentId */
    commentId;

    /** @type { number } boardId */
    boardId;

    /** @type { string } author */
    author;

    /** @type { string } context */
    context;

    /** @param {{ author: string, context: string, boardId: number }} ICommentPutDto */
    constructor({ author, context, boardId }) {

        super({author, context});

        this.author = author;
        this.context = context;
        this.boardId = +boardId;

    }

    /** @param { number } commentId */
    set setCommentId(commentId) {
        this.commentId = +commentId;
    }

    /** @returns { number } commentId */
    get getCommentId() {
        return this.commentId;
    }

    /** @override @returns {{ commentId: Joi.NumberSchema, boardId: Joi.NumberSchema, author: Joi.StringSchema, context: Joi.StringSchema }} */
    _getJoiInstance() {
        return {
            commentId: Joi.number().required(),
            boardId: Joi.number().required(),
            author: Joi.string().min(1).max(50).required(),
            context: Joi.string().min(1).max(300).required()
        }
    }



}