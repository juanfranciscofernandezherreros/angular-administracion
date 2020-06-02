import { Component, OnInit } from '@angular/core';
import {CategoriesListService} from '../_services/categories-list.service';
import { ArticlesCreateService } from '../_services/articles-create.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services/index';
import { ObtenerIdiomasService } from '../_services/obtener-idiomas.service';
import { Article } from '../_models/article';
@Component({
  selector: 'app-articles-create',
  templateUrl: './articles-create.component.html',
  styleUrls: ['./articles-create.component.css']
})
export class ArticlesCreateComponent implements OnInit {

  model: any = {};
  model2: any = {};
  selectedDay: string = '';
  log = '';
  loading = false;
  returnUrl: string;
  article: Article = new Article()
  checkbox: boolean;
  categoriesList: any = {};
  interests = [];
  user : any = {};
  private categories:Array<any>;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private _myService:CategoriesListService,
    private articlesCreateService: ArticlesCreateService,
    private alertService: AlertService,
    private languageService:ObtenerIdiomasService
    ) {}
    

  ngOnInit() {

      this.getLanguages();
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';


  }

  logCheckbox(element: HTMLInputElement): void {
    this.log += `Checkbox ${element.value} was ${element.checked ? '' : 'un'}checked\n`;
  }

  register() {
    this.user = localStorage.getItem("currentUser");
    this.loading = true;    
    this.model.images = this.model.images;
    this.model.categorias = this.interests;
    this.model.userId =localStorage.getItem("idUser");
    this.model.isPublished=0;
    this.getLanguageByIso2(this.model.languageId);
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

handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        var targ = event.target || event.srcElement;
        this.model.images = reader.result;
    };
}


onCheckboxChange(evt,value) {
  this.checkbox = evt.target.checked;
  console.log();
  if(evt.target.checked){
    this.interests.push(value);
  }else{
    let index = this.interests.indexOf(value);
    if (index > -1) {
      this.interests.splice(index, 1);
    }
  }
   
}

//event handler for the select element's change event

changedata(evt) {
  this.model.languageId = evt.target.value;
    this.categories=null;
    this._myService.getCategoriesList(this.model.languageId).subscribe(
      data=>{        
        this.categories=data['content'];
        console.log(this.categories);
      },
      (error)=>{
        console.log("Error");
      }
    );
}

getLanguageByIso2(language:string){
  this.languageService.getLanguageByIso2(language).subscribe(
    data=>{       
      this.model.languageId=data["id"];
    },
    (error)=>{
      console.log("Error");
    }
  );
}

}
