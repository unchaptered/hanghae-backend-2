[< 뒤로 돌아가기](./README.md)

## Auth

- [POST /auth/join](./AUTH.md#post-authjoin)
- [POST /auth/login](./AUTH.md#post-authlogin)

<br><hr><br>

### POST /auth/join

```json
{
	"nickname": "닉네임",
	"password": "비밀번호",
	"passwordConfirm": "비밀번호확인"
}
```

| 필드            | 타입   | 필수여부 | 설명 |
| :-------------- | :----- | :------ | :--- |
| nickname        | string | true    |      |
| password        | string | true    |      |
| passwordConfirm | string | true    |      |

<br><hr><br>

### POST /auth/login

```json
{
	"nickname": "닉네임",
	"password": "비밀번호"
}
```

| 필드            | 타입   | 필수여부 | 설명 |
| :-------------- | :----- | :------ | :--- |
| nickname        | string | true    |      |
| password        | string | true    |      |