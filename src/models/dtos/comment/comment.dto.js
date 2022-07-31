import Joi from 'joi';
import { CommentEntity } from '../../entity/_.export.js';

/**
 * @extends CommentDto
 * @method _getJoiInstance
 * @property { number } commentId
 * @property { string } author
 * @property { string } context
 */
export default class CommentDto extends CommentEntity {

    /** @type { number } commentId */
    commentId;

    /** @type { string } author */
    author;

    /** @type { string } context */
    context;

    /** @param {{ author: string, context: string }} ICommentDto */
    constructor({ author, context }) {

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

    /**
     * @override
     * @returns {{ commentId: Joi.number, author: Joi.string.required, context: Joi.string.required }} joiInstance
     */
    _getJoiInstance() {
        return {
            commentId: Joi.number(),
            author: Joi.string().min(1).max(50).required(),
            context: Joi.string().min(1).max(300).required()
        }
    }



}