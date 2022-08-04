// Models
import { NotFoundException, UnauthorizedException, UnkownServerError } from '../../models/_.loader.js';
import { BoardDeleteDto, BoardDto, BoardPostDto, BoardPutDto } from '../../models/dtos/_.export.js';

// Modules
import { AuthRepository, BoardRepository } from '../_.layer.loader.js';
import { QueryBuilder, BoardQueryBuilder, DatabaseProvider, exceptionHandler } from '../../modules/_.loader.js';

/**
 * @returns { Promise<BoardDto[]> }
 */
export const getBoards = async () => {

    const connection = await new DatabaseProvider().getConnection();

    try {

        const boards = await BoardRepository.getBoards(connection);

        return boards.map(v => new BoardDto({ ...v }));

    } catch (err) {
        
        throw exceptionHandler(err);

    }

}

/**
 * @param { BoardPostDto } boardPostDto
 * @returns { Promise<BoardDto> }
 */
export const postBoard = async (boardPostDto) => {

    const connection = await new DatabaseProvider().getConnection();

    try {
        
        await connection.beginTransaction();

        const isExistsUser = await AuthRepository.isExistsUser(connection, boardPostDto.author);
        if (!isExistsUser) throw new UnauthorizedException(`${boardPostDto.author} 라는 이름의 사용자는 존재하지 않습니다.`);

        const createdBoard = await BoardRepository.createBoard(connection, boardPostDto);
        if (createdBoard.boardId === null) throw new UnkownServerError(`알 수 없는 이유로 게시글 작성에 실패하였습니다.`);
        
        await connection.commit();
        connection.destroy();
        
        const boardDto = new BoardDto({ ...boardPostDto });
        boardDto.setBoardId = createdBoard.boardId;

        return boardDto;

    } catch(err) {

        await connection.rollback();
        connection.destroy();

        throw exceptionHandler(err);

    }
}

/**
 * @param { number } boardId
 * @returns { Promise<BoardDto> }
 */
export const getBoardById = async (boardId) => {
    
    const connection = await new DatabaseProvider().getConnection();

    try {
        
        const result = await BoardRepository.getBoardById(connection, boardId);
        if (result === null) throw new NotFoundException('존재하지 않는 게시글입니다.');
    
        return new BoardDto({ ...result });
        
    } catch(err) {
        
        throw exceptionHandler(err);

    }
}


/**
 * @param { BoardPutDto } boardPutDto
 * @returns { Promise<BoardPutDto> } boardPutDto
 */
export const putBoardById = async (boardPutDto) => {

    const connection = await new DatabaseProvider().getConnection();

    try {

        await connection.beginTransaction();
        
        const isExistsUser = await AuthRepository.isExistsUser(connection, boardPutDto.author);
        if (!isExistsUser) throw new UnauthorizedException(`${boardPutDto.author} 라는 이름의 사용자는 존재하지 않습니다.`);

        const isExistsBoard = await BoardRepository.isExistsBoard(connection, boardPutDto.getBoardId);
        if (!isExistsBoard) throw new NotFoundException('존재하지 않는 게시글입니다.');

        const isCreated = await BoardRepository.updateBoard(connection, boardPutDto);
        if (!isCreated.isSuccess) throw new UnkownServerError('알 수 없는 에러로 수정에 실패하였습니다.');

        await connection.commit();
        connection.destroy();

        return boardPutDto;

    } catch(err) {

        await connection.rollback();
        connection.destroy();

        throw exceptionHandler(err);

    }

}

/**
 * @param { BoardDeleteDto } boardDeleteDto
 * @returns { Promise<BoardDeleteDto> }
 */
export const delBoardByDto = async (boardDeleteDto) => {

    const connection = await new DatabaseProvider().getConnection();

    try {
        const isExistsUser = await AuthRepository.isExistsUser(connection, boardDeleteDto.author);
        if (!isExistsUser) throw new UnauthorizedException(`${boardDeleteDto.author} 라는 이름의 사용자는 존재하지 않습니다.`);

        const isExistsBoard = await BoardRepository.isExistsBoard(connection, boardDeleteDto.getBoardId);
        if (!isExistsBoard) throw new NotFoundException('존재하지 않는 게시글입니다.');

        const isDeleted = await BoardRepository.deleteBoard(connection, boardDeleteDto);
        if (!isDeleted.isSuccess) throw new UnkownServerError('알 수 없는 에러로 삭제에 실패하였습니다.');

        await connection.commit();
        connection.destroy();

        return boardDeleteDto;

    } catch(err) {

        await connection.rollback();
        connection.destroy();

        throw exceptionHandler(err);
        
    }

}