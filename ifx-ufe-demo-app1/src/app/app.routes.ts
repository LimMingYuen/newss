import { Routes } from '@angular/router';
import { IfxUfeAuthGuard, LoginComponent } from 'ifx-ufe';
import { UfeHomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: UfeHomeComponent, canActivate: [IfxUfeAuthGuard] },
  { path: '', component: LoginComponent },
];
