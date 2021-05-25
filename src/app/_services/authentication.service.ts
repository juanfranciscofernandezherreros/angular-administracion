import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../_models/index';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    
    private loginEndpoint:string = environment.loginEndpoint+'/oauth/token';

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        const headers = {
            'Authorization': 'Basic ' + btoa('kikofernandez-client:kikofernandez-secret'),
            'Content-type': 'application/x-www-form-urlencoded'
    }   
    
    return this.http.post<User>(this.loginEndpoint+"?username="+username+"&password="+password+"&grant_type=password",null , {headers})
            .map(user => {
                if (user && user.access_token) {
                    localStorage.setItem('user', JSON.stringify(user));
                }
                return user;
            });
    }

    
    logout() {
        localStorage.removeItem('user');
        
    }


}
