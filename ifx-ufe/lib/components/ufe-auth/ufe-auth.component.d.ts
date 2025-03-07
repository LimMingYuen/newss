import { AppLinkGroup } from '../../models/AppLink';
import { HelpItem } from '../../models/helpItem';
import { AuthenticatedUserDetailsStore } from '../../stores/authentication-details.store';
import { UfeEnvironmentStore } from '../../stores/ufe-environment.store';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class UfeAuthComponent {
    private wrlState;
    private comm;
    private url;
    private router;
    private auth;
    authDetailsStore: AuthenticatedUserDetailsStore;
    envStore: UfeEnvironmentStore;
    dialog: MatDialog;
    externalLinks: import("@angular/core").InputSignal<AppLinkGroup | undefined>;
    helpLinks: import("@angular/core").InputSignal<HelpItem[] | undefined>;
    hideJwtCounter: import("@angular/core").InputSignal<boolean>;
    logout: import("@angular/core").OutputEmitterRef<void>;
    logoutLabel: string;
    showLogout: import("@angular/core").Signal<boolean>;
    userIconUrl: import("@angular/core").Signal<URL | null>;
    authDetails: import("@angular/core").Signal<string[]>;
    currentLanguage: import("@angular/core").Signal<import("ifx-ufe").LanguageType>;
    showWrlVersionSelectionDialog: import("@angular/core").Signal<boolean>;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    private addEventListener;
    onLanguageToggle(language: string): void;
    onLogout(): void;
    onShowWrlVersionSelectionDialog(): void;
    private updateLanguage;
    private createIconUrl;
    private getAuthDetails;
    static ɵfac: i0.ɵɵFactoryDeclaration<UfeAuthComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UfeAuthComponent, "ifx-ufe-auth", never, { "externalLinks": { "alias": "externalLinks"; "required": false; "isSignal": true; }; "helpLinks": { "alias": "helpLinks"; "required": false; "isSignal": true; }; "hideJwtCounter": { "alias": "hideJwtCounter"; "required": false; "isSignal": true; }; }, { "logout": "logout"; }, never, never, true, never>;
}
