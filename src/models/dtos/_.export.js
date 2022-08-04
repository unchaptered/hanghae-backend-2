import UserLoginDto from './user/user.login.dto.js';
import UserJoinDto from './user/user.join.dto.js';

import BoardPostDto from './board/board.post.dto.js';
import BoardPutDto from './board/board.put.dto.js';
import BoardDeleteDto from './board/board.delete.dto.js';

import CommentPostDto from './comment/comment.post.dto.js';
import CommentPutDto from './comment/comment.put.dto.js';
import CommentDeleteDto from './comment/comment.delete.dto.js';

// @depreacated dtos...
import BoardDto from './board/board.dto.js';
import CommentDto from './comment/comment.dto.js';

export {

    UserJoinDto,
    UserLoginDto,

    BoardDto,
    BoardPostDto,
    BoardPutDto,
    BoardDeleteDto,
    
    CommentDto,
    CommentPostDto,
    CommentPutDto,
    CommentDeleteDto
    
}