import { OnInit, AfterViewInit } from '@angular/core';
import { UfeEnvironmentStore } from '../../stores/ufe-environment.store';
import * as i0 from "@angular/core";
export declare class LogoutComponent implements OnInit, AfterViewInit {
    private auth;
    envStore: UfeEnvironmentStore;
    private loggr;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LogoutComponent, "ifx-ufe-logout", never, {}, {}, never, never, true, never>;
}
