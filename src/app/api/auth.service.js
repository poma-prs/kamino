System.register(['@angular/core', './session.service', "./api.service"], function(exports_1, context_1) {
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
    var core_1, session_service_1, api_service_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (session_service_1_1) {
                session_service_1 = session_service_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(sessionService, apiService) {
                    this.sessionService = sessionService;
                    this.apiService = apiService;
                }
                AuthService.prototype.login = function (userData) {
                    var _this = this;
                    var result = false;
                    this.apiService.login(userData)
                        .subscribe(function (data) {
                        if (!data.error && data.token) {
                            _this.sessionService.token = data.token;
                        }
                        if (data.error) {
                            console.error(data.error);
                        }
                        result = true;
                    }, function (error) {
                        console.error(error);
                    });
                    return result;
                };
                AuthService.prototype.logout = function () {
                    this.sessionService.clearToken();
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [session_service_1.SessionService, api_service_1.ApiService])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=auth.service.js.map