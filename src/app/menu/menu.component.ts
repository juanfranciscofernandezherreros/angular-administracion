import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { MenuService} from './menu.service';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus : Menu[];

  constructor(private menuService:MenuService,private router:Router , private activatedRoute:ActivatedRoute) {}

  ngOnInit() {
    this.menuService.getMenuItems().subscribe(
      menus => this.menus = menus
    );
  }

}
