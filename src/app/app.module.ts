import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesService } from './countries/countries.service';
import { RouterModule , Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { RolesComponent } from './roles/roles.component';
import { FormComponent } from './countries/form.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './countries/details.component';
import { SignUpComponent } from './usuarios/signup/signup.component';
import { LoginComponent } from './usuarios/login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MenuComponent } from './menu/menu.component';
import { LogoComponent } from './logo/logo.component';

const routes:Routes = [
  {path:'',redirectTo:'main', pathMatch:'full'},
  {path:'main',component:MainComponent},
  {path:'roles',component:RolesComponent},
  {path:'countries',component:CountriesComponent},
  {path:'countries/form',component:FormComponent},
  {path:'countries/form/:id',component:FormComponent},
  {path:'countries/see/:id',component:DetailsComponent},
  {path:'users/signup',component:SignUpComponent},
  {path:'users/login',component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    MainComponent,
    RolesComponent,
    FormComponent,
    DetailsComponent,
    SignUpComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CompetitionsComponent,
    CalendarComponent,
    MenuComponent,
    LogoComponent
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
