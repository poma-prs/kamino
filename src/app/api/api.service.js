System.register(["@angular/core", "@angular/http", "rxjs"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, rxjs_1;
    var ApiService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            }],
        execute: function() {
            ApiService = (function () {
                function ApiService(http) {
                    this.http = http;
                }
                ApiService.prototype.login = function (user) {
                    return this.request(http_1.RequestMethod.Post, ['api', 'login']);
                };
                ApiService.prototype.jwt = function () {
                    // create authorization header with jwt token
                    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    if (currentUser && currentUser.token) {
                        var headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
                        return new http_1.RequestOptions({ headers: headers });
                    }
                };
                ApiService.prototype.request = function (method, url, params, data) {
                    if (url === void 0) { url = []; }
                    if (params === void 0) { params = null; }
                    if (data === void 0) { data = null; }
                    return this.sendRequest(method, url.join('/'), params, data);
                };
                ApiService.prototype.sendRequest = function (method, url, params, data) {
                    if (params === void 0) { params = null; }
                    if (data === void 0) { data = null; }
                    var request = null;
                    if (this.sessionVault.getToken()) {
                        request = this.prepareRequest(method, url, params, data)
                            .catch(function (response) {
                            console.info(response);
                            var result = new Error(response);
                            return rxjs_1.Observable.throw(result);
                        })
                            .map(function (response) {
                            console.info(response);
                            return response.json();
                        });
                    }
                    else {
                        this.sessionService.startLogin();
                    }
                    return request;
                };
                ApiService.prototype.prepareRequest = function (method, url, params, data) {
                    if (params === void 0) { params = null; }
                    if (data === void 0) { data = null; }
                    var request = {
                        url: this.baseUrl + url,
                        method: method,
                        headers: new Headers({
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'X-Api-Token': this.sessionService.getToken(),
                        }),
                        params: this.prepareParams(params),
                        body: this.prepareData(data)
                    };
                    return this.http.request(new Request(request));
                };
                ApiService.prototype.prepareParams = function (params) {
                    if (params === void 0) { params = null; }
                    var result = new URLSearchParams();
                    if (params) {
                        for (var key in params) {
                            if (params.hasOwnProperty(key)) {
                                var value = params[key];
                                if (Array.isArray(value)) {
                                    value = value.join(',');
                                }
                                switch (typeof (value)) {
                                    case 'object':
                                        throw new Error('Object is not allowed as GET parameter');
                                    default:
                                        result.set(key, value);
                                        break;
                                }
                            }
                        }
                    }
                    return result;
                };
                ApiService.prototype.prepareData = function (data) {
                    if (data === void 0) { data = null; }
                    var result = '';
                    if (data) {
                        result = JSON.stringify(data);
                    }
                    return result;
                };
                ApiService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ApiService);
                return ApiService;
            }());
            exports_1("ApiService", ApiService);
        }
    }
});
//# sourceMappingURL=api.service.js.map