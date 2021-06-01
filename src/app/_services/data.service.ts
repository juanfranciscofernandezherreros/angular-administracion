import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private basketball:string = environment.basketball;

  constructor(private http: HttpClient) { }

  dataService(gameCode:String,seassonCode:String):Observable<any>{
    return this.http.get(this.basketball+"/api/public/v1/data?gamecode="+gameCode+"&seasoncode="+seassonCode);
  }
}
