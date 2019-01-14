import { Injectable } from '@angular/core';
import { Competition } from './competitions';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {

  private urlEndpoint:string = 'http://localhost:8584/api/public/league/sports/1';


  constructor(private http:HttpClient){}

  getCompetitions():Observable<Competition[]>{
    return this.http.get<Competition[]>(this.urlEndpoint);
  }


}
