import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/index';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private signUp:string = 'http://localhost:8584/api/public/v1/signup';
    private checkAdmin:string = 'http://localhost:8584/api/public/v1/checkIfHasAdminRole';

    constructor(private http: HttpClient) { }

    create(user:User) {
      return this.http.post<User>(this.signUp, { name: user.name, username: user.username , email:user.email , password:user.password });
    }







}
