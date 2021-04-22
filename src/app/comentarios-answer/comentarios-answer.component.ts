import { Component, OnInit } from '@angular/core';
import {ComentariosCreateService} from '../_services/comentarios-create.service';
import {ComentariosViewService} from '../_services/comentarios-view.service';
import {ComentariosEditService} from '../_services/comentarios-edit.service';
import {ArticleViewService} from '../_services/article-view.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services/index';
import { Comentarios } from '../_models/comentarios';
import { Article } from '../_models/article';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-comentarios-answer',
  templateUrl: './comentarios-answer.component.html',
  styleUrls: ['./comentarios-answer.component.css']
})
export class ComentariosAnswerComponent implements OnInit {
  loading = false;
  model: any = {};
  comentario : Comentarios;
  article: Article;  

  constructor(private service:ComentariosEditService,
              private comentariosCreateService:ComentariosCreateService,
              private comentariosViewService:ComentariosViewService,
              private route: ActivatedRoute,
              private articleViewService: ArticleViewService,
              private alertService: AlertService,
              private router: Router,) {}

  ngOnInit(): void {
    var commentId = Number(this.route.snapshot.paramMap.get('id'));
    this.comentariosViewService.getCommentById(commentId).subscribe(data => {    
      this.comentario = data;    
    }, error => console.log(error)); 
   

  }

  onFormSubmitAnswer(): void {
    this.model.articleId=this.comentario.articleId;
    this.model.isanswer=true;
    this.model.contenido = this.model.contenido;
    this.model.username = this.model.username;
    this.model.email =this.model.email;
    this.model.parentId=this.comentario.id;
    this.model.level=this.comentario.level+1;
    this.comentariosCreateService.createComment(this.model)        
    .subscribe(data => {    
      this.comentario = data;       
    }, error => console.log(error)); 
  } 
}
