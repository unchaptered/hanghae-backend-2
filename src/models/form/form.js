/**
 * @property { boolean } isSuccess;
 * @property { string } message;
 * @property { Object } result;
 */
export class Form {

    /** @type { boolean } */
    isSuccess;

    /** @type { string } */
    message;

    /** @type { Object } */
    result;

    /**
     * 
     * @param { boolean } isSuccess 
     * @param { string } message 
     * @param { Object } result 
     */
    constructor(isSuccess, message, result) {

        this.isSuccess = isSuccess;
        this.message = message;
        this.result = result;

    }

}

/**
 * @extends Form
 */
export class SuccessForm extends Form {

    constructor(message, result = {}) {

        super(true, message, result);

    }

}

/**
 * @extends Form
 */
export class FailureForm extends Form {

    constructor(message, result = {}) {

        super( false, message, result);

    }

}