import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {AuthGuard} from './core/guards/auth.guard';
import {ArticlesListComponent} from './components/articles-list/articles-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'feeds',
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'feeds/:feedId',
    component: ArticlesListComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
