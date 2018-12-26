import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './usuarios/login/login.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesService } from './countries/countries.service';
import { RouterModule , Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import {HttpClientModule} from '@angular/common/http';

const routes:Routes = [
  {path:'',redirectTo:'/main', pathMatch:'full'},
  {path:'countries',component:CountriesComponent},
  {path:'main',component:MainComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CountriesComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
