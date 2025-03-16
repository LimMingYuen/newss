import { Component, computed, inject } from '@angular/core';
import { AbstractShell, IfxUfeModule, ShellCommunicatorService } from 'ifx-ufe';
import { ViewSelectorComponent } from './view-selector/view-selector.component';
import { DockoutManagerService } from '../dock-out/dockout-manager.service';
import { RouterModule } from '@angular/router';
import { IfxUfeDemoConstants } from '@ifx/app-common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'ifx-ufe-demo-shell-header',
  imports: [IfxUfeModule, ViewSelectorComponent, RouterModule, MatIconModule, MatTooltipModule, MatButtonModule],
  templateUrl: './shell-header.component.html',
  styleUrl: './shell-header.component.scss',
})
export class ShellHeaderComponent extends AbstractShell {
  title = 'ifx-ufe-demo-shell';

  private dockout: DockoutManagerService = inject(DockoutManagerService);
  private shellCommunicationSrv = inject(ShellCommunicatorService);

  public showViewSelector = computed(() => !!this.authUserInfo.getAccountName());

  protected override get defaultLayout() {return 'DefaultView';}

  public override onLogout(): void {
    this.dockout.logout();

    super.onLogout();
  }

  public onClickShowDocumentation(documentation: string) {
    const data: { routeName: string; file: string } = {
      routeName: 'markdown-viewer',
      file: 'HOW_TO_DO_USER_AUTH_COMPONENT.md',
    };

    switch (documentation) {
      case 'header':
        data.file = 'HOW_TO_DO_USER_HEADER_COMPONENT.md';
        break;
      case 'isecure':
        data.file = 'HOW_TO_DO_ADD_ISECURE_AUTHORIZATION.md';
        break;
    }

    this.shellCommunicationSrv.closeUfeWrl(IfxUfeDemoConstants.WRL_APPLICATION_NAME, 'show-documentation');

    this.shellCommunicationSrv.sendPeerMessageWRL(
      IfxUfeDemoConstants.WRL_APPLICATION_NAME,
      'show-documentation',
      data,
      false,
      'new-tab'
    );
  }
}
