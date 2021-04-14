import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ArticlesComponent } from './articles/articles.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesCreateComponent } from './categories-create/categories-create.component';
import { CategoriesEditComponent } from './categories-edit/categories-edit.component';
import { CategoriesViewComponent } from './categories-view/categories-view.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesCreateComponent } from './articles-create/articles-create.component';
import { ArticlesEditComponent } from './articles-edit/articles-edit.component';
import { ArticlesViewComponent } from './articles-view/articles-view.component';
import { ComentariosListComponent } from './comentarios-list/comentarios-list.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { TagsComponent } from './tags/tags.component';
import { TagsListComponent } from './tags-list/tags-list.component';
import { TagsCreateComponent } from './tags-create/tags-create.component';
import { TagsEditComponent } from './tags-edit/tags-edit.component';
import { TagsViewComponent } from './tags-view/tags-view.component';

const routes: Routes = [
	{
	   path: 'admin',
	   component: AdminComponent
	},
  {
     path: 'dashboard/categories',
     component: CategoriesComponent,
     children: [
      { path: '', component: CategoriesListComponent },
      { path: 'create', component: CategoriesCreateComponent },
      { path: 'edit/:id', component: CategoriesEditComponent },
      { path: 'view/:id', component: CategoriesViewComponent }
    ]	 
  },
  {
     path: 'dashboard/articles',
     component: ArticlesComponent,
     children: [
      { path: '', component: ArticlesListComponent },
      { path: 'create', component: ArticlesCreateComponent },
      { path: 'edit/:id', component: ArticlesEditComponent },
      { path: 'view/:id', component: ArticlesViewComponent }
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
    path: 'dashboard/tags',
    component: TagsComponent,
    children: [
      { path: '', component: TagsListComponent },
      { path: 'create', component: TagsCreateComponent },
      { path: 'edit/:id', component: TagsEditComponent },
      { path: 'view/:id', component: TagsViewComponent }
    ]	 
  },
  {
     path: '**',
     redirectTo: ''
  }
];

export const routing = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });