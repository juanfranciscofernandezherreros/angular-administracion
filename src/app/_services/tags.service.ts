
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Tags} from "../_models/tags";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../_models/api.response";
import { environment } from '../../environments/environment';

@Injectable()
export class TagsService {

  constructor(private http: HttpClient) { }

  private articles:string = environment.blogs;

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.articles+"/api/public/v1/tags");
  }


  getUserById(id: number):Observable<any> {
    return this.http.get(this.articles+"/api/public/v1/tag?tagId="+id);
  }

  createUser(user: Tags): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.articles+"/api/protected/v1/tag",user);
  }



  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.articles+"/api/protected/v1/tag/"+id);
  }

  deleteArticleFromTag(tagId: number , articleId:number):Observable<any> {
    return this.http.delete(this.articles+"/api/protected/v1/tag/"+tagId+"/article/"+articleId);
  }

  
}
