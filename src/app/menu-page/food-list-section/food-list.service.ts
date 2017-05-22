export class FoodListService {
    get() {
        return this.foodItems;
    }

    add(foodItems) {
        this.foodItems.push(foodItems);
    }

    delete(foodItems) {
        let index = this.foodItems.indexOf(foodItems);
        if (index >= 0) {
            this.foodItems.splice(index, 1);
        }

    }

    foodItems = [
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