import { Component, OnInit } from '@angular/core';
import {CategoriesListService} from '../_services/categories-list.service';
import { ArticlesCreateService } from '../_services/articles-create.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services/index';
import { ObtenerIdiomasService } from '../_services/obtener-idiomas.service';
import { UserService } from '../_services/user.service';
import { Article } from '../_models/article';
import { FormBuilder, FormGroup, FormControl , Validators} from '@angular/forms';
import { User } from '../_models';
import { title } from 'process';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-articles-create', 
  templateUrl: './articles-create.component.html',
  styleUrls: ['./articles-create.component.css']
})
export class ArticlesCreateComponent implements OnInit {
  private base64textString:String="";
  model: any = {};
  model2: any = {};
  selectedDay: string = '';
  log = '';
  loading = false;
  returnUrl: string;
  article: Article = new Article()
  user: any = {};
  checkbox: boolean;
  categoriesList: any = {};
  interests = [];
  private categories:Array<any>;
  page : number = 0;
  pages: Array<number>;
  username:String;

  /*IMAGE */
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;  

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private categoriesListService:CategoriesListService,
    private articlesCreateService: ArticlesCreateService,
    private alertService: AlertService,
    private userService: UserService,
    private languageService:ObtenerIdiomasService
    ) {}
    
    createArticle = new FormGroup({
      title: new FormControl(),
      slug: new FormControl(),
      username: new FormControl(),
      language: new FormControl(),
      content: new FormControl(),
      mainImage: new FormControl(),
      description: new FormControl(),
    });
  

  ngOnInit() {
    this.getCategories();
  }

  logCheckbox(element: HTMLInputElement): void {
    this.log += `Checkbox ${element.value} was ${element.checked ? '' : 'un'}checked\n`;
  }

  register() {
    this.loading = true;    
    this.model.images = this.model.images;
    this.model.title= this.model.title
    this.model.categorias = this.interests;
    this.model.username = this.model.username;
    alert(JSON.stringify(this.model));
    this.articlesCreateService.create(this.model)
        .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/dashboard/articles']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }  
  getLanguages(){
    this.languageService.getObtenerIdiomas().subscribe(
      data=>{        
        this.model2.languages=data["_embedded"];
      },
      (error)=>{
        console.log("Error");
      }
    );
  }

changedata(evt) {
  alert(evt.target.value);
  this.model.languageId = evt.target.value;
    this.categories=null;
    this.categoriesListService.getCategoriesList(this.model.languageId).subscribe(
      data=>{        
        this.categories=data['content'];
        console.log(this.categories);
      },
      (error)=>{
        console.log("Error");
      }
    );
}

getCategories(){
  this.categoriesListService.getCategories(this.page).subscribe(      
    data=>{      
      this.categories=data['content'];
      this.pages = new Array(data['totalPages']);       
    },
    (error)=>{
      console.log("Error");
    }
  );
}

handleFileSelect(evt){
  var files = evt.target.files;
  var file = files[0];

if (files && file) {
    var reader = new FileReader();

    reader.onload =this._handleReaderLoaded.bind(this);

    reader.readAsBinaryString(file);
}
}

_handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.model.mainImage = btoa(binaryString);
  }

}
