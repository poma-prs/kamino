import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {SessionService} from './api/session.service';
import {AuthService} from "./api/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(protected sessionService: SessionService,
                protected authService: AuthService,
                protected router: Router) {

    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let token = this.sessionService.token;
        if (token && token !== '') {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
        }
        return false;
    }
}