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
    var core_1;
    var OrderListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            OrderListComponent = (function () {
                function OrderListComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], OrderListComponent.prototype, "namefoodArray", void 0);
                OrderListComponent = __decorate([
                    core_1.Component({
                        selector: 'fd-od-list',
                        templateUrl: 'app/menu-page/order-list-section/order-list.component.html',
                        styleUrls: ['app/menu-page/order-list-section/order-list.component.css', 'app/menu-page/order-list-section/order-list-button.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], OrderListComponent);
                return OrderListComponent;
            }());
            exports_1("OrderListComponent", OrderListComponent);
        }
    }
});
//# sourceMappingURL=order-list.component.js.map