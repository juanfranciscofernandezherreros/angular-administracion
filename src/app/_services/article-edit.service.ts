import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http';
import { Article } from '../_models/article'
import { Observable} from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleEditService {

  private articles:string = environment.blogs;

  constructor(private http: HttpClient) { }

  update(article: Article) {
    return this.http.put(this.articles+"/api/protected/v1/article", article);
  }

}
