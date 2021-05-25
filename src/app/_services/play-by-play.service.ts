import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {MarkAsFavourite} from '../_models/markAsFavourite';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class PlayByPlayService {

  private basketball:string = environment.basketball;

  constructor(private http: HttpClient) { }

  getPlayByPlaySyncronized(matchId:String): Observable<any>{    
    return this.http.get(this.basketball+"/api/public/v1/match/"+matchId);    
  }

  getPlayByPlayNotSyncronized(gameCode:String,seassonCode:String): Observable<any>{      
    return this.http.get(this.basketball+"/api/public/v1/playbyplay/download?gamecode="+gameCode+"&seasoncode="+seassonCode);    
  }

  cancelAsFavourite(markAsFavourite:MarkAsFavourite,matchId:number): Observable<any>{  
    markAsFavourite.firstQuarterDTO.markAsFavourite=false;
    return this.http.post(this.basketball+"/api/public/v1/favourite/playbyplay/"+matchId , markAsFavourite);    
  }

  markAsFavourite(markAsFavourite:MarkAsFavourite,matchId:number): Observable<any>{  
    markAsFavourite.firstQuarterDTO.markAsFavourite=true;
    return this.http.post(this.basketball+"/api/public/v1/favourite/playbyplay/"+matchId , markAsFavourite);    
  }

 
}
