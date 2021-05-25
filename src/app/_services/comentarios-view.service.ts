import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Comentarios } from '../_models/comentarios';

@Injectable({
  providedIn: 'root'
})
export class ComentariosViewService {

  private articles:string = environment.blogs;

  constructor(private http: HttpClient) { }

  getCommentById(commentId:number):Observable<any>{
    return this.http.get(this.articles+"/api/public/v1/comment?commentId="+commentId);
  }
}
