import Joi from 'joi';
import BaseEntity from '../../entity/base.entity.js';

export default class BoardFkValuesDto extends BaseEntity {

    /** @type { number } boardId */
    boardId;

    /** @type { string } author */
    author;

    /** @param { { boardId: number, author: string } } IBoardFkValuesDto */
    constructor({ boardId, author }) {

        super();
        this.boardId = +boardId;
        this.author = author;

    }

    /** @override @returns { {  author: Joi.StringSchema, boardId: Joi.NumberSchema } } */
    _getJoiInstance() {
        return {
            boardId: Joi.number().required(),
            author: Joi.string().min(1).max(50).required()
        }
    }

    /** @param {number} boardId */
    set setBoardId(boardId) {
        this.boardId = boardId;
    }

    /** @return {number} boardId */
    get getBoardId() {
        return this.boardId;
    }

}