import Joi from 'joi';
import { UnkownServerError, classIterator } from '../_.loader.js';

/**
 * Entity 의 공용 메서드 재정의를 강요하기 위한, 슈퍼 클래스입니다.
 * 
 * @method _getJoiInstance
 */
export default class BaseEntity {

    [Symbol.iterator];

    constructor() {
        this[Symbol.iterator] = classIterator;
    }

    /**
     * 재정의를 강요하기 위해서 `UnkownServerError` 을 발생시킵니다.
     * 재정의하고 파편화된 `key: joi.type()` 를 한 키-값으로 가지는 객체를 반환합니다.
     * 
     * @throws { UnkownServerError } '메서드 재정의가 되지 않았습니다.'
     * @return {} joiInstance
     */
    _getJoiInstance() {
        throw new UnkownServerError('BaseEntity 의 메서드 재정의가 되지 않았습니다.');
    }

}