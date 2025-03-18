import { OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UfeCommand } from '../models/UfeCommand';
import { AuthToken } from '../models/AuthToken';
import { SubscriberData } from '../models/SubscriberData';
import { AuthStatus } from '../models/AuthStatus';
import { HelpItem } from '../models/helpItem';
import { ExcecutionEnvironmentType } from '../models/ufe-environment.interface';
import * as i0 from "@angular/core";
export declare class DataCommunicationService implements OnDestroy {
    private ipc;
    private auth;
    private environmentStore;
    private subscriberData;
    private currentSubscriberData;
    private currentCommand;
    private allSubs;
    private helpLinks;
    currentHelpLinks: BehaviorSubject<HelpItem[]>;
    environment$: unknown;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    ngOnDestroy(): void;
    /**
     * getEnviro returns a string indicating what environment this uFE is running in SELF if running stand alone,
     * SHELL if running under a web shell, EMBEDDED if running embedded in another environment such as a desktop
     * or iOS app.
     */
    getEnvironment(): string;
    /**
     * getAuthToken returns an observable of AuthToken containing all JWT tokens received from the STS
     */
    getAuthToken(): Observable<AuthToken>;
    /**
     * getKerberosToken returns the JWT token for the kerberos identity returned by the STS if such JWT has been received.
     * Null otherwise.
     */
    getKerberosToken(): object | null;
    /**
     * getCredential token returns the JWT token for the credential identity if such JWT has been received from the STS,
     * null otherwise
     */
    getCredentialToken(): object | null;
    /**
     * ufeCommands returns an observable through which all uFE commands are passed from the framework to the client uFE
     */
    ufeCommands(): Observable<UfeCommand>;
    /**
     * ufeCommands$ returns an observable which emits all new uFE commands from the framework to the client uFE
     */
    get ufeCommands$(): Observable<UfeCommand>;
    /**
     * IsAuthenticated is an observable that updates whenever an authentication event occurs
     * @constructor
     */
    get IsAuthenticated$(): Observable<AuthStatus>;
    /**
     * currentAuthStatus provides a snapshot at the moment of calling of this uFE's authentication status.  This method
     * should be preferred for routing guards such as canActivate as it is synchronous and does not require a subscription
     * to an observable.  Asynchronous operations can be problematic for routing guards.
     */
    get currentAuthStatus(): AuthStatus;
    /**
     * getSubscriberData returns a SubscriberData object that gives the current status for user authentication.
     */
    getSubscriberData(): SubscriberData;
    get subscriberData$(): Observable<SubscriberData>;
    loginCredentials(): void;
    loginKerberos(): void;
    refreshToken(): void;
    logout(): void;
    getHelpLinks(): Observable<HelpItem[]>;
    get isUserAuthenticated(): boolean;
    get currentExecutionEnvironment(): ExcecutionEnvironmentType;
    get ufeInstanceName(): string;
    private updateHelpLinks;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataCommunicationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DataCommunicationService>;
}
