import * as i0 from "@angular/core";
/**
 * The public ufe environment service which allows to read and modify all attributes of an ufe which can be influenced by the using application directly.
 */
export declare class UfeEnvironmentService {
    private environmentStateStore;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    getUfeInstanceName(): string | undefined;
    getWrlAppName(): string | undefined;
    getWrlResourceName(): string | undefined;
    private getName;
    static ɵfac: i0.ɵɵFactoryDeclaration<UfeEnvironmentService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UfeEnvironmentService>;
}
