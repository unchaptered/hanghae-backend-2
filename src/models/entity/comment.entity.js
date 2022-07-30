/**
 * @property `author` 작성자
 * @property `context` 댓글 내용
 */
export default class CommentEntity {

    author;
    context;

    constructor(author, context) {

        this.author = author;
        this.context = context;

    }

}