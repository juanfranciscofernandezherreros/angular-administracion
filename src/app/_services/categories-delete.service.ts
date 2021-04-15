import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesDeleteService {

  public apiUrl: string;
  private articles:string = environment.blogs;
  
  constructor(private http: HttpClient) { }

  deleteCategoryById(categoryId:number){
    return this.http.delete(this.articles+"/api/protected/v1/category/"+categoryId);
  }
}
