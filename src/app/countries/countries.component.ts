import { Component, OnInit } from '@angular/core';
import {Countries} from './countries';
import {CountriesService} from './countries.service';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html'
})

export class CountriesComponent implements OnInit {

  countries : Countries[];

  constructor(private countriesService:CountriesService,private router:Router , private activatedRoute:ActivatedRoute) {}

  ngOnInit(){

    this.countriesService.getCountries().subscribe(
      countries => this.countries = countries
    );
  }

  public deleteCountry(id:number):void{
      console.log("ID" + id);
      this.countriesService.delete(id).subscribe(
        response => this.router.navigate(['countries'])
    );
  }
}
