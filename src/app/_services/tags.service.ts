
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Tags} from "../_models/tags";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../_models/api.response";

@Injectable()
export class TagsService {

  constructor(private http: HttpClient) { }
  
  baseUrl: string = 'http://localhost:8092/api/';

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+"public/v1/tags");
  }


  getUserById(id: number):Observable<any> {
    return this.http.get(this.baseUrl+"public/v1/tag?tagId="+id);
  }

  createUser(user: Tags): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+"protected/v1/tag",user);
  }

  updateTag(tag: Tags): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl+"protected/v1/tag/",tag);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl+"protected/v1/tag/"+id);
  }

  deleteArticleFromTag(tagId: number , articleId:number):Observable<any> {
    return this.http.delete(this.baseUrl+"protected/v1/tag/"+tagId+"/article/"+articleId);
  }

  
}
