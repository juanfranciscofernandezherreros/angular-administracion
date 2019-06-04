import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesService } from './countries/countries.service';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { RolesComponent } from './roles/roles.component';
import { FormComponent } from './countries/form.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './countries/details.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MenuComponent } from './menu/menu.component';
import { LogoComponent } from './logo/logo.component';
import { ProfileComponent } from './profile/profile.component';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/index';

const routes: Routes = [
	{
	   path: 'main',
	   component: MainComponent
	},
	{
	   path: 'login',
	   component: LoginComponent
	},
	{
	   path: 'signup',
	   component: RegisterComponent
  },
  {
     path: 'profile',
     component: ProfileComponent,
     canActivate: [AuthGuard]
  },
  {
     path: '**',
     redirectTo: ''
  }
];



export const routing = RouterModule.forRoot(routes);
