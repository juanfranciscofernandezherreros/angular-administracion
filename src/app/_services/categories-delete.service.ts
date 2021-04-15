import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesDeleteService {

  private articles:string = environment.blogs;
  
  constructor(private http: HttpClient) { }

  deleteCategoryById(categoryId:number){
    return this.http.delete(this.articles+"/api/protected/v1/category/"+categoryId);
  }

  deleteArticleCategory(categoryId: number , articleId:number):Observable<any> {
    return this.http.delete(this.articles+"/api/protected/v1/category/"+categoryId+"/article/"+articleId);
  }

}
