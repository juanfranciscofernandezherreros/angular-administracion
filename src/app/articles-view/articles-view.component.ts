import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleViewService} from '../_services/article-view.service';
import {CategoriesListService} from '../_services/categories-list.service';
import { AlertService } from '../_services/index';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OnChanges, Input } from '@angular/core';
import {ObtenerCategoriasArticuloService} from '../_services/obtener-categorias-articulo.service';
import { Article } from '../_models/article';
import { CKEditorModule } from 'ckeditor4-angular';


declare function myMehtod(model): any;
@Component({
  selector: 'app-articles-edit',
  templateUrl: './articles-view.component.html',
  styleUrls: ['./articles-view.component.css']
})
export class ArticlesViewComponent implements OnInit {

  article: Article;  

  constructor(private activeAouter: ActivatedRoute, 
    private router: Router,
    private articleViewService: ArticleViewService
    ) { }

  ngOnInit() {
    this.getArticleById(this.activeAouter.snapshot.params['id']);
  } 

  getArticleById(id) {
    this.articleViewService.getArticleById(id).subscribe(data => {
        this.article = data;
    });
  }

}