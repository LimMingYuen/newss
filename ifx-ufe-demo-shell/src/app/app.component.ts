import { Component, inject } from '@angular/core';
import { AuthMode, WebResourceService, MessageListenerDirective } from 'ifx-ufe';
import { environment } from './environments/environment';
import { ShellRootComponent } from './shell/shell-root.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [MessageListenerDirective, ShellRootComponent],
})
export class AppComponent {
  private wrlService = inject(WebResourceService);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
    this.wrlService.initWrl(environment.wrlEnv, environment.wrlSite, environment.wrlConfigPath);
  }

  ufeHelpLink = 'https://confluencewikiprod.intra.infineon.com/display/WebMicroFrontends/Documentation';
  ufeLinkGroup = 'defaultGroup';
  ufeName = 'ifx-ufe-demo-shell';
  authMode = AuthMode.Kerberos;
  baseRoute = 'home';
}
