import { Component, OnInit } from '@angular/core';
import {MatchesTeamsService} from '../_services/matches-teams.service';
import {PlayByPlayService} from '../_services/play-by-play.service';

import { Router, ActivatedRoute } from '@angular/router';
import {Match} from '../_models/match';

@Component({
  selector: 'app-match-teams',
  templateUrl: './match-teams.component.html',
  styleUrls: ['./match-teams.component.css']
})
export class MatchTeamsComponent implements OnInit {

  matches:Array<any>;
  teamCode:String;
  hasSyncronyzed:boolean = false;
  id:number;

  constructor(private _matchTeamsService:MatchesTeamsService,
    private _playByPlayService:PlayByPlayService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    var teamCode = this.route.snapshot.paramMap.get('teamCode');
    var seasson = this.route.snapshot.paramMap.get('seasson');
    this.getMatchesByTeamAndYear(teamCode,seasson);
  }

  getMatchesByTeamAndYear(teamCode: string, seasson: string) {
   this._matchTeamsService.getMatchesTeamByYear(teamCode,seasson).subscribe(
      data=>{  
        this.matches=data['content'];
      },
      (error)=>{
        console.log("Error");
      }
    );
  }

  notSync(gameCode:String,seassonCode:String){
    this.router.navigate(['dashboard/euroleague/details/notSyncronized/gameCode/'+gameCode+'/seassonCode/'+seassonCode])    
  }

  syncMatch(gameCode:String,seassonCode:String,phase:String,date:String,round:number){
    this._matchTeamsService.getSyncGameCodeSeassonCode(gameCode,seassonCode,phase,date,round).subscribe(
      data=>{        
        this.id = data["id"];
        this.router.navigate(['dashboard/euroleague/details/match/'+this.id])
      },
      (error)=>{
        console.log("Error");
      }
    );
  }


  
}
