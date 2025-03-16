import { computed, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  AbstractShellView,
  AppDescription,
  UfeCommand,
  ShellCommunicatorService,
  DataCommunicationService,
} from 'ifx-ufe';

@Injectable({
  providedIn: 'root',
})
export class ShellViewSelectorService extends AbstractShellView {
  private shellCommunicatorService = inject(ShellCommunicatorService);
  private dataCommSrv = inject(DataCommunicationService);

  private navigationApp = signal(AppDescription.create('IFX-uFE-Demo', 'demo-app1', undefined, undefined));
  private mainApp = signal(AppDescription.create('IFX-uFE-Demo', 'demo-app2', undefined, undefined));

  constructor() {
    super();

    this.dataCommSrv
      .ufeCommands()
      .pipe(takeUntilDestroyed())
      .subscribe(cmd => {
        if (cmd.command == 'UFE_READY' && this.mainApp().combinedName === cmd.sender) {
          this.updateViewInMainUfe();
        }
      });
  }

  public setNavigationApp(app: AppDescription): void {
    this.navigationApp.set(app);
  }

  public setMainApp(app: AppDescription): void {
    this.mainApp.set(app);
  }

  navigationUfeApp = computed(
    () => this.appList().find(app => app.combinedName === this.navigationApp().combinedName) ?? new AppDescription()
  );
  mainUfeApp = computed(
    () => this.appList().find(app => app.combinedName === this.mainApp().combinedName) ?? new AppDescription()
  );

  public override setLayout(layout: string): void {
    super.setLayout(layout);
    this.updateViewInMainUfe();
  }

  public updateViewInMainUfe(): void {
    const sender = this.shellEnvironment.getUfeInstanceName();
    const peerMessageCommand = new UfeCommand(sender, 'PEER_MESSAGE');

    switch (this.layout()) {
      case 'admin_view':
        peerMessageCommand.params = [{ view: 'admin' }];
        break;
      case 'user_view':
        peerMessageCommand.params = [{ view: 'user' }];
        break;
      default:
        peerMessageCommand.params = [{ view: 'default' }];
    }

    this.shellCommunicatorService.sendChildMessage(peerMessageCommand, this.mainUfeApp());
  }
}
