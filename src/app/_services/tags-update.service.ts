
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Tags} from "../_models/tags";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../_models/api.response";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsUpdateService {

  constructor(private http: HttpClient) { }

  private articles:string = environment.blogs;

  updateTag(tag: Tags): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.articles+"protected/v1/tag/",tag);
  }
}
