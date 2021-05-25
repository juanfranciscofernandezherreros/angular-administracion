import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Comentarios } from '../_models/comentarios';

@Injectable({
  providedIn: 'root'
})
export class ComentariosEditService {

  private comments:string = environment.blogs;
  
  constructor(private http: HttpClient) { }

  editComment(comentario: Comentarios):Observable<any>{
    return this.http.put(this.comments+"/api/protected/v1/comment", comentario);
  }
}
