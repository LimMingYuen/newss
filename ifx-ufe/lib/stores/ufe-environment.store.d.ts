import { ExcecutionEnvironmentType, LanguageType } from '../models/ufe-environment.interface';
import { RootInjectorGuard } from '../shared/type-guards/root-injector.guard';
import * as i0 from "@angular/core";
export declare class UfeEnvironmentStore extends RootInjectorGuard<UfeEnvironmentStore> {
    private state;
    constructor();
    ufeName: import("@angular/core").Signal<string | undefined>;
    ufeResourceName: import("@angular/core").Signal<string | undefined>;
    ufeInstanceName: import("@angular/core").Signal<string | undefined>;
    executionEnvironment: import("@angular/core").Signal<ExcecutionEnvironmentType>;
    currentLanguage: import("@angular/core").Signal<LanguageType>;
    linkGroup: import("@angular/core").Signal<string | undefined>;
    showLanguageControls: import("@angular/core").Signal<boolean | undefined>;
    isNotSelfHosted: import("@angular/core").Signal<boolean>;
    isSelfHosted: import("@angular/core").Signal<boolean>;
    isShellApp: import("@angular/core").Signal<boolean>;
    isEnvironmentInitialized: import("@angular/core").Signal<boolean>;
    isSilentRefreshEnabled: import("@angular/core").Signal<boolean>;
    showHeader: import("@angular/core").Signal<boolean>;
    activeInstanceId: import("@angular/core").Signal<string>;
    parentInstanceId: import("@angular/core").Signal<string | null | undefined>;
    /**
     * setUfeName update the ufe name state
     * @param name application name
     */
    setUfeName(name: string): void;
    /**
     * setUfeName update the ufe name state
     * @param name application name
     */
    setUfeResouceName(name: string): void;
    /**
     * setExecutionEnvironment update the environment  namestate
     * @param env environment name
     */
    setExecutionEnvironment(environmentName: ExcecutionEnvironmentType): void;
    /**
     * setExecutionEnvironment update the current language state. Valid inputs are EN for English and DE for German
     * @param currentLanguage current language name
     */
    setCurrentLanguage(currentLanguage: LanguageType): void;
    /**
     * setExecutionEnvironment update the current language state
     * @param linkGroup current language name
     */
    setLinkGroup(linkGroup: string): void;
    /**
     * setShowLanguageControls determines whether language controls will be displayed for this uFE.  Language controls
     * @param status
     */
    setShowLanguageControls(status: boolean): void;
    /**
     * set silent refresh active status
     * @param status s
     */
    setSilentRefreshActive(status: boolean): void;
    setIsShellApp(status: boolean): void;
    setShowHeader(status: boolean): void;
    private setParentInstanceId;
    private checkForExistingEnvironmentStateValues;
    static ɵfac: i0.ɵɵFactoryDeclaration<UfeEnvironmentStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UfeEnvironmentStore>;
}
