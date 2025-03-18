import { OnDestroy } from '@angular/core';
import { UfeCommand } from '../models/UfeCommand';
import { WindowRefTuple } from '../models/WindowRefTuple';
import { RootInjectorGuard } from '../shared/type-guards/root-injector.guard';
import { ExcecutionEnvironmentType } from '../models/ufe-environment.interface';
import * as i0 from "@angular/core";
export declare class PeerCommunicatorService extends RootInjectorGuard<PeerCommunicatorService> implements OnDestroy {
    private envStore;
    private peerReferences;
    private messageBuffer;
    private subscriptions;
    private shellStateStore;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    ngOnDestroy(): void;
    /**
     * openPeerInTab will open a peer uFE in a new tab.  A reference is kept to this tab to allow passing of data to the peer
     * @param msg UfeCommand with the command value 'OPEN_UFE' and the registered name of the target ufe as element 0 of
     * the params array
     * @private
     */
    openPeerInTab(msg: UfeCommand, openInWindow: boolean, executionEnv?: ExcecutionEnvironmentType | undefined): WindowRefTuple | null;
    /**
     * openPeerInTab will open a peer uFE in a new tab.  A reference is kept to this tab to allow passing of data to the peer
     * @param resourceName the name of the web resource
     * @param url the url which should be opened
     * @returns the opended instance or the already open instance
     */
    openPeerResourceInTab(resourceName: string, openNewWindow: boolean, url: URL | null, targetEnv: ExcecutionEnvironmentType): WindowRefTuple | null;
    /**
     * sendPeerMessageInTab sends this UfeCommand to the peer uFE specified in UfeCommand.params[0] if that peer uFE
     * was opened by this uFE and a reference to the recipient is included in the list of active references.
     * @param msg UfeCommand The command to be sent to the peer uFE.  Must include the recipients registered name
     * in UfeCommand.params[0]
     * @private
     */
    sendPeerMessageInTab(msg: UfeCommand, openInwindow: boolean, executionEnv?: ExcecutionEnvironmentType | undefined): WindowRefTuple | undefined;
    closeAllPeerTabs(): void;
    /**
     * pruneDeadRefs iterates through the current list of activeReferences to peer uFE and removes any in which the
     * window has been closed.
     * @private
     */
    private pruneDeadRefs;
    private openNewWindow;
    /**
     * setPeerReady iterates through the current list of active peer references, once finding a reference whose name matches
     * that of the UfeCommand's sender field, it sets that references isLoaded field to true, indicating the reference
     * is ready to receive further commands
     * @param cmd UfeCommand: An UfeCommand where the command field is set to UFE_READY
     * @private
     */
    setPeerReady(cmd: UfeCommand): void;
    registerOpener(cmd: UfeCommand): void;
    private sendOpenerID;
    private get ufeName();
    /**
     * getAppDescription returns an AppDescription for the uFE that has the registered name passed in ufeName
     * @param appCombinedName string: The registered name of the uFE to return the AppDescription for
     * @private
     */
    private getAppDescription;
    private canParseUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<PeerCommunicatorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PeerCommunicatorService>;
}
