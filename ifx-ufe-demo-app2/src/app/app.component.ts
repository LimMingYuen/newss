import { Component, inject } from '@angular/core';
import { AuthMode, WebResourceService, MessageListenerDirective } from 'ifx-ufe';
import { environment } from './environments/environment';
import { UfeAppRootComponent } from './ufe-root/ufe-root.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [MessageListenerDirective, UfeAppRootComponent],
})
export class AppComponent {
  private wrlService = inject(WebResourceService);

  ufeName = 'ifx-ufe-demo-app2';
  authMode = AuthMode.Kerberos;
  baseRoute = 'home';

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
    this.wrlService.initWrl(environment.wrlEnv, environment.wrlSite, environment.wrlConfigPath);
  }
}
