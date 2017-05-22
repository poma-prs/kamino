System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FoodListService;
    return {
        setters:[],
        execute: function() {
            FoodListService = (function () {
                function FoodListService() {
                    this.foodItems = [
                        {
                            id: 1,
                            name: "Acklay Roast ",
                            picture: "assets/food/f1.png",
                            price: 3500,
                            category: "",
                            description: "The Acklay is the creature that Obi-Wan Kenobi killed in the Petranaki arena on Geonosia. Marinated in a blend of Geonosian spice, the Acklay is then slow roasted, basting in Ewok gravy"
                        },
                        {
                            id: 2,
                            name: "Aiwha Medley Hotpot",
                            picture: "assets/food/f2.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 3,
                            name: "Fried Chiaki",
                            picture: "assets/food/f3.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 4,
                            name: "Chiilak Prime Rib ",
                            picture: "assets/food/f4.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 5,
                            name: "Cahuamanta ",
                            picture: "assets/food/f5.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 6,
                            name: "Blarth Ribs",
                            picture: "assets/food/f10.png",
                            price: 3500,
                            category: "",
                            description: ""
                        },
                        {
                            id: 7,
                            name: "Fried Demonsquid",
                            picture: "assets/food/f11.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 8,
                            name: "Kalaide Soup",
                            picture: "assets/food/f12.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 9,
                            name: "Steamed Basalt Clams",
                            picture: "assets/food/f13.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 10,
                            name: "Octowhale Egg Drop Soup",
                            picture: "assets/food/f14.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }
                    ];
                }
                FoodListService.prototype.get = function () {
                    return this.foodItems;
                };
                FoodListService.prototype.add = function (foodItems) {
                    this.foodItems.push(foodItems);
                };
                FoodListService.prototype.delete = function (foodItems) {
                    var index = this.foodItems.indexOf(foodItems);
                    if (index >= 0) {
                        this.foodItems.splice(index, 1);
                    }
                };
                return FoodListService;
            }());
            exports_1("FoodListService", FoodListService);
        }
    }
});
//# sourceMappingURL=food-list.service.js.map