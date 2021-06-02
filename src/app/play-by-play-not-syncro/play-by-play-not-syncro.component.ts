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
    alert(gameCode);
    alert(seassonCode);
  } 
}
