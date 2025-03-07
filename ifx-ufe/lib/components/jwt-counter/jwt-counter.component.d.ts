import * as i0 from "@angular/core";
export declare class JwtCounterComponent {
    private auth;
    private logger;
    private readonly invalidTokenCounterValue;
    jwtCounter: import("@angular/core").WritableSignal<string>;
    showRefreshIcon: import("@angular/core").WritableSignal<boolean>;
    showCounterIcon: import("@angular/core").WritableSignal<boolean>;
    constructor();
    onClickRefresh(): void;
    private getJwtCounter;
    private transform;
    static ɵfac: i0.ɵɵFactoryDeclaration<JwtCounterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<JwtCounterComponent, "ifx-ufe-jwt-counter", never, {}, {}, never, never, true, never>;
}
