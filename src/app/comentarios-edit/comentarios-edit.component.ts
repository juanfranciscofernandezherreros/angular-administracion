import { Component, OnInit } from '@angular/core';
import {ComentariosEditService} from '../_services/comentarios-edit.service';
import {ComentariosViewService} from '../_services/comentarios-view.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services/index';
import { Comentarios } from '../_models/comentarios';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-comentarios-edit',
  templateUrl: './comentarios-edit.component.html',
  styleUrls: ['./comentarios-edit.component.css']
})
export class ComentariosEditComponent implements OnInit {

  loading = false;
  model: any = {};
  comentario : Comentarios;
  constructor(private service:ComentariosEditService,
              private comentariosViewService:ComentariosViewService,
              private route: ActivatedRoute,
              private alertService: AlertService,
              private router: Router,) {}

  ngOnInit(): void {
    var commentId = Number(this.route.snapshot.paramMap.get('id'));
    this.comentariosViewService.getCommentById(commentId).subscribe(data => {    
      this.comentario = data;    
    }, error => console.log(error)); 
  }

  updateComment = new FormGroup({
    articleId: new FormControl(),
    contenido: new FormControl(),
    username: new FormControl(),
    email: new FormControl()
  });

  submit(): void {    
    this.comentario.id=Number(this.route.snapshot.paramMap.get('id'));
    this.comentario.isanswer=false;
    this.comentario.articleId=Number(this.updateComment.get('articleId').value);
    this.comentario.contenido = this.updateComment.get('contenido').value;
    this.comentario.username = this.updateComment.get('username').value;
    this.comentario.email =this.updateComment.get('email').value;
    this.comentario.parentId=0;
    this.comentario
    this.comentario.level=0;
    alert(JSON.stringify(this.comentario));
    this.service.editComment(this.comentario)        
    .subscribe(
      data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/dashboard/comentarios']);
      },
      error => {
          this.alertService.error(error);
          this.loading = false;
      });
  } 

}
