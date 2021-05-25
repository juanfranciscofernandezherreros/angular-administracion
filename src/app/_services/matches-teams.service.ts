import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MatchesTeamsService {

  private basketball:string = environment.basketball;
  
  constructor(private http: HttpClient) { }

  getMatchesTeamByYear(teamCode:String,year:String){
    return this.http.get(this.basketball+"/api/public/v1/games/clubcode/"+teamCode+"/seassoncode/"+year);
  }

  getSyncGameCodeSeassonCode(gameCode:String,seassonCode:String,phase:String,date:String,round:number){
    return this.http.get(this.basketball+"/api/public/v1/sync/playbyplay?gamecode="+gameCode+"&seasoncode="+seassonCode+"&phase="+phase+"&date="+date+"&round="+round);
  }
}
