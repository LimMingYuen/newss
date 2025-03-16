import { Component, input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppDescription, IfxUfeModule } from 'ifx-ufe';
import { UfeIframeWrapperComponent } from './ufe-iframe-wrapper/ufe-iframe-wrapper.component';

@Component({
  selector: 'ifx-ufe-demo-ufe-container',
  imports: [IfxUfeModule, MatProgressSpinnerModule, UfeIframeWrapperComponent],
  templateUrl: './ufe-container.component.html',
  styleUrl: './ufe-container.component.scss',
})
export class UfeContainerComponent {
  ufeApp = input.required<AppDescription>();
  allowDockout = input<boolean>(false);
}
