import {Injectable, Inject, OpaqueToken} from '@angular/core';
import {Order} from "./models/Order";
import {OrderPosition} from "../menu-page/food-list-section/food-list.component";

export const WINDOW = new OpaqueToken('window-context');
export const APPLICATION_KEY = new OpaqueToken('application-key');

/**
 * Session store service
 */
@Injectable()
export class SessionService {
    protected _token = '';

    /**
     * Workaround for https://github.com/angular/angular/issues/15640
     */
    protected win: Window;

    constructor(@Inject(APPLICATION_KEY) protected applicationKey: string, @Inject(WINDOW) win) {
        this.win = win;
    }

    getApplicationKey() {
        return (this.applicationKey ? this.applicationKey : 'unknown');
    }

    get token() {
        if (this._token === '') {
            if (this.win.localStorage) {
                this._token = this.win.localStorage.getItem(this.getTokenStorageKey());
            }
        }
        return this._token;
    }

    set token(token: string) {
        this._token = token;
        if (this.win.localStorage) {
            this.win.localStorage.setItem(this.getTokenStorageKey(), token);
        }
    }

    clearToken() {
        this._token = '';
        if (this.win.localStorage) {
            this.win.localStorage.removeItem(this.getTokenStorageKey());
        }
    }

    getTokenStorageKey() {
        return 'authentication.' + this.getApplicationKey();
    }

    setCurrentOrder(order: OrderPosition[]) {
        if (this.win.localStorage) {
            this.win.localStorage.setItem('order', JSON.stringify(order));
        }
    }

    getCurrentOrder(): OrderPosition[] {
        if (this.win.localStorage) {
            return <OrderPosition[]>JSON.parse(this.win.localStorage.getItem('order'));
        }
    }

    clearOrder() {
        this.win.localStorage.removeItem('order');
    }

}