import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './core/guards/auth.guard';
import { UserConfirmedGuard } from './core/guards/user-confirmed.guard';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard, UserConfirmedGuard]
  },
  {
    path: '',
    loadChildren: () => import('./components/user-authentication/user-authentication.module').then(m => m.UserAuthenticationModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
