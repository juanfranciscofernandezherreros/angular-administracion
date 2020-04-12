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
import { ArticlesComponent } from './articles/articles.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';

const routes: Routes = [
	{
	   path: 'admin',
	   component: AdminComponent
	},
  {
     path: 'dashboard/categories',
     component: CategoriesComponent,
     canActivate: [AdminGuard],
     children: [
      { path: '', component: CategoriesListComponent }
    ]	 
  },
  {
     path: 'dashboard/articles',
     component: ArticlesComponent,
     canActivate: [AdminGuard],
     children: [
      { path: '', component: ArticlesListComponent }
    ]	 
  },
  {
     path: '**',
     redirectTo: ''
  }
];

export const routing = RouterModule.forRoot(routes);