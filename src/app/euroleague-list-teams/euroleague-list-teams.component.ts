import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {YearsListService} from '../_services/years-list.service'
@Component({
  selector: 'app-euroleague-list-teams',
  templateUrl: './euroleague-list-teams.component.html',
  styleUrls: ['./euroleague-list-teams.component.css']
})
export class EuroleagueListTeamsComponent implements OnInit {

  yearsList: any = ['2000', '2001', '2002' , '2003' , '2004' , '2005' , '2006' , '2007' , '2008' , '2009' , '2010' , '2011' , '2012' , '2013' , '2014' , '2015' , '2016' , '2017' , '2018' , '2019' , '2020' , '2021' , '2021' , '2022' , '2023' , '2024' , '2025']

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({

    yearsList: new FormControl('', Validators.required)

  });

  get f(){

    return this.form.controls;

  }

  submit(){
    console.log(this.form.value);
  }

}
