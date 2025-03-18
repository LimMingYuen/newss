import { OnInit, OnDestroy } from '@angular/core';
import { UfeCommand } from '../models/UfeCommand';
import { AuthMode } from '../models/AuthMode.enum';
import * as i0 from "@angular/core";
export declare class MessageListenerDirective implements OnInit, OnDestroy {
    private element;
    private render;
    private commandHandlerNotificationService;
    private auth;
    private comm;
    private ipc;
    private route;
    private url;
    private envManager;
    private router;
    private envStore;
    private logger;
    /**
     * The name of this uFE as provided by the uFE programmer
     */
    ufeName: string;
    /**
     * The default route users should be directed to if no other route is specified once a user is authenticated
     */
    baseRoute: string;
    /**
     * autoDockout defines who should handle DOCKOUT_REQUEST UfeCommands that are received. True if the library should
     * handle the command, false otherwise.  The ifx-ufe library can only properly handle a DOCKOUT_REQUEST if all
     * necessary state information is captured in the uFE's current URL
     */
    autoDockout: boolean;
    /**
     * linkGroup is a string representing a valid linkGroup name registered with the FrontEndDiscoveryService.  Note that
     * as the actual back-end service is not yet built, it is currently mocked using the file assets/defaultGroup.json
     */
    linkGroup: string;
    /**
     * showLanguageControls defines whether the language toggle controls should be displayed in the UfeHeaderComponent.
     * True to display the controls, false otherwise.
     */
    showLanguageControls: boolean;
    /**
     * helpLink is a string representation of the URL lining to the help document for this uFE
     */
    helpLink: string;
    /**
     *  define the authorization login mode Kerberos|Credentials|Ask
     *  Kerberos == auto login
     *  Credentials == user/password
     *  Ask == Selection page
     */
    authMode: AuthMode;
    /**
     * blocker is an invisible HTML element that is used to prevent user input to the main UI of this uFE when a modal
     * dialog has been spawned and this.executionEnv == EMBEDDED
     * @private
     */
    private blocker;
    /**
     * subscriptions is used as a collector - all subscriptions created in the code are added to this subscription so they
     * can all be unsubscribed from at once in ngOnDestroy
     * @private
     */
    private subscriptions;
    /**
     * executionEnv represents the current execution environment.  Possible values are SELF, SHELL, NATIVE_SHELL, and
     * EMBEDDED.
     * @private
     */
    /**
     * onReceiveMessage listens for window:message events and reacts to them according to the contents of the message
     * @param $event
     */
    onReceiveMessage($event: any): void;
    private ufeCommandProcessor;
    private appCommandHandler;
    private peerCommandHandler;
    private commandObserverService;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private addAuthSubscription;
    /**
     * relayMessage posts this ufeCommand to the IPC for consumption by subscribers
     * @param data
     */
    relayMessage(data: UfeCommand): void;
    /**
     * handleShellCommand dispatches UfeCommands from the shell to their respective handler methods
     * @param ufeCommand
     * @private
     */
    private handleShellCommand;
    /**
     * handleSelfCommand dispatches UfeCommands received from this application to their respective handler methods
     * @param ufeCommand
     * @private
     */
    private handleSelfCommand;
    /**
     * ufePeerCommand dispatches UfeCommands received from all sources other than self or shell to their respective
     * handler methods
     * @param ufeCommand
     * @private
     */
    private handleUfePeerCommand;
    /**
     * onOpenDialog makes the hierarchy that this directive is attached to invisible by adding the 'invisible' css class
     * to the root element.  This is a required step in allowing a uFE modal dialog
     * @private
     */
    private onOpenDialog;
    /**
     * onCloseDialog removes the 'invisible' class from the element this directive is attached to.  This must be called
     * as part of the process of closing a uFE dialog.
     * @private
     */
    private onCloseDialog;
    /**
     * blockMainUi makes dialog boxes spawned in external windows modal by blocking the main UI of this component.  This
     * will only apply if this.executionEnvironment == EMBEDDED
     * @private
     */
    private blockMainUi;
    /**
     * unblockMainUi removes the blocking div created by blockMainUi if it exists.  This will only apply if
     * this.executionEnvironment == EMBEDDED
     * @private
     */
    private unblockMainUi;
    /**
     * sendReadySignal sends a UfeCommand to the top level context indicating that this UFE is loaded and ready to receive
     * commands.  This command will be received by the shell or embedding application in the case of those execution scenarios
     * or by this uFE in the case of a standalone scenario.
     * @private
     */
    private sendReadySignal;
    /**
     * login initiates the authentication workflow for the kerberos identity
     * @private
     */
    private login;
    /**
     * logout logs the current user out of this uFE by redirecting the browser to the logout component where the details
     * of the workflow are handled
     * @private
     */
    private logout;
    /**
     * handleDockoutRequest responds to a UfeCommand of the type DOCKOUT_REQUEST by issuing a UfeCommand of the type
     * DOCKOUT_REPLY with the current URL as the first parameter in the params array
     * @private
     */
    private handleDockoutRequest;
    /**
     * getQueryParams retrieves the query string parameters directly from the window object rather than the Angular
     * Router.
     */
    getQueryParams(): URLSearchParams;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageListenerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MessageListenerDirective, "[ufeMessageListener]", never, { "ufeName": { "alias": "ufeName"; "required": false; }; "baseRoute": { "alias": "baseRoute"; "required": false; }; "autoDockout": { "alias": "autoDockout"; "required": false; }; "linkGroup": { "alias": "linkGroup"; "required": false; }; "showLanguageControls": { "alias": "showLanguageControls"; "required": false; }; "helpLink": { "alias": "helpLink"; "required": false; }; "authMode": { "alias": "authMode"; "required": false; }; }, {}, never, never, true, never>;
}
