import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Matches} from '../calendar/matches';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  private urlEndpoint:string = 'hhttp://localhost:8584/api/public/matches/sport/1?date=01-01-2018';

  constructor(private http:HttpClient){}

  getCountries():Observable<Matches[]>{
    return this.http.get<Matches[]>(this.urlEndpoint);
  }

}
