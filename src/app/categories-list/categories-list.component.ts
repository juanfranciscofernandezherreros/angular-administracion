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

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  private page:number=0;
  private categories:Array<any>;
  private pages:Array<Number>;

  constructor(private _myService:CategoriesListService) {}

  ngOnInit() {
    this.getCategories();
  };

  getCategories(){
    this._myService.getCategories(this.page).subscribe(
      data=>{
        console.log(this.categories=data['content']);
        this.categories=data['content'];
        this.pages= new Array(data['totalPages']);
      },
      (error)=>{
        console.log("Error");
      }
    );
  }
}
