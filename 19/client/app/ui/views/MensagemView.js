System.register(['./View.js'], function (_export, _context) {
    "use strict";

    var View;
    return {
        setters: [function (_ViewJs) {
            View = _ViewJs.View;
        }],
        execute: function () {
            let MensagemView = class MensagemView extends View {

                template(model) {

                    return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
                }
            };

            _export('MensagemView', MensagemView);
        }
    };
});
//# sourceMappingURL=MensagemView.js.map