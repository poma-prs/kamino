import { Component } from '@angular/core';

@Component({
    selector: 'kitchen-app',
    templateUrl: './kitchen-page.component.html',
    styleUrls:['./kitchen-page.component.css']
})

export class KitchenPageComponent {
    pageTitle: string = 'Kitchen Orders';
}