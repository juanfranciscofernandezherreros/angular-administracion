import { Component, OnInit } from '@angular/core';
import { Info } from '../info/info';
import { InfoService } from '../info/info.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  info : Info[];

  constructor(private infoService:InfoService) {}

  ngOnInit() {
    this.infoService.getInfo().subscribe(
      info => this.info = info
    );
  }

}
