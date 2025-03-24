import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SendMessagesExamplesComponent } from '@ifx/app-common';

@Component({
  selector: 'ifx-ufe-demo-doc-new-shell-tab',
  imports: [RouterLink, SendMessagesExamplesComponent],
  templateUrl: './doc-new-shell-tab.component.html',
  styleUrl: './doc-new-shell-tab.component.scss',
})
export class DocNewShellTabComponent {}
