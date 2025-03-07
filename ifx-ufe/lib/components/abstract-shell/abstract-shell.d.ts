import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppDescription } from '../../models/AppDescription';
import { SubscriberData } from '../../models/SubscriberData';
import { FrontEndDiscoveryService } from '../../shared/front-end-discovery/front-end-discovery.service';
import { ShellCommunicatorService } from '../../services/shell-communicator.service';
import { DataCommunicationService } from '../../services/data-communication.service';
import { UfeCommand } from '../../models/UfeCommand';
import { WebResourceService } from '../../shared/web-resource-locator/services/web-resource.service';
import { MatDialog } from '@angular/material/dialog';
import { IfxUfeLoggerService } from '../../shared/logging/ifx-ufe-logger.service';
import { AuthUserInformationService } from '../../services/auth-user-information.service';
import { LanguageType } from '../../models/ufe-environment.interface';
import { AbstractShellView } from '../abstract-shell-view/abstract-shell-view';
import { AuthStatus } from '../../models/AuthStatus';
import * as i0 from "@angular/core";
export declare abstract class AbstractShell extends AbstractShellView implements OnDestroy {
    protected discoverySvc: FrontEndDiscoveryService;
    protected feCom: ShellCommunicatorService;
    protected data: DataCommunicationService;
    protected router: Router;
    protected wrlSvc: WebResourceService;
    protected dialog: MatDialog;
    private auth;
    private wlrStateStore;
    private isLogoutTriggeredByBeforeUnload;
    /**
     * Data on the currently logged in subscriber
     * @public
     */
    subscriberData: SubscriberData;
    /**
     * the name that should be displayed for the currently logged in user
     *  @public
     */
    displayName: string;
    subscriberName: string;
    userIconUrl: URL | null;
    /**
     * used to collect all subscriptions and unsubscribe on destroy
     * @protected
     */
    protected subs: Subscription;
    /**
     *  Service for retrieving authenticated user information.
     */
    protected authUserInfo: AuthUserInformationService;
    /**
     * Logger service for logging messages
     * @protected
     */
    protected logger: IfxUfeLoggerService;
    /**
     * The default layout for the shell
     * @protected
     */
    protected abstract get defaultLayout(): string;
    constructor(discoverySvc: FrontEndDiscoveryService, feCom: ShellCommunicatorService, data: DataCommunicationService, router: Router, wrlSvc: WebResourceService, dialog: MatDialog);
    private addEventListener;
    protected initShell(): void;
    private subscribeToAuthChangesForGettingUfeApps;
    private subscribeToCommands;
    private subscribeToSubscriberData;
    private initializeLayout;
    ngOnDestroy(): void;
    /**
    *  The current authentication status of the user
    * @public
    */
    get isAuthenticated(): AuthStatus;
    /**
     * onLanguageToggle handles updating all instantiated uFEs when the language setting is changed within the shell
     */
    onLanguageToggle(newLanguage: LanguageType): void;
    /**
     * sendChildMessage sends a UfeCommand to the passed App.  Note the app must be instantiated within the shell
     * for the message to be sent
     * @param message UfeCommand
     * @param app AppDescription
     */
    protected sendChildMessage(message: UfeCommand, app: AppDescription): void;
    /**
     * onMessage responds to UfeCommands from instantiated Micro Front Ends.
     * @param msg UfeCommand
     */
    onMessage(msg: UfeCommand): Promise<void>;
    /**
     * onLayoutChange responds to user input to change the layout.  The new layout is recorded in session storage and
     * pushed to subscribers of this.layout.
     * @param layout
     */
    onLayoutChange(layout: string): void;
    onLogout(): void;
    private closeUfeApp;
    /**
     * maximizeUfe expands this uFE to cover the full screen, so it can display a modal dialog box
     * @param app AppDescription: The uFE to be maximized
     * @private
     */
    private maximizeUfe;
    /**
     * minimizeUfe returns a previously maximized uFE (see maximizeUfe) to it's normal state
     * @param app AppDescription: the uFE to be minimized
     * @private
     */
    private minimizeUfe;
    /**
     * sendLanguageUpdate is a helper function that sends a UfeCommand to this app informing it of which laguage to use
     * Necessary as language notifications occur in different parts of the code.
     * @param app
     * @private
     */
    protected sendLanguageUpdate(app: AppDescription): void;
    /**
     * getRequestingUfe is a helper function that will return the AppDescription of a uFE that sent this UfeCommand
     * @param msg UfeCommand
     * @private
     */
    protected getRequestingUfe(msg: UfeCommand): AppDescription;
    /**
     * getTargetUfe takes a UfeCommand of the type OPEN_UFE and returns an AppDescription of the target app in parmas[0]
     * @param msg UfeMessage
     * @private
     */
    protected getTargetUfe(msg: UfeCommand): AppDescription;
    /**
     * OpenNotification
     * @param msg UfeMessage where command = 'NOTIFICATION', params[0] = text of notification and params[1] = notification style class
     * @private
     */
    private openNotification;
    /**
     * loadAllScenarios loads all ufe appropriate to this shell
     * @private
     */
    protected loadAllScenarios(): void;
    protected createIconUrl(): URL;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbstractShell, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AbstractShell>;
}
