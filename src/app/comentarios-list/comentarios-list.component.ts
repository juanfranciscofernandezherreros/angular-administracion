import { Component, OnInit } from '@angular/core';
import {ComentariosListService} from '../_services/comentarios-list.service';
import {ComentariosDeleteService} from '../_services/comentarios-delete.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comentarios-list',
  templateUrl: './comentarios-list.component.html',
  styleUrls: ['./comentarios-list.component.css']
})
export class ComentariosListComponent implements OnInit {

  private page : number = 0;
  private comentarios:Array<any>;
  private pages:Array<number>;

  constructor(private _myService:ComentariosListService,
              private comentariosDeleteService:ComentariosDeleteService,
              private route: ActivatedRoute,
              private router: Router) {}

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

  deleteComentario(comentarioId:number){
    this.comentariosDeleteService.deleteComment(comentarioId).subscribe(
      data=>{
        this.router.navigate(['/dashboard/comentarios']);        
      },

      (error)=>{
        console.log("Error");
      }
    );
  }
  

}
