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

  } 

}
