import { Routes } from '@angular/router';
import { IfxUfeAuthGuard, IfxUfeClaimsAuthGuard, LoginComponent, UfeUnauthorizedComponent } from 'ifx-ufe';
import { UfeHomeComponent } from './home/ufe-home.component';
import { UserViewComponent } from './isecure/user-view/user-view.component';
import { AdminViewComponent } from './isecure/admin-view/admin-view.component';

export const routes: Routes = [
  {
    path: 'home',
    component: UfeHomeComponent,
    canActivate: [IfxUfeAuthGuard],
  },
  {
    path: 'isecure/admin',
    component: AdminViewComponent,
    canActivate: [IfxUfeClaimsAuthGuard],
    data: {
      hasClaims: 'default:employeex',
    },
  },
  {
    path: 'isecure/user',
    component: UserViewComponent,
    canActivate: [IfxUfeClaimsAuthGuard],
    data: {
      hasClaims: 'default:employee',
    },
  },
  { path: '', component: LoginComponent },
  {
    path: 'unauthorized',
    component: UfeUnauthorizedComponent,
  },
];
