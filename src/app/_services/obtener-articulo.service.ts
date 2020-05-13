import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObtenerArticuloService {

  private comentarios:string = 'http://localhost:8090/api/comentarios/v1/comentarios';

  constructor(private http: HttpClient) { }

  getComentarios(){

    const headers = {
      'Content-type': 'application/json'
    }

    return this.http.get(this.comentarios,{headers});
  }
  
}
