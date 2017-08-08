System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            class ApplicationException extends Error {

                constructor(msg = '') {

                    super(msg);
                    this.name = this.constructor.name;
                }
            }

            _export('ApplicationException', ApplicationException);
        }
    };
});
//# sourceMappingURL=ApplicationException.js.map