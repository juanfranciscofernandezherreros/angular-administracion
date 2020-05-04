import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http';
import { Article } from '../_models/article'
import { Observable} from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleEditService {

  private url:string = 'http://localhost:8090/api/blogs/v1';

  private httpHeaders = new HttpHeaders ({'Content-type':'application/json','accept-language':'es-ES'});

  private interests = []; 

  constructor(private http:HttpClient){}

  getArticle (idArticle:number): Observable<Article[]> {
    return this.http.get<Article[]>(this.url+"/"+ idArticle,  {headers : this.httpHeaders})      
  }


  updateTodo (id,todo): Observable<any> {    
    console.log("Editar - ID - " + id + "Todo " + JSON.stringify(todo));
    return this.http.put(this.url+"/"+ id, todo , {headers : this.httpHeaders});
  }

}
