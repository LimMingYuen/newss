import { Component, inject } from '@angular/core';
import { UfeContainerComponent } from '../../ufe-container/ufe-container.component';
import { IfxUfeModule, ShowCommandMessagesComponent } from 'ifx-ufe';
import { ShellViewSelectorService } from '../../../shell-view-selector.service';
import { ShowPeerMessagesComponent } from '@ifx/app-common';


@Component({
  selector: 'ifx-ufe-demo-default-view',
  imports: [UfeContainerComponent, IfxUfeModule, ShowCommandMessagesComponent, ShowPeerMessagesComponent],
  templateUrl: './default-view.component.html',
  styleUrl: './default-view.component.scss',
})
export class DefaultViewComponent {
  public ShellViewSelectorService: ShellViewSelectorService = inject(ShellViewSelectorService);
}
