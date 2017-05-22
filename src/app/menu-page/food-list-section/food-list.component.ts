import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Food} from "../menu-page.component";

@Component({
    selector: 'mw-food-item',
    templateUrl: './food-list.component.html',
    styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
    @Input() itemList: Food[];
    @Output() search = new EventEmitter<OrderPosition>();

    totalOrder = 1;

    addedItem: Food;
    selectedItem: Food;
    opened: boolean = false;

    select(item) {
        this.selectedItem = item;
        this.opened = true;
    }

    addInList(count: number) {
        this.opened = false;
        this.search.emit({
            food: this.selectedItem,
            count: count
        });
        this.selectedItem = null;
    }
}
export interface OrderPosition {
    food: Food;
    count: number;
}