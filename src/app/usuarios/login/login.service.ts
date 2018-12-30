import { Injectable } from '@angular/core';
import { UserLogin} from '../../usuarios/login/userlogin';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlEndpoint:string = 'http://localhost:8584/api/public/v1/signin';

  private httpHeaders = new HttpHeaders ({'Content-type':'application/json'});

  constructor(private http:HttpClient){}

  userLogin(user: UserLogin): Observable<UserLogin>{
     return this.http.post<UserLogin>(this.urlEndpoint, user, {headers: this.httpHeaders})
  }
}
