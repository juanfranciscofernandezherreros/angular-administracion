import { Component, OnInit } from '@angular/core';
import {PlayByPlayService} from '../_services/play-by-play.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Match } from '../_models/match';
import { MarkAsFavourite } from '../_models/markAsFavourite';
import { FirstQuarter } from '../_models/firstQuarter';

@Component({
  selector: 'app-play-by-play-not-syncro',
  templateUrl: './play-by-play-not-syncro.component.html',
  styleUrls: ['./play-by-play-not-syncro.component.css']
})
export class PlayByPlayNotSyncroComponent implements OnInit {

  match:Match;
  private markAsFavourite: MarkAsFavourite = new MarkAsFavourite();

  firstQuarter:FirstQuarter;

  constructor(private _playByPlayService:PlayByPlayService,
    private route: ActivatedRoute,
    private router: Router) { }
    
  ngOnInit(): void {
    var gameCode = this.route.snapshot.paramMap.get('gameCode');
    var seassonCode = this.route.snapshot.paramMap.get('seassonCode');

    this.getPlayByPlayNotSyncronized(gameCode,seassonCode);
  } 

  arrayFirstQuarter = {};
  counter = 0;

  getPlayByPlayNotSyncronized(gameCode:String,seassonCode:String) {
    this._playByPlayService.getPlayByPlayNotSyncronized(gameCode,seassonCode).subscribe(
       data=>{  
         alert(data);
         this.match=data;
       },
       (error)=>{
         console.log("Error");
       }
     );
   }

   markAsCancelFirstQuarter(firstQuarter:FirstQuarter,matchId:number,match:Math){  
    this.markAsFavourite.firstQuarterDTO=firstQuarter;
    this._playByPlayService.cancelAsFavourite(this.markAsFavourite,matchId).subscribe(
      data=>{  
      },
      (error)=>{
        console.log("Error");
      }
    );

   }
   
   markAsFavouriteFirstQuarter(firstQuarter:FirstQuarter,matchId:number){  
    this.markAsFavourite.firstQuarterDTO=firstQuarter;
    this._playByPlayService.markAsFavourite(this.markAsFavourite,matchId).subscribe(
      data=>{  
      },
      (error)=>{
        console.log("Error");
      }
    );

   }

}
