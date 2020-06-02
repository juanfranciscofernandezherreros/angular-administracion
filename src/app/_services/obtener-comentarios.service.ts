import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObtenerComentariosService {

  private comentarios:string = 'http://localhost:8090/api/comentarios/v2';

  constructor(private http: HttpClient) { }

  getComentarios(page:number){

    const headers = {
      'Content-type': 'application/json'
    }

    return this.http.get(this.comentarios+"?page="+page+"&size=2",{headers});
  }

}
