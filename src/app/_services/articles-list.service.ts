import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesListService {

  private articles:string = 'http://localhost:8090/api/blogs/v1/';

  constructor(private http: HttpClient) { }

  getArticles(page:number){
    return this.http.get(this.articles+localStorage.getItem("userIdBackend")+"/language/"+localStorage.getItem("languageIdArticlesBackend")+"?page="+page+"&size=6");
  }
}
