import {Routes, RouterModule} from '@angular/router';

import {AboutPageComponent} from './about-page/about-page.component';
import {PromotionPageComponent} from './promotion-page/promotion-page.component';
import {MenuPageComponent} from './menu-page/menu-page.component';
import {KitchenPageComponent} from './kitchen-page/kitchen-page.component';
import {LoginPageComponent} from './login-page/login.component';
import {FrontPageComponent} from './front-page/front.component';
import {PaymentComponent} from './payment-page/pay.component';
import {ReceiptPageComponent} from './receipt-page/receipt.component';
import {AuthGuard} from "./auth.guard";

const appRoutes: Routes = [
    {path: '', component: FrontPageComponent},
    {path: 'promotion', component: PromotionPageComponent},
    {path: 'menu', component: MenuPageComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'kitchen', component: KitchenPageComponent, canActivate: [AuthGuard]},
    {path: 'receipt', component: ReceiptPageComponent, canActivate: [AuthGuard]},
    {path: 'payment', component: PaymentComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'logout', component: LoginPageComponent}
];

export const Routing = RouterModule.forRoot(appRoutes);