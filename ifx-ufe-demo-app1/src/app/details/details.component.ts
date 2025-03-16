import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ifx-ufe-demo-details',
  imports: [],
  template: `./details.component.html`,
  styleUrl: './details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent {}
