System.register(['./controllers/NegociacaoController.js', './domain/index.js'], function (_export, _context) {
    "use strict";

    var NegociacaoController, Negociacao;
    return {
        setters: [function (_controllersNegociacaoControllerJs) {
            NegociacaoController = _controllersNegociacaoControllerJs.NegociacaoController;
        }, function (_domainIndexJs) {
            Negociacao = _domainIndexJs.Negociacao;
        }],
        execute: function () {

            const controller = new NegociacaoController();
            const negociacao = new Negociacao(new Date(), 1, 200);
            const headers = new Headers();
            headers.set('Content-Type', 'application/json');
            const body = JSON.stringify(negociacao);
            const method = 'POST';

            const config = {
                method,
                headers,
                body
            };

            fetch('/negociacoes', config).then(() => console.log('Dado enviado com sucesso'));
        }
    };
});
//# sourceMappingURL=app.js.map