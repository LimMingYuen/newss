import { Component } from '@angular/core';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';

@Component({
  selector: 'ifx-ufe-demo-get-started',
  imports: [MarkdownComponent],
  templateUrl: './doc-get-started.component.html',
  styleUrl: './doc-get-started.component.scss',
  providers: [provideMarkdown()],
})
export class DocGetStartedComponent {}
