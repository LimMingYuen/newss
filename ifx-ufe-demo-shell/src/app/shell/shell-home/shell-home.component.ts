import { Component } from '@angular/core';
import { DefaultViewComponent } from '../shell-content/shell-views/default-view/default-view.component';

@Component({
  selector: 'ifx-ufe-demo-home',
  imports: [DefaultViewComponent],
  templateUrl: './shell-home.component.html',
  styleUrl: './shell-home.component.scss',
})
export class ShellHomeComponent {}
