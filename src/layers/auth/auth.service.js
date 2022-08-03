// Models
import { UserJoinDto, UserLoginDto } from '../../models/dtos/_.export.js';
import { BadRequestException, ConflictException, UnkownServerError } from '../../models/_.loader.js';

// Modules
import { DatabaseProvider, BcryptProvider, JwtProvider, QueryBuilder, UserQueryBuilder } from '../../modules/_.loader.js';

/** @param { UserJoinDto } userJoinDto */
export const join = async (userJoinDto) => {

    const connection = await new DatabaseProvider().getConnection();
    const queryBulider = new QueryBuilder();
    const userQueryBuilder = new UserQueryBuilder();

    const bcryptProvider = new BcryptProvider();
    const hashedPassword = await bcryptProvider.hashPassword(userJoinDto.password)

    const isExistsQuery = userQueryBuilder.isExists(userJoinDto.nickname);
    const createQuery = userQueryBuilder.createUser(userJoinDto.nickname, hashedPassword);

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
        
        connection.query(queryBulider.applyChanges());
        connection.release();

        return userJoinDto;

    } catch(err) {

        connection.query(queryBulider.denyChanges());
        connection.release();

        throw err;

    }

}

/** @param { UserLoginDto } userLoginDto @returns { { user: UserLoginDto, accessToken: string } } */
export const login = async (userLoginDto) => {
    
    const connection = await new DatabaseProvider().getConnection();

    const queryBulider = new QueryBuilder();
    const userQueryBuilder = new UserQueryBuilder();

    const isExistsQuery = userQueryBuilder.isExists(userLoginDto.nickname);
    const getQuery = userQueryBuilder.getUser(userLoginDto.nickname);

    try {

        connection.query(queryBulider.startTransaction());

        const [ existsResult, getResult ] = await Promise.all([
            (async () => await connection.query(isExistsQuery))(),
            (async () => await connection.query(getQuery))(),
        ]);
        
        const isExists = Boolean(existsResult[0][0]?.isExists);
        if (!isExists) throw new ConflictException(`${userLoginDto.nickname} 과 일치하는 사용자가 존재하지 않습니다.`);

        const hashedPassword = getResult[0][0]?.password;
        const isCorrectPassword = await new BcryptProvider().isCorrectPassword(userLoginDto.password, hashedPassword);
        if (!isCorrectPassword) throw new BadRequestException(`${userLoginDto.nickname} 의 비밀번호가 일치하지 않습니다.`);

        const jwt = new JwtProvider().sign({ nickname: userLoginDto.nickname });

        connection.query(queryBulider.applyChanges());
        connection.release();

        return { user: userLoginDto, accessToken: jwt };
        
    } catch(err) {

        connection.query(queryBulider.denyChanges());
        connection.release();

        throw err;

    }

}