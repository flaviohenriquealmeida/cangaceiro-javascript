System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            class Negociacoes {

                constructor() {

                    this._negociacoes = [];
                }

                adiciona(negociacao) {

                    this._negociacoes.push(negociacao);
                }

                paraArray() {

                    return [].concat(this._negociacoes);
                }

                get volumeTotal() {

                    return this._negociacoes.reduce((total, negociacao) => total + negociacao.volume, 0);
                }

                esvazia() {

                    this._negociacoes = [];
                }
            }

            _export("Negociacoes", Negociacoes);
        }
    };
});
//# sourceMappingURL=Negociacoes.js.map