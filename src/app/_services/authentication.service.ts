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
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('currentUser', JSON.stringify(user));
                    sessionStorage.setItem('token', JSON.stringify(user.token));
                }
                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('token');
    }


}
