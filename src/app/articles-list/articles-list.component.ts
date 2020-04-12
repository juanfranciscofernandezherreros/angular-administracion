import { Component, OnInit } from '@angular/core';
import {ArticlesListService} from '../_services/articles-list.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  private page : number = 0;
  private articles:Array<any>;
  private pages:Array<number>;

  constructor(private _myService:ArticlesListService) {}

  ngOnInit() {
    this.getArticles();
  };

  setPage(i,event:any){
    event.preventDefault();
    this.page=i;
    this.getArticles();
  }

  getArticles(){
    this._myService.getArticles(this.page).subscribe(
      data=>{        
        console.log(data);
        this.articles=data['content'];
        this.pages = new Array(data['totalPages']);

      },

      (error)=>{
        console.log("Error");
      }
    );
  }


}
