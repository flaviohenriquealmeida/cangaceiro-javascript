System.register(['../../util/index.js'], function (_export, _context) {
    "use strict";

    var obrigatorio;
    function bindEvent(event = obrigatorio('event'), selector = obrigatorio('selector'), prevent = true) {

        return function (target, propertyKey, descriptor) {

            Reflect.defineMetadata('bindEvent', { event, selector, prevent, propertyKey }, Object.getPrototypeOf(target), propertyKey);

            return descriptor;
        };
    }

    _export('bindEvent', bindEvent);

    return {
        setters: [function (_utilIndexJs) {
            obrigatorio = _utilIndexJs.obrigatorio;
        }],
        execute: function () {}
    };
});
//# sourceMappingURL=BindEvent.js.map