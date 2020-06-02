import { Component, OnInit } from '@angular/core';
import {ArticlesListService} from '../_services/articles-list.service';
import {BorrarArticuloService} from '../_services/borrar-articulo.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Article} from '../_models/article';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})

export class ArticlesListComponent implements OnInit {

  articles : Article[];
  popular : Article[];
  
  //Paginacion Blogs
  page : number = 0;
  pages:Array<number>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService : ArticlesListService , 
  ) { }

  ngOnInit() {
   this.getArticles();
  }

  setPage(i,event:any){
    event.preventDefault();
    this.page=i;
    this.getArticles();    
  }

  
  getArticles(){
    this.articleService.getArticles(this.page).subscribe(      
      data=>{      
        this.articles=data['content'];
        this.pages = new Array(data['totalPages']);       
      },
      (error)=>{
        console.log("Error");
      }
    );
  }

}
