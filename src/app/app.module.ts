import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent }  from './app.component';
import { AlertComponent } from './alert/alert.component';
import { AuthGuard} from './_guards/index';
import { AdminGuard} from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService,CategoriesListService } from './_services/index';
import { RolesComponent } from './roles/roles.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { LogoComponent } from './logo/logo.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RouterModule , Routes } from '@angular/router';
import { routing }        from './app.routing';
import { AdministradorComponent } from './administrador/administrador.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarswapperComponent } from './sidebarswapper/sidebarswapper.component';
import { TopbarheaderComponent } from './topbarheader/topbarheader.component';
import { ProfileMainComponent } from './profile-main/profile-main.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from "@angular/material";
import { ArticlesCreateComponent } from './articles-create/articles-create.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { ArticlesEditComponent } from './articles-edit/articles-edit.component';
import { ArticleTranslateComponent } from './article-translate/article-translate.component';
@NgModule({
		imports: [
			BrowserModule,
	    FormsModule,
		HttpClientModule,
		CKEditorModule,
	    routing
	 ],
    declarations: [
			AppComponent,
			RolesComponent,			
			LoginComponent,
			HeaderComponent,
			FooterComponent,
			MenuComponent,
			LogoComponent,
			ProfileComponent,
			AlertComponent,
			HomeComponent,
			AdministradorComponent,
			AdminComponent,
			SidebarswapperComponent,
			TopbarheaderComponent,
			ProfileMainComponent,
			CategoriesComponent,
			CategoriesListComponent,
			ArticlesComponent,
			ArticlesListComponent,
			ArticlesCreateComponent,
			ArticlesEditComponent,
			ArticleTranslateComponent
    ],
    providers: [
        AuthGuard,
		AdminGuard,
        AlertService,
		AuthenticationService,
		CategoriesListService,
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
