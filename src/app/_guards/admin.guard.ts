import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import decode from 'jwt-decode';
import { UserAdmin } from '../_models/userAdmin';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
    
        const token = localStorage.getItem('user');    // decode the token to get its payload
        if (localStorage.getItem('user')) {

            const tokenPayload = decode(token);

            for (let i = 0; i < tokenPayload.authorities.length; i++) {
                let role = tokenPayload.authorities[i];

                if (role === "ROLE_ADMIN") {
                    return true;
                }
            }
            // not logged in so redirect to login page with the return url
            this.router.navigate(['admin'], { queryParams: { returnUrl: state.url }});
            return false;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['admin'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
