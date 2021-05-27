import { Component, OnInit } from '@angular/core';
import {PlayByPlayService} from '../_services/play-by-play.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Match } from '../_models/match';
import { MarkAsFavourite } from '../_models/markAsFavourite';
import { FirstQuarter } from '../_models/firstQuarter';
import { SecondQuarter } from '../_models/secondQuarter';
import { Header } from '../_models/header';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { StringifyOptions } from 'querystring';
import { ThirdQuarter } from '../_models/thirdQuarter';
import { ForthQuarter } from '../_models/forthQuarter';
   @Component({
  selector: 'app-play-by-play-not-syncro',
  templateUrl: './play-by-play-not-syncro.component.html',
  styleUrls: ['./play-by-play-not-syncro.component.css']
})
export class PlayByPlayNotSyncroComponent implements OnInit {

  match:Match;
  private markAsFavourite: MarkAsFavourite = new MarkAsFavourite();

  firstQuarter:FirstQuarter;
  gameCode:String;
  seassonCode:String;
  header:Header;
  matchId:number;

  constructor(private _playByPlayService:PlayByPlayService,
    private route: ActivatedRoute,
    private router: Router) { }
    
  ngOnInit(): void {
    var gameCode = this.route.snapshot.paramMap.get('gameCode');
    var seassonCode = this.route.snapshot.paramMap.get('seassonCode');
    this.getPlayByPlayNotSyncronized(gameCode,seassonCode);
  } 

  arrayFirstQuarter = new Array();
  arraySecondQuarter = new Array();
  arrayThirdQuarter = new Array();
  arrayForthQuarter = new Array();
  arrayExtraQuarter =new Array();
  counter = 0;

 
  getPlayByPlayNotSyncronized(gameCode:String,seassonCode:String) {
    this._playByPlayService.getPlayByPlayNotSyncronized(gameCode,seassonCode).subscribe(
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

   markAsFavouriteFirstQuarter(firstQuarter:FirstQuarter,header:Header){       
    this.markAsFavourite.firstQuarterDTO=firstQuarter;
    this.markAsFavourite.headerDTO=header;    
    this.markAsFavourite.gameCode=this.route.snapshot.paramMap.get('gameCode');
    this.markAsFavourite.seassonCode=this.route.snapshot.paramMap.get('seassonCode');
    this.markAsFavourite.firstQuarterDTO.markAsFavourite=true;
    this._playByPlayService.markAsFavourite(this.markAsFavourite).subscribe(
      data=>{  
        this.markAsFavourite=data;
      },
      (error)=>{
        console.log("Error");
      }
    );
   }

   markAsFavouriteSecondQuarter(thirdQuarter:SecondQuarter,header:Header){       
    this.markAsFavourite.thirdQuarterDTO=thirdQuarter;
    this.markAsFavourite.headerDTO=header;    
    this.markAsFavourite.gameCode=this.route.snapshot.paramMap.get('gameCode');
    this.markAsFavourite.seassonCode=this.route.snapshot.paramMap.get('seassonCode');
    this.markAsFavourite.thirdQuarterDTO.markAsFavourite=true;
    this._playByPlayService.markAsFavourite(this.markAsFavourite).subscribe(
      data=>{  
        this.markAsFavourite=data;
      },
      (error)=>{
        console.log("Error");
      }
    );
   }

  markAsFavouriteThirdQuarter(thirdQuarter:ThirdQuarter,header:Header){       
    this.markAsFavourite.thirdQuarterDTO=thirdQuarter;
    this.markAsFavourite.headerDTO=header;    
    this.markAsFavourite.gameCode=this.route.snapshot.paramMap.get('gameCode');
    this.markAsFavourite.seassonCode=this.route.snapshot.paramMap.get('seassonCode');
    this.markAsFavourite.thirdQuarterDTO.markAsFavourite=true;
    this._playByPlayService.markAsFavourite(this.markAsFavourite).subscribe(
      data=>{  
        this.markAsFavourite=data;
      },
      (error)=>{
        console.log("Error");
      }
    );
   }

   markAsFavouriteForthQuarter(forthQuarter:ForthQuarter,header:Header){       
    this.markAsFavourite.forthQuarterDTO=forthQuarter;
    this.markAsFavourite.headerDTO=header;    
    this.markAsFavourite.gameCode=this.route.snapshot.paramMap.get('gameCode');
    this.markAsFavourite.seassonCode=this.route.snapshot.paramMap.get('seassonCode');
    this.markAsFavourite.forthQuarterDTO.markAsFavourite=true;
    this._playByPlayService.markAsFavourite(this.markAsFavourite).subscribe(
      data=>{  
        this.markAsFavourite=data;
      },
      (error)=>{
        console.log("Error");
      }
    );
   }

  markAsFavouriteExtraTime(forthQuarter:ForthQuarter,header:Header){       
    this.markAsFavourite.forthQuarterDTO=forthQuarter;
    this.markAsFavourite.headerDTO=header;    
    this.markAsFavourite.gameCode=this.route.snapshot.paramMap.get('gameCode');
    this.markAsFavourite.seassonCode=this.route.snapshot.paramMap.get('seassonCode');
    this.markAsFavourite.forthQuarterDTO.markAsFavourite=true;
    this._playByPlayService.markAsFavourite(this.markAsFavourite).subscribe(
      data=>{  
        this.markAsFavourite=data;
      },
      (error)=>{
        console.log("Error");
      }
    );
   }
}
