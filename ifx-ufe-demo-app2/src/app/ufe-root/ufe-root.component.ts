import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { DataCommunicationService, IfxUfeLoggerService, IfxUfeModule } from 'ifx-ufe';
import { ShowPeerMessagesComponent } from '@ifx/app-common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { distinct, distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'ifx-ufe-demo-app-root',
  imports: [RouterOutlet, IfxUfeModule, ShowPeerMessagesComponent],
  templateUrl: './ufe-root.component.html',
  styleUrl: './ufe-root.component.scss',
})
export class UfeAppRootComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private DataCommunicatorService = inject(DataCommunicationService);
  private router: Router = inject(Router);

  hideShowPeerMessages = signal(false);

  constructor() {
    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe(params => {
      const fileValue = !!params.get('file');
      if (fileValue) {
        this.hideShowPeerMessages.set(true);
      }
    });

    this.DataCommunicatorService.ufeCommands()
      .pipe(
        takeUntilDestroyed(),
        filter(command => command.command === 'PEER_MESSAGE' && command.params.length > 0 && command.params[0]?.view)
      )
      .subscribe(command => {
        const hasValidViewRoute = !!command.params[0]?.view;

        if (hasValidViewRoute) {
          const routeName = '/views/' + command.params[0]?.view;
          this.router.navigate([routeName]);
          return;
        }
        this.router.navigate(['']);
      });
  }

  title = 'ifx-ufe-demo-app2';
}
