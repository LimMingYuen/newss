import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SendMessagesExamplesComponent } from '@ifx/app-common';

@Component({
  selector: 'ifx-ufe-demo-doc-dialog-modal',
  imports: [RouterLink, SendMessagesExamplesComponent],
  templateUrl: './doc-dialog-modal.component.html',
  styleUrl: './doc-dialog-modal.component.scss',
})
export class DocDialogModalComponent {}
