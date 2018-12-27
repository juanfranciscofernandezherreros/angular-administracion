import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './usuarios/login/login.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesService } from './countries/countries.service';
import { RouterModule , Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { RolesComponent } from './roles/roles.component';
import { FormComponent } from './countries/form.component';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {path:'',redirectTo:'/main', pathMatch:'full'},
  {path:'roles',component:RolesComponent},
  {path:'main',component:MainComponent},
  {path:'countries',component:CountriesComponent},
  {path:'countries/form',component:FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CountriesComponent,
    MainComponent,
    RolesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
