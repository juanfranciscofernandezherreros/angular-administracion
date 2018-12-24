import { Injectable } from '@angular/core';
import {COUNTRIES} from './countries.json';
import {Countries} from './countries';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(){}

  getCountries():Observable<Countries[]>{
    return of(COUNTRIES);
  }
}
