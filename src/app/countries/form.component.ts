import {Component, OnInit } from '@angular/core';
import {Countries} from './countries';
import {CountriesService} from './countries.service';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})

export class FormComponent implements OnInit {

  private countries: Countries = new Countries();

  constructor(private countriesService:CountriesService , private router:Router , private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarCountry();
  }

  cargarCountry():void{
      this.activatedRoute.params.subscribe(params => {
          let id = +params['id'];
          if(id){
            this.countriesService.getCountry(id).subscribe((countries)=> this.countries = countries)
          }
          console.log(id);
       });
   }

  public create():void{
    console.log(this.countries);
    this.countriesService.createCountry(this.countries).subscribe(
      response => this.router.navigate(['countries'])
  );

}



}
