import { Component } from '@angular/core';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';

@Component({
  selector: 'ifx-ufe-demo-default-view',
  imports: [MarkdownComponent],
  templateUrl: './default-view.component.html',
  styleUrl: './default-view.component.scss',
  providers: [provideMarkdown()],
})
export class DefaultViewComponent {}
