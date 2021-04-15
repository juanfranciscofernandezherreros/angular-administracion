import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Categories } from '../_models/categories';
@Injectable({
  providedIn: 'root'
})
export class CategoriesEditService {

  public apiUrl: string;
  private articles:string = environment.blogs;
  
  constructor(private http: HttpClient) { }

  updateCategory(categories:Categories):Observable<any>{
    return this.http.put(this.articles+"/api/protected/v1/category",categories);

  }
}
