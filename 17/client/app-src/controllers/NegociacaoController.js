import { Negociacoes, NegociacaoService, Negociacao} from '../domain/index.js';
import { NegociacoesView, MensagemView, Mensagem, DataInvalidaException, DateConverter }  from '../ui/index.js';
import { getNegociacaoDao, Bind }  from '../util/index.js';

export class NegociacaoController {

    constructor() {

        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._negociacoes = new Bind(
            new Negociacoes(),
            new NegociacoesView('#negociacoes'),
            'adiciona', 'esvazia'
        );

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView('#mensagemView'),
            'texto'
        );

        this._service = new NegociacaoService();

        this._init();
    }

    _init() {

        getNegociacaoDao()
        .then(dao => dao.listaTodos())
        .then(negociacoes => 
            negociacoes.forEach(negociacao => 
                this._negociacoes.adiciona(negociacao)))
        .catch(err => this._mensagem.texto = err);
    }

    adiciona(event) {

        event.preventDefault();

        try {

            const negociacao = this._criaNegociacao();

            getNegociacaoDao()
            .then(dao => dao.adiciona(negociacao))
            .then(() => {
                this._negociacoes.adiciona(negociacao);
                this._mensagem.texto = 'Negociação adicionada com sucesso';
                this._limpaFormulario();
            })
            .catch(err => this._mensagem.texto = err);

        } catch (err) {

            console.log(err);
            console.log(err.stack);

            if (err instanceof DataInvalidaException) {

                this._mensagem.texto = err.message;

            } else {

                this._mensagem.texto = 'Um erro não esperado aconteceu. Entre em contato com o suporte';
            }
        }
    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0
        this._inputData.focus();
    }

    _criaNegociacao() {

        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }

    importaNegociacoes() {

        this._service
            .obtemNegociacoesDoPeriodo()
            .then(negociacoes => {

                negociacoes.filter(novaNegociacao =>

                    !this._negociacoes.paraArray().some(negociacaoExistente =>

                        novaNegociacao.equals(negociacaoExistente)))

                    .forEach(negociacao => this._negociacoes.adiciona(negociacao));

                this._mensagem.texto = 'Negociações do período importadas com sucesso';
            })
            .catch(err => this._mensagem.texto = err);
    }

    apaga() {

        getNegociacaoDao()
        .then(dao => dao.apagaTodos())
        .then(() => {
            this._negociacoes.esvazia();
            this._mensagem.texto = 'Negociações apagadas com sucesso';
        })
        .catch(err => this._mensagem.texto = err);
    }     
}