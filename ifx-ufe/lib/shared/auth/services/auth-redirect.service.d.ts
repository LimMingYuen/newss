import * as i0 from "@angular/core";
/**
 * Service to redirect routes
 */
export declare class AuthRedirectService {
    private readonly router;
    private readonly urlCaptureService;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    /**
     * setCurrentRouteAsRedirectUri
     */
    setCurrentRouteAsRedirectUri(): void;
    /**
     * redirectToLogin
     */
    redirectToLogin(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthRedirectService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthRedirectService>;
}
