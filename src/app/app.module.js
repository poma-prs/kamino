System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', './app.routing', './app.component', './login-page/login.component', './about-page/about-page.component', './front-page/front.component', './kitchen-page/kitchen-page.component', './payment-page/pay.component', './promotion-page/promotion-page.component', './receipt-page/receipt.component', './menu-page/menu-page.component', './menu-page/sidebar-section/sidebar.component', './menu-page/order-list-section/order-list.component', './menu-page/food-list-section/food-list.component', "./api/session.service", "./api/api.service", "./api/auth.service", "./auth.guard", "@angular/http"], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, app_routing_1, app_component_1, login_component_1, about_page_component_1, front_component_1, kitchen_page_component_1, pay_component_1, promotion_page_component_1, receipt_component_1, menu_page_component_1, sidebar_component_1, order_list_component_1, food_list_component_1, session_service_1, api_service_1, auth_service_1, auth_guard_1, http_1;
    var AppModule;
    function sessionServiceFactory(win) {
        return new session_service_1.SessionService('api', win);
    }
    exports_1("sessionServiceFactory", sessionServiceFactory);
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (about_page_component_1_1) {
                about_page_component_1 = about_page_component_1_1;
            },
            function (front_component_1_1) {
                front_component_1 = front_component_1_1;
            },
            function (kitchen_page_component_1_1) {
                kitchen_page_component_1 = kitchen_page_component_1_1;
            },
            function (pay_component_1_1) {
                pay_component_1 = pay_component_1_1;
            },
            function (promotion_page_component_1_1) {
                promotion_page_component_1 = promotion_page_component_1_1;
            },
            function (receipt_component_1_1) {
                receipt_component_1 = receipt_component_1_1;
            },
            function (menu_page_component_1_1) {
                menu_page_component_1 = menu_page_component_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (order_list_component_1_1) {
                order_list_component_1 = order_list_component_1_1;
            },
            function (food_list_component_1_1) {
                food_list_component_1 = food_list_component_1_1;
            },
            function (session_service_1_1) {
                session_service_1 = session_service_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (auth_guard_1_1) {
                auth_guard_1 = auth_guard_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            app_routing_1.Routing,
                            http_1.HttpModule,
                            forms_1.ReactiveFormsModule,
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            food_list_component_1.FoodListComponent,
                            sidebar_component_1.SidebarComponent,
                            pay_component_1.PaymentComponent,
                            order_list_component_1.OrderListComponent,
                            about_page_component_1.AboutPageComponent,
                            promotion_page_component_1.PromotionPageComponent,
                            menu_page_component_1.MenuPageComponent,
                            kitchen_page_component_1.KitchenPageComponent,
                            login_component_1.LoginPageComponent,
                            front_component_1.FrontPageComponent,
                            receipt_component_1.ReceiptPageComponent,
                        ],
                        providers: [
                            api_service_1.ApiService,
                            auth_service_1.AuthService,
                            auth_guard_1.AuthGuard,
                            {
                                provide: session_service_1.SessionService,
                                deps: [session_service_1.WINDOW],
                                useFactory: sessionServiceFactory
                            },
                        ],
                        bootstrap: [
                            app_component_1.AppComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map