import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  page : number = 0;
  users:Array<any>;
  pages:Array<number>;

  constructor(private _myService:UserService) {}

  ngOnInit() {
    this.getUsers();
  };

  setPage(i,event:any){
    event.preventDefault();
    this.page=i;
    this.getUsers();
  }

  getUsers(){
    this._myService.getUsers(this.page).subscribe(
      data=>{        
        this.users=data['content'];
        this.pages = new Array(data['totalPages']);
      },

      (error)=>{
        console.log("Error");
      }
    );
  }


}
