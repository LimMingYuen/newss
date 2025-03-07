import { AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SilentRefreshComponent implements AfterViewInit {
    private auth;
    private comm;
    private token;
    private logger;
    private startRefreshTimeout;
    private destroyRef;
    private url;
    private envStore;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    ngAfterViewInit(): void;
    private checkToken;
    private tryPublishToken;
    private startRefresh;
    private attemptRefresh;
    private storeOldToken;
    /***
     * compareTokens returns true if the old token is different from the current token false otherwise.
     * @private
     */
    private compareTokens;
    static ɵfac: i0.ɵɵFactoryDeclaration<SilentRefreshComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SilentRefreshComponent, "ifx-ufe-silent-refresh", never, {}, {}, never, never, true, never>;
}
