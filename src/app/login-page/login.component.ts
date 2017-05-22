import {Component} from '@angular/core';
import {AuthService} from "../api/auth.service";
import {LoginResponse, UserData} from "../api/models/UserData";
import {ApiService} from "../api/api.service";
import {SessionService} from "../api/session.service";

@Component({
    selector: 'login-page',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],

})
export class LoginPageComponent {
    user: UserData = {
        login: '',
        password: ''
    };
    loading = false;
    result: boolean = false;
    touched: boolean = false;

    constructor(
        protected authService: AuthService,
        protected apiService: ApiService,
        protected sessionService: SessionService
    ) {

    }

    login() {
        // this.touched = true;
        // this.result = this.authService.login(this.user);
        this.apiService.login(this.user)
            .subscribe(
                (data: LoginResponse) => {
                    if (!data.error && data.token) {
                        this.sessionService.token = data.token;
                    }
                    if (data.error) {
                        console.error(data.error);
                    }
                }, (error) => {
                    console.error(error);
                }
            );
    }
}