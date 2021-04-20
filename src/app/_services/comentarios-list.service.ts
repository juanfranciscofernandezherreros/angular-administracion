import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComentariosListService {

  public apiUrl: string;

  private articles:string = environment.blogs;

  constructor(private http: HttpClient) { }

  getComentarios(page:number){
    return this.http.get(this.articles+"/api/public/v1/comments?page="+page);
  }
}
