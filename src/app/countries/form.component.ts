import { Component, OnInit } from '@angular/core';
import { Countries } from './countries';
import { CountriesService } from './countries.service';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})

export class FormComponent implements OnInit {

  private countries: Countries = new Countries()

  constructor(private countriesService: CountriesService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente()
  }

  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.countriesService.getCountry(id).subscribe( (countries) => this.countries = countries)
      }
    })
  }

  create(): void {
    this.countriesService.createCountry(this.countries)
      .subscribe(countries => {
        this.router.navigate(['/countries'])
      }
      );
  }

  update(countries:Countries):void{
    this.countriesService.update(this.countries)
    .subscribe( countries => {
      this.router.navigate(['/countries'])
    }

    )
  }

}
