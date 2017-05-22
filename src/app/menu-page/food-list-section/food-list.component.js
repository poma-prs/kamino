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
    var FoodListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FoodListComponent = (function () {
                function FoodListComponent() {
                    this.search = new core_1.EventEmitter();
                    this.totalOrder = 1;
                    this.opened = false;
                    this.descShowed = false;
                }
                FoodListComponent.prototype.select = function (item) {
                    this.selectedItem = item;
                    this.opened = true;
                };
                FoodListComponent.prototype.addInList = function (count) {
                    this.opened = false;
                    this.search.emit({
                        food: this.selectedItem,
                        count: count
                    });
                    this.selectedItem = null;
                };
                __decorate([
                    core_1.Input(),
                    __metadata('design:type', Array)
                ], FoodListComponent.prototype, "itemList", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata('design:type', Object)
                ], FoodListComponent.prototype, "search", void 0);
                FoodListComponent = __decorate([
                    core_1.Component({
                        selector: 'mw-food-item',
                        templateUrl: './food-list.component.html',
                        styleUrls: ['./food-list.component.css']
                    }),
                    __metadata('design:paramtypes', [])
                ], FoodListComponent);
                return FoodListComponent;
            }());
            exports_1("FoodListComponent", FoodListComponent);
        }
    }
});
//# sourceMappingURL=food-list.component.js.map
