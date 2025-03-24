import { Component } from '@angular/core';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';

@Component({
  selector: 'ifx-ufe-demo-doc-ifx-ufe-header',
  imports: [MarkdownComponent],
  templateUrl: './doc-ifx-ufe-header.component.html',
  styleUrl: './doc-ifx-ufe-header.component.scss',
  providers: [provideMarkdown()],
})
export class DocIfxUfeHeaderComponent {}
