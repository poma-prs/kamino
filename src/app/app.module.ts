import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routing} from './app.routing';

import {AppComponent} from './app.component';

import {LoginPageComponent} from './login-page/login.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {FrontPageComponent} from './front-page/front.component';
import {KitchenPageComponent} from './kitchen-page/kitchen-page.component';
import {PaymentComponent} from './payment-page/pay.component';
import {PromotionPageComponent} from './promotion-page/promotion-page.component';
import {ReceiptPageComponent} from './receipt-page/receipt.component';
import {MenuPageComponent} from './menu-page/menu-page.component';

import {SidebarComponent} from './menu-page/sidebar-section/sidebar.component';
import {OrderListComponent} from './menu-page/order-list-section/order-list.component';
import {FoodListComponent} from './menu-page/food-list-section/food-list.component';
import {SessionService, WINDOW} from "./api/session.service";
import {ApiService} from "./api/api.service";
import {AuthService} from "./api/auth.service";
import {AuthGuard} from "./auth.guard";
import {HttpModule} from "@angular/http";


export function sessionServiceFactory(win: Window) {
    return new SessionService('api', win);
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        Routing,
        HttpModule,
        ReactiveFormsModule,
    ],
    declarations: [
        AppComponent,
        FoodListComponent,
        SidebarComponent,
        PaymentComponent,
        OrderListComponent,
        AboutPageComponent,
        PromotionPageComponent,
        MenuPageComponent,
        KitchenPageComponent,
        LoginPageComponent,
        FrontPageComponent,
        ReceiptPageComponent,
    ],
    providers: [
        ApiService,
        AuthService,
        AuthGuard,
        {
            provide: SessionService,
            deps: [WINDOW],
            useFactory: sessionServiceFactory
        },
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}