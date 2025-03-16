import { Component, inject, input } from '@angular/core';
import { AppDescription, IfxUfeModule, ShellCommunicatorService } from 'ifx-ufe';
import { DockoutManagerService } from '../../../dock-out/dockout-manager.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { IfxUfeDemoConstants } from '@ifx/app-common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ifx-ufe-demo-iframe-wrapper',
  imports: [IfxUfeModule, MatIconModule, MatToolbarModule, MatButtonModule],
  templateUrl: './ufe-iframe-wrapper.component.html',
  styleUrls: ['./ufe-iframe-wrapper.component.scss'],
})
export class UfeIframeWrapperComponent {
  app = input<AppDescription>(new AppDescription());
  allowDockout = input<boolean>(false);

  private dockout = inject(DockoutManagerService);

  private shellCommunicationSrv = inject(ShellCommunicatorService);

  constructor() {}

  isDialogOpen = toSignal(this.dockout.selectIsDialogOpen(this.app()));

  public onDockout() {
    this.dockout.dockoutUfe(this.app());
  }

  public onClickShowDocumentation(documentation: string) {
    const data: { routeName: string; file: string } = {
      routeName: 'markdown-viewer',
      file: 'HOW_TO_DO_ENABLE_DOCKOUT_UFE.md',
    };

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
