System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            const stores = ['negociacoes'];
            let connection = null;
            let close = null;

            let ConnectionFactory = class ConnectionFactory {

                constructor() {

                    throw new Error('Não é possível criar instâncias dessa classe');
                }

                static getConnection() {

                    return new Promise((resolve, reject) => {

                        if (connection) return resolve(connection);

                        const openRequest = indexedDB.open('jscangaceiro', 2);

                        openRequest.onupgradeneeded = e => {

                            ConnectionFactory._createStores(e.target.result);
                        };

                        openRequest.onsuccess = e => {

                            connection = e.target.result;

                            close = connection.close.bind(connection);

                            connection.close = () => {
                                throw new Error('Você não pode fechar diretamente a conexão');
                            };

                            resolve(e.target.result);
                        };

                        openRequest.onerror = e => {

                            console.log(e.target.error);
                            reject(e.target.error.name);
                        };
                    });
                }

                static _createStores(connection) {

                    stores.forEach(store => {

                        if (connection.objectStoreNames.contains(store)) connection.deleteObjectStore(store);

                        connection.createObjectStore(store, { autoIncrement: true });
                    });
                }

                static closeConnection() {

                    if (connection) {
                        close();
                    }
                }
            };

            _export('ConnectionFactory', ConnectionFactory);
        }
    };
});
//# sourceMappingURL=ConnectionFactory.js.map