import { Injectable } from '@angular/core';
import { UserLogin} from '../../usuarios/login/userlogin';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlEndpoint:string = 'http://localhost:8584/api/public/v1/signin';

  private httpHeaders = new HttpHeaders ({'Content-type':'application/json'});

  constructor(private http:HttpClient){}

  login(username: string, password: string) {
       return this.http.post<any>('/api/authenticate', { username: username, password: password })
           .map(user => {
               // login successful if there's a jwt token in the response
               if (user && user.token) {
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
