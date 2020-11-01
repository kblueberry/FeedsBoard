import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  // {
  //   path: '',
  //   component: MainComponent,
  //   children: [
  //      {
  //        path: 'statistic',
  //        canActivate: [AuthGuard],
  //        loadChildren: () => import('./statistic/statistic.module').then(m => m.StatisticModule),
  //      },
  //      {
  //        path: 'question/:id',
  //        canActivate: [AuthGuard],
  //        component: QuestionComponent
  //      },
  //   ]
  // },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class AppRoutingModule {}
