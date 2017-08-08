System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            let HttpService = class HttpService {

                _handleErrors(res) {

                    if (!res.ok) throw new Error(res.statusText);
                    return res;
                }

                get(url) {

                    return fetch(url).then(res => this._handleErrors(res)).then(res => res.json());
                }
            };

            _export("HttpService", HttpService);
        }
    };
});
//# sourceMappingURL=HttpService.js.map