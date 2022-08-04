[< 뒤로 돌아가기](./README.md)

## Comment

- [GET /comment](./COMMENT.md#get-comment)
- [POST /comment](./COMMENT.md#post-comment)
- [PUT /comment/:commentId](./COMMENT.md#put-commentcommentid)
- [DELETE /comment/:commentId](./COMMENT.md#delete-commentcommentid)
- [PATCH /comment/:commentId/like](./COMMENT.md#patch-commentcommentidlike-bearer-token)

<br><hr><br>

### GET /comment

```json
{
	"boardId": 1,
	"context": "Hello"
}
```
| 필드             | 타입   | 필수여부 | 설명 |
| :-------------- | :----- | :------ | :--- |
| boardId         | number | true    |      |
| context         | string | true    |      |

<br><hr><br>

### POST /comment  `Bearer Token`

```json
{
	"boardId": 1
}
```
| 필드             | 타입   | 필수여부 | 설명 |
| :-------------- | :----- | :------ | :--- |
| boardId         | number | true    |      |

<br><hr><br>

### PUT /comment/:commentId  `Bearer Token`

```json
{
	"boardId": 1,
	"context": "Hello"
}
```
| 필드             | 타입   | 필수여부 | 설명 |
| :-------------- | :----- | :------ | :--- |
| boardId         | number | true    |      |
| context         | string | true    |      |

<br><hr><br>

### DELETE /comment/:commentId  `Bearer Token`

```json
{
	"boardId": 1
}
```
| 필드             | 타입   | 필수여부 | 설명 |
| :-------------- | :----- | :------ | :--- |
| boardId         | number | true    |      |

<br><hr><br>

### PATCH /comment/:commentId/like  `Bearer Token`

```json
{
	"boardId": 1
}
```
| 필드             | 타입   | 필수여부 | 설명 |
| :-------------- | :----- | :------ | :--- |
| boardId         | number | true    |      |