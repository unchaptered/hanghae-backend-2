import UserLoginDto from './user/user.login.dto.js';
import UserJoinDto from './user/user.join.dto.js';

import BoardPostDto from './board/board.post.dto.js';
import BoardPutDto from './board/board.put.dto.js';
import BoardFkValuesDto from './board/board.fk.values.dto.js';

import CommentPostDto from './comment/comment.post.dto.js';
import CommentPutDto from './comment/comment.put.dto.js';
import CommentFkValuesDto from './comment/comment.fk.values.dto.js';

// @depreacated dtos...
import BoardDto from './board/board.dto.js';
import CommentDto from './comment/comment.dto.js';

export {

    UserJoinDto,
    UserLoginDto,

    BoardDto,
    BoardPostDto,
    BoardPutDto,
    BoardFkValuesDto,
    
    CommentDto,
    CommentPostDto,
    CommentPutDto,
    CommentFkValuesDto
    
}