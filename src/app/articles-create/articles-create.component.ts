import { Component, OnInit } from '@angular/core';
import {CategoriesListService} from '../_services/categories-list.service';

@Component({
  selector: 'app-articles-create',
  templateUrl: './articles-create.component.html',
  styleUrls: ['./articles-create.component.css']
})
export class ArticlesCreateComponent implements OnInit {

  marked = false;
  theCheckbox = false;
  model: any = {};

  constructor(private categories:CategoriesListService) {}

  ngOnInit() {
  }

  create(){
    console.log("Title" + this.model.title + "Descripcion1" + this.model);

  }

}
