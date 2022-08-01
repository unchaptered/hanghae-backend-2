import { DatabaseProvider, QueryBuilder, UserQueryBuilder } from '../../modules/_.loader.js';
import { UserJoinDto, UserLoginDto } from '../../models/dtos/_.export.js';

/** @param { UserJoinDto } userJoinDto */
export const join = async (userJoinDto) => {

    const connection = await new DatabaseProvider().getConnection();
    const queryBulider = new QueryBuilder();
    const userQueryBuilder = queryBulider.getUserQueryBulider();

    const isExistsQuery = userQueryBuilder.isExists(userJoinDto.nickname);
    const createQuery = userQueryBuilder.createUser(userJoinDto.nickname, userJoinDto.password);

    try {

        connection.query(queryBulider.startTransaction());

        const [ isExists, isCreated ] = await Promise.all([
            (async () => await connection.query(isExistsQuery))(),
            (async () => await connection.query(createQuery))(),
        ]);

        console.log(isExists, isCreated);
        
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

        const [ isExists, isCreated ] = await Promise.all([
            (async () => await connection.query(isExistsQuery))(),
            (async () => await connection.query(getQuery))(),
        ]);

        console.log(isExists, isCreated);


        connection.query(queryBulider.denyChanges());
        connection.release();
        
    } catch(err) {

        connection.query(queryBulider.denyChanges());
        connection.release();

        throw err;

    }

    return userLoginDto;

}