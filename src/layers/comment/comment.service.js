// Models
import { NotFoundException, UnauthorizedException, UnkownServerError } from '../../models/_.loader.js';
import { CommentDeleteDto, CommentDto, CommentPostDto, CommentPutDto } from '../../models/dtos/_.export.js';

// Modules
import { DatabaseProvider, exceptionHandler } from '../../modules/_.loader.js';
import { AuthController, AuthRepository, BoardRepository, CommentRepository } from '../_.layer.loader.js';

/**
 * @param { number } boardId
 * @returns { Promise<CommentDto[]> }
 */
export const getAllCommentByBoardId = async (boardId) => {

    const connection = await new DatabaseProvider().getConnection();
    
    try {
        
        const comments = await CommentRepository.getAllCommentByBoardId(connection, boardId);

        connection.destroy();
        return comments.map(v => new CommentDto({ ...v }));

    } catch (err) {

        connection.destroy();
        throw exceptionHandler(err);

    }
    
}
export const postComment = async (commentPostDto) => {

    const connection = await new DatabaseProvider().getConnection();

    try {

        await connection.beginTransaction();
        
        const isExistsUser = await AuthRepository.isExistsUser(connection, commentPostDto.author);
        if (!isExistsUser) throw new UnauthorizedException(`${boardPutDto.author} 라는 이름의 사용자는 존재하지 않습니다.`);

        const isExistsBoard = await BoardRepository.isExistsBoard(connection, commentPostDto.boardId);
        if (!isExistsBoard) throw new NotFoundException('존재하지 않는 게시글입니다.');

        const isCreated = await CommentRepository.createComment(connection, commentPostDto);
        if (isCreated.commentId === null) throw new UnkownServerError('알 수 없는 이유로 댓글 작성에 실패하셨습니다.');

        await connection.commit();
        connection.destroy();

        return new CommentDto({ ...commentPostDto, commentId: isCreated.commentId });

    } catch (err) {

        await connection.rollback();
        connection.destroy();

        throw exceptionHandler(err);

    }

}

/**
 * @param { CommentPutDto } commentPutDto
 * @returns { Promise<CommentPutDto> }
 */
export const putCommentByDto = async (commentPutDto) => {


    const connection = await new DatabaseProvider().getConnection();

    try {

        await connection.beginTransaction();
        
        const isExistsUser = await AuthRepository.isExistsUser(connection, commentPutDto.author);
        if (!isExistsUser) throw new UnauthorizedException(`${boardPutDto.author} 라는 이름의 사용자는 존재하지 않습니다.`);

        const isExistsBoard = await BoardRepository.isExistsBoard(connection, commentPutDto.boardId);
        if (!isExistsBoard) throw new NotFoundException('존재하지 않는 게시글입니다.');

        const isExistsComment = await CommentRepository.isExistsComment(connection, commentPutDto.commentId);
        if (!isExistsComment) throw new NotFoundException('존재하지 않는 댓글입니다.');

        const isUpdated = await CommentRepository.updateComment(connection, commentPutDto);
        if (isUpdated.commentId === null) throw new UnkownServerError(`알 수 없는 이유로 댓글 수정에 실패하였습니다.`);
        
        await connection.commit();
        connection.destroy();

        return commentPutDto;

    } catch (err) {

        await connection.rollback();
        connection.destroy();

        throw exceptionHandler(err);

    }

}

/**
 * @param { CommentDeleteDto } commentDeleteDto
 * @returns { Promise<CommentDeleteDto> }
 */
 export const delCommentByDto = async (commentDeleteDto) => {
    
    const connection = await new DatabaseProvider().getConnection();
    
    try {
        
        await connection.beginTransaction();

        const isExistsUser = await AuthRepository.isExistsUser(connection, commentDeleteDto.author);
        if (!isExistsUser) throw new UnauthorizedException(`${boardPutDto.author} 라는 이름의 사용자는 존재하지 않습니다.`);

        const isExistsBoard = await BoardRepository.isExistsBoard(connection, commentDeleteDto.boardId);
        if (!isExistsBoard) throw new NotFoundException('존재하지 않는 게시글입니다.');

        const isExistsComment = await CommentRepository.isExistsComment(connection, commentDeleteDto.commentId);
        if (!isExistsComment) throw new NotFoundException('존재하지 않는 댓글입니다.');

        const isDeleted = await CommentRepository.deleteComment(connection, commentDeleteDto);
        if (!isDeleted.isSuccess) throw new UnkownServerError(`알 수 없는 이유로 댓글 수정에 실패하였습니다.`);
        
        await connection.commit();
        connection.destroy();

        return commentDeleteDto;

    } catch (err) {

        await connection.rollback();
        connection.destroy();

        throw exceptionHandler(err);

    }

}