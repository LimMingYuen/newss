import { RootInjectorGuard } from '../shared/type-guards/root-injector.guard';
import { CommandHandlerInterface } from './models/command-handler.interface';
import { UfeCommand } from '../models/UfeCommand';
import * as i0 from "@angular/core";
export declare class AppCommandHandlerService extends RootInjectorGuard<AppCommandHandlerService> implements CommandHandlerInterface {
    private envStore;
    constructor();
    canProcess(): boolean;
    handleCommand(ufeCommand: UfeCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppCommandHandlerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppCommandHandlerService>;
}
