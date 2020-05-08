import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http';
import { Article } from '../_models/article'
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesCreateService {

  private articles:string = 'http://localhost:8090/api/blogs/v1';

  private httpHeaders = new HttpHeaders ({'Content-type':'application/json','accept-language':'es-ES'});

  constructor(private http:HttpClient){}

  userRegistration(article: Article) {
    
    console.log("Article :" + JSON.stringify(article));
     
    return this.http.post(this.articles, article , {headers : this.httpHeaders});
  }

}