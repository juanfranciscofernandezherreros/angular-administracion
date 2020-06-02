import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../_models/index';
import 'rxjs/add/operator/map'

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {


  private loginEndpoint:string = 'http://localhost:8090/api/security/oauth/token';

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        const headers = {
            'Authorization': 'Basic ' + btoa('frontendapp:12345'),
            'Content-type': 'application/x-www-form-urlencoded'
    }   
    
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    return this.http.post<User>(this.loginEndpoint, body , {headers})
            .map(user => {
                console.log("Paso 2 - Login succes");
                console.log("User" +  JSON.stringify(user));
                if (user && user.access_token) {
                    console.log("Paso 3 - Save user");
                    alert("User"+user);
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('username',JSON.stringify(user.username));
                    localStorage.setItem('userIdBackend',JSON.stringify(user.id));        
                    localStorage.setItem('languageIdArticlesBackend',JSON.stringify(4));            
                    localStorage.setItem('token', JSON.stringify(user.access_token));
                }
                return user;
            });
    }

    
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
    }


}
