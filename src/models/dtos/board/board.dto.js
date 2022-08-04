import Joi from 'joi'
import BoardEntity from '../../entity/board.entity.js';

/**
 * @deprecated
 * 
 * @extends BoardEntity
 * @method _getJoiInstance
 * @property { number } boardId?
 * @property { string } author
 * @property { string } title
 * @property { string } context
 */
export default class BoardDto extends BoardEntity {

    /** @type { number } boardId */
    boardId;

    /** @type { string } author */
    author;

    /** @type { string } title */
    title;

    /** @type { string } context */
    context;

    /** @param { { boardId: number | undefined, author: string, title: string, context: string }} IBoardDto */
    constructor({ author, title, context, boardId }) {

        super({ author, title, context });

        this.author = author;
        this.title = title;
        this.context = context;
        this.boardId = boardId;

    }
    
    /** @param {number} boardId */
    set setBoardId(boardId) {
        this.boardId = boardId;
    }

    /** @return {number} boardId */
    get getBoardId() {
        return this.boardId;
    }

    /** @override @returns { {  boardId: Joi.NumberSchema, author: Joi.StringSchema, title: Joi.StringSchema, context: Joi.StringSchema } } */
    _getJoiInstance() {
        return {
            boardId: Joi.number(),
            author: Joi.string().min(1).max(50).required(),
            title: Joi.string().min(1).max(100).required(),
            context: Joi.string().min(1).max(300).required()
        }
    }

}