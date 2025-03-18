import { SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class UfeHeaderComponent {
    title: import("@angular/core").InputSignal<string>;
    isIfxLogoVisible: import("@angular/core").InputSignal<boolean>;
    hideJwtCounter: import("@angular/core").InputSignal<boolean>;
    hideAuthComponent: import("@angular/core").InputSignal<boolean>;
    logout: import("@angular/core").OutputEmitterRef<void>;
    ifxLogo: SafeHtml;
    showDefaultVersionOverriddenIcon: import("@angular/core").Signal<boolean>;
    private wrlState;
    private envStore;
    private router;
    private sanitizer;
    constructor();
    isVisible: import("@angular/core").Signal<boolean>;
    onLogout(): void;
    private getLogo;
    static ɵfac: i0.ɵɵFactoryDeclaration<UfeHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UfeHeaderComponent, "ifx-ufe-header", never, { "title": { "alias": "title"; "required": false; "isSignal": true; }; "isIfxLogoVisible": { "alias": "isIfxLogoVisible"; "required": false; "isSignal": true; }; "hideJwtCounter": { "alias": "hideJwtCounter"; "required": false; "isSignal": true; }; "hideAuthComponent": { "alias": "hideAuthComponent"; "required": false; "isSignal": true; }; }, { "logout": "logout"; }, never, ["[toolbarLeftLogoContainer]", "[toolbarRightTitleContainer]", "[toolbarCenterContainer]", "[toolbarLeftAuthContainer]", "[authComponent]"], true, never>;
}
