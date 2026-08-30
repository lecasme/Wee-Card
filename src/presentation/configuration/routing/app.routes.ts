import { Routes } from '@angular/router';
import {AuthGuard} from './auth.guard';
import {DemoComponent} from '../../components/demo/demo.component';
import {LoginComponent} from '../../components/login/login.component';
import {LandingComponent} from '../../components/landing/landing.component';
import {MainComponent} from '../../components/main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'demo', component: DemoComponent},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
    ]
  }
];
