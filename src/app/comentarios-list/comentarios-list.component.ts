import { Component, OnInit } from '@angular/core';
import {ComentariosListService} from '../_services/comentarios-list.service';

@Component({
  selector: 'app-comentarios-list',
  templateUrl: './comentarios-list.component.html',
  styleUrls: ['./comentarios-list.component.css']
})
export class ComentariosListComponent implements OnInit {

  private page : number = 0;
  private comentarios:Array<any>;
  private pages:Array<number>;

  constructor(private _myService:ComentariosListService) {}

  ngOnInit() {
    this.getComentarios();
  }

  setPage(i,event:any){
    event.preventDefault();
    this.page=i;
    this.getComentarios();
  }

  getComentarios(){
    this._myService.getComentarios(this.page).subscribe(
      data=>{        
        this.comentarios=data['content'];
        this.pages = new Array(data['totalPages']);
      },

      (error)=>{
        console.log("Error");
      }
    );
  }
  

}
