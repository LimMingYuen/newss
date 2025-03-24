import { Component } from '@angular/core';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';

@Component({
  selector: 'ifx-ufe-demo-doc-send-notification',
  imports: [MarkdownComponent],
  templateUrl: './doc-send-notification.component.html',
  styleUrl: './doc-send-notification.component.scss',
  providers: [provideMarkdown()],
})
export class DocSendNotificationComponent {}
