import { Component, OnInit , Inject} from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {Categories} from "../_models/categories";
import {CategoriesViewService} from "../_services/categories-view.service";
import {CategoriesEditService} from "../_services/categories-edit.service";
import { AlertService } from '../_services/index';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.css']
})
export class CategoriesEditComponent implements OnInit {

  model: any = {};
  category: Categories;  
  loading = false;


  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private categoriesViewService: CategoriesViewService,
    private categoriesEditService: CategoriesEditService,
    private alertService: AlertService,
    private route: ActivatedRoute
  ) { }

  updateCategory = new FormGroup({
    name: new FormControl(),
    slug: new FormControl(),
    language: new FormControl()
  });


  ngOnInit() {    
    var categoryId = Number(this.route.snapshot.paramMap.get('id'));
    this.categoriesViewService.getCategoryById(categoryId).subscribe(data => {    
      this.category = data;    
    }, error => console.log(error)); 
  }

  submit() {
    this.model.id = Number(this.route.snapshot.paramMap.get('id'));
    this.model.name = this.updateCategory.get('name').value;
    this.model.slug = this.updateCategory.get('slug').value;   
    this.model.language = this.updateCategory.get('language').value;   
    this.categoriesEditService.updateCategory(this.model).subscribe(
      data => {
          this.alertService.success('Tag successful', true);
          this.router.navigate(['/dashboard/tags']);
      },
      error => {
          this.alertService.error(error);
          this.loading = false;
      });

  
      
  }
}
