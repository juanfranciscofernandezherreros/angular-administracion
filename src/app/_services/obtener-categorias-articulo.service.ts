import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObtenerCategoriasArticuloService {

  private articles:string = environment.blogs;

  constructor(private http: HttpClient) { }

  getCategoriesPorArticulo(articleId:number){
    return this.http.get(this.articles+"/api/protected/v1/article/"+articleId+"/categories");
  }

}
