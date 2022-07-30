import Joi from 'joi';
import { BaseEntity } from './_.export.js';

/**
 * @extends BaseEntity
 * @method _getJoiInstance
 * @property `author` 작성자
 * @property `context` 댓글 내용
 */
export default class CommentEntity extends BaseEntity {

    author;
    context;

    constructor({ author, context }) {

        super();

        this.author = author;
        this.context = context;

    }

    _getJoiInstance() {
        return {
            author: Joi.string().min(1).max(50),
            context: Joi.string().min(1).max(300)
        }
    }


}