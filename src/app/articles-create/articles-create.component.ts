import { Component, OnInit } from '@angular/core';
import {CategoriesListService} from '../_services/categories-list.service';
import { ArticlesCreateService } from '../_services/articles-create.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services/index';
import { Article } from '../_models/article';
import { Categories } from '../_models/categories';

@Component({
  selector: 'app-articles-create',
  templateUrl: './articles-create.component.html',
  styleUrls: ['./articles-create.component.css']
})
export class ArticlesCreateComponent implements OnInit {

  model: any = {};
  log = '';
  loading = false;
  returnUrl: string;
  article: Article = new Article()
  checkbox: boolean;
  categoriesList: any = {};
  interests = [];

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private _myService:CategoriesListService,
    private articlesCreateService: ArticlesCreateService,
    private alertService: AlertService) {}
    private categories:Array<any>;

  ngOnInit() {

      this.getCategories();
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  logCheckbox(element: HTMLInputElement): void {
    this.log += `Checkbox ${element.value} was ${element.checked ? '' : 'un'}checked\n`;
  }

  register() {
    this.loading = true;    
    this.model.images = this.model.images;
    this.model.categorias = this.interests;

    this.articlesCreateService.userRegistration(this.model)
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


