System.register(['@angular/router', './about-page/about-page.component', './promotion-page/promotion-page.component', './menu-page/menu-page.component', './kitchen-page/kitchen-page.component', './login-page/login.component', './front-page/front.component', './payment-page/pay.component', './receipt-page/receipt.component', "./auth.guard"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, about_page_component_1, promotion_page_component_1, menu_page_component_1, kitchen_page_component_1, login_component_1, front_component_1, pay_component_1, receipt_component_1, auth_guard_1;
    var appRoutes, Routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (about_page_component_1_1) {
                about_page_component_1 = about_page_component_1_1;
            },
            function (promotion_page_component_1_1) {
                promotion_page_component_1 = promotion_page_component_1_1;
            },
            function (menu_page_component_1_1) {
                menu_page_component_1 = menu_page_component_1_1;
            },
            function (kitchen_page_component_1_1) {
                kitchen_page_component_1 = kitchen_page_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (front_component_1_1) {
                front_component_1 = front_component_1_1;
            },
            function (pay_component_1_1) {
                pay_component_1 = pay_component_1_1;
            },
            function (receipt_component_1_1) {
                receipt_component_1 = receipt_component_1_1;
            },
            function (auth_guard_1_1) {
                auth_guard_1 = auth_guard_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: '', component: front_component_1.FrontPageComponent },
                { path: 'promotion', component: promotion_page_component_1.PromotionPageComponent },
                { path: 'menu', component: menu_page_component_1.MenuPageComponent },
                { path: 'about', component: about_page_component_1.AboutPageComponent },
                { path: 'kitchen', component: kitchen_page_component_1.KitchenPageComponent, canActivate: [auth_guard_1.AuthGuard] },
                { path: 'receipt', component: receipt_component_1.ReceiptPageComponent, canActivate: [auth_guard_1.AuthGuard] },
                { path: 'payment', component: pay_component_1.PaymentComponent },
                { path: 'login', component: login_component_1.LoginPageComponent }
            ];
            exports_1("Routing", Routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map