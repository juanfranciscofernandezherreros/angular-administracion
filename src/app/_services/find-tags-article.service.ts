import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FindTagsArticleService {

  private articles:string = environment.blogs;

  constructor(private http: HttpClient) { }

  getTagsPorArticulo(articleId:number){
    return this.http.get(this.articles+"/api/protected/v1/article/"+articleId+"/tags");
  }

}
