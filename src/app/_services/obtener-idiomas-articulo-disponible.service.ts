import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObtenerIdiomasArticuloDisponibleService {

  private languagesArticleAvalible:string = 'http://localhost:8090/api/languages/v1';

  constructor(private http: HttpClient) { }

  getLanguagesArticlesAvaliable(article:number){
    return this.http.get(this.languagesArticleAvalible+"/"+article+"/blog");
  }

}
