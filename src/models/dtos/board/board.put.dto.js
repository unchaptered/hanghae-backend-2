import Joi from 'joi'
import BoardEntity from '../../entity/board.entity.js';

/**
 * @extends BoardEntity
 * @method _getJoiInstance
 * @property { number } boardId
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

    constructor({ author, title, context }) {

        super({ author, title, context });

        this.author = author;
        this.title = title;
        this.context = context;

    }
    
    /** @param {number} boardId */
    set setBoardId(boardId) {
        this.boardId = boardId;
    }

    /** @return {number} boardId */
    get getBoardId() {
        return this.boardId;
    }

    /**
     * @override
     * @returns { {  boardId: Joi.number.required(), author: Joi.string, title: Joi.string, context: Joi.string } } joiInstance
     */
    _getJoiInstance() {
        return {
            boardId: Joi.number().required(),
            author: Joi.string().min(1).max(50).required(),
            title: Joi.string().min(1).max(100).required(),
            context: Joi.string().min(1).max(300).required()
        }
    }

}