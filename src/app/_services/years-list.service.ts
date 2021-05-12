import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YearsListService {

  public apiUrl: string;
  private basketball:string = environment.basketball;
  
  constructor(private http: HttpClient) { }

  getYears(){
    return this.http.get(this.basketball+"/api/public/v1/years");
  }

}
