import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var currentUser = localStorage.getItem("role");
        if (currentUser != null) {
            if (currentUser == "admin") {
                // logged in so return true
                return true;
            }
            else {
                return this.router.parseUrl('/home');
            }
        }
        // not logged in so redirect to login page with the return url
        return this.router.parseUrl('/home');
    }


}
