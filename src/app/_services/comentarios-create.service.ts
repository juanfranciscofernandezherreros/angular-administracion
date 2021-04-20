import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Comentarios } from '../_models/comentarios';

@Injectable({
  providedIn: 'root'
})
export class ComentariosCreateService {

  private comments:string = environment.blogs;
  
  constructor(private http: HttpClient) { }

  createComment(comentario: Comentarios):Observable<any>{
    return this.http.post(this.comments+"/api/protected/v1/comment", comentario);
  }
}
