System.register(['@angular/platform-browser-dynamic', '@angular/core', './environments/environment', './app/app.module', "./app/api/session.service", "./app/api/api.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, environment_1, app_module_1, session_service_1, api_service_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (session_service_1_1) {
                session_service_1 = session_service_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            }],
        execute: function() {
            if (environment_1.environment.production) {
                core_1.enableProdMode();
            }
            platform_browser_dynamic_1.platformBrowserDynamic([
                {
                    provide: session_service_1.WINDOW,
                    useValue: window,
                },
                {
                    provide: api_service_1.API_BASE_URL,
                    useValue: environment_1.environment.apiBaseUrl,
                },
            ]).bootstrapModule(app_module_1.AppModule);
        }
    }
});
//# sourceMappingURL=main.js.map