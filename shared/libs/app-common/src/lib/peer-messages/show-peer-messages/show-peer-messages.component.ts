import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { DataCommunicationService, UfeCommand } from 'ifx-ufe';
import { filter } from 'rxjs';

@Component({
  selector: 'app-common-show-peer-messages',
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './show-peer-messages.component.html',
  styleUrl: './show-peer-messages.component.scss',
})
export class ShowPeerMessagesComponent {
  private dataCommSrv: DataCommunicationService = inject(DataCommunicationService);

  public displayedMessageColumns: string[] = ['sender', 'command', 'params'];

  constructor() {
    this.dataCommSrv
      .ufeCommands()
      .pipe(
        takeUntilDestroyed(),
        filter(cmd => !!cmd.command)
      )
      .subscribe(command => {
        this.messages.update(messages => [...messages, command]);
      });
  }

  messages = signal(new Array<UfeCommand>());
  showPeerMessages = signal(false);

  public getJsonValue(value: any[]): string {
    return JSON.stringify(value);
  }

  public onToggleShowPeerMessages(): void {
    this.showPeerMessages.update(show => !show);
  }
}
