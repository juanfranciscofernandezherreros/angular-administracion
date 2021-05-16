import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlayByPlayService {

  private basketball:string = environment.basketball;

  constructor(private http: HttpClient) { }

  getPlayByPlay(matchId:String):Observable<any>{
    return this.http.get(this.basketball+"/api/public/v1/match/"+matchId);
  }
}
