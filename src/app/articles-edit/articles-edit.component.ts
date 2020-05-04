import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleEditService } from '../_services/article-edit.service';
import { ArticlesCreateService } from '../_services/articles-create.service';
import { Article } from '../_models/article';
import {CategoriesListService} from '../_services/categories-list.service';
import { AlertService } from '../_services/index';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-articles-edit',
  templateUrl: './articles-edit.component.html',
  styleUrls: ['./articles-edit.component.css']
})
export class ArticlesEditComponent implements OnInit {
  model: any = {};
  log = '';
  loading = false;
  returnUrl: string;
  article: Article = new Article()
  images: any = {};
  checkbox: boolean;
  categoriesList: any = {};
  public imagePath;
  imgURL: any;
  public message: string;
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  //HTML
  private categories:Array<any>;
  arrayToIterate:number =0;
  interests = [];

  constructor(private activeAouter: ActivatedRoute, 
    private router: Router,private api: ArticleEditService , 
    private articlesCreateService: ArticlesCreateService,
    private alertService: AlertService,  
    private _myService:CategoriesListService) { }

  ngOnInit() {
    this.getDetail(this.activeAouter.snapshot.params['id']);
    this.getCategories();
  }

  getDetail(id) {
    this.api.getArticle(id).subscribe(data => {
        this.model = data;
    });
    

  }

  getCategories(){
    this._myService.getCategoriesList().subscribe(
      data=>{        
        this.categories=data['content'];     

      },
      (error)=>{
        console.log("Error");
      }
  
    );
  }
  
  editar(){
    this.loading = true;
    
    this.model.imageName = this.images;

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

  
  // Image Preview
  showPreview(event) {
    var reader = new FileReader();
    const file = (event.target as HTMLInputElement).files[0];
    this.model.imageName="";
    reader.readAsDataURL(file);
    reader.onload = () => {
        var targ = event.target || event.srcElement;
        this.model.imageName = reader.result;
    };
  }

  onCheckboxChange(evt,value) {
    this.checkbox = evt.target.checked;
    if(evt.target.checked){
      this.interests.push(value);
      alert(this.checkbox);
    }else{
      let index = this.interests.indexOf(value);
      if (index > -1) {
        this.interests.splice(index, 1);
      }
    }    
    
  }

  
}
