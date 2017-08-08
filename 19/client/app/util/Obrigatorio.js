System.register([], function (_export, _context) {
    "use strict";

    function obrigatorio(parametro) {

        throw new Error(`${parametro} é um parâmetro obrigatório`);
    }

    _export("obrigatorio", obrigatorio);

    return {
        setters: [],
        execute: function () {}
    };
});
//# sourceMappingURL=Obrigatorio.js.map