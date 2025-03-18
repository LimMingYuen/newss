import { OnDestroy } from '@angular/core';
import { OidcSecurityService, OpenIdConfiguration } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { AuthToken } from '../models/AuthToken';
import { AuthStatus } from '../models/AuthStatus';
import { SubscriberData } from '../models/SubscriberData';
import { RootInjectorGuard } from '../shared/type-guards/root-injector.guard';
import * as i0 from "@angular/core";
export declare class AuthenticationService extends RootInjectorGuard<AuthenticationService> implements OnDestroy {
    configurations: OpenIdConfiguration[];
    authenticationStatus: import("@angular/core").WritableSignal<AuthStatus>;
    private destroyRef$;
    private authToken;
    private subscriberData;
    private currentSubscriberData;
    currentAuthToken: import("@angular/core").Signal<AuthToken>;
    currentAuthToken$: Observable<AuthToken>;
    currentAuthenticationStatus: import("@angular/core").Signal<AuthStatus>;
    activeConfigId?: string;
    private authInProgress;
    private subscriptions;
    private tokenRefreshWatcher$;
    oidcSecurityService: OidcSecurityService;
    private envStore;
    private envManager;
    private shellCommunicatorService;
    constructor();
    ngOnDestroy(): void;
    /**
     * isAuthenticated returns an observable of AuthStatus indicating which identities are currently authenticated if any
     */
    get isAuthenticated$(): Observable<AuthStatus>;
    /***
     *updateIsAuthenticated allows client code to update the isAuthenticated status.  This is called by the
     * MessageListenerDirective when it receives JWT tokens from the Shell
     * @param newStatus: boolean
     */
    setAuthenticationStatus(newStatus: AuthStatus): void;
    updateAuthenticationStatus(loginType: keyof AuthStatus, newStatus: boolean): void;
    /**
     * initialAuthorization contacts the Pingfederate authentication service and attempts to authenticate the user with
     * Kerberos if available, or requests credentials if not.
     */
    initialAuthentication(): void;
    /**
     * loginKerberos begins the authentication workflow for the kerberos identity
     */
    loginKerberos(): void;
    isLastLoginOlderThanInSeconds(seconds: number): boolean;
    /**
     * loginCredentials begins the authentication workflow for the credentials identity
     */
    loginCredentials(): void;
    /**
     * logout locally logs of the current active configuration.
     */
    logout(): void;
    /**
     * getAuthTokens returns an Observable of AuthToken that will contain all current JWT tokens
     */
    getAuthTokens(): Observable<AuthToken>;
    /**
     * getCredentialToken returns the current JWT for the credential identity if it exists, null otherwise
     */
    getCredentialToken(): string | null;
    /**
     * getKerberosToken returns the current JWT for the kerberos identity if it exists, null otherwise
     */
    getKerberosToken(): string | null;
    /**
     * registerNewToken places this pre-authenticated JWT token into session storage for future use in authorization.
     * Note that this method only needs to be called when JWT tokens are passed from the Shell; if the ifx-ure library
     * handles the authentication (e.g. in the case of a stand-alone execution environment) the authentication library
     * will place the tokens in session storage.
     * @param tokens stringified AuthToken.
     * @private
     */
    registerNewToken(tokens: string): void;
    /**
     * isAuthInProgress returns a boolean representing whether an authentication flow is currently in progress
     * True if authentication is in progress false otherwise.  No navigation that may overlap an authentication process
     * should be attempted without checking this status as navigation during an authentication process will cause the
     * authentication process to fail in a partial state.  This method is consumed internally by the ifx-ufe library and
     * generally should not be called by client code.
     */
    isAuthInProgress: import("@angular/core").Signal<boolean>;
    get isUserAuthenticated(): boolean;
    get getToken(): string | null;
    /**
     * get subscriberData$ returns an observable of SubscriberData
     */
    get subscriberData$(): Observable<SubscriberData>;
    /**
     * checkTokenAndReturnExpiryStatus checks and removes tokens that are past their expiry, and updates the login status appropriately.
     * returns true if AuthToken is not valid, false otherwise
     */
    checkTokenAndReturnExpiryStatus(tokenType?: string | null): boolean;
    createSilentRefreshInfo(refreshTime: string, refreshInterval: number | undefined, refreshTimeoutMethod: number): {
        refreshTime: string;
        refreshInterval: number | undefined;
        refreshTimeoutMethod: number;
    };
    completeRefresh(): void;
    getJwtTokenFromSessionStorage(tokenName: string): any;
    isAuthFlowRunning(): boolean;
    getJwtIdTokenFromSessionStorage(tokenName: string): any;
    /**
     * publishTokens update the current authentication tokens stored in session storage
     * @private
     */
    private publishTokens;
    /**
     * setsToken sets the AuthToken kerberos/credentials in session storage.
     * @private
     */
    private setSessionStorageToken;
    /**
     * delete kerberos/credentials in session storage.
     * @private
     */
    private unsetSessionStorageToken;
    /**
     * checkForExistingToken checks if a JWT token has already been stored in session storage.  If a token is found, the
     * method take over the data in the token storing it within the system for future use.  Sets authInProgress to false
     * if a token is found as an existing token means the authentication workflow has already been completed.
     * @private
     */
    checkForExistingToken(): boolean;
    /**
     * Checks if the old token is valid and not expired, and tries to take over the token.
     *
     * @param tokenKey - The key of the token in the session storage.
     * @param tokenType - The type of the token.
     */
    private checkAndTryToTakeOverExistingToken;
    isTokenExpired(token: string | undefined | null): boolean;
    static getJwtTokenExpirationTimeInMilliseconds(token: string | undefined | null): number;
    private static isTokenTimeExpired;
    private static convertTokenTimeInMilliseconds;
    /**
     * Checks if the authentication process is in progress.
     *
     * @param tokenKey - The key used to retrieve the authentication token from the session storage.
     * @returns A boolean indicating whether the authentication process is in progress.
     */
    private isAuthFlowRunningInternal;
    isAuthFlowOutdated(tokenKey: string): boolean;
    /**
     * updateSubscriberData reads the subscriber info (that information related to the user's identity and their
     * login status) from an AuthToken and stores this data within the system
     * @param token AuthToken
     * @private
     */
    private updateSubscriberData;
    private updateKerberosSubscriberData;
    private updateCredentialsSubscriberData;
    /**
     * clearSubscriberData removes the subscriber data from the system and notifies all observers
     * @private
     */
    private clearSubscriberData;
    /**
     * invalidateTokens will remove the current kerberos and credentials tokens from the system, reset isAuthenticated
     * to false, clear userData, and remove the tKerberos and tCredentials session variables.
     * @private
     */
    invalidateTokens(): void;
    private stopTokenWatcher;
    /**
     * setTokenRefresh calculates the time 10 minutes before the current JWT token expires and sets a timeout to
     * trigger a silent token refresh at that time.
     * @private
     */
    private setTokenRefresh;
    forcedTokenRefresh(): void;
    private forcedSilentRefresh;
    /**
     * clear the timeout process
     * @public
     */
    stopTimeoutMethod(timeoutMethod: number | undefined | null): number | undefined | null;
    private get currentEnvironment();
    private localDateToUtc;
    private setExecutionEnvironment;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthenticationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthenticationService>;
}
