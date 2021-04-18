import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObtenerCategoriasArticuloService {

  private articles:string = environment.blogs;

  constructor(private http: HttpClient) { }

  getCategoriesPorArticulo(article:number){
    return this.http.get(this.articles+"/article/"+article+"/categories");
  }

}
