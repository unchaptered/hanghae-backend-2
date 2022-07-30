import Joi from 'joi'
import BoardEntity from '../../entity/board.entity.js';

/**
 * @extends BoardEntity
 * @method _getJoiInstance
 * @property {number} boardId?
 * @property {string} author
 * @property {string} title
 * @property {string} context
 */
export default class BoardDto extends BoardEntity {

    boardId;
    author;
    title;
    context;

    constructor({ author, title, context }) {

        super({ author, title, context });

        this.author = author;
        this.title = title;
        this.context = context;

    }
    
    /**
     * @param {number} boardId
     */
    set setBoardId(boardId) {
        this.boardId = boardId;
    }

    /**
     * @return {number} boardId
     */
    get getBoardId() {
        return this.boardId;
    }

    _getJoiInstance() {
        return {
            boardId: Joi.number(),
            author: Joi.string().min(1).max(50).required(),
            title: Joi.string().min(1).max(100).required(),
            context: Joi.string().min(1).max(300).required()
        }
    }

}