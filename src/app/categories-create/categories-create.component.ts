import { Component, OnInit } from '@angular/core';
import {CategoriesListService} from '../_services/categories-list.service';
import {CategoriesCreateService} from '../_services/categories-create.service';
import {TagsListService} from '../_services/tags-list.service';
import { ArticlesCreateService } from '../_services/articles-create.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services/index';
import { UserService } from '../_services/user.service';
import { Article } from '../_models/article';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {TagsCreateService} from '../_services/tags-create.service';
@Component({
  selector: 'app-categories-create',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.css']
})
export class CategoriesCreateComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private categoriesCreateService:CategoriesCreateService,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
  }

  createCategory = new FormGroup({
    name: new FormControl(),
    slug: new FormControl(),
    language: new FormControl()
  });

  submit(){
    this.model.name = this.createCategory.get('name').value;
    this.model.slug = this.createCategory.get('slug').value;   
    this.model.language = this.createCategory.get('language').value;   
    this.categoriesCreateService.create(this.model).subscribe(
      data => {
          this.alertService.success('Category Successful Created', true);
          this.router.navigate(['/dashboard/categories']);
      },
      error => {
          this.alertService.error(error);
          this.loading = false;
      });
  
  }

}
