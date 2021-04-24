import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../_models/index';
import 'rxjs/add/operator/map'

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {


  private loginEndpoint:string = 'http://localhost:8094/oauth/token';

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        const headers = {
            'Authorization': 'Basic ' + btoa('kikofernandez-client:kikofernandez-secret'),
            'Content-type': 'application/x-www-form-urlencoded'
    }   
    
    return this.http.post<User>(this.loginEndpoint+"?username="+username+"&password="+password+"&grant_type=password",null , {headers})
            .map(user => {
                if (user && user.access_token) {
                    alert(JSON.stringify(user));
                    localStorage.setItem('user', JSON.stringify(user));
                }
                return user;
            });
    }

    
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
    }


}
