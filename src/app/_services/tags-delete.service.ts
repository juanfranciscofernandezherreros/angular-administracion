import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsDeleteService {

  private articles:string = environment.blogs;

  constructor(private http: HttpClient) { }

  deleteTagById(tagId:number){
    return this.http.delete(this.articles+"/api/protected/v1/tag/"+tagId);
  }
}
