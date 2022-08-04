import Joi from 'joi';
import { CommentEntity } from '../../entity/_.export.js';

/**
 * @extends CommentEntity
 * @method _getJoiInstance
 * @property { string } author
 * @property { string } context
 * @property { number } boardId
 */
export default class CommentPostDto extends CommentEntity {


    /** @type { number } boardId */
    boardId;

    /** @type { string } author */
    author;

    /** @type { string } context */
    context;

    /** @param {{ author: string, context: string, boardId:number }} ICommentPostDto */
    constructor({ author, context, boardId }) {

        super({ author, context, boardId });

        this.author = author;
        this.context = context;
        this.boardId = boardId;

    }

    /** @override @returns {{ author: Joi.StringSchema, context: Joi.StringSchema }} */
    _getJoiInstance() {
        return {
            author: Joi.string().min(1).max(50).required(),
            context: Joi.string().min(1).max(300).required(),
            boardId: Joi.number().required()
        }
    }



}