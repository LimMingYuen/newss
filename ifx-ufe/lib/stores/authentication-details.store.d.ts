import { OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AuthenticatedUserDetailsStore implements OnDestroy {
    private auth;
    private logger;
    private state;
    hostProfileName: import("@angular/core").Signal<string | undefined>;
    firstName: import("@angular/core").Signal<string | undefined>;
    lastName: import("@angular/core").Signal<string | undefined>;
    displayName: import("@angular/core").Signal<string | undefined>;
    department: import("@angular/core").Signal<string | undefined>;
    accountName: import("@angular/core").Signal<string | undefined>;
    private destroy$;
    constructor();
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthenticatedUserDetailsStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthenticatedUserDetailsStore>;
}
