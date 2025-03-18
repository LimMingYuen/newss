import { RootInjectorGuard } from '../shared/type-guards/root-injector.guard';
import { CommandHandlerInterface } from './models/command-handler.interface';
import { UfeCommand } from '../models/UfeCommand';
import * as i0 from "@angular/core";
export declare class PeerCommandHandlerService extends RootInjectorGuard<PeerCommandHandlerService> implements CommandHandlerInterface {
    private peerCom;
    private shellCom;
    private envStore;
    private shellStateStore;
    private feDiscovery;
    private ufeReadyNotification$;
    private destroyRef;
    private wrlSvc;
    private auth;
    private dialog;
    private ufeDialog;
    constructor();
    canProcess(): boolean;
    handleCommand(ufeCommand: UfeCommand): void;
    private openWebResource;
    private resolveUfeToOpenUrl;
    private resolveWebResourceQueryParams;
    private replaceAll;
    private showUfeDialog;
    /**
     * handlePeerMessage passes this UfeCommand from one uFE to another
     * @param msg UfeCommand the command to be passed
     * @private
     */
    private handlePeerMessage;
    private getTargetUfe;
    private getRequestingUfe;
    /**
     * handleOpenUfe checks if the uFE indicated in the OPEN_UFE command is currently active within the shell.  If it is,
     * handleOpenUfe will surface the uFE.  If not, it will open the uFE.
     * @param msg UfeCommand with either OPEN_UFE or PEER_MESSAGE as the value of the command field
     * @param sendResponse boolean A reply UfeCommand is sent to the requesting uFE if true, no response is sent if false
     * @private
     */
    private handleOpenUfe;
    private openTargetIfNotActive;
    private sendOpenUfeResponse;
    /**
     * onAppSelect update the active status of this app in the shell or self hosted uFE
     * @param app AppDescription the app to be instantiated
     */
    private onAppSelect;
    /**
     * onAppDeSelect remove this app from the active apps list in the shell or self hosted uFE
     * @param app AppDescription the app to be instantiated
     */
    private onAppDeSelect;
    /**
     * Sends the peer message after the UFE_READY message was returned. In case it would never be sent it gives up waiting after 60 seconds.
     * @param targetAppName - the unique name of the ufe which should receive the message
     * @param message - the peer message which should be sent
     */
    private sendPeerMessageAfterUfeReady;
    /**
     * handlePeerMessage passes this UfeCommand from one uFE to another
     * @param msg UfeCommand the command to be passed
     * @private
     */
    private handlePeerMessageWrl;
    private handleCloseUfeWrl;
    private processUfeReady;
    private handleUfeReadyAsync;
    /**
     * parameterizeApp ensures this app is passed the current application state variables including
     * current language, JWT Token, and Environment
     * @param app AppDescription
     * @private
     */
    private parameterizeApp;
    /**
     * setEnvironment sets this app's EXECUTION_ENVIRONMENT variable to SHELL
     * @param app AppDescription the uFE to set the execution environment variable for.
     * @private
     */
    private setEnvironment;
    private sendAuthToken;
    private updateLanguage;
    static ɵfac: i0.ɵɵFactoryDeclaration<PeerCommandHandlerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PeerCommandHandlerService>;
}
