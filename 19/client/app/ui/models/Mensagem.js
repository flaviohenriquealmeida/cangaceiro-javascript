System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            let Mensagem = class Mensagem {

                constructor(texto = '') {

                    this._texto = texto;
                }

                get texto() {

                    return this._texto;
                }

                set texto(texto) {

                    this._texto = texto;
                }
            };

            _export('Mensagem', Mensagem);
        }
    };
});
//# sourceMappingURL=Mensagem.js.map