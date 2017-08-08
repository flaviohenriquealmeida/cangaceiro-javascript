System.register([], function (_export, _context) {
    "use strict";

    var campos, tbody;
    return {
        setters: [],
        execute: function () {
            campos = [document.querySelector('#data'), document.querySelector('#valor'), document.querySelector('#quantidade')];


            console.log(campos);

            tbody = document.querySelector('table tbody');


            document.querySelector('.form').addEventListener('submit', function (event) {

                event.preventDefault();
                var tr = document.createElement('tr');

                campos.forEach(function (campo) {
                    var td = document.createElement('td');
                    td.textContent = campo.value;
                    tr.appendChild(td);
                });

                var tdVolume = document.createElement('td');
                tdVolume.textContent = campos[1].value * campos[2].value;
                tr.appendChild(tdVolume);

                tbody.appendChild(tr);

                campos[0].value = '';
                campos[1].value = 1;
                campos[2].value = 0;
                campos[0].focus();
            });
        }
    };
});
//# sourceMappingURL=index.js.map