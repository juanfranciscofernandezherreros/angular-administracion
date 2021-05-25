import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesListService {

  public apiUrl: string;

  private articles:string = environment.blogs;

  constructor(private http: HttpClient) { }

  getCategories(page:number){
    return this.http.get(this.articles+"/api/public/v1/categories?page="+page);
  }

  findCategoryById(categoryId:number){
    return this.http.get(this.articles+"/api/public/v1/category?categoryId="+categoryId);
  }

  getCategoriesList(iso2:string){

    return this.http.get(this.articles+iso2);
  }
  



}
