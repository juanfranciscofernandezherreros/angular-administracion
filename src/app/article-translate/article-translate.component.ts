import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleEditService } from '../_services/article-edit.service';
import { ArticlesCreateService } from '../_services/articles-create.service';
import { Article } from '../_models/article';
import {CategoriesListService} from '../_services/categories-list.service';
import { AlertService } from '../_services/index';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OnChanges, Input } from '@angular/core';
import {ObtenerCategoriasArticuloService} from '../_services/obtener-categorias-articulo.service';
import { ObtenerIdiomasService } from '../_services/obtener-idiomas.service';
import {ObtenerIdiomasArticuloDisponibleService} from '../_services/obtener-idiomas-articulo-disponible.service';
import {TranslateArticleService} from '../_services/translate-article.service';

@Component({
  selector: 'app-article-translate',
  templateUrl: './article-translate.component.html',
  styleUrls: ['./article-translate.component.css']
})
export class ArticleTranslateComponent implements OnInit {

  
  model: any = {};
  model2:any={};
  selectedDay: string = '';
  log = '';
  loading = false;
  returnUrl: string;
  article: Article = new Article()
  checkbox: boolean;
  categoriesList: any = {};
  interests = [];
  interests1 = [];
  private categories:Array<any>;
  languageId:number;
  list: any = {};
  list1: any = {};

  
  constructor(private activeAouter: ActivatedRoute, 
    private router: Router,private api: ArticleEditService , 
    private articlesCreateService: ArticlesCreateService,
    private alertService: AlertService,  
    private _myService:CategoriesListService,
    private obtenerArticulo:ObtenerCategoriasArticuloService,
    private obtenerTodosLosIdiomasService:ObtenerIdiomasService,
    private obtenerIdiomasArticuloDisponible:ObtenerIdiomasArticuloDisponibleService,
    private translateArticleService:TranslateArticleService
    ) { }

    ngOnInit() {
      this.getDetail(this.activeAouter.snapshot.params['id']);
      this.getLanguagesArticlesAvaliable(this.activeAouter.snapshot.params['id']);
    } 

    traducir(){
      this.model.images = this.model.images;
      this.model.categorias = this.interests;
      this.translateArticleService.traducirArticulo(this.model).subscribe(data => {
        this.model = data;
      });
    }

    getDetail(id) {
    
     this.api.getArticleTranslate(id).subscribe(data => {
        this.model = data;
      });
    }

    getLanguagesArticlesAvaliable(id) {    
      this.obtenerIdiomasArticuloDisponible.getLanguagesArticlesAvaliable(id).subscribe(data => {
         this.model.idiomas = data;
     });

    }

    onCheckboxChange(evt,id:number) {
      this.checkbox = evt.target.checked;
      if(evt.target.checked){
        alert(id);
        this.interests.push(id);
      }else{      
        this.interests1.push(id);
  
      }
    } 
    
    changedata(evt) {
      this.model.languageId = evt.target.value;
      this._myService.getCategoriesList(this.model.languageId).subscribe(
        data=>{        
          this.list1=null;
          this.list1= data['content'];
        },
        (error)=>{
          console.log("Error");
        }
      );
    }

    handleUpload(event) {
      alert(event);
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          var targ = event.target || event.srcElement;
          this.model.images = reader.result;
      };
  }

}
