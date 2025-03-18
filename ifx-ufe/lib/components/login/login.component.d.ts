import { UfeEnvironmentStore } from '../../stores/ufe-environment.store';
import * as i0 from "@angular/core";
export declare class LoginComponent {
    private url;
    private router;
    private shellComm;
    private auth;
    envStore: UfeEnvironmentStore;
    private subscriptions;
    private logger;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    private activateLoginWatcher;
    private activateNaviationToUrlWatcher;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginComponent, "ifx-ufe-login", never, {}, {}, never, never, true, never>;
}
