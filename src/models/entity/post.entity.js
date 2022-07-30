import { BaseEntity } from './_.export.js';

/**
 * @extends BaseEntity
 * @method _getJoiInstance
 * @property `author` 작성자
 * @property `title` 게시글 제목
 * @property `context` 게시글 내용
 */
export default class PostEntity extends BaseEntity {

    title;
    author;
    context;

    constructor(title, author, context) {
        
        this.title = title;
        this.author = author;
        this.context = context;

    }

}