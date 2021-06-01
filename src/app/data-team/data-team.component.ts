import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-team',
  templateUrl: './data-team.component.html',
  styleUrls: ['./data-team.component.css']
})
export class DataTeamComponent implements OnInit {
  match: any;

  arrayFirstQuarter = new Array();
  arraySecondQuarter = new Array();
  arrayThirdQuarter = new Array();
  arrayForthQuarter = new Array();
  arrayExtraQuarter =new Array();
  counter = 0;

  constructor(private _dataService:DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    var gameCode = this.route.snapshot.paramMap.get('gameCode');
    var seassonCode = this.route.snapshot.paramMap.get('seassonCode');
    this.getData(gameCode,seassonCode);
  }

  getData(gameCode: string, seassonCode: string) {
    this._dataService.dataService(gameCode,seassonCode).subscribe(
       data=>{  
        this.arrayFirstQuarter = new Array(data.matchDTO.firstQuarterDTO.length);
        this.arraySecondQuarter = new Array(data.matchDTO.secondQuarterDTO.length);
        this.arrayThirdQuarter = new Array(data.matchDTO.thirdQuarterDTO.length);
        this.arrayForthQuarter = new Array(data.matchDTO.forthQuarterDTO.length);
        this.arrayExtraQuarter = new Array(data.matchDTO.extraTimeDTO.length);
        this.match=data;
       },
       (error)=>{
         console.log("Error");
       }
     );
   }

}
