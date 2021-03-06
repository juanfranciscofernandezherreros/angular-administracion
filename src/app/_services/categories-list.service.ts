import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry} from 'rxjs/operators';
import { tap, catchError, map} from 'rxjs/operators';
import { Categories } from '../_models/categories';
import {ResDataCategories} from '../_models/restDataCategories';
import { Article } from '../_models/article';
@Injectable({
  providedIn: 'root'
})
export class CategoriesListService {

  private categories:string = 'http://localhost:8090/api/categories/public/v1/language/';

  constructor(private http: HttpClient) { }

  private article : Article;

  getCategories(page:number){
    return this.http.get(this.categories+localStorage.getItem("languageIdArticlesBackend")+"?page="+page+"&size=4");
  }

  getCategoriesList(iso2:string){

    return this.http.get(this.categories+iso2);
  }
  



}
