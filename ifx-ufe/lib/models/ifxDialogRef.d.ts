import { Observable } from 'rxjs';
import { Component } from '@angular/core';
export interface IfxDialogRef {
    componentInstance: Component;
    close(data: any): void;
    afterClosed(): Observable<any>;
}
