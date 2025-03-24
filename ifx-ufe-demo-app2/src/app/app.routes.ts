import { Routes } from '@angular/router';
import { IfxUfeAuthGuard, IfxUfeClaimsAuthGuard, LoginComponent } from 'ifx-ufe';
import { UfeHomeComponent } from './home/ufe-home.component';
import { UserViewComponent } from './views/user-view/user-view.component';
import { PageNotFoundComponent } from '@ifx/app-common';
import { AdminViewComponent } from './views/admin-view/admin-view.component';

export const routes: Routes = [
  { path: 'home', component: UfeHomeComponent, canActivate: [IfxUfeAuthGuard] },
  {
    path: 'views/admin',
    component: AdminViewComponent,
    canActivate: [IfxUfeClaimsAuthGuard],
    data: {
      hasClaims: 'admin',
    },
  },
  {
    path: 'views/user',
    component: UserViewComponent,
    canActivate: [IfxUfeClaimsAuthGuard],
    data: {
      hasClaims: 'user',
    },
  },
  {
    path: 'views/default',
    component: UfeHomeComponent,
    canActivate: [IfxUfeClaimsAuthGuard],
  },
  {
    path: 'documentation',
    loadChildren: () => import('./documentation/documentation.routes').then(m => m.DocumentationRoutes),
    canActivate: [IfxUfeAuthGuard],
  },
  { path: '', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];
