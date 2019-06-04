import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


        if (sessionStorage.getItem('currentUser')) {
          let user: User = JSON.parse(sessionStorage.getItem('currentUser')) || [];
          for (let i = 0; i < user.roles.length; i++) {
                      let role = user.roles[i];
                      if (role === "ROLE_ADMIN") {
                        return true;
                      }
          }
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['admin'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
