import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class YearsTeamsService {

  private basketball:string = environment.basketball;
  
  constructor(private http: HttpClient) { }

  getYearsTeams(year:String){
    return this.http.get(this.basketball+"/api/public/v1/teams/"+year);
  }
}
