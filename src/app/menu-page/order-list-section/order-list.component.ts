import {Component, EventEmitter, Input, Output} from '@angular/core';

import {FoodListComponent, OrderPosition} from '../food-list-section/food-list.component';
import {Food} from "../menu-page.component";

@Component({
    selector: 'fd-od-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.css', './order-list-button.component.css']
})

export class OrderListComponent {
    namefoodArray: OrderPosition[] = [];

    @Output() process = new EventEmitter();

    addToOrder(position: OrderPosition) {
        for (let p of this.namefoodArray) {
          if (p.food.id === position.food.id) {
            p.count = Number(p.count) + Number(position.count || 0);
            return;
          }
        }
        this.namefoodArray.push(position);
    }

    get sum() {
        let sum = 0;
        for (let position of this.namefoodArray) {
            sum += (position.food.price || 0) * (position.count || 0);
        }
        return sum;
    }

    processOrder() {
        this.process.emit(this.namefoodArray);
    }

    clear() {
        this.namefoodArray = [];
    }
}
