import {Component, OnInit} from '@angular/core';
import {AuthService} from "../api/auth.service";
import {LoginResponse, UserData} from "../api/models/UserData";
import {ApiService} from "../api/api.service";
import {SessionService} from "../api/session.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'login-page',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],

})
export class LoginPageComponent implements OnInit {
    user: UserData = {
        login: '',
        password: ''
    };
    loading = false;
    result: boolean = false;
    touched: boolean = false;
    returnUrl: string = '/';

    constructor(private route: ActivatedRoute,
                protected authService: AuthService,
                protected apiService: ApiService,
                protected sessionService: SessionService,
                protected router: Router) {

    }

    ngOnInit() {
        if (this.sessionService.token) {
            this.sessionService.clearToken();
        }
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        // this.touched = true;
        // this.result = this.authService.login(this.user);
        this.apiService.login(this.user)
            .subscribe(
                (data: LoginResponse) => {
                    if (!data.error && data.token) {
                        this.sessionService.token = data.token;
                        this.router.navigate([this.returnUrl]);
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