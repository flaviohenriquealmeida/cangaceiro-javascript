System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            let ExtendableException = class ExtendableException extends Error {

                constructor(msg = '') {

                    super(msg);
                    this.name = this.constructor.name;
                }
            };

            _export('ExtendableException', ExtendableException);

            const exception = ExtendableException;

            function isExtendableException(err) {

                return err instanceof exception || Object.getPrototypeOf(err) instanceof exception;
            }

            _export('isExtendableException', isExtendableException);

            function getExceptionMessage(err) {

                if (isExtendableException(err)) {
                    return err.message;
                } else {
                    console.log(err);
                    return 'Não foi possível realizar a operação.';
                }
            }

            _export('getExceptionMessage', getExceptionMessage);
        }
    };
});
//# sourceMappingURL=ExtendableException.js.map