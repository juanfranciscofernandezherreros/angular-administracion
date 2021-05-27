import { Component, OnInit } from '@angular/core';
import {PlayByPlayService} from '../_services/play-by-play.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Match } from '../_models/match';
import { MarkAsFavourite } from '../_models/markAsFavourite';
import { FirstQuarter } from '../_models/firstQuarter';

@Component({
  selector: 'app-play-by-play',
  templateUrl: './play-by-play.component.html',
  styleUrls: ['./play-by-play.component.css']
})
export class PlayByPlayComponent implements OnInit {

  match:Match;
  private markAsFavourite: MarkAsFavourite = new MarkAsFavourite();

  firstQuarter:FirstQuarter;

  constructor(private _playByPlayService:PlayByPlayService,
    private route: ActivatedRoute,
    private router: Router) { }
    
  ngOnInit(): void {
    var matchId = this.route.snapshot.paramMap.get('matchId');

    this.getPlayByPlaySyncronized(matchId);
  } 

  arrayFirstQuarter = new Array();
  arraySecondQuarter = new Array();
  arrayThirdQuarter = new Array();
  arrayForthQuarter = new Array();
  arrayExtraQuarter =new Array();
  counter = 0;


   getPlayByPlaySyncronized(matchId) {
    this._playByPlayService.getPlayByPlaySyncronized(matchId).subscribe(
       data=>{  
         this.arrayFirstQuarter = new Array(data.firstQuarterDTO.length);
         this.arraySecondQuarter = new Array(data.secondQuarterDTO.length);
         this.arrayThirdQuarter = new Array(data.thirdQuarterDTO.length);
         this.arrayForthQuarter = new Array(data.forthQuarterDTO.length);
         this.arrayExtraQuarter = new Array(data.extraTimeDTO.length);
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
    this._playByPlayService.markAsFavourite(this.markAsFavourite).subscribe(
      data=>{  
      },
      (error)=>{
        console.log("Error");
      }
    );

   }

}
