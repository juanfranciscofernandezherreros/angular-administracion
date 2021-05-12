import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent }  from './app.component';
import { AlertComponent } from './alert/alert.component';
import { AdminGuard} from './_guards/index';
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
import { CategoriesCreateComponent } from './categories-create/categories-create.component';
import { CategoriesEditComponent } from './categories-edit/categories-edit.component';
import { CategoriesViewComponent } from './categories-view/categories-view.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from "@angular/material";
import { ArticlesCreateComponent } from './articles-create/articles-create.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { ArticlesEditComponent } from './articles-edit/articles-edit.component';
import { ArticlesViewComponent } from './articles-view/articles-view.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ComentariosListComponent } from './comentarios-list/comentarios-list.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CustomHttpInterceptorService } from '../app/_helpers/CustomHttpInterceptorService';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users/users.component';
import { TagsComponent } from './tags/tags.component';
import { TagsListComponent } from './tags-list/tags-list.component';
import { TagsCreateComponent } from './tags-create/tags-create.component';
import { HighlightDirective } from './_directives/highlight.directive';
import { FilterPipe } from './_pipes/filter.pipe';
import { TagsEditComponent } from './tags-edit/tags-edit.component';
import { TagsService } from './_services/tags.service';
import { TagsViewComponent } from './tags-view/tags-view.component';
import { FindTagsArticleService } from './_services/find-tags-article.service';
import { ComentariosCreateComponent } from './comentarios-create/comentarios-create.component';
import { ComentariosEditComponent } from './comentarios-edit/comentarios-edit.component';
import { ComentariosViewComponent } from './comentarios-view/comentarios-view.component';
import { ComentariosAnswerComponent } from './comentarios-answer/comentarios-answer.component';
import { EuroleagueComponent } from './euroleague/euroleague.component';
import { EuroleagueListTeamsComponent } from './euroleague-list-teams/euroleague-list-teams.component';
import { YearsListService } from './_services/years-list.service';


@NgModule({
		imports: [
			BrowserModule,
			FormsModule,
			ReactiveFormsModule,
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
			CategoriesCreateComponent,
			CategoriesEditComponent,
			CategoriesViewComponent,
			ArticlesComponent,
			ArticlesListComponent,
			ArticlesCreateComponent,
			ArticlesEditComponent,
			ArticlesViewComponent,
			ComentariosComponent,
			ComentariosListComponent,
			UserRegistrationComponent,
			UserLoginComponent,
			UsersListComponent,
			UsersComponent,
			TagsComponent,
			TagsListComponent,
			TagsCreateComponent,
			HighlightDirective,
			FilterPipe,
			TagsEditComponent,
			TagsViewComponent,
			ComentariosCreateComponent,
			ComentariosEditComponent,
			ComentariosViewComponent,
			ComentariosAnswerComponent,
			EuroleagueComponent,
   			EuroleagueListTeamsComponent,
    ],
    providers: [
		AdminGuard,
        AlertService,
		AuthenticationService,
		CategoriesListService,
		FindTagsArticleService,
		TagsService,
		YearsListService,
        UserService ,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomHttpInterceptorService,
            multi: true
        },
		{
			provide: HTTP_INTERCEPTORS, 
			useClass: CustomHttpInterceptorService, 
			multi: true
		},
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
