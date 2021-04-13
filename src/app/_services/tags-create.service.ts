import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Tags } from '../_models/tags';

@Injectable({
  providedIn: 'root'
})
export class TagsCreateService {

  public apiUrl: string;
  private articles:string = environment.blogs;
  
  constructor(private http: HttpClient) { }

  createTags(tags:Tags){
    return this.http.post(this.articles+"/api/protected/v1/tag",tags);
  }

}

