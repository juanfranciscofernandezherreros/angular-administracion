import { Component, OnInit } from '@angular/core';
import { Logo } from './logo';
import {LogoService} from './logo.service';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  logo : Logo[];

  constructor(private logoService:LogoService) {}

  ngOnInit() {
    this.logoService.getLogo().subscribe(
      logo => this.logo = logo
    );
  }

}
