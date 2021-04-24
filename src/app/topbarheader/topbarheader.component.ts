import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbarheader',
  templateUrl: './topbarheader.component.html',
  styleUrls: ['./topbarheader.component.css']
})
export class TopbarheaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout(){
    alert("LOGOUT");
    localStorage.removeItem('user');
  }
}
