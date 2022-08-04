import * as AuthController from './auth/auth.controller.js';
import * as AuthService from './auth/auth.service.js';
import * as AuthRepository from './auth/auth.repository.js';

import * as BoardController from './board/board.controller.js';
import * as BoardService from './board/board.service.js';
import * as BoardRepository from './board/board.repository.js';

import * as CommentController from './comment/comment.controller.js';
import * as CommentService from './comment/comment.service.js';
import * as CommentRepository from './comment/comment.repository.js';

import * as GlobalController from './global/global.controller.js';


export {

    AuthController,
    AuthService,
    AuthRepository,

    BoardController,
    BoardService,
    BoardRepository,

    CommentController,
    CommentService,
    CommentRepository,

    GlobalController

};