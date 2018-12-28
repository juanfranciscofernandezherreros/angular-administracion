import { Injectable } from '@angular/core';
import {Countries} from './countries';
import { Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  private urlEndpoint:string = 'http://localhost:8584/api/public/v1/countries';

  private urlEndpointAdd:string = 'http://localhost:8584/api/public/v1/add';

  private httpHeaders = new HttpHeaders ({'Content-type':'application/json'});

  constructor(private http:HttpClient){}

  getCountries():Observable<Countries[]>{
    return this.http.get<Countries[]>(this.urlEndpoint);
  }

  getCountry(id):Observable<Countries>{
    return this.http.get<Countries>(`${this.urlEndpoint}/${id}`);
  }

  createCountry(country:Countries){
    return this.http.post(this.urlEndpointAdd,country,{headers:this.httpHeaders});
  }

  update(country: Countries): Observable<Countries>{
     return this.http.put<Countries>(`${this.urlEndpoint}/${country.id}`, country, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Countries>{
    return this.http.delete<Countries>(`${this.urlEndpoint}/${id}`,{headers: this.httpHeaders})
   }

}
