System.register(['@angular/core', "./order-list-section/order-list.component", "../api/api.service"], function(exports_1, context_1) {
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
    var core_1, order_list_component_1, api_service_1;
    var MenuPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (order_list_component_1_1) {
                order_list_component_1 = order_list_component_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            }],
        execute: function() {
            MenuPageComponent = (function () {
                function MenuPageComponent(apiService) {
                    this.apiService = apiService;
                    this.foodItems = [
                        {
                            id: 1,
                            name: "Acklay Roast ",
                            picture: "assets/food/acklayroast.png",
                            price: 3500,
                            category: "",
                            description: "The Acklay is the creature that Obi-Wan Kenobi killed in the Petranaki arena on Geonosia. Marinated in a blend of Geonosian spice, the Acklay is then slow roasted, basting in Ewok gravy"
                        },
                        {
                            id: 2,
                            name: "Aiwha Medley Hotpot",
                            picture: "assets/food/aiwhamedleyhotpot.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 3,
                            name: "Fried Chiaki",
                            picture: "assets/sides/friedchiaki.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 4,
                            name: "Chiilak Prime Rib ",
                            picture: "assets/food/chiilakprimerib.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 5,
                            name: "Cahuamanta ",
                            picture: "assets/sides/cahuamanta.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 6,
                            name: "Blarth Ribs",
                            picture: "assets/food/blarthribs.png",
                            price: 3500,
                            category: "",
                            description: ""
                        },
                        {
                            id: 7,
                            name: "Fried Demonsquid",
                            picture: "assets/sides/frieddemonsquid.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 8,
                            name: "Kalaide Soup",
                            picture: "assets/sides/kalaidesoup.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 9,
                            name: "Steamed Basalt Clams",
                            picture: "assets/sides/steamedbasaltclams.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 10,
                            name: "Octowhale Egg Drop Soup",
                            picture: "assets/sides/octowhaleeggdropsoup.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }
                    ];
                }
                MenuPageComponent.prototype.addToOrder = function (event) {
                    if (this.orderList) {
                        this.orderList.addToOrder(event);
                    }
                    console.log(event);
                };
                MenuPageComponent.prototype.processTheOrder = function (orderList) {
                    var _this = this;
                    console.log(orderList);
                    this.apiService.order(orderList).subscribe(function (response) {
                        if (response) {
                            if (_this.orderList) {
                                _this.orderList.clear();
                            }
                        }
                    }, function (error) {
                        console.log(error);
                    });
                };
                __decorate([
                    core_1.ViewChild(order_list_component_1.OrderListComponent), 
                    __metadata('design:type', order_list_component_1.OrderListComponent)
                ], MenuPageComponent.prototype, "orderList", void 0);
                MenuPageComponent = __decorate([
                    core_1.Component({
                        selector: 'ray-app',
                        templateUrl: './menu-page.component.html',
                        styleUrls: ['./menu-page.component.css',
                            './menu-page.component2.css',
                            './menu-page.component3.css']
                    }), 
                    __metadata('design:paramtypes', [api_service_1.ApiService])
                ], MenuPageComponent);
                return MenuPageComponent;
            }());
            exports_1("MenuPageComponent", MenuPageComponent);
        }
    }
});
//# sourceMappingURL=menu-page.component.js.map