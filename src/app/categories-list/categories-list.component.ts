import { Component, OnInit,ViewChild } from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {DataTableModule} from "angular-6-datatable";
import { Categories } from '../_models/categories';
import { MatTableDataSource } from '@angular/material';  
import { MatSort } from '@angular/material';  
import { BehaviorSubject } from 'rxjs/BehaviorSubject';  
import {CategoriesListService} from '../_services/categories-list.service';
import {CategoriesDeleteService} from '../_services/categories-delete.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  page : number = 0;
  categories:Array<any>;
  category:Categories;
  pages:Array<number>;

  constructor(private _myService:CategoriesListService,
              private categoriesDeleteService:CategoriesDeleteService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.getCategories();
  };

  setPage(i,event:any){
    event.preventDefault();
    this.page=i;
    this.getCategories();
  }

  getCategories(){
    this._myService.getCategories(this.page).subscribe(
      data=>{        
        this.categories=data['content'];
        this.pages = new Array(data['totalPages']);

      },

      (error)=>{
        console.log("Error");
      }
    );
  }

  deleteCategory(categoryId:number){
    this.categoriesDeleteService.deleteCategoryById(categoryId).subscribe(
      data=>{
        this.router.navigate(['/dashboard/categories']);        
      },

      (error)=>{
        console.log("Error");
      }
    );
  }

  
}
