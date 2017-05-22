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
    var MenuPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MenuPageComponent = (function () {
                function MenuPageComponent() {
                    this.addeditemArray = [];
                    this.foodItems = [
                        {
                            id: 1,
                            name: "Acklay Roast ",
                            picture: "food/acklayroast.png",
                            price: 3500,
                            category: "",
                            description: "The Acklay is the creature that Obi-Wan Kenobi killed in the Petranaki arena on Geonosia. Marinated in a blend of Geonosian spice, the Acklay is then slow roasted, basting in Ewok gravy"
                        },
                        {
                            id: 2,
                            name: "Aiwha Medley Hotpot",
                            picture: "food/aiwhamedleyhotpot.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 3,
                            name: "Fried Chiaki",
                            picture: "sides/friedchiaki.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 4,
                            name: "Chiilak Prime Rib ",
                            picture: "food/chiilakprimerib.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 5,
                            name: "Cahuamanta ",
                            picture: "sides/cahuamanta.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 6,
                            name: "Blarth Ribs",
                            picture: "food/blarthribs.png",
                            price: 3500,
                            category: "",
                            description: ""
                        },
                        {
                            id: 7,
                            name: "Fried Demonsquid",
                            picture: "sides/frieddemonsquid.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 8,
                            name: "Kalaide Soup",
                            picture: "sides/kalaidesoup.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 9,
                            name: "Steamed Basalt Clams",
                            picture: "sides/steamedbasaltclams.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 10,
                            name: "Octowhale Egg Drop Soup",
                            picture: "sides/octowhaleeggdropsoup.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }
                    ];
                }
                MenuPageComponent.prototype.haha = function (event) {
                    this.addeditemArray.push(event);
                    console.log(event);
                };
                MenuPageComponent = __decorate([
                    core_1.Component({
                        selector: 'ray-app',
                        templateUrl: 'app/menu-page/menu-page.component.html',
                        styleUrls: ['app/menu-page/menu-page.component.css',
                            'app/menu-page/menu-page.component2.css',
                            'app/menu-page/menu-page.component3.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MenuPageComponent);
                return MenuPageComponent;
            }());
            exports_1("MenuPageComponent", MenuPageComponent);
        }
    }
});
//# sourceMappingURL=menu-page.component.js.map