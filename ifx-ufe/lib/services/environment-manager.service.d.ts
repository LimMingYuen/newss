import { ExcecutionEnvironmentType } from '../models/ufe-environment.interface';
import * as i0 from "@angular/core";
export declare class EnvironmentManagerService {
    private environmentStore;
    executionEnvironment$: import("rxjs").Observable<ExcecutionEnvironmentType>;
    appName$: import("rxjs").Observable<string | undefined>;
    linkGroup$: import("rxjs").Observable<string | undefined>;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    /**
     * setUfeName stores the app name passed in this UfeCommand in session storage.  This ufe name is the way the shell
     * knows this uFE, and is necessary for sending UfeCommands of any type to the shell.
     * @param name UfeCommand
     */
    setUfeName(name: string): void;
    /**
     * This method must be used with care! It takes the APP_NAME from the session storage. It only delivers reliable the correct name AFTER comming back from authentication redirect!
     * Use the method getAppName() instead.
     * @returns
     */
    getAppNameFromSessionStorage(): string | null;
    /**
     * setExecutionEnvironment sets an EXECUTION_ENVIRONMENT key within session storage for use by the popUpWindow
     * component
     * @param env UfeCommand
     */
    setExecutionEnvironment(env: ExcecutionEnvironmentType): void;
    setSelfHostedEnvironment(): void;
    setShellHostedEnvironment(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EnvironmentManagerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EnvironmentManagerService>;
}
