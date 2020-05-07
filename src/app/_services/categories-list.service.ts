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

  private categories:string = 'http://localhost:8090/api/categories/';

  constructor(private http: HttpClient) { }

  private article : Article;

  getCategories(page:number){

    const headers = {
      'accept-language': 'es-ES',
      'Content-type': 'application/json'
    }

    return this.http.get(this.categories+"v2?page="+page+"&size=2",{headers});
  }

  getCategoriesList(){

    console.log("Categories List");

    const headers = {
      'accept-language': 'es-ES',
      'Content-type': 'application/json'
    }

    return this.http.get(this.categories+"v2",{headers});
  }
  
  compareTwoArrays(){

  
  }



}
