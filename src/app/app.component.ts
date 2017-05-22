import {Component, OnInit} from '@angular/core';
import {SessionService} from "./api/session.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    constructor(protected sessionService: SessionService) {

    }

    get isAuth() {
        return this.sessionService.token && this.sessionService.token !== '' && this.sessionService.token !== undefined;
    }

    get order() {
        return this.sessionService.getCurrentOrder() && this.sessionService.getCurrentOrder() !== undefined;
    }
}