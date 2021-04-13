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
import {TagsCreateService} from '../_services/tags-create.service';

@Component({
  selector: 'app-tags-create',
  templateUrl: './tags-create.component.html',
  styleUrls: ['./tags-create.component.css']
})
export class TagsCreateComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private tagsService:TagsCreateService,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
  }

  createTag = new FormGroup({
    title: new FormControl(),
    slug: new FormControl(),
    language: new FormControl()
  });

  submit(){
    this.model.name = this.createTag.get('title').value;
    this.model.slug = this.createTag.get('slug').value;   
    this.model.language = this.createTag.get('language').value;   
    this.tagsService.createTags(this.model).subscribe(
      data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/dashboard/tags']);
      },
      error => {
          this.alertService.error(error);
          this.loading = false;
      });
  
  }

  

}
