[< 뒤로 돌아가기](./README.md)

## Auth

- [GET /board](./BOARD.md#get-board)
- [POST /board](./BOARD.md#post-board)
- [GET /board/:boardId](./BOARD.md#get-boardboardid)
- [PUT /board/:boardId](./BOARD.md#put-boardboardid)
- [DELETE /board/:boardId](./BOARD.md#delete-boardboardid)
- [PATCH /board/:boadrId/like](./BOARD.md#patch-boardboadridlike)

<br><hr><br>

### GET /board

<br><hr><br>

### POST /board `Bearer Token`

```json
{
    "author": "jhell",
    "title": "title",
    "context": "context"
}
```

| 필드            | 타입   | 필수여부 | 설명 |
| :-------------- | :----- | :------ | :--- |
| author          | string | true    |      |
| title           | string | true    |      |
| context         | string | true    |      |

<br><hr><br>

### GET /board/:boardId

| 필드            | 타입   | 필수여부 | 설명 |
| :-------------- | :----- | :------ | :--- |
| boardId         | number | true    |      |

<br><hr><br>

### PUT /board/:boardId `Bearer Token`

```json
{
	"title": "Hello",
	"context": "Hi"
}
```
| 필드             | 타입   | 필수여부 | 설명 |
| :-------------- | :----- | :------ | :--- |
| boardId         | number | true    |      |
| title           | string | true    |      |
| context         | string | true    |      |

<br><hr><br>

### DELETE /board/:boardId `Bearer Token`

| 필드             | 타입   | 필수여부 | 설명 |
| :-------------- | :----- | :------ | :--- |
| boardId         | number | true    |      |

<br><hr><br>

### PATCH /board/:boadrId/like `Bearer Token`

| 필드             | 타입   | 필수여부 | 설명 |
| :-------------- | :----- | :------ | :--- |
| boardId         | number | true    |      |
