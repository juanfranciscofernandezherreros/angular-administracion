import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../_models/article'


@Injectable({
  providedIn: 'root'
})
export class TranslateArticleService {


  private translatedBlog:string = 'http://localhost:8090/api/blogs/v1/translate';

  private httpHeaders = new HttpHeaders ({'Content-type':'application/json'});

  constructor(private http: HttpClient) { }

  traducirArticulo(article:  Article){
    
    
    console.log("Article : " + JSON.stringify(article));
    return this.http.post(this.translatedBlog,article,{headers : this.httpHeaders});
  }
}
