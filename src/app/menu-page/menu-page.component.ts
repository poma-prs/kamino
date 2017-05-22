import {Component, Input, ViewChild} from '@angular/core';
import {OrderListComponent} from "./order-list-section/order-list.component";
import {ApiService} from "../api/api.service";
import {OrderPosition} from "./food-list-section/food-list.component";
import {SessionService} from "../api/session.service";
import {Router} from "@angular/router";

@Component({
    selector: 'ray-app',
    templateUrl: './menu-page.component.html',
    styleUrls: ['./menu-page.component.css',
        './menu-page.component2.css',
        './menu-page.component3.css']
})
export class MenuPageComponent {
    @ViewChild(OrderListComponent)
    orderList: OrderListComponent;
    foodItems = foodItems;
    loading: boolean = false;

    addToOrder(event) {
        if (this.orderList) {
            this.orderList.addToOrder(event);
        }
        console.log(event);
    }

    constructor(protected apiService: ApiService,
                protected sessionService: SessionService,
                protected router: Router) {

    }

    processTheOrder(orderList: OrderPosition[]) {
        debugger;
        this.sessionService.setCurrentOrder(orderList);
        this.router.navigateByUrl('/payment');
    }

    // processTheOrder(orderList: OrderPosition[]) {
    //     console.log(orderList);
    //     if (!this.loading) {
    //         this.loading = true;
    //         this.apiService.order(orderList).finally(() => {
    //             this.loading = false;
    //         }).subscribe(
    //             (response) => {
    //                 if (response) {
    //                     if (this.orderList) {
    //                         this.orderList.clear();
    //                     }
    //                 }
    //             },
    //             (error) => {
    //                 console.log(error);
    //             }
    //         );
    //     }
    // }

}

export const foodItems: Array<Food> = [
    {
        id: 1,
        name: "Acklay Roast ",
        picture: "assets/food/acklayroast.png",
        price: 3500,
        category: "",
        description: "The Acklay is the creature that Obi-Wan Kenobi killed in the Petranaki arena on Geonosia. Marinated in a blend of Geonosian spice, the Acklay is then slow roasted, basting in Ewok gravy"
    },
    {
        id: 2,
        name: "Aiwha Medley Hotpot",
        picture: "assets/food/aiwhamedleyhotpot.png",
        price: 3500,
        category: "",
        description: ""
    }, {
        id: 3,
        name: "Fried Chiaki",
        picture: "assets/sides/friedchiaki.png",
        price: 3500,
        category: "",
        description: ""
    }, {
        id: 4,
        name: "Chiilak Prime Rib ",
        picture: "assets/food/chiilakprimerib.png",
        price: 3500,
        category: "",
        description: ""
    }, {
        id: 5,
        name: "Cahuamanta ",
        picture: "assets/sides/cahuamanta.png",
        price: 3500,
        category: "",
        description: ""
    }, {
        id: 6,
        name: "Blarth Ribs",
        picture: "assets/food/blarthribs.png",
        price: 3500,
        category: "",
        description: ""
    },
    {
        id: 7,
        name: "Fried Demonsquid",
        picture: "assets/sides/frieddemonsquid.png",
        price: 3500,
        category: "",
        description: ""
    }, {
        id: 8,
        name: "Kalaide Soup",
        picture: "assets/sides/kalaidesoup.png",
        price: 3500,
        category: "",
        description: ""
    }, {
        id: 9,
        name: "Steamed Basalt Clams",
        picture: "assets/sides/steamedbasaltclams.png",
        price: 3500,
        category: "",
        description: ""
    }, {
        id: 10,
        name: "Octowhale Egg Drop Soup",
        picture: "assets/sides/octowhaleeggdropsoup.png",
        price: 3500,
        category: "",
        description: ""
    }
];

export interface Food {
    id: number;
    name: string;
    picture: string;
    price: number;
    category: string;
    description: string;
}