import { SuccessForm, FailureForm } from '../../models/_.loader.js';

/**
 * `SuccessForm/FailureForm` 을 반환하기 위한 클래스입니다.
 * 
 * @method `getSuccessForm`
 * @method `getFailureForm`
 */
export default class FormFactory {

    /**
     * @param { string } message 
     * @param { string } result?
     * @returns { SuccessForm } `Form`
     */
    getSuccessForm(message, result = {}) {

        return new SuccessForm(message, result);

    }

    /**
     * @param { string } message 
     * @param { string } result?
     * @returns { FailureForm } `Form`
     */
    getFailureForm(message, result = {}) {

        return new FailureForm(message, result);

    }

}