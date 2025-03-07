import { OnInit, OnDestroy } from '@angular/core';
import { AppLinkGroup } from '../../models/AppLink';
import { SafeHtml } from '@angular/platform-browser';
import { HelpItem } from '../../models/helpItem';
import * as i0 from "@angular/core";
export declare class UfeHeaderComponent implements OnInit, OnDestroy {
    private ipc;
    private envStore;
    private frontEnd;
    private sanitizer;
    private router;
    title: import("@angular/core").InputSignal<string>;
    isIfxLogoVisible: import("@angular/core").InputSignal<boolean>;
    hideJwtCounter: import("@angular/core").InputSignal<boolean>;
    logout: import("@angular/core").OutputEmitterRef<void>;
    private _externalLinks;
    ifxLogo: SafeHtml;
    helpLinks: HelpItem[];
    showDefaultVersionOverriddenIcon: import("@angular/core").Signal<boolean>;
    private subscriptions;
    private wrlState;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    ngOnInit(): void;
    ngOnDestroy(): void;
    isVisible: import("@angular/core").Signal<boolean>;
    externalLinks: import("@angular/core").Signal<AppLinkGroup>;
    onLogout(): void;
    private getLogo;
    static ɵfac: i0.ɵɵFactoryDeclaration<UfeHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UfeHeaderComponent, "ifx-ufe-header", never, { "title": { "alias": "title"; "required": false; "isSignal": true; }; "isIfxLogoVisible": { "alias": "isIfxLogoVisible"; "required": false; "isSignal": true; }; "hideJwtCounter": { "alias": "hideJwtCounter"; "required": false; "isSignal": true; }; }, { "logout": "logout"; }, never, ["[toolbarLeftLogoContainer]", "[toolbarRightTitleContainer]", "[toolbarCenterContainer]", "[toolbarLeftAuthContainer]"], true, never>;
}
