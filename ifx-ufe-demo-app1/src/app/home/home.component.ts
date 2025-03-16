import { Component } from '@angular/core';
import { SiteNavComponent } from '../site-nav/site-nav.component';


@Component({
  selector: 'ifx-ufe-demo-home',
  imports: [SiteNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class UfeHomeComponent {}
