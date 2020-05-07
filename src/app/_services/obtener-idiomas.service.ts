import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObtenerIdiomasService {

  private languages:string = 'http://localhost:8090/api/blogs/v1';

  constructor(private http: HttpClient) { }

  borrarArticuloPorIdentificador(article:number){
    
    const headers = {
      'accept-language': 'es-ES',
      'Content-type': 'application/json'
    }

    return this.http.delete(this.languages+"/"+article,{headers});
  }
}
