import { Component, OnInit } from '@angular/core';
import {ComentariosCreateService} from '../_services/comentarios-create.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services/index';

@Component({
  selector: 'app-comentarios-create',
  templateUrl: './comentarios-create.component.html',
  styleUrls: ['./comentarios-create.component.css']
})
export class ComentariosCreateComponent implements OnInit {

  loading = false;
  model: any = {};

  constructor(private service:ComentariosCreateService,
              private route: ActivatedRoute,
              private alertService: AlertService,
              private router: Router,) {}

  ngOnInit(): void {
  }

  onFormSubmitComment(): void {    
    this.model.articleId=this.model.articleId;
    this.model.isanswer=false;
    this.model.contenido = this.model.contenido;
    this.model.username = this.model.username;
    this.model.email =this.model.email;
    this.model.parentId=0;
    this.model
    this.model.level=0;
    this.service.createComment(this.model)        
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
