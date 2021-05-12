import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {YearsTeamsService} from '../_services/years-teams.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-euroleague-list-teams',
  templateUrl: './euroleague-list-teams.component.html',
  styleUrls: ['./euroleague-list-teams.component.css']
})
export class EuroleagueListTeamsComponent implements OnInit {

  yearsList: any = ['2000', '2001', '2002' , '2003' , '2004' , '2005' , '2006' , '2007' , '2008' , '2009' , '2010' , '2011' , '2012' , '2013' , '2014' , '2015' , '2016' , '2017' , '2018' , '2019' , '2020' , '2021' , '2021' , '2022' , '2023' , '2024' , '2025']
  yearSelected:String;
  teams:Array<any>;

  constructor(private _yearsTeamsService:YearsTeamsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getYearsTeams("2020");
  }

  form = new FormGroup({

    yearsList: new FormControl('', Validators.required)

  });

  get f(){

    return this.form.controls;

  }

  submit(){
    this._yearsTeamsService.getYearsTeams(this.form.value.yearsList).subscribe(
      data=>{        
        this.teams=data['content'];
      },
      (error)=>{
        console.log("Error");
      }
    );
  }

  
  getYearsTeams(year:string){
    this._yearsTeamsService.getYearsTeams(year).subscribe(
      data=>{        
        this.teams=data['content'];
      },
      (error)=>{
        console.log("Error");
      }
    );
  }

}
