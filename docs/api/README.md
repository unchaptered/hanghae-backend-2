[< 뒤로 돌아가기](../README.md)

## API 명세서

API 명세서입니다.

- List
    - ⚡ [Auth](./AUTH.md)
    - ⚡ [Board](./BOARD.md)
    - ⚡ [Comment](./COMMENT.md)

## List

| Method | Path                     | Description      | Complete | 
| :----- | :----------------------- | :--------------- | :------ |
| POST   | /auth/join               | 회원가입          | ⭕ |
| POST   | /auth/login              | 로그인            | ⭕ |
| GET    | /auth/my-profile         | 내 프로필         |     |
| GET    | /auth/my-board           | 내 게시글         |     |
| GET    | /auth/my-comment         | 내 댓글           |     |
| GET    | /auth/my-like-board      | 내 좋아요 게시글   |     |
| GET    | /auth/my-like-comment    | 내 좋아요 게시글  |     |
| GET    | /board                   | 전체 글 보기      | ⭕ |
| POST   | /board                   | 글 등록하기       | ⭕ |
| GET    | /board/:boardId          | 특정 글 보기      | ⭕ |
| PUT    | /board/:boardId          | 특정 글 수정      | ⭕ |
| DELETE | /board/:boardId          | 특정 글 삭제      | ⭕ |
| PATCH  | /board/:boadrId/like     | 특정 글 좋아요     | ⭕ |
| GET    | /comment                 | 특정 글, 모든 댓글 | ⭕ |
| POST   | /comment                 | 특정 글, 댓글 쓰기 | ⭕ |
| PUT    | /comment/:commentId      | 특정 댓글 수정하기 | ⭕ |
| DELETE | /comment/:commentId      | 특정 댓글 삭제하기 | ⭕ |
| PATCH  | /comment/:commentId/like | 특정 댓글 좋아요   | ⭕ |