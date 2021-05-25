import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesViewService {

  public apiUrl: string;
  private articles:string = environment.blogs;
  
  constructor(private http: HttpClient) { }

  getCategoryById(categoryId:number):Observable<any>{
    return this.http.get(this.articles+"/api/public/v1/category?categoryId="+categoryId);

  }
}
