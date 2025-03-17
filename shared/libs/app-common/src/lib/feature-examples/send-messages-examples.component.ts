import { Component, DestroyRef, inject, input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DataCommunicationService, ShellCommunicatorService, UfeWrlTargetLocationType } from 'ifx-ufe';
import { IfxUfeDemoConstants, UfeShellModalDialogComponent } from '@ifx/app-common';
import { ComponentType } from '@angular/cdk/overlay';
import { OverlayService } from 'shared/libs/app-common/src/lib/services/overlay.service';
import { first, merge } from 'rxjs';
import { outputToObservable, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ifx-ufe-demo-send-messages-examples',
  imports: [MatSidenavModule, MatIconModule, MatListModule, MatTooltipModule, MatButtonModule],
  templateUrl: './send-messages-examples.component.html',
  styleUrl: './send-messages-examples.component.scss',
})
export class SendMessagesExamplesComponent {
  public showDocIcons = input(true);
  public targetLocations = input([
    'dialog-browser',
    'dialog-modal',
    'new-shell-tab',
    'new-tab',
    'open-link',
    'dialog-component-modal',
  ]);

  private shellCommunicationSrv: ShellCommunicatorService = inject(ShellCommunicatorService);
  private comm: DataCommunicationService = inject(DataCommunicationService);
  private overlayService: OverlayService = inject(OverlayService);
  private destoryRef = inject(DestroyRef);
  private documentationResourceName;

  constructor() {
    this.documentationResourceName = ('show-documentation-' + this.comm.ufeInstanceName).replace(/[_ ]/g, '-');
  }

  public readonly notificationTypes: string[] = ['info', 'warning', 'error', 'success'];

  onClickShowDialog(targetLocation: string) {
    const data: { routeName: string } = { routeName: '' };

    switch (targetLocation) {
      case 'dialog-modal':
        data.routeName = 'dialog/dialog-modal';
        this.sendPeerMessageWRL(targetLocation, data);
        break;
      case 'dialog-browser':
        data.routeName = 'dialog/dialog-browser';
        this.sendPeerMessageWRL(targetLocation, data);
        break;
      case 'new-shell-tab':
        data.routeName = 'tab/new-shell-tab';
        this.sendPeerMessageWRL(targetLocation, data);
        break;
      case 'new-tab':
        data.routeName = 'tab/new-tab';
        this.sendPeerMessageWRL(targetLocation, data);
        break;
      case 'dialog-component-modal':
        this.showComponentAsDialog();
        break;
      default:
        this.shellCommunicationSrv.sendPeerMessageWRL(
          IfxUfeDemoConstants.WRL_APPLICATION_NAME,
          IfxUfeDemoConstants.WRL_WEB_RESOURCE_LINK,
          {}
        );
    }
  }

  onClickShowNotification(notificationType: string) {
    const title = `title for ${notificationType}`;
    const message = `message: ${notificationType}`;
    const details = [`details for ${notificationType}`];

    switch (notificationType) {
      case 'info':
        this.shellCommunicationSrv.sendInfoNotification(title, message, details);
        break;
      case 'warning':
        this.shellCommunicationSrv.sendWarningNotification(title, message, details);
        break;
      case 'error':
        this.shellCommunicationSrv.sendErrorNotification(title, message, details);
        break;
      case 'success':
        this.shellCommunicationSrv.sendSuccessNotification(title, message, details);
        break;
      default:
        console.error(`Unknown notification type: ${notificationType}`);
        break;
    }
  }

  onClickShowDocumentation(targetLocation: string) {
    const data: { routeName: string; file: string } = { routeName: 'markdown-viewer', file: 'README.md' };

    switch (targetLocation) {
      case 'dialog-modal':
      case 'dialog-browser':
      case 'new-shell-tab':
      case 'new-tab':
        data.file = 'HOW_TO_DO_OPEN_WRL_DIALOG.md';
        break;
      case 'open-link':
        data.file = 'HOW_TO_DO_OPEN_A_LINK_RESOURCE.md';
        break;
      case 'dialog-component-modal':
        data.file = 'HOW_TO_DO_USE_OPEN_DIALOG.md';
        break;
      case 'notification':
        data.file = 'HOW_TO_DO_SHOW_NOTIFICATION.md';
        break;
      default:
    }

    this.shellCommunicationSrv.closeUfeWrl(IfxUfeDemoConstants.WRL_APPLICATION_NAME, this.documentationResourceName);

    this.shellCommunicationSrv.sendPeerMessageWRL(
      IfxUfeDemoConstants.WRL_APPLICATION_NAME,
      this.documentationResourceName,
      data,
      false,
      'new-tab'
    );
  }

  private sendPeerMessageWRL(targetLocation: string, data: { routeName: string }) {
    const isAnonymous = false;

    this.shellCommunicationSrv.sendPeerMessageWRL(
      IfxUfeDemoConstants.WRL_APPLICATION_NAME,
      this.documentationResourceName,
      data,
      isAnonymous,
      targetLocation as UfeWrlTargetLocationType
    );
  }

  private showComponentAsDialog() {
    this.openDialog(UfeShellModalDialogComponent);
  }

  private openDialog<TComponent>(dialogContent: ComponentType<TComponent>) {
    this.overlayService.closeDialog();
    const dialog = this.overlayService.showDialog(dialogContent) as UfeShellModalDialogComponent;

    const saved$ = outputToObservable(dialog.saved);
    const canceled$ = outputToObservable(dialog.canceled);

    merge(saved$, canceled$)
      .pipe(first(), takeUntilDestroyed(this.destoryRef))
      .subscribe(() => this.overlayService.closeDialog());
  }
}

