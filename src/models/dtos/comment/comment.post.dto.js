import Joi from 'joi';
import { CommentEntity } from '../../entity/_.export.js';

/**
 * @extends CommentEntity
 * @method _getJoiInstance
 * @property { string } author
 * @property { string } context
 */
export default class CommentPostDto extends CommentEntity {


    /** @type { string } author */
    author;

    /** @type { string } context */
    context;

    /** @param {{ author: string, context: string }} ICommentPostDto */
    constructor({ author, context }) {

        this.author = author;
        this.context = context;

    }

    /** @override @returns {{ author: Joi.StringSchema, context: Joi.StringSchema }} */
    _getJoiInstance() {
        return {
            author: Joi.string().min(1).max(50).required(),
            context: Joi.string().min(1).max(300).required()
        }
    }



}