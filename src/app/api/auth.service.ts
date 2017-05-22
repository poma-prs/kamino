import {Injectable, Inject, OpaqueToken} from '@angular/core';
import {WINDOW, SessionService} from './session.service';
import {Http, URLSearchParams} from '@angular/http';
import {Router} from '@angular/router';
import {LoginResponse, UserData} from "./models/UserData";
import {ApiService} from "./api.service";


@Injectable()
export class AuthService {
    constructor(protected sessionService: SessionService,
                private apiService: ApiService) {
    }

    login(userData: UserData) {
        let result = false;
        this.apiService.login(userData)
            .subscribe(
                (data: LoginResponse) => {
                    if (!data.error && data.token) {
                        this.sessionService.token = data.token;
                    }
                    if (data.error) {
                        console.error(data.error);
                    }
                    result = true;
                }, (error) => {
                    console.error(error);
                }
            );
        return result;
    }

    logout() {
        this.sessionService.clearToken();
    }

}