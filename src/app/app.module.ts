import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent }  from './app.component';
import { AlertComponent } from './alert/alert.component';
import { AuthGuard} from './_guards/index';
import { AdminGuard} from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { RolesComponent } from './roles/roles.component';
import { FormComponent } from './countries/form.component';
import { DetailsComponent } from './countries/details.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CountriesComponent } from './countries/countries.component';
import { MenuComponent } from './menu/menu.component';
import { LogoComponent } from './logo/logo.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RouterModule , Routes } from '@angular/router';
import { routing }        from './app.routing';
import { AdministradorComponent } from './administrador/administrador.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
		imports: [
			BrowserModule,
	    FormsModule,
	    HttpClientModule,
	    routing
	 ],
    declarations: [
			AppComponent,
			CountriesComponent,
			RolesComponent,
			FormComponent,
			DetailsComponent,
			LoginComponent,
			HeaderComponent,
			FooterComponent,
			CompetitionsComponent,
			CalendarComponent,
			MenuComponent,
			LogoComponent,
			ProfileComponent,
			AlertComponent,
			HomeComponent,
			AdministradorComponent,
			AdminComponent
    ],
    providers: [
        AuthGuard,
				AdminGuard,
        AlertService,
        AuthenticationService,
        UserService ,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
