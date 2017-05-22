System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var WINDOW, APPLICATION_KEY, SessionService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            exports_1("WINDOW", WINDOW = new core_1.OpaqueToken('window-context'));
            exports_1("APPLICATION_KEY", APPLICATION_KEY = new core_1.OpaqueToken('application-key'));
            /**
             * Session store service
             */
            SessionService = (function () {
                function SessionService(applicationKey, win) {
                    this.applicationKey = applicationKey;
                    this._token = '';
                    this.win = win;
                }
                SessionService.prototype.getApplicationKey = function () {
                    return (this.applicationKey ? this.applicationKey : 'unknown');
                };
                Object.defineProperty(SessionService.prototype, "token", {
                    get: function () {
                        if (this._token === '') {
                            if (this.win.localStorage) {
                                this._token = this.win.localStorage.getItem(this.getTokenStorageKey());
                            }
                        }
                        return this._token;
                    },
                    set: function (token) {
                        this._token = token;
                        if (this.win.localStorage) {
                            this.win.localStorage.setItem(this.getTokenStorageKey(), token);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                SessionService.prototype.clearToken = function () {
                    this._token = '';
                    if (this.win.localStorage) {
                        this.win.localStorage.removeItem(this.getTokenStorageKey());
                    }
                };
                SessionService.prototype.getTokenStorageKey = function () {
                    return 'authentication.' + this.getApplicationKey();
                };
                SessionService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(APPLICATION_KEY)),
                    __param(1, core_1.Inject(WINDOW)), 
                    __metadata('design:paramtypes', [String, Object])
                ], SessionService);
                return SessionService;
            }());
            exports_1("SessionService", SessionService);
        }
    }
});
//# sourceMappingURL=session.service.js.map