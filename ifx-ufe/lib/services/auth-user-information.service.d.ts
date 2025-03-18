import * as i0 from "@angular/core";
export declare class AuthUserInformationService {
    private authStateStore;
    /**
     * Retrieves the host profile name from the auth state store.
     * It is only avaiblable for FAB PCs and equals to undefined otherwise
     * @returns The host profile name.
     */
    getHostProfileName: import("@angular/core").Signal<string | undefined>;
    /**
     * Retrieves the display name of the authenticated user.
     * @returns The display name of the authenticated user.
     */
    getDisplayName: import("@angular/core").Signal<string | undefined>;
    /**
     * Retrieves the department information of the authenticated user..
     * @returns The department information.
     */
    getDepartment: import("@angular/core").Signal<string | undefined>;
    /**
     * Retrieves the first name of the authenticated user.
     * @returns The first name of the authenticated user.
     */
    getFirstName: import("@angular/core").Signal<string | undefined>;
    /**
     * Retrieves the last name of the authenticated user.
     * @returns The last name of the authenticated user.
     */
    getLastName: import("@angular/core").Signal<string | undefined>;
    /**
     * Gets the AD Account Name (Active Directory sam account name) of the authenticated user.
     */
    getAccountName: import("@angular/core").Signal<string | undefined>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthUserInformationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthUserInformationService>;
}
