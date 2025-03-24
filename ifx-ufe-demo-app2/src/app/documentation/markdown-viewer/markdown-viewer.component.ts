import { Component, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';

@Component({
  selector: 'ifx-ufe-demo-markdown-viewer',
  imports: [MarkdownComponent],
  templateUrl: './markdown-viewer.component.html',
  styleUrl: './markdown-viewer.component.scss',
  providers: [provideMarkdown()],
})
export class MarkdownViewerComponent {
  private route = inject(ActivatedRoute);
  public file = input<string>();
  fileValue = signal<string>('');

  constructor() {
    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe(params => {
      const fileValue = params.get('file');
      if (!!fileValue) {
        this.fileValue.set(fileValue);
      }
    });
  }
}
