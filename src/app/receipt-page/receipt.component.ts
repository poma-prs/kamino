import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api/api.service";
import {Order} from "../api/models/Order";
import {foodItems} from "../menu-page/menu-page.component";

@Component({
    selector: 'receipt-page',
    templateUrl: './receipt.component.html',
    styleUrls: ['./receipt.component.css'],

})
export class ReceiptPageComponent implements OnInit {
    protected orders: Order[];
    protected totalSum: number = 0;
    loading: boolean = false;

    constructor(protected apiService: ApiService) {

    }

    requestOrders() {

        if (!this.loading) {
            this.loading = true;
            this.apiService.getCompletedOrders()
                .finally(() => {
                    this.loading = false;
                })
                .subscribe(
                    (orders: Order[]) => {
                        if (orders) {
                            this.orders = orders;
                            for (const order of this.orders) {
                                this.totalSum += order.sum;
                                for (const pos of order.positions) {
                                    for (const item of foodItems) {
                                        if (item.id === pos.productId) {
                                            pos.product = item;
                                        }
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
    }
}