import { Routes } from '@angular/router';
import { ShellHomeComponent } from './shell/shell-home/shell-home.component';
import { IfxUfeAuthGuard, LoginComponent } from 'ifx-ufe';

export const routes: Routes = [
  { path: 'home', component: ShellHomeComponent, canActivate: [IfxUfeAuthGuard] },
  { path: '', component: LoginComponent },
];
