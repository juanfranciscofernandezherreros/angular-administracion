import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleViewService} from '../_services/article-view.service';
import { Article } from '../_models/article';
import { CategoriesDeleteService } from '../_services/categories-delete.service';
import { Categories } from '../_models/categories';
import { Tags } from '../_models/tags';
import {TagsService} from "../_services/tags.service";


declare function myMehtod(model): any;
@Component({
  selector: 'app-articles-edit',
  templateUrl: './articles-view.component.html',
  styleUrls: ['./articles-view.component.css']
})
export class ArticlesViewComponent implements OnInit {

  article: Article;  
  category: Categories;  
  tag: Tags;  

  constructor(private activeAouter: ActivatedRoute, 
    private router: Router,
    private apiService: TagsService,
    private categoriesDeleteService: CategoriesDeleteService,
    private articleViewService: ArticleViewService
    ) { }

  ngOnInit() {
    this.getArticleById(this.activeAouter.snapshot.params['id']);
  } 

  getArticleById(id) {
    this.articleViewService.getArticleById(id).subscribe(data => {
        this.article = data;
    });
  }

  deleteTagFromArticle(tagId:number,articleId:number){
    this.apiService.deleteArticleFromTag(tagId,articleId).subscribe(data => {    
      this.tag = data;    
    }, error => console.log(error));
  }
  
  deleteCategoryFromArticle(categoryId:number,articleId:number){
    this.categoriesDeleteService.deleteArticleCategory(categoryId,articleId).subscribe(data => {    
      this.category = data;    
    }, error => console.log(error));
  }

}