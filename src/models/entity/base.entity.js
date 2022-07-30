import { UnkownServerError } from '../_.loader.js';

/**
 * 
 * @method _getJoiInstance 서브 클래스에게 `재정의`를 강요합니다.
 */
export default class BaseEntity {

    constructor() {}

    _getJoiInstance() {
        throw new UnkownServerError('메서드 재정의가 되지 않았습니다.');
    }

}