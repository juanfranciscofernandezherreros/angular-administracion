import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../_models/index';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private signUp:string = 'http://localhost:8584/api/public/v1/signup';
    private checkAdmin:string = 'http://localhost:8584/api/public/v1/checkIfHasAdminRole';
    public apiUrl: string;
    private articles:string = environment.blogs;
    
    constructor(private http: HttpClient) { }

    getUsers(page:number){
      return this.http.get(this.articles+"/api/public/v1/users?page="+page);
    }

    create(user:User) {
      return this.http.post<User>(this.signUp, { name: user.name, username: user.username , email:user.email , password:user.password });
    }







}
