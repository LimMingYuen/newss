import { AfterViewInit, Component, signal } from '@angular/core';

@Component({
  selector: 'lib-page-not-found',
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent implements AfterViewInit {
  public currentRoute = signal<string>('');

  public ngAfterViewInit(): void {
    this.currentRoute.set(window.location.href);
  }
}
