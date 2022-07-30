import { BaseEntity } from './_.export.js';

/**
 * @extends BaseEntity
 * @method _getJoiInstance
 * @property `author` 작성자
 * @property `title` 게시글 제목
 * @property `context` 게시글 내용
 */
export default class BoardEntity extends BaseEntity {

    title;
    author;
    context;

    constructor({ title, author, context }) {

        super();
        
        this.title = title;
        this.author = author;
        this.context = context;

    }
    
    _getJoiInstance() {
        return {
            author: Joi.string().min(1).max(50),
            title: Joi.string().min(1).max(100),
            context: Joi.string().min(1).max(300)
        }
    }

}