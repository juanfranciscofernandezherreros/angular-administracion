import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ArticlesComponent } from './articles/articles.component';
import { CategoriesComponent } from './categories/categories.component';
import { EuroleagueComponent } from './euroleague/euroleague.component';
import { MatchTeamsComponent } from './match-teams/match-teams.component';
import { EuroleagueListTeamsComponent } from './euroleague-list-teams/euroleague-list-teams.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesCreateComponent } from './categories-create/categories-create.component';
import { CategoriesEditComponent } from './categories-edit/categories-edit.component';
import { CategoriesViewComponent } from './categories-view/categories-view.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesCreateComponent } from './articles-create/articles-create.component';
import { ArticlesEditComponent } from './articles-edit/articles-edit.component';
import { ArticlesViewComponent } from './articles-view/articles-view.component';
import { ComentariosListComponent } from './comentarios-list/comentarios-list.component';
import { ComentariosCreateComponent } from './comentarios-create/comentarios-create.component';
import { ComentariosAnswerComponent } from './comentarios-answer/comentarios-answer.component';
import { ComentariosEditComponent } from './comentarios-edit/comentarios-edit.component';
import { ComentariosViewComponent } from './comentarios-view/comentarios-view.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { TagsComponent } from './tags/tags.component';
import { TagsListComponent } from './tags-list/tags-list.component';
import { TagsCreateComponent } from './tags-create/tags-create.component';
import { TagsEditComponent } from './tags-edit/tags-edit.component';
import { TagsViewComponent } from './tags-view/tags-view.component';
import { AdminGuard } from './_guards/index';
import { PlayByPlayNotSyncroComponent } from './play-by-play-not-syncro/play-by-play-not-syncro.component';
import { PlayByPlayComponent } from './play-by-play/play-by-play.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
	{
	   path: 'admin',
	   component: AdminComponent
	},
  {
     path: 'dashboard/categories',
     component: CategoriesComponent,
     canActivate: [AdminGuard],
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
     canActivate: [AdminGuard],
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
    canActivate: [AdminGuard],
    children: [
     { path: '', component: ComentariosListComponent },
     { path: 'create', component: ComentariosCreateComponent },
     { path: ':id/answer/article/:articleId', component:ComentariosAnswerComponent },
     { path: 'edit/:id', component: ComentariosEditComponent },
     { path: 'view/:id', component: ComentariosViewComponent }
   ]	 
  },
  {
    path: 'dashboard/users',
    component: UsersComponent,
    canActivate: [AdminGuard],
    children: [
    { path: '', component: UsersListComponent }
  ]	 
  },
  {
    path: 'dashboard/tags',
    component: TagsComponent,
    canActivate: [AdminGuard],

    children: [
      { path: '', component: TagsListComponent },
      { path: 'create', component: TagsCreateComponent },
      { path: 'edit/:id', component: TagsEditComponent },
      { path: 'view/:id', component: TagsViewComponent }
    ]	 
  },
  {
    path: 'dashboard/euroleague',
    component: EuroleagueComponent,
    canActivate: [AdminGuard],
    children: [
     { path: '', component: EuroleagueListTeamsComponent },
     { path: 'teamCode/:teamCode/seasson/:seasson', component: MatchTeamsComponent },
     { path: 'details/match/:matchId', component: PlayByPlayComponent },
     { path: 'details/notSyncronized/gameCode/:gameCode/seassonCode/:seassonCode', component: PlayByPlayNotSyncroComponent }
   ]	 
  },
  {
     path: '**',
     redirectTo: ''
  }
];

export const routing = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });