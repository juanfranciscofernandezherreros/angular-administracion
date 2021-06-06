import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { PlayByPlayService } from '../_services/play-by-play.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MarkAsFavourite } from '../_models/markAsFavourite';
import { FirstQuarter } from '../_models/firstQuarter';
import { SecondQuarter } from '../_models/secondQuarter';
import { ThirdQuarter } from '../_models/thirdQuarter';
import { ForthQuarter } from '../_models/forthQuarter';
import { Header } from '../_models/header';
import { PlayByPlay } from '../_models/playByPlay';
import {ArticlesListService} from '../_services/articles-list.service';
import {Article} from '../_models/article';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-data-team',
  templateUrl: './data-team.component.html',
  styleUrls: ['./data-team.component.css']
})
export class DataTeamComponent implements OnInit {
  isSubmitted = false;
  match: any;
  private markAsFavourite: MarkAsFavourite = new MarkAsFavourite();
  firstQuarter:FirstQuarter;
  gameCode:String;
  seassonCode:String;
  header:Header;
  matchId:number;

  arrayFirstQuarter = new Array();
  arraySecondQuarter = new Array();
  arrayThirdQuarter = new Array();
  arrayForthQuarter = new Array();
  arrayExtraQuarter =new Array();
  counter = 0;

  articles:Article[];
  
  //Paginacion Blogs
  page : number = 0;
  pages:Array<number>;

  private contactForm:FormGroup;
  private firstName:FormControl;

  constructor(private _dataService:DataService,
    private _playByPlayService:PlayByPlayService,
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private articleService : ArticlesListService , 
    private router: Router) { 
      
  }

  ngOnInit(): void {
    var gameCode = this.route.snapshot.paramMap.get('gameCode');
    var seassonCode = this.route.snapshot.paramMap.get('seassonCode');
    this.getData(gameCode,seassonCode);
    this.getArticles();   
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

   markPlayByPlayAsFavourite(firstQuarter:FirstQuarter,header:Header,actualQuarter:String,index:number,idMatchMongo:String){       
    this.markAsFavourite.quarterDTo=firstQuarter;
    this.markAsFavourite.actualQuarter=actualQuarter;
    this.markAsFavourite.headerDTO=header;    
    this.markAsFavourite.gameCode=this.route.snapshot.paramMap.get('gameCode');
    this.markAsFavourite.seassonCode=this.route.snapshot.paramMap.get('seassonCode');
    this.markAsFavourite.quarterDTo.markAsFavourite=true;
    this.markAsFavourite.index=index;
    this.markAsFavourite._id=idMatchMongo;
    this._playByPlayService.markAsFavourite(this.markAsFavourite).subscribe(
      data=>{  
      },
      (error)=>{
        console.log("Error");
      }
    );
   }

   cancelAsFavourite(firstQuarter:FirstQuarter,header:Header,actualQuarter:String,index:number,idMatchMongo:String){       
    this.markAsFavourite.quarterDTo=firstQuarter;
    this.markAsFavourite.actualQuarter=actualQuarter;
    this.markAsFavourite.headerDTO=header;    
    this.markAsFavourite.gameCode=this.route.snapshot.paramMap.get('gameCode');
    this.markAsFavourite.seassonCode=this.route.snapshot.paramMap.get('seassonCode');
    this.markAsFavourite.quarterDTo.markAsFavourite=true;
    this.markAsFavourite.index=index;
    this.markAsFavourite._id=idMatchMongo;
    this._playByPlayService.deleteAsFavourite(this.markAsFavourite).subscribe(
      data=>{  
      },
      (error)=>{
        console.log("Error");
      }
    );
   }

   getArticles(){
    this.articleService.getArticles(this.page).subscribe(      
      data=>{      
        this.articles=data['content'];
        this.pages = new Array(data['totalPages']);       
      },
      (error)=>{
        console.log("Error");
      }
    );
  }

  
  
  /*########### Form ###########*/
  registrationForm = this.fb.group({
    cityName: ['', [Validators.required]]
  })


  // Choose city using select dropdown
  changeCity(e) {
    console.log(e.value)
    this.cityName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // Getter method to access formcontrols
  get cityName() {
    return this.registrationForm.get('cityName');
  }

  /*########### Template Driven Form ###########*/
  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.registrationForm.value.cityName.id));
    }

  }

}
