class NegociacaoService {

    obterNegociacoesDaSemana(cb) {

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');

        xhr.onreadystatechange = () => {
        
            if(xhr.readyState == 4) {

                if(xhr.status == 200) {
                    
                    const negociacoes = JSON
                        .parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                        
                    cb(null, negociacoes);

                } else {
                     console.log(xhr.responseText);
                     cb('Não foi possível obter nas negociações da semana', null);
                }
            }
        };

        xhr.send();
    }
}