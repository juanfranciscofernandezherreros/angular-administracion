import { Injectable } from '@angular/core';
import {Menu} from './menu'
import { Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private urlEndpoint:string = 'http://localhost:8584/api/public/menu/v1/top';

  constructor(private http:HttpClient){}

  getMenuItems():Observable<Menu[]>{
    return this.http.get<Menu[]>(this.urlEndpoint);
  }

}
