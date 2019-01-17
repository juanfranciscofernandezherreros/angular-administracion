import { Component, OnInit } from '@angular/core';
import { Info } from '../info/info';
import { InfoService } from '../info/info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  info : Info[];

  constructor(private infoService:InfoService) {}

  ngOnInit() {
    this.infoService.getInfo().subscribe(
      info => this.info = info
    );
  }

}
