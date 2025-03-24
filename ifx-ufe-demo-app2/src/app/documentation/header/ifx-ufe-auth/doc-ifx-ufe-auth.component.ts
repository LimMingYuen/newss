import { Component } from '@angular/core';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';

@Component({
  selector: 'ifx-ufe-demo-doc-ifx-ufe-auth',
  imports: [MarkdownComponent],
  templateUrl: './doc-ifx-ufe-auth.component.html',
  styleUrl: './doc-ifx-ufe-auth.component.scss',
  providers: [provideMarkdown()],
})
export class DocIfxUfeAuthComponent {}
