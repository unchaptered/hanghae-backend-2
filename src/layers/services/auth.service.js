import { ConflictException, CustomException, UnkownServerError } from '../../models/_.loader.js';
import { UserJoinDto, UserLoginDto } from '../../models/dtos/_.export.js';
import { DatabaseProvider, QueryBuilder, UserQueryBuilder } from '../../modules/_.loader.js';

/** @param { UserJoinDto } userJoinDto */
export const join = async (userJoinDto) => {

    const connection = await new DatabaseProvider().getConnection();
    const queryBulider = new QueryBuilder();
    const userQueryBuilder = queryBulider.getUserQueryBulider();

    const isExistsQuery = userQueryBuilder.isExists(userJoinDto.nickname);
    const createQuery = userQueryBuilder.createUser(userJoinDto.nickname, userJoinDto.password);

    try {

        connection.query(queryBulider.startTransaction());

        const [ existsResult, createResult ] = await Promise.all([
            (async () => await connection.query(isExistsQuery))(),
            (async () => await connection.query(createQuery))(),
        ]);

        const isExists = Boolean(existsResult[0][0]?.isExists);
        if (isExists) throw new ConflictException(`${userJoinDto.nickname} 과 일치하는 사용자가 존재합니다.`);

        const isCreated = createResult[0]?.affectedRows >= 1;
        if (!isCreated) throw new UnkownServerError('알 수 없는 잉유로 회원가입에 실패하였습니다.');
        
        connection.query(queryBulider.denyChanges());
        connection.release();

        return userJoinDto;

    } catch(err) {

        connection.query(queryBulider.denyChanges());
        connection.release();

        throw err;

    }

}

/** @param { UserLoginDto } userLoginDto */
export const login = async (userLoginDto) => {
    
    const connection = await new DatabaseProvider().getConnection();

    const queryBulider = new QueryBuilder();
    const userQueryBuilder = queryBulider.getUserQueryBulider();

    const isExistsQuery = userQueryBuilder.isExists(userLoginDto.nickname);
    const getQuery = userQueryBuilder.getUser(userLoginDto.nickname);

    try {

        connection.query(QueryBuilder.startTransaction());

        const [ existsResult, getResult ] = await Promise.all([
            (async () => await connection.query(isExistsQuery))(),
            (async () => await connection.query(getQuery))(),
        ]);

        const isExists = Boolean(existsResult[0][0]?.isExists);
        if (!isExists) throw new ConflictException(`${userJoinDto.nickname} 과 일치하는 사용자가 존재하지 않습니다.`);

        console.log(getQuery);


        connection.query(queryBulider.denyChanges());
        connection.release();
        
    } catch(err) {

        connection.query(queryBulider.denyChanges());
        connection.release();

        throw err;

    }

    return userLoginDto;

}