export class ApplicationException extends Error {

    constructor(msg = '') {

        super(msg);
        this.name = this.constructor.name;
    }
} 

export function isApplicationException(err) {

    return err instanceof ApplicationException || Object.getPrototypeOf(err) instanceof ApplicationException 
}

export function getExceptionMessage(err) {
    
    if(isApplicationException(err)) {
        return err.message;
    } else {
        console.log(err);
        return 'Não foi possível realizar a operação.';
    }
}