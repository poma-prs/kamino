import {OrderPosition} from "../../menu-page/food-list-section/food-list.component";
import {Food} from "../../menu-page/menu-page.component";
export interface OrderResponse {
    successful: number;
    error?: any;
}

export interface OrderPositionResponse {
    productId: number;
    sum?: number;
    product?: Food;
    count: number;
    cooked: number;
}
export interface Order {
    id: number;
    positions: OrderPositionResponse[];
    sum: number;
    completed: boolean;
}