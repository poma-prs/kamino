import {Inject, Injectable, OpaqueToken} from "@angular/core";
import {Http, RequestMethod, RequestOptions, Headers, Request, URLSearchParams} from "@angular/http";
import {LoginResponse, UserData} from "./models/UserData";
import {RequestArgs} from "@angular/http/src/interfaces";
import {Observable} from "rxjs";
import {SessionService} from "./session.service";
import {Router} from "@angular/router";
import {OrderPosition} from "../menu-page/food-list-section/food-list.component";
import {Order} from "./models/Order";

export const API_BASE_URL = new OpaqueToken('api-base-url');

@Injectable()
export class ApiService {

    constructor(@Inject(API_BASE_URL) protected baseUrl,
                protected http: Http,
                protected sessionService: SessionService,
                protected router: Router) {
    }

    public login(user: UserData) {
        return this.request<LoginResponse>(RequestMethod.Post, ['login'], null, user, true);
    }

    public order(order: OrderPosition[]) {
        let total = 0;
        let mappedOrder = order.map((orderPos: OrderPosition) => {
            total += (orderPos.count * orderPos.food.price);
            return {
                'foodId': orderPos.food.id,
                'foodCount': orderPos.count
            }
        });
        let processOrder = {
            order: mappedOrder,
            sum: total
        };
        return this.request<LoginResponse>(RequestMethod.Post, ['order'], null, processOrder, true);
    }

    public getOrders() {
        return this.request<Order[]>(RequestMethod.Get, ['order']);
    }

    public getCompletedOrders() {
        return this.request<Order[]>(RequestMethod.Get, ['order', 'completed']);
    }

    public fulfil(orderId: number) {
        return this.request<{ successful: boolean, error?: any }>(
            RequestMethod.Post, ['order', 'fulfil'], null, {orderId: orderId}, true
        );
    }


    protected request<RequestResult>(method: RequestMethod, url: string[] = [], params: any = null, data: any = null, noAuth: boolean = false) {
        return this.sendRequest<RequestResult>(method, url.join('/'), params, data, noAuth);
    }


    sendRequest<RequestResult>(method: RequestMethod, url: string, params: any = null, data: any = null, noAuth: boolean = false): Observable<RequestResult> {

        let request: Observable<RequestResult> = null;
        if (this.sessionService.token || noAuth) {
            request = this.prepareRequest(method, url, params, data)
                .catch((response) => {
                    console.info(response);
                    let result: Error = new Error(response);
                    return Observable.throw(result);
                })
                .map((response) => {
                    console.info(response);
                    return <RequestResult>response.json();
                })
            ;
        }
        else {
            this.router.navigateByUrl('/login');
        }
        return request;
    }

    prepareRequest(method: RequestMethod, url: string, params: any = null, data: any = null) {
        let request = {
            url: this.baseUrl + url,
            method: method,
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Api-Token': this.sessionService.token,
            }),
            search: this.prepareParams(params),
            body: this.prepareData(data)
        };
        return this.http.request(new Request(request));
    }

    prepareParams(params: any = null) {
        let result = new URLSearchParams();
        if (params) {
            for (let key in params) {
                if (params.hasOwnProperty(key)) {
                    let value = params[key];
                    if (Array.isArray(value)) {
                        value = value.join(',');
                    }
                    switch (typeof (value)) {
                        case 'object':
                            throw new Error('Object is not allowed as GET parameter');
                        default:
                            result.set(key, value);
                            break;
                    }
                }
            }
        }
        return result;
    }

    prepareData(data: any = null) {
        let result = '';
        if (data) {
            result = JSON.stringify(data);
        }
        return result;
    }
}