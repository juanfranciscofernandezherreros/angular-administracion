import { Component, OnInit } from '@angular/core';
import { CompetitionsService } from './competitions.service';
import { Competition } from './competitions';
import {Countries} from '../countries/countries';
import {CountriesService} from '../countries/countries.service';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {

  competitions : Competition[];
  countries : Countries[];

  constructor(private competitionService:CompetitionsService,private countriesService:CountriesService) {}

  ngOnInit() {
    this.competitionService.getCompetitions().subscribe(
      competitions => this.competitions = competitions
    );

  }

}
