System.register(['../../util/index.js'], function (_export, _context) {
    "use strict";

    var obrigatorio;
    return {
        setters: [function (_utilIndexJs) {
            obrigatorio = _utilIndexJs.obrigatorio;
        }],
        execute: function () {
            let Negociacao = class Negociacao {

                constructor(_data = obrigatorio('data'), _quantidade = obrigatorio('quantidade'), _valor = obrigatorio('valor')) {

                    Object.assign(this, { _quantidade, _valor });
                    this._data = new Date(_data.getTime());
                    Object.freeze(this);
                }

                get volume() {

                    return this._quantidade * this._valor;
                }

                get data() {

                    return new Date(this._data.getTime());
                }

                get quantidade() {

                    return this._quantidade;
                }

                get valor() {

                    return this._valor;
                }

                equals(negociacao) {

                    return JSON.stringify(this) == JSON.stringify(negociacao);
                }
            };

            _export('Negociacao', Negociacao);
        }
    };
});
//# sourceMappingURL=Negociacao.js.map