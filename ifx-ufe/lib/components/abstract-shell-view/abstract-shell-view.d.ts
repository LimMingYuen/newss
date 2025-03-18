import { ShellStateStore } from '../../shared/front-end-discovery/stores/shell-state.store';
import { UfeEnvironmentStore } from '../../stores/ufe-environment.store';
import { UfeEnvironmentService } from '../../services/ufe-environment.service';
import * as i0 from "@angular/core";
export declare abstract class AbstractShellView {
    protected shellStateStore: ShellStateStore;
    protected envStore: UfeEnvironmentStore;
    /**
     * Emits when an app is deselected
     * @public
     */
    appDeSelected$: import("rxjs").Subject<import("ifx-ufe").AppDescription>;
    /**
     * Emits when an app is selected
     * @public
     */
    appSelected$: import("rxjs").Subject<import("ifx-ufe").AppDescription>;
    /**
     * The current environment for the shell
     * @protected
     */
    protected shellEnvironment: UfeEnvironmentService;
    /**
     * Defines the current display language for the UI.  Only 'EN' or 'DE' are valid values
     * @public
     */
    currentLanguage: import("@angular/core").Signal<import("ifx-ufe").LanguageType>;
    currentLanguage$: import("rxjs").Observable<import("ifx-ufe").LanguageType>;
    /**
     * sets the current language for the UI
     * @param layout
     */
    setLayout(layout: string): void;
    /**
     * List of all possible apps as returned by the FrontEndDiscoveryService
     * @public
     */
    appList: import("@angular/core").Signal<import("ifx-ufe").AppDescription[]>;
    /**
     * Observable of the app list
     * @protected
     */
    appList$: import("rxjs").Observable<import("ifx-ufe").AppDescription[]>;
    /**
     * List of all apps currently instantiated within this shell view
     * @public
     */
    activeApps: import("@angular/core").Signal<import("ifx-ufe").AppDescription[]>;
    /**
     * Observable of active apps
     * @public
     */
    activeApps$: import("rxjs").Observable<import("ifx-ufe").AppDescription[]>;
    /**
     * Used to control which layout is displayed
     * @public
     */
    layout: import("@angular/core").Signal<string>;
    /**
     * Observable of the layout
     * @public
     */
    layout$: import("rxjs").Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbstractShellView, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AbstractShellView>;
}
