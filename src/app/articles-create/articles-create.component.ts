import { Component, OnInit } from '@angular/core';
import {CategoriesListService} from '../_services/categories-list.service';
import {TagsListService} from '../_services/tags-list.service';
import { ArticlesCreateService } from '../_services/articles-create.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services/index';
import { ObtenerIdiomasService } from '../_services/obtener-idiomas.service';
import { UserService } from '../_services/user.service';
import { Article } from '../_models/article';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
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
  private tags:Array<any>;
  page : number = 0;
  pages: Array<number>;
  username:String;

  /*IMAGE */
  imageError: string;
    isImageSaved: boolean;
    cardImageBase64: string;
  
  tagsSelected = [];
  categoriesSelected = [];
  form: FormGroup;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private categoriesListService:CategoriesListService,
    private articlesCreateService: ArticlesCreateService,
    private alertService: AlertService,
    private userService: UserService,
    private tagsService:TagsListService,
    private languageService:ObtenerIdiomasService,
    private formBuilder: FormBuilder
    ) {
      this.form = this.formBuilder.group({
        website: this.formBuilder.array([], [Validators.required])
      })
    }
    
    createArticle = new FormGroup({
      title: new FormControl(),
      slug: new FormControl(),
      username: new FormControl(),
      language: new FormControl(),
      content: new FormControl(),
      mainImage: new FormControl(),
      searchText: new FormControl(),
      description: new FormControl(),
    });
  

  ngOnInit() {
    this.getCategories();    
    this.getTags();
  }


  logCheckbox(element: HTMLInputElement): void {
    this.log += `Checkbox ${element.value} was ${element.checked ? '' : 'un'}checked\n`;
  } 

changedata(evt) {
  this.model.languageId = evt.target.value;
    this.categories=null;
    this.categoriesListService.getCategoriesList(this.model.languageId).subscribe(
      data=>{        
        this.categories=data['content'];
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

getTags(){
  this.tagsService.getTags(this.page).subscribe(      
    data=>{      
      this.tags=data['content'];
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

  onCheck(event,$value){ 
    if ( event.target.checked ) {      
      this.categoriesSelected.push($value);
    }else{
      const index: number = this.categoriesSelected.indexOf($value);
      this.categoriesSelected.splice(index, 1);
    }
  }

  onCheckTag(event,$value){ 
    if ( event.target.checked ) {      
      this.tagsSelected.push($value);
    }else{
      const index: number = this.tagsSelected.indexOf($value);
      this.tagsSelected.splice(index, 1);
    }
  }

  onKeyUpEvent(event: any) {
    if(event.target.value.length>3){
      alert(event.target.value);
    } 
  }
  
    
  submit(){
    this.model.title = this.createArticle.get('title').value;
    this.model.slug = this.createArticle.get('slug').value;
    this.model.username = this.createArticle.get('username').value;
    this.model.language = this.createArticle.get('language').value;
    this.model.content = this.createArticle.get('content').value;
    this.model.mainImage = this.createArticle.get('mainImage').value;
    this.model.description = this.createArticle.get('description').value;
    this.model.mainImage = this.cardImageBase64;
    this.model.categories = this.categoriesSelected;
    this.model.tags = this.tagsSelected;
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

  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
        // Size Filter Bytes
        const max_size = 20971520;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 15200;
        const max_width = 25600;

        if (fileInput.target.files[0].size > max_size) {
            this.imageError =
                'Maximum size allowed is ' + max_size / 1000 + 'Mb';

            return false;
        }
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs => {
                const img_height = rs.currentTarget['height'];
                const img_width = rs.currentTarget['width'];

                console.log(img_height, img_width);


                if (img_height > max_height && img_width > max_width) {
                    this.imageError =
                        'Maximum dimentions allowed ' +
                        max_height +
                        '*' +
                        max_width +
                        'px';
                    return false;
                } else {
                    const imgBase64Path = e.target.result;
                    this.cardImageBase64 = imgBase64Path;
                    this.isImageSaved = true;
                    // this.previewImagePath = imgBase64Path;
                }
            };
        };

        reader.readAsDataURL(fileInput.target.files[0]);
    }
}

removeImage() {
    this.cardImageBase64 = null;
    this.isImageSaved = false;
}


}
