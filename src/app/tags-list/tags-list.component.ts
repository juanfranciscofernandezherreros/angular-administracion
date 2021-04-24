import { Component, OnInit } from '@angular/core';
import {TagsListService} from '../_services/tags-list.service';
import {TagsDeleteService} from '../_services/tags-delete.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.css']
})
export class TagsListComponent implements OnInit {

   page : number = 0;
   tags:Array<any>;
   pages:Array<number>;

  constructor(private _myService:TagsListService,
              private _deleteService:TagsDeleteService,
              private route: ActivatedRoute,
              private router: Router) {}

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

  deleteTag(tagId:number){
    this._deleteService.deleteTagById(tagId).subscribe(
      data=>{
        this.router.navigate(['/dashboard/tags']);        
      },

      (error)=>{
        console.log("Error");
      }
    );
  }

}
