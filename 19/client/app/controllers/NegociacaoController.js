System.register(['../domain/index.js', '../ui/index.js', '../util/index.js'], function (_export, _context) {
    "use strict";

    var Negociacoes, NegociacaoService, Negociacao, NegociacoesView, MensagemView, Mensagem, DateConverter, getNegociacaoDao, Bind, getExceptionMessage, debounce, controller, bindEvent;
    return {
        setters: [function (_domainIndexJs) {
            Negociacoes = _domainIndexJs.Negociacoes;
            NegociacaoService = _domainIndexJs.NegociacaoService;
            Negociacao = _domainIndexJs.Negociacao;
        }, function (_uiIndexJs) {
            NegociacoesView = _uiIndexJs.NegociacoesView;
            MensagemView = _uiIndexJs.MensagemView;
            Mensagem = _uiIndexJs.Mensagem;
            DateConverter = _uiIndexJs.DateConverter;
        }, function (_utilIndexJs) {
            getNegociacaoDao = _utilIndexJs.getNegociacaoDao;
            Bind = _utilIndexJs.Bind;
            getExceptionMessage = _utilIndexJs.getExceptionMessage;
            debounce = _utilIndexJs.debounce;
            controller = _utilIndexJs.controller;
            bindEvent = _utilIndexJs.bindEvent;
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

            function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
                var desc = {};
                Object['ke' + 'ys'](descriptor).forEach(function (key) {
                    desc[key] = descriptor[key];
                });
                desc.enumerable = !!desc.enumerable;
                desc.configurable = !!desc.configurable;

                if ('value' in desc || desc.initializer) {
                    desc.writable = true;
                }

                desc = decorators.slice().reverse().reduce(function (desc, decorator) {
                    return decorator(target, property, desc) || desc;
                }, desc);

                if (context && desc.initializer !== void 0) {
                    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
                    desc.initializer = undefined;
                }

                if (desc.initializer === void 0) {
                    Object['define' + 'Property'](target, property, desc);
                    desc = null;
                }

                return desc;
            }

            var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2;

            let NegociacaoController = (_dec = controller('#data', '#quantidade', '#valor'), _dec2 = bindEvent('submit', '.form'), _dec3 = debounce(), _dec4 = bindEvent('click', '#botao-importa'), _dec5 = debounce(), _dec6 = bindEvent('click', '#botao-apaga'), _dec(_class = (_class2 = class NegociacaoController {

                constructor(_inputData, _inputQuantidade, _inputValor) {

                    Object.assign(this, { _inputData, _inputQuantidade, _inputValor });

                    this._negociacoes = new Bind(new Negociacoes(), new NegociacoesView('#negociacoes'), 'adiciona', 'esvazia');

                    this._mensagem = new Bind(new Mensagem(), new MensagemView('#mensagemView'), 'texto');

                    this._service = new NegociacaoService();

                    this._init();
                }

                _init() {
                    var _this = this;

                    return _asyncToGenerator(function* () {

                        try {
                            const dao = yield getNegociacaoDao();
                            const negociacoes = yield dao.listaTodos();
                            negociacoes.forEach(function (negociacao) {
                                return _this._negociacoes.adiciona(negociacao);
                            });
                        } catch (err) {
                            _this._mensagem.texto = getExceptionMessage(err);
                        }
                    })();
                }

                adiciona(event) {
                    var _this2 = this;

                    return _asyncToGenerator(function* () {

                        try {
                            const negociacao = _this2._criaNegociacao();
                            const dao = yield getNegociacaoDao();
                            yield dao.adiciona(negociacao);
                            _this2._negociacoes.adiciona(negociacao);
                            _this2._mensagem.texto = 'Negociação adicionada com sucesso';
                            _this2._limpaFormulario();
                        } catch (err) {
                            _this2._mensagem.texto = getExceptionMessage(err);
                        }
                    })();
                }

                _limpaFormulario() {

                    this._inputData.value = '';
                    this._inputQuantidade.value = 1;
                    this._inputValor.value = 0.0;
                    this._inputData.focus();
                }

                _criaNegociacao() {

                    return new Negociacao(DateConverter.paraData(this._inputData.value), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
                }

                importaNegociacoes() {
                    var _this3 = this;

                    return _asyncToGenerator(function* () {

                        try {
                            const negociacoes = yield _this3._service.obtemNegociacoesDoPeriodo();
                            console.log(negociacoes);
                            negociacoes.filter(function (novaNegociacao) {
                                return !_this3._negociacoes.paraArray().some(function (negociacaoExistente) {
                                    return novaNegociacao.equals(negociacaoExistente);
                                });
                            }).forEach(function (negociacao) {
                                return _this3._negociacoes.adiciona(negociacao);
                            });

                            _this3._mensagem.texto = 'Negociações do período importadas com sucesso';
                        } catch (err) {
                            _this3._mensagem.texto = getExceptionMessage(err);
                        }
                    })();
                }

                apaga() {
                    var _this4 = this;

                    return _asyncToGenerator(function* () {

                        try {
                            const dao = yield getNegociacaoDao();
                            yield dao.apagaTodos();
                            _this4._negociacoes.esvazia();
                            _this4._mensagem.texto = 'Negociações apagadas com sucesso';
                        } catch (err) {
                            _this4._mensagem.texto = getExceptionMessage(err);
                        }
                    })();
                }
            }, (_applyDecoratedDescriptor(_class2.prototype, 'adiciona', [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'adiciona'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'importaNegociacoes', [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'importaNegociacoes'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'apaga', [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'apaga'), _class2.prototype)), _class2)) || _class);

            _export('NegociacaoController', NegociacaoController);
        }
    };
});
//# sourceMappingURL=NegociacaoController.js.map