System.register(["@angular/core", "@angular/http", "rxjs", "./session.service", "@angular/router"], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1, rxjs_1, session_service_1, router_1;
    var API_BASE_URL, ApiService;
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
            },
            function (session_service_1_1) {
                session_service_1 = session_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            exports_1("API_BASE_URL", API_BASE_URL = new core_1.OpaqueToken('api-base-url'));
            ApiService = (function () {
                function ApiService(baseUrl, http, sessionService, router) {
                    this.baseUrl = baseUrl;
                    this.http = http;
                    this.sessionService = sessionService;
                    this.router = router;
                }
                ApiService.prototype.login = function (user) {
                    return this.request(http_1.RequestMethod.Post, ['login'], null, user, true);
                };
                ApiService.prototype.order = function (order) {
                    var total = 0;
                    var mappedOrder = order.map(function (orderPos) {
                        total += (orderPos.count * orderPos.food.price);
                        return {
                            'foodId': orderPos.food.id,
                            'foodCount': orderPos.count
                        };
                    });
                    var processOrder = {
                        order: mappedOrder,
                        sum: total
                    };
                    return this.request(http_1.RequestMethod.Post, ['order'], null, processOrder, true);
                };
                ApiService.prototype.request = function (method, url, params, data, noAuth) {
                    if (url === void 0) { url = []; }
                    if (params === void 0) { params = null; }
                    if (data === void 0) { data = null; }
                    if (noAuth === void 0) { noAuth = false; }
                    return this.sendRequest(method, url.join('/'), params, data, noAuth);
                };
                ApiService.prototype.sendRequest = function (method, url, params, data, noAuth) {
                    if (params === void 0) { params = null; }
                    if (data === void 0) { data = null; }
                    if (noAuth === void 0) { noAuth = false; }
                    var request = null;
                    if (this.sessionService.token || noAuth) {
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
                        this.router.navigateByUrl('/login');
                    }
                    return request;
                };
                ApiService.prototype.prepareRequest = function (method, url, params, data) {
                    if (params === void 0) { params = null; }
                    if (data === void 0) { data = null; }
                    var request = {
                        url: this.baseUrl + url,
                        method: method,
                        headers: new http_1.Headers({
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'X-Api-Token': this.sessionService.token,
                        }),
                        search: this.prepareParams(params),
                        body: this.prepareData(data)
                    };
                    return this.http.request(new http_1.Request(request));
                };
                ApiService.prototype.prepareParams = function (params) {
                    if (params === void 0) { params = null; }
                    var result = new http_1.URLSearchParams();
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
                    __param(0, core_1.Inject(API_BASE_URL)), 
                    __metadata('design:paramtypes', [Object, http_1.Http, session_service_1.SessionService, router_1.Router])
                ], ApiService);
                return ApiService;
            }());
            exports_1("ApiService", ApiService);
        }
    }
});
//# sourceMappingURL=api.service.js.map