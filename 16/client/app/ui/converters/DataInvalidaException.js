class DataInvalidaException extends ApplicationException {

    constructor() {

        super('A data deve estar no formato dd/mm/aaaa');
    }
}  