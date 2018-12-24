import { Component, OnInit } from '@angular/core';
import {Countries} from './countries';
import {CountriesService} from './countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html'
})

export class CountriesComponent implements OnInit {

  countries : Countries[];

  constructor(private countriesService:CountriesService) {}

  ngOnInit(){
    this.countriesService.getCountries().subscribe(
      countries => this.countries = countries
    );
  }

}
