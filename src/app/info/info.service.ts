import { Injectable } from '@angular/core';
import { Info } from './info';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private urlEndpoint:string = 'http://localhost:8584/api/public/v1/info';

  private httpHeaders = new HttpHeaders ({'Content-type':'application/json'});

  constructor(private http:HttpClient){}

  getInfo():Observable<Info[]>{
    return this.http.get<Info[]>(this.urlEndpoint);
  }
s

}
