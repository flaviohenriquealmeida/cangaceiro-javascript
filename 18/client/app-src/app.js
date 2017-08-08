import { NegociacaoController } from './controllers/NegociacaoController.js';
import { debounce } from './util/index.js';

const controller = new NegociacaoController();

const $ = document.querySelector.bind(document);

$('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));

$('#botao-apaga')
    .addEventListener('click', controller.apaga.bind(controller));

$('#botao-importa')
    .addEventListener('click', debounce(() => {
        console.log('EXECUTOU A OPERAÇÃO DO DEBOUNCE');
        controller.importaNegociacoes();
    }, 1000));