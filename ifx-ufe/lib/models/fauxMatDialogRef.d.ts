import { Observable } from 'rxjs';
import { Component } from '@angular/core';
export declare class fauxMatDialogRef {
    private dataReturn;
    windowRef: Window;
    componentInstance: Component;
    constructor();
    close(data?: any): void;
    afterClosed(): Observable<any>;
}
