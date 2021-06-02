import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { PlayByPlayService } from '../_services/play-by-play.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MarkAsFavourite } from '../_models/markAsFavourite';
import { FirstQuarter } from '../_models/firstQuarter';
import { SecondQuarter } from '../_models/secondQuarter';
import { ThirdQuarter } from '../_models/thirdQuarter';
import { ForthQuarter } from '../_models/forthQuarter';
import { Header } from '../_models/header';
import { PlayByPlay } from '../_models/playByPlay';

@Component({
  selector: 'app-data-team',
  templateUrl: './data-team.component.html',
  styleUrls: ['./data-team.component.css']
})
export class DataTeamComponent implements OnInit {
  match: any;

  private markAsFavourite: MarkAsFavourite = new MarkAsFavourite();

  firstQuarter:FirstQuarter;
  gameCode:String;
  seassonCode:String;
  header:Header;
  matchId:number;

  arrayFirstQuarter = new Array();
  arraySecondQuarter = new Array();
  arrayThirdQuarter = new Array();
  arrayForthQuarter = new Array();
  arrayExtraQuarter =new Array();
  counter = 0;

  constructor(private _dataService:DataService,
    private _playByPlayService:PlayByPlayService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    var gameCode = this.route.snapshot.paramMap.get('gameCode');
    var seassonCode = this.route.snapshot.paramMap.get('seassonCode');
    this.getData(gameCode,seassonCode);
  }

  getData(gameCode: string, seassonCode: string) {
    this._dataService.dataService(gameCode,seassonCode).subscribe(
       data=>{  
        this.arrayFirstQuarter = new Array(data.matchDTO.firstQuarterDTO.length);
        this.arraySecondQuarter = new Array(data.matchDTO.secondQuarterDTO.length);
        this.arrayThirdQuarter = new Array(data.matchDTO.thirdQuarterDTO.length);
        this.arrayForthQuarter = new Array(data.matchDTO.forthQuarterDTO.length);
        this.arrayExtraQuarter = new Array(data.matchDTO.extraTimeDTO.length);
        this.match=data;
       },
       (error)=>{
         console.log("Error");
       }
     );
   }

   markPlayByPlayAsFavourite(firstQuarter:FirstQuarter,header:Header,actualQuarter:String){       
    this.markAsFavourite.quarterDTo=firstQuarter;
    this.markAsFavourite.actualQuarter=actualQuarter;
    this.markAsFavourite.headerDTO=header;    
    this.markAsFavourite.gameCode=this.route.snapshot.paramMap.get('gameCode');
    this.markAsFavourite.seassonCode=this.route.snapshot.paramMap.get('seassonCode');
    this.markAsFavourite.quarterDTo.markAsFavourite=true;
    this._playByPlayService.markAsFavourite(this.markAsFavourite).subscribe(
      data=>{  
        this.markAsFavourite=data;
      },
      (error)=>{
        console.log("Error");
      }
    );
   }

   cancelAsQuarter(numberOfPlay:String,actualQuarter:String){       
    this.markAsFavourite.quarterDTo.NUMBEROFPLAY=numberOfPlay;
    this.markAsFavourite.gameCode=this.route.snapshot.paramMap.get('gameCode');
    this.markAsFavourite.seassonCode=this.route.snapshot.paramMap.get('seassonCode');
    this._playByPlayService.deleteAsFavourite(this.markAsFavourite).subscribe(
      data=>{  
        this.markAsFavourite=data;
      },
      (error)=>{
        console.log("Error");
      }
    );
   }

}
