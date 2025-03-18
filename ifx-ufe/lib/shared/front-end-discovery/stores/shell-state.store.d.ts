import { AppDescription } from '../../../models/AppDescription';
import { AvailableUfe } from '../models/available-ufe';
import { RootInjectorGuard } from '../../type-guards/root-injector.guard';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ShellStateStore extends RootInjectorGuard<ShellStateStore> {
    private _state;
    constructor();
    availableUfe: import("@angular/core").Signal<AvailableUfe>;
    availableUfeLoaded: import("@angular/core").Signal<boolean>;
    scenariosLoaded: import("@angular/core").Signal<boolean>;
    layout: import("@angular/core").Signal<string>;
    appList: import("@angular/core").Signal<AppDescription[]>;
    activeApps: import("@angular/core").Signal<AppDescription[]>;
    readonly appSelected$: Subject<AppDescription>;
    readonly appDeselected$: Subject<AppDescription>;
    setAvailableUfe(availableUfe: AppDescription[]): void;
    setAvailableUfeLoaded(availableUfeLoaded: boolean): void;
    setActiveApps(activeApps: AppDescription[]): void;
    setScenariosLoaded(scenariosLoaded: boolean): void;
    setLayout(layout: string): void;
    getUfeApp(name: string): AppDescription;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShellStateStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ShellStateStore>;
}
export interface ShellState {
    availableUfe: AppDescription[];
    availableUfeLoaded: boolean;
    scenariosLoaded: boolean;
    activeApps: AppDescription[];
    layout: string;
}
