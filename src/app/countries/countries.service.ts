import { Injectable } from '@angular/core';
import {COUNTRIES} from './countries.json';
import {Countries} from './countries';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  private urlEndpoint:string = 'http://localhost:8584/api/public/v1/sports';

  constructor(private http:HttpClient){}

  getCountries():Observable<Countries[]>{
    return this.http.get<Countries[]>(this.urlEndpoint);
  }
}
