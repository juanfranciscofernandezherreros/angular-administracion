import { Injectable } from '@angular/core';
import { Logo } from './logo';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  private urlEndpoint:string = 'http://localhost:8584/api/public/info/v1/logo/1';

  private httpHeaders = new HttpHeaders ({'Content-type':'application/json'});

  constructor(private http:HttpClient){}

  getLogo():Observable<Logo[]>{
    return this.http.get<Logo[]>(this.urlEndpoint);
  }
}
