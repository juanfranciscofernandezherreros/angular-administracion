import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Article } from '../_models/article';
@Injectable({
  providedIn: 'root'
})
export class ArticlesCreateService {

  public apiUrl: string;

  private articles:string = environment.blogs;

  constructor(private http: HttpClient) { }

  create(article: Article) {
    alert(JSON.stringify(article));
    return this.http.post(this.articles+"/api/protected/v1/article", article);
  }

}