import { RootInjectorGuard } from '../shared/type-guards/root-injector.guard';
import { CommandHandlerInterface } from './models/command-handler.interface';
import * as i0 from "@angular/core";
export declare class UfeCommandProcessorService extends RootInjectorGuard<UfeCommandProcessorService> {
    private dataComm;
    private commandHandlers;
    constructor();
    registerHandler(handler: CommandHandlerInterface): void;
    /**
     * onMessage responds to UfeCommands from instantiated Micro Front Ends.
     * @param msg UfeCommand
     */
    private onUfeCommandMessage;
    static ɵfac: i0.ɵɵFactoryDeclaration<UfeCommandProcessorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UfeCommandProcessorService>;
}
