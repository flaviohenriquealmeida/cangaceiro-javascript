System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            class ExtendableException extends Error {

                constructor(msg = '') {

                    super(msg);
                    this.name = this.constructor.name;
                }
            }

            _export('ExtendableException', ExtendableException);
        }
    };
});
//# sourceMappingURL=ExtendableException.js.map