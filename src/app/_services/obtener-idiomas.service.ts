import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObtenerIdiomasService {

  private languages:string = 'http://localhost:8090/api/languages/v1/languages';

  constructor(private http: HttpClient) { }

  getObtenerIdiomas(){
    
    const headers = {
      'Content-type': 'application/json'
    }

    return this.http.get(this.languages,{headers});
  }

  getLanguageByIso2(languageIso2:string){
    const headers = {
      'Content-type': 'application/json'
    }
    return this.http.get(this.languages+"/search/find?iso2="+languageIso2,{headers});
  }
}
