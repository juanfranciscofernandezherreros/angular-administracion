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


declare function myMehtod(model): any;
@Component({
  selector: 'app-articles-edit',
  templateUrl: './articles-edit.component.html',
  styleUrls: ['./articles-edit.component.css']
})
export class ArticlesEditComponent implements OnInit {
  model: any = {};
  model1: any = {};
  list: any = {};
  list1: any = {};
  log = '';
  loading = false;
  returnUrl: string;
  article: Article = new Article()
  images: any = {};
  checkbox: boolean;
  public imagePath;
  imgURL: any;
  public message: string;
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  //HTML
   categories:Array<any>;
  arrayToIterate:number =0;
  interests = [];
  interests1 = [];

  model2:any={};
  selectedDay: string = '';
  languageId:number;

  constructor(private activeAouter: ActivatedRoute, 
    private router: Router,private api: ArticleEditService , 
    private articlesCreateService: ArticlesCreateService,
    private alertService: AlertService,  
    private _myService:CategoriesListService,
    private obtenerArticulo:ObtenerCategoriasArticuloService,
    private obtenerTodosLosIdiomasService:ObtenerIdiomasService
    ) { }

  ngOnInit() {
    this.getDetail(this.activeAouter.snapshot.params['id']);
    this.getLanguages();
    this.getCategoriasByArticle(this.activeAouter.snapshot.params['id']);
  } 
  
  editar(){
    this.loading = true;
    
    this.model.imageName = this.images;
    this.model.categorias = this.interests;
    this.model.categoriesToDelete = this.interests1;

    this.api.updateTodo(this.activeAouter.snapshot.params['id'] ,this.model)
        .subscribe(
            data => {
                this.alertService.success('Edit successful', true);
                this.router.navigate(['/dashboard/articles']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }

  getLanguages(){
    this.obtenerTodosLosIdiomasService.getObtenerIdiomas().subscribe(
      data=>{        
        this.model1.languages=data["_embedded"];
      },
      (error)=>{
        console.log("Error");
      }
    );
  }

  getCategoriasByArticle(id){
    this.obtenerArticulo.getCategoriesPorArticulo(id).subscribe(
      data=>{        
        this.list=data;
      },
      (error)=>{ 
        console.log("Error");
      }
    );
  }

  getDetail(id) {
    this.api.getArticle(id).subscribe(data => {
        this.model = data;
    });
  }
  
  // Image Preview
  showPreview(event) {
    var reader = new FileReader();
    const file = (event.target as HTMLInputElement).files[0];
    this.model.images="";
    reader.readAsDataURL(file);
    reader.onload = () => {
        var targ = event.target || event.srcElement;
        this.model.images = reader.result;
    };
  }

  onCheckboxChange(evt,id:number) {
    this.checkbox = evt.target.checked;
    if(evt.target.checked){
      this.interests.push(id);
    }else{      
      this.interests1.push(id);

    }
  } 
  
  changedata(evt) {
    this.model.languageId = evt.target.value;
    this._myService.getCategoriesList(this.model.languageId).subscribe(
      data=>{        
        this.list=null;
        this.list1= data['content'];
        console.log(this.categories);
      },
      (error)=>{
        console.log("Error");
      }
    );
  }
    
}
  

  
  
  

