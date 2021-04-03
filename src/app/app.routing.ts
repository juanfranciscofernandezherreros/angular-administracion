import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RolesComponent } from './roles/roles.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { LogoComponent } from './logo/logo.component';
import { ProfileComponent } from './profile/profile.component';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { AuthGuard } from './_guards/index';
import { AdminGuard } from './_guards/index';
import { AdminComponent } from './admin/admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ArticlesComponent } from './articles/articles.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesCreateComponent } from './articles-create/articles-create.component';
import { ArticlesEditComponent } from './articles-edit/articles-edit.component';
import { ArticleTranslateComponent } from './article-translate/article-translate.component';
import { ArticlesViewComponent } from './articles-view/articles-view.component';
import { ComentariosListComponent } from './comentarios-list/comentarios-list.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
	{
	   path: 'admin',
	   component: AdminComponent
	},
  {
     path: 'dashboard/categories',
     component: CategoriesComponent,
     children: [
      { path: '', component: CategoriesListComponent }
    ]	 
  },
  {
     path: 'dashboard/articles',
     component: ArticlesComponent,
     children: [
      { path: '', component: ArticlesListComponent },
      { path: 'create', component: ArticlesCreateComponent },
      { path: 'edit/:id', component: ArticlesEditComponent },
      { path: 'view/:id', component: ArticlesViewComponent },
      { path: 'translate/:id', component: ArticleTranslateComponent }

    ]	 
  },
  {
    path: 'dashboard/comentarios',
    component: ComentariosComponent,
    children: [
     { path: '', component: ComentariosListComponent }
   ]	 
 },
  {
    path: 'dashboard/users',
    component: UsersComponent,
    children: [
    { path: '', component: UsersListComponent }
  ]	 
  },
  {
     path: '**',
     redirectTo: ''
  }
];

export const routing = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });