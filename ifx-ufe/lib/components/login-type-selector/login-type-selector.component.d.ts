import { OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class IfxUfeLoginTypeSelectorComponent implements OnInit {
    private auth;
    private envStore;
    private deviceService;
    private sanitizer;
    showSpinner: import("@angular/core").WritableSignal<boolean>;
    loginLogo: import("@angular/core").WritableSignal<SafeHtml>;
    ssoMessage: string;
    credentialMessage: string;
    isSSODefault: boolean;
    constructor();
    ngOnInit(): void;
    loginKerberos(): void;
    loginCredentials(): void;
    private getLogo;
    private onLanguageToggle;
    static ɵfac: i0.ɵɵFactoryDeclaration<IfxUfeLoginTypeSelectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IfxUfeLoginTypeSelectorComponent, "ifx-ufe-login-type-selector", never, {}, {}, never, never, true, never>;
}
