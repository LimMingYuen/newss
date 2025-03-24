import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SendMessagesExamplesComponent } from '@ifx/app-common';

@Component({
  selector: 'ifx-ufe-demo-doc-dialog-browser',
  imports: [RouterLink, SendMessagesExamplesComponent],
  templateUrl: './doc-dialog-browser.component.html',
  styleUrl: './doc-dialog-browser.component.scss',
})
export class DocDialogBrowserComponent {}
