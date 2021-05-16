import { Component, OnInit } from '@angular/core';
import {PlayByPlayService} from '../_services/play-by-play.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Match} from '../_models/match';
@Component({
  selector: 'app-play-by-play',
  templateUrl: './play-by-play.component.html',
  styleUrls: ['./play-by-play.component.css']
})
export class PlayByPlayComponent implements OnInit {
  
  match:any;

  constructor(private _playByPlayService:PlayByPlayService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    var matchId = this.route.snapshot.paramMap.get('matchId');
    this.getPlayByPlay(matchId);
  }

  getPlayByPlay(matchId:String){    
    this._playByPlayService.getPlayByPlay(matchId).subscribe(
      data=>{        
      },
      (error)=>{
        console.log("Error");
      }
    );
  }

}
