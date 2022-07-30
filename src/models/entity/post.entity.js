/**
 * @property `author` 작성자
 * @property `title` 게시글 제목
 * @property `context` 게시글 내용
 */
export default class PostEntity {

    title;
    author;
    context;

    constructor(title, author, context) {
        
        this.title = title;
        this.author = author;
        this.context = context;

    }

}