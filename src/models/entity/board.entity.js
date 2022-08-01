import { BaseEntity } from './_.export.js';

/**
 * 
 * @extends BaseEntity
 * @method _getJoiInstance
 * @property `author` 작성자
 * @property `title` 게시글 제목
 * @property `context` 게시글 내용
 */
export default class BoardEntity extends BaseEntity {

    /** @type { string } */
    title;
    
    /** @type { string } */
    author;
    
    /** @type { string } */
    context;

    /** @param {{ title: string, author: string, context: string }} IBoardEntity */
    constructor({ title, author, context }) {

        super();
        
        this.title = title;
        this.author = author;
        this.context = context;

    }
    
    /**
     * @override
     * @returns { {  author: Joi.string, title: Joi.string, context: Joi.string } } joiInstance
     */
    _getJoiInstance() {
        return {
            author: Joi.string().min(1).max(50),
            title: Joi.string().min(1).max(100),
            context: Joi.string().min(1).max(300)
        }
    }

}