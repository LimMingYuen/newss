import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { UfeCommand } from '../models/UfeCommand';
import * as i0 from "@angular/core";
export declare class IPCService implements OnDestroy {
    private currentUfeCommand;
    constructor();
    ngOnDestroy(): void;
    /**
     * ufeCommands returns an observable of UfeCommand.  This method is subscribed to by various other parts of the
     * library so they can receive the UfeCommands passed on by the MessageListenerDirective
     */
    ufeCommands(): Observable<UfeCommand>;
    /**
     * relayCommand allows a UfeCommand to be relayed to all subscribers to the IPC.  Generally, this method is only
     * called by the MessageListenerDirective
     * @param cmd
     */
    relayCommand(cmd: UfeCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IPCService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IPCService>;
}
