// This file is required by karma.conf.js and loads recursively all the .spec and framework files
System.register(['zone.js/dist/long-stack-trace-zone', 'zone.js/dist/proxy.js', 'zone.js/dist/sync-test', 'zone.js/dist/jasmine-patch', 'zone.js/dist/async-test', 'zone.js/dist/fake-async-test', '@angular/core/testing', '@angular/platform-browser-dynamic/testing'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, testing_2;
    var context;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            }],
        execute: function() {
            // Prevent Karma from running prematurely.
            __karma__.loaded = function () { };
            // First, initialize the Angular testing environment.
            testing_1.getTestBed().initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
            // Then we find all the tests.
            context = require.context('./', true, /\.spec\.ts$/);
            // And load the modules.
            context.keys().map(context);
            // Finally, start Karma to run the tests.
            __karma__.start();
        }
    }
});
//# sourceMappingURL=test.js.map