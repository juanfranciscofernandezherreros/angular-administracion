import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesListService {

  private articles:string = 'http://localhost:8090/api/blogs/v2';

  constructor(private http: HttpClient) { }

  getArticles(page:number){

    const headers = {
      'accept-language': 'es-ES',
      'Content-type': 'application/json'
    }

    return this.http.get(this.articles+"?page="+page+"&size=2",{headers});
  }
}
