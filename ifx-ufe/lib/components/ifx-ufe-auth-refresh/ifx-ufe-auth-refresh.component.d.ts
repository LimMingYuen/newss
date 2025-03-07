import { UfeEnvironmentStore } from '../../stores/ufe-environment.store';
import * as i0 from "@angular/core";
export declare class IfxUfeAuthRefreshComponent {
    silentRefeshRoute: string;
    envStore: UfeEnvironmentStore;
    enableSilentRefreshActive: import("@angular/core").Signal<boolean>;
    get silentRefreshFrameId(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<IfxUfeAuthRefreshComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IfxUfeAuthRefreshComponent, "ifx-ufe-auth-refresh", never, {}, {}, never, never, true, never>;
}
