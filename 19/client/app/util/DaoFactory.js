System.register(['./ConnectionFactory.js', '../domain/negociacao/NegociacaoDao.js'], function (_export, _context) {
    "use strict";

    var ConnectionFactory, NegociacaoDao;
    return {
        setters: [function (_ConnectionFactoryJs) {
            ConnectionFactory = _ConnectionFactoryJs.ConnectionFactory;
        }, function (_domainNegociacaoNegociacaoDaoJs) {
            NegociacaoDao = _domainNegociacaoNegociacaoDaoJs.NegociacaoDao;
        }],
        execute: function () {
            function _asyncToGenerator(fn) {
                return function () {
                    var gen = fn.apply(this, arguments);
                    return new Promise(function (resolve, reject) {
                        function step(key, arg) {
                            try {
                                var info = gen[key](arg);
                                var value = info.value;
                            } catch (error) {
                                reject(error);
                                return;
                            }

                            if (info.done) {
                                resolve(value);
                            } else {
                                return Promise.resolve(value).then(function (value) {
                                    step("next", value);
                                }, function (err) {
                                    step("throw", err);
                                });
                            }
                        }

                        return step("next");
                    });
                };
            }

            let getNegociacaoDao = (() => {
                var _ref = _asyncToGenerator(function* () {

                    let conn = yield ConnectionFactory.getConnection();
                    return new NegociacaoDao(conn);
                });

                return function getNegociacaoDao() {
                    return _ref.apply(this, arguments);
                };
            })();

            _export('getNegociacaoDao', getNegociacaoDao);
        }
    };
});
//# sourceMappingURL=DaoFactory.js.map