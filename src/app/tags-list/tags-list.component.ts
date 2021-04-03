import { Component, OnInit } from '@angular/core';
import {TagsListService} from '../_services/tags-list.service';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.css']
})
export class TagsListComponent implements OnInit {

  private page : number = 0;
  private tags:Array<any>;
  private pages:Array<number>;

  constructor(private _myService:TagsListService) {}

  ngOnInit() {
    this.getTags();
  };

  setPage(i,event:any){
    event.preventDefault();
    this.page=i;
    this.getTags();
  }

  getTags(){
    this._myService.getTags(this.page).subscribe(
      data=>{        
        this.tags=data['content'];
        this.pages = new Array(data['totalPages']);
      },

      (error)=>{
        console.log("Error");
      }
    );
  }

}
