import { Component, inject } from '@angular/core';
import { DefaultViewComponent } from '../views/default-view/default-view.component';
import { DataCommunicationService, IfxUfeLoggerService } from 'ifx-ufe';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

@Component({
  selector: 'ifx-ufe-demo-home',
  imports: [DefaultViewComponent],
  templateUrl: './ufe-home.component.html',
  styleUrl: './ufe-home.component.scss',
})
export class UfeHomeComponent {}
