import {Component, OnInit } from '@angular/core';
import {Countries} from './countries';
import {CountriesService} from './countries.service';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  private countries: Countries = new Countries()

  constructor(private countriesService: CountriesService,

  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCountry()
  }

  cargarCountry(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.countriesService.getCountry(id).subscribe( (countries) => this.countries = countries)
      }
    })
  }


}
