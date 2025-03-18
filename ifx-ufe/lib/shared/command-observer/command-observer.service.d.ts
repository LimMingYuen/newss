import { Observable } from 'rxjs';
import { UfeCommandObserverType } from './command-observer.model';
import { UfeCommand } from '../../models/UfeCommand';
import * as i0 from "@angular/core";
export declare class CommandObserverService {
    private commands$;
    add(command: UfeCommand, type: UfeCommandObserverType): void;
    watch$(): Observable<UfeCommand>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommandObserverService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CommandObserverService>;
}
