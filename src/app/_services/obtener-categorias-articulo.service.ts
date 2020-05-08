import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObtenerCategoriasArticuloService {

  private categories:string = 'http://localhost:8090/api/categories/v1';

  constructor(private http: HttpClient) { }

  getCategoriesPorArticulo(article:number){
    return this.http.get(this.categories+"/"+article+"/articles");
  }

}
