import { Routes } from '@angular/router';
import {LoginComponent} from "../../components/login/login.component";
import {MainComponent} from "../../components/main/main.component";
import {AuthGuard} from "./auth.guard";
import {UserComponent} from "../../components/user/user.component";
import {HelpComponent} from "../../components/help/help.component";
import {PrivacyComponent} from "../../components/policies/privacy/privacy.component";
import {BookingComponent} from '../../components/booking/booking.component';
import {SettingsComponent} from '../../components/settings/settings.component';
import {ClientComponent} from '../../components/client/client.component';
import {ProductComponent} from '../../components/product/product.component';
import {DashboardComponent} from '../../components/dashboard/dashboard.component';
import {WorkerComponent} from '../../components/worker/worker.component';
import {PasswordComponent} from '../../components/password/password.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'privacy', component: PrivacyComponent},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'password', component: PasswordComponent, canActivate: [AuthGuard] },
  { path: 'worker', component: WorkerComponent, canActivate: [AuthGuard] },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'schedule', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'schedule', component: BookingComponent },
      { path: 'users', component: UserComponent },
      { path: 'clients', component: ClientComponent },
      { path: 'products', component: ProductComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'help', component: HelpComponent }
    ]
  }
];
