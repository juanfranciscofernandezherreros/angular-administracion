import {Component, OnInit } from '@angular/core';
import {Countries} from './countries';
import {CountriesService} from './countries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})

export class FormComponent implements OnInit {

  private countries: Countries = new Countries();

  constructor(private countriesService:CountriesService , private router:Router) { }

  ngOnInit() {

  }

  public create():void{
    console.log(this.countries);
    this.countriesService.createCountry(this.countries).subscribe(
      response => this.router.navigate(['countries'])
    );
  }

}
