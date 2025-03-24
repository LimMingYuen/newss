import { AfterViewInit, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataCommunicationService, IfxUfeLoggerService } from 'ifx-ufe';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

@Component({
  selector: 'ifx-ufe-demo-show-documentation',
  imports: [],
  templateUrl: './show-documentation.component.html',
  styleUrl: './show-documentation.component.scss',
})
export class ShowDocumentationComponent implements AfterViewInit {
  private DataCommunicatorService = inject(DataCommunicationService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private logger = inject(IfxUfeLoggerService);

  constructor() {
    this.DataCommunicatorService.ufeCommands()
      .pipe(
        takeUntilDestroyed(),
        filter(
          command => command.command === 'PEER_MESSAGE' && command.params.length > 1 && !!command.params[1]?.routeName
        )
      )
      .subscribe(command => {
        this.logger.info('Received PEER_MESSAGE for routing', command.params[1]?.routeName);
        const routeName = command.params[1]?.routeName;
        const fileName = command.params[1]?.file ?? 'README.md';
        this.router.navigate([routeName], { relativeTo: this.route, queryParams: { file: fileName } });
      });
  }

  ngAfterViewInit(): void {
    const routeName = this.route.snapshot.queryParamMap.get('route-name');
    if (routeName) {
      this.router.navigate([routeName], { relativeTo: this.route });
    }
  }
}
