import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CountriesService} from './countries.service';

@Component({
  selector: 'app-countrydetails',
  templateUrl: './countrydetails.component.html'
})
export class CountrydetailsComponent implements OnInit {

  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute , private countriesService:CountriesService ) { }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];
        console.log("ID"+this.id);
     });
  }







}
