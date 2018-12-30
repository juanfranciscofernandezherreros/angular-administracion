import { Injectable } from '@angular/core';
import { User } from '../../usuarios/signup/user';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SignUpService {

    private urlEndpoint:string = 'http://localhost:8584/api/public/v1/signup';

    private httpHeaders = new HttpHeaders ({'Content-type':'application/json'});

    constructor(private http:HttpClient){}

    userRegistration(user: User): Observable<User>{
       return this.http.post<User>(this.urlEndpoint, user, {headers: this.httpHeaders})
    }

}
