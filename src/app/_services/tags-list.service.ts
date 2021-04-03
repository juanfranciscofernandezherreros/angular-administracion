import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Tags } from '../_models/tags';

@Injectable({
  providedIn: 'root'
})
export class TagsListService {

  public apiUrl: string;
  private articles:string = environment.blogs;
  
  constructor(private http: HttpClient) { }

  getTags(page:number){
    return this.http.get(this.articles+"/api/public/v1/tags?page="+page);
  }

}
