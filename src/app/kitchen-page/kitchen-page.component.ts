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
        });

    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }

    make(number: number, orderIndex: number, posIndex: number) {
        if (!this.cooking) {
            this.cooking = true;
            setTimeout(() => {
                this.cooking = false;
            }, 2000);
            if (this.orders[orderIndex]) {
                let count = this.orders[orderIndex].positions[posIndex].count;
                if (number >= count) {
                    this.orders[orderIndex].positions[posIndex].cooked = count;
                    this.inventory.push({
                        food: this.orders[orderIndex].positions[posIndex].product,
                        count: number - count
                    });
                } else {
                    this.orders[orderIndex].positions[posIndex].cooked += number;
                    let left = this.orders[orderIndex].positions[posIndex].count -
                        this.orders[orderIndex].positions[posIndex].cooked;
                    for (const inventoryFood of this.inventory) {
                        if (inventoryFood.food.id === this.orders[orderIndex].positions[posIndex].product.id) {
                            if (inventoryFood.count >= left) {
                                this.orders[orderIndex].positions[posIndex].cooked = count;
                                inventoryFood.count -= left;
                            } else {
                                this.orders[orderIndex].positions[posIndex].cooked += inventoryFood.count;
                                inventoryFood.count = 0;
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
                    this.requestOrders();
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