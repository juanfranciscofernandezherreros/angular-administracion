import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentariosDeleteService {

  private articles:string = environment.blogs;
  
  constructor(private http: HttpClient) { }

  deleteComment(comentarioId:number){
    return this.http.delete(this.articles+"/api/protected/v1/comment?commentId="+comentarioId);
  }

}
