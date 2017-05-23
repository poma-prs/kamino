import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../api/api.service";
import {Order} from "../api/models/Order";
import {Food, foodItems} from "../menu-page/menu-page.component";
import {Observable, Subscription} from "rxjs";

@Component({
    selector: 'kitchen-app',
    templateUrl: './kitchen-page.component.html',
    styleUrls: ['./kitchen-page.component.css']
})
export class KitchenPageComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Kitchen Orders';
    orders: Order[] = [];
    loading: boolean = false;
    inventory: TrashPosition[] = [];
    cooking: boolean = false;
    subs: Subscription;
    logHistory: Array<string> = [];

    constructor(protected apiService: ApiService) {

    }

    requestOrders() {

        if (!this.loading) {
            this.loading = true;
            this.apiService.getOrders()
                .finally(() => {
                    this.loading = false;
                })
                .subscribe(
                    (orders: Order[]) => {
                        if (orders) {
                            this.orders = orders;
                            for (let order of this.orders) {
                                for (let pos of order.positions) {
                                    for (let item of foodItems) {
                                        if (item.id == pos.productId)
                                            pos.product = item;
                                    }

                                }
                            }
                        }
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        }
    }

    ngOnInit() {

        this.requestOrders();
        this.subs = Observable.timer(300).subscribe(() => {
            this.inventory = [];
            this.logHistory.push('Inventory cleared');
        });

    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }

    make(number: number, orderIndex: number, posIndex: number) {
        if (!this.cooking) {
            this.cooking = true;
            const cookingFood = this.orders[orderIndex].positions[posIndex].product;
            this.logHistory.push('Start cooking ' + number + ' ' + cookingFood.name);

            setTimeout(() => {
                this.cooking = false;
                this.logHistory.push('Finish cooking ' + number + ' ' + cookingFood.name);
            }, 5000);
            if (this.orders[orderIndex]) {
                let count = this.orders[orderIndex].positions[posIndex].count;
                let left = this.orders[orderIndex].positions[posIndex].count - this.orders[orderIndex].positions[posIndex].cooked;
                if (number >= left) {
                    this.orders[orderIndex].positions[posIndex].cooked = count;
                    let inced: boolean = false;
                    for (let invent of this.inventory) {
                        if (invent.food.id === this.orders[orderIndex].positions[posIndex].product.id) {
                            inced = true;
                            invent.count += (number - left);
                        }
                    }
                    if (!inced && number !== count) {
                        this.inventory.push({
                            food: this.orders[orderIndex].positions[posIndex].product,
                            count: number - left
                        });
                    }
                    if (number - left > 0) {
                        this.logHistory.push((number - count) + ' ' + cookingFood.name + ' goes to inventory');
                    }
                } else {
                    this.orders[orderIndex].positions[posIndex].cooked += number;
                    for (const inventoryFood of this.inventory) {
                        if (inventoryFood.food.id === this.orders[orderIndex].positions[posIndex].product.id) {
                            if (inventoryFood.count >= left) {
                                this.orders[orderIndex].positions[posIndex].cooked = count;
                                inventoryFood.count -= left;
                                this.logHistory.push(left + ' ' + cookingFood.name + ' goes from inventory to order');
                            } else {
                                this.orders[orderIndex].positions[posIndex].cooked += inventoryFood.count;
                                inventoryFood.count = 0;
                                this.logHistory.push(
                                    'All(' + inventoryFood.count + ') ' + cookingFood.name + ' goes from inventory to order'
                                );
                            }
                        }
                    }
                    this.inventory = this.inventory.filter((pos: TrashPosition) => {
                        return pos.count > 0;
                    });
                }
            }

        }
    }

    addFromInventory(orderIndex: number, posIndex: number) {
        const cookingFood = this.orders[orderIndex].positions[posIndex].product;
        for (const inv of this.inventory) {
            if (cookingFood.id === inv.food.id) {
                const left = this.orders[orderIndex].positions[posIndex].count - this.orders[orderIndex].positions[posIndex].cooked;
                if (left > inv.count) {
                    this.orders[orderIndex].positions[posIndex].cooked += inv.count;
                    inv.count = 0;
                    this.logHistory.push(
                        'All(' + inv.count + ') ' + cookingFood.name + ' goes from inventory to order'
                    );
                } else {
                    this.orders[orderIndex].positions[posIndex].cooked = this.orders[orderIndex].positions[posIndex].count;
                    inv.count -= left;
                    this.logHistory.push(left + ' ' + cookingFood.name + ' goes from inventory to order');
                }
                this.inventory = this.inventory.filter((pos: TrashPosition) => {
                    return pos.count > 0;
                });
                break;
            }
        }
    }

    canAddFromInventory(orderIndex: number, posIndex: number): number {
        const cookingFood = this.orders[orderIndex].positions[posIndex].product;
        for (const inv of this.inventory) {
            if (
                cookingFood.id === inv.food.id &&
                this.orders[orderIndex].positions[posIndex].cooked !== this.orders[orderIndex].positions[posIndex].count
            ) {
                return inv.count;
            }
        }
        return 0;
    }

    fulfil(orderIndex) {
        if (!this.loading) {
            this.loading = true;
            this.apiService.fulfil(this.orders[orderIndex].id)
                .finally(() => {
                    this.loading = false;
                })
                .subscribe((res) => {
                    console.log('Order is fulfiled');
                    this.loading = false;
                    this.logHistory.push('Order#' + this.orders[orderIndex].id + ' is fulfiled');
                    this.orders.splice(orderIndex, 1);
                }, (error) => console.log(error));
        }
    }

    isCompleted(orderIndex) {
        for (let op of this.orders[orderIndex].positions) {
            if (op.cooked < op.count)
                return false;
        }
        return true;
    }
}

export interface TrashPosition {
    food: Food;
    count: number;
}