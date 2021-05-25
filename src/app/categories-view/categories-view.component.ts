import { Component, OnInit , Inject} from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {TagsService} from "../_services/tags.service";
import { AlertService } from '../_services/index';
import { Categories } from '../_models/categories';
import { CategoriesViewService } from '../_services/categories-view.service';
import { CategoriesDeleteService } from '../_services/categories-delete.service';

@Component({
  selector: 'app-categories-view',
  templateUrl: './categories-view.component.html',
  styleUrls: ['./categories-view.component.css']
})
export class CategoriesViewComponent implements OnInit {

  model: any = {};
  category: Categories;  
  loading = false;

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute, 
              private router: Router,
              private apiService: CategoriesViewService,
              private categoriesDeleteService: CategoriesDeleteService,
              private alertService: AlertService,
              private route: ActivatedRoute
            ) { }

  ngOnInit() {    
    var tagId = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getCategoryById(tagId).subscribe(data => {    
      this.category = data;    
    }, error => console.log(error)); 
  }

  deleteArticleFromCategory(categoryId:number,articleId:number){
    this.categoriesDeleteService.deleteArticleCategory(categoryId,articleId).subscribe(data => {    
      this.category = data;    
    }, error => console.log(error));
  }

}
