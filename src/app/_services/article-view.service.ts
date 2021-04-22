import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleViewService {

  private articles:string = environment.blogs;

  constructor(private http: HttpClient) { }

  getArticleById(articleId:number):Observable<any>{
    return this.http.get(this.articles+"/api/public/v1/article?articleId="+articleId);
  }

  getArticleBySlug(slug:String) : Observable<any>{
    return this.http.get(this.articles+"/api/public/v1/article?slug="+slug);
  }
}
