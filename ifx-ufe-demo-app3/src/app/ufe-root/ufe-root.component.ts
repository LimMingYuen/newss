import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfxUfeModule } from 'ifx-ufe';
import { AdminViewComponent } from '../isecure/admin-view/admin-view.component';

@Component({
  selector: 'ifx-ufe-demo-app-root',
  imports: [RouterOutlet, IfxUfeModule],
  templateUrl: './ufe-root.component.html',
  styleUrl: './ufe-root.component.scss',
})
export class UfeAppRootComponent {
  title = 'ifx-ufe-demo-app3';
}
