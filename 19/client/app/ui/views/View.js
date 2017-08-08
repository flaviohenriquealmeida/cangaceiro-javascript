System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            let View = class View {

                constructor(seletor) {

                    this._elemento = document.querySelector(seletor);
                }

                update(model) {

                    this._elemento.innerHTML = this.template(model);
                }

                template(model) {

                    throw new Error('Você precisa implementar o método template');
                }
            };

            _export('View', View);
        }
    };
});
//# sourceMappingURL=View.js.map