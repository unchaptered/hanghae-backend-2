import Joi from 'joi'
import BoardEntity from '../../entity/board.entity.js';

/**
 * @extends BoardEntity
 * @method _getJoiInstance
 * @property { string } author
 * @property { string } title
 * @property { string } context
 */
export default class BoardPostDto extends BoardEntity {

    /** @type { string } author */
    author;

    /** @type { string } title */
    title;

    /** @type { string } context */
    context;

    constructor({ author, title, context }) {

        super({ author, title, context });

        this.author = author;
        this.title = title;
        this.context = context;

    }

    /** @override @returns { {  author: Joi.StringSchema, title: Joi.StringSchema, context: Joi.StringSchema } } */
    _getJoiInstance() {
        return {
            author: Joi.string().min(1).max(50).required(),
            title: Joi.string().min(1).max(100).required(),
            context: Joi.string().min(1).max(300).required()
        }
    }

}