import { Component, EventEmitter, inject, Output, output, signal } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { ShellCommunicatorService, UfeWrlTargetLocationType } from 'ifx-ufe';
import { IfxUfeDemoConstants } from '../constants';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-ufe-shell-modal-dialog',
  imports: [MatDialogModule, MatProgressSpinnerModule, MatButtonModule],
  templateUrl: './ufe-shell-modal-dialog.component.html',
  styleUrl: './ufe-shell-modal-dialog.component.scss',
})
export class UfeShellModalDialogComponent {
  private shellCommunicationSrv: ShellCommunicatorService = inject(ShellCommunicatorService);
  public isLoading = signal(false);
  public canceled = output<void>();
  public saved = output<void>();

  public onClickSave() {
    this.saved.emit();
  }

  public onClickCancel() {
    this.canceled.emit();
  }

  onClickDocumentation() {
    const data: { routeName: string } = { routeName: 'dialog/ufe-dialog-window-service' };

    this.shellCommunicationSrv.sendPeerMessageWRL(
      IfxUfeDemoConstants.WRL_APPLICATION_NAME,
      'show-documentation',
      data,
      false,
      'new-tab'
    );
  }
}
