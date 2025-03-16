import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShellHeaderComponent } from './shell-header/shell-header.component';

@Component({
  selector: 'ifx-ufe-demo-shell-root',
  imports: [RouterOutlet, ShellHeaderComponent],
  templateUrl: './shell-root.component.html',
  styleUrl: './shell-root.component.scss',
})
export class ShellRootComponent {}
