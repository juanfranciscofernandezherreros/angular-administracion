import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../_models/index';
import 'rxjs/add/operator/map'

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

  private loginEndpoint:string = 'http://localhost:8584/api/public/v1/signin';

    constructor(private http: HttpClient) { }


    login(username: string, password: string) {
      return this.http.post<User>(this.loginEndpoint, { usernameOrEmail: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.name) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
