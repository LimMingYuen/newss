import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ShellViewSelectorService } from '../../shell-view-selector.service';

@Component({
  selector: 'ifx-ufe-demo-view-selector',
  imports: [MatButtonModule],
  templateUrl: './view-selector.component.html',
  styleUrl: './view-selector.component.scss',
})
export class ViewSelectorComponent {

  private shellViewSelector = inject(ShellViewSelectorService);
  public activeView = this.shellViewSelector.layout;

  onViewSelectClick(layout: string): void {
    this.shellViewSelector.setLayout(layout);
  }
}
