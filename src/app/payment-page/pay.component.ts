import {Component, OnInit} from '@angular/core';
import {SessionService} from "../api/session.service";
import {ApiService} from "../api/api.service";
import {Order} from "../api/models/Order";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {OrderPosition} from "../menu-page/food-list-section/food-list.component";

@Component({
    selector: 'pay-page',
    templateUrl: './pay.component.html',
    styleUrls: ['./pay.component.css'],

})
export class PaymentComponent implements OnInit {

    order: OrderPosition[];
    form: FormGroup;
    loading: boolean = false;
    submitted = false;
    error = null;
    constructor(protected apiService: ApiService,
                protected sessionService: SessionService) {

        this.form = new FormGroup({
            firstName: new FormControl('', [Validators.minLength(4), Validators.required]),
            lastName: new FormControl('', [Validators.minLength(4), Validators.required]),
            address: new FormControl('', [Validators.minLength(4), Validators.required]),
            mail: new FormControl('', [Validators.minLength(4), Validators.required]),
            phone: new FormControl('', [Validators.minLength(6), Validators.required]),
            creditCard: new FormControl('', [Validators.minLength(12), Validators.maxLength(16), Validators.required]),
            exp: new FormControl('', [Validators.minLength(4), Validators.required]),
            CVC: new FormControl('', [Validators.minLength(3), Validators.required]),
        });
    }

    ngOnInit() {
        this.order = this.sessionService.getCurrentOrder();
    }

    get sum() {
        let sum = 0;
        for (let position of this.order) {
            sum += (position.food.price || 0) * (position.count || 0);
        }
        return sum;
    }

    processTheOrder($event) {
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        const orderList = this.order;
        if (!this.loading) {
            this.loading = true;
            this.apiService.order(orderList).finally(() => {
                this.loading = false;
            }).subscribe(
                (response) => {
                    if (response) {
                        // show msg
                        this.sessionService.clearOrder();
                        this.form.reset();
                        this.submitted = true;
                    }
                },
                (error) => {
                    console.log(error);
                    this.error = true;
                }
            );
        }
    }
}