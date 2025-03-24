import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SendMessagesExamplesComponent } from '@ifx/app-common';

@Component({
  selector: 'ifx-ufe-demo-doc-new-tab',
  imports: [RouterLink, SendMessagesExamplesComponent],
  templateUrl: './doc-new-tab.component.html',
  styleUrl: './doc-new-tab.component.scss',
})
export class DocNewTabComponent {}
