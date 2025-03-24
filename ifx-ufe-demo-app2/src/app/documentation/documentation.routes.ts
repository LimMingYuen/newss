import { RouterModule, Routes } from '@angular/router';
import { DocLoginComponent } from './auth/login/login/doc-login.component';
import { DocIfxUfeAuthGuardComponent } from './auth/ifx-ufe-auth-guard/doc-ifx-ufe-auth-guard.component';
import { DocDialogBrowserComponent } from './dialog/dialog-browser/doc-dialog-browser.component';
import { DocDialogModalComponent } from './dialog/dialog-modal/doc-dialog-modal.component';
import { DocUfeDialogWindowServiceComponent } from './dialog/ufe-dialog-window-service/doc-ufe-dialog-window-service.component';
import { DocGetStartedComponent } from './get-started/doc-get-started.component';
import { DocIfxUfeAuthComponent } from './header/ifx-ufe-auth/doc-ifx-ufe-auth.component';
import { DocIfxUfeHeaderComponent } from './header/ifx-ufe-header/doc-ifx-ufe-header.component';
import { DocSendNotificationComponent } from './shell-communication-service/send-notification/doc-send-notification.component';
import { DocNewTabComponent } from './tab/new-tab/doc-new-tab.component';
import { DocNewShellTabComponent } from './tab/new-shell-tab/doc-new-shell-tab.component';
import { ShowDocumentationComponent } from './show-documentation.component';
import { IfxUfeAuthGuard } from 'ifx-ufe';
import { MarkdownViewerComponent } from './markdown-viewer/markdown-viewer.component';

export const DocumentationRoutes: Routes = [
  { path: 'auth/login', component: DocLoginComponent },
  { path: 'auth/ifx-ufe-auth-guard', component: DocIfxUfeAuthGuardComponent },
  { path: 'dialog/dialog-browser', component: DocDialogBrowserComponent },
  { path: 'dialog/dialog-modal', component: DocDialogModalComponent },
  { path: 'dialog/ufe-dialog-window-service', component: DocUfeDialogWindowServiceComponent },
  { path: 'get-started', component: DocGetStartedComponent },
  { path: 'header/ifx-ufe-auth', component: DocIfxUfeAuthComponent },
  { path: 'header/ifx-ufe-header', component: DocIfxUfeHeaderComponent },
  { path: 'shell-communication-service/send-notification', component: DocSendNotificationComponent },
  { path: 'tab/new-tab', component: DocNewTabComponent },
  { path: 'tab/new-shell-tab', component: DocNewShellTabComponent },
  { path: 'markdown-viewer', component: MarkdownViewerComponent, canActivate: [IfxUfeAuthGuard] },
  { path: '', component: ShowDocumentationComponent },
];
