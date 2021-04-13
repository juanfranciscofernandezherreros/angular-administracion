import { Component, OnInit , Inject} from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {Tags} from "../_models/tags";
import {TagsService} from "../_services/tags.service";
import { AlertService } from '../_services/index';
@Component({
  selector: 'app-tags-view',
  templateUrl: './tags-view.component.html',
  styleUrls: ['./tags-view.component.css']
})
export class TagsViewComponent implements OnInit {

  model: any = {};
  tag: Tags;  
  loading = false;

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute, 
              private router: Router,
              private apiService: TagsService,
              private alertService: AlertService,
              private route: ActivatedRoute
            ) { }

  ngOnInit() {    
    var tagId = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getUserById(tagId).subscribe(data => {    
      this.tag = data;    
    }, error => console.log(error)); 
  }

  updateTag = new FormGroup({
    name: new FormControl(),
    slug: new FormControl(),
    language: new FormControl()
  });

  submit() {
    this.model.id = Number(this.route.snapshot.paramMap.get('id'));
    this.model.name = this.updateTag.get('name').value;
    this.model.slug = this.updateTag.get('slug').value;   
    this.model.language = this.updateTag.get('language').value;   
    this.apiService.updateTag(this.model).subscribe(
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
