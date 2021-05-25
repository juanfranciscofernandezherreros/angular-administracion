import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Categories } from '../_models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesCreateService {

  public apiUrl: string;

  private articles:string = environment.blogs;

  constructor(private http: HttpClient) { }

  create(categories: Categories) {
    return this.http.post(this.articles+"/api/protected/v1/category", categories);
  }


}
