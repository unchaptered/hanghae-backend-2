/**
 * 커스텀 예외 클래스입니다.
 * 
 * - 분기점 최소화를 위한
 * - 안정적인 에러 핸들링과 계층 간의 다양한 정보 교환을 위한
 * 
 * @extends Error
 * @property { string } name
 * @property { string } message
 * @property { string } stack
 * @property { number } statusCode
 */
export class CustomException extends Error {

    statusCode;

    constructor(message, statusCode) {

        super(message);
        this.statusCode = statusCode;

    }
}

/**
 * 잘못된 요청을 받았습니다.
 * 
 * @extends CustomException
 * @property { string = 'BadRequestException' } name
 * @property { string } message
 * @property { string } stack
 * @property { number = 400 } statusCode
 */
export class BadRequestException extends CustomException {

    constructor(message) {

        super(message);

        this.name = 'BadRequestException';
        this.statusCode = 400;

    }

}

/**
 * 잘못된 요청 - 유효성 검사 실패 - 를 받았습니다.
 * 
 * @extends CustomException
 * @property { string = 'BadValidateException' } name
 * @property { string } message
 * @property { string } stack
 * @property { number = 400 } statusCode
 */
export class BadValidateException extends CustomException {

    constructor(message) {

        super(message);

        this.name = 'BadValidateException';
        this.statusCode = 400;
        
    }
}

/**
 * 권한 없는 요청 - JWT 발행 간, 미인증 유저 - 를 받았습니다.
 * 
 * @extends CustomException
 * @property { string = 'UnauthorizedException' } name
 * @property { string } message
 * @property { string } stack
 * @property { number = 401 } statusCode
 */
export class UnauthorizedException extends CustomException {
    
    constructor(message) {

        super(message);

        this.name = 'UnauthorizedException';
        this.statusCode = 401;

    }

}

/**
 * 찾기 과정에서 실패 - 존재하지 않는 사용자 등 - 을 받았습니다.
 * 
 * @extends CustomException
 * @property { string = 'NotFoundException' } name
 * @property { string } message
 * @property { string } stack
 * @property { number = 404 } statusCode
 */
export class NotFoundException extends CustomException {

    constructor(message) {

        super(message);

        this.name = 'NotFoundException';
        this.statusCode = 404;

    }

}

/**
 * 명확히 정의되지 않은 에러 - DB 서버 연결 중단 혹은 문법적인 오류 - 를 받았습니다.
 * 
 * @extends CustomException
 * @property { string = 'UnkownServerError' } name
 * @property { string } message
 * @property { string } stack
 * @property { number = 500 } statusCode
 */
export class UnkownServerError extends CustomException {

    constructor(message) {

        super(message);

        this.name = 'UnkownServerError';
        this.statusCode = 500;

    }

} 