import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { DialogPosition, MatDialogConfig } from '@angular/material/dialog';
import { IfxDialogRef, UfeDialogWindowService } from 'ifx-ufe';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  private currentDialogRef?: IfxDialogRef;

  constructor(private readonly ufeDialogWindowService: UfeDialogWindowService) {}

  showDialog<TComponent>(dialogComponent: ComponentType<TComponent>, position?: DialogPosition): TComponent {
    const config: MatDialogConfig = { disableClose: true, autoFocus: false, position };

    this.currentDialogRef = this.ufeDialogWindowService.openDialog(dialogComponent, config);

    return this.currentDialogRef.componentInstance as TComponent;
  }

  closeDialog(): void {
    if (this.currentDialogRef) {
      this.currentDialogRef.close({});
      delete this.currentDialogRef;
    }
  }
}
