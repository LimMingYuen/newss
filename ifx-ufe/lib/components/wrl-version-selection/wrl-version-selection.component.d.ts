import { OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { WrlStateStore } from '../../shared/web-resource-locator/stores/wrl-state.store';
import { WrlApplicationInstanceWithVersions } from '../../shared/web-resource-locator/models/wrl-application-instance';
import * as i0 from "@angular/core";
export declare class WrlVersionSelectionComponent implements OnInit {
    titleValue: import("@angular/core").WritableSignal<string>;
    closeButtonText: import("@angular/core").WritableSignal<string>;
    resetAllVersionsButtonText: import("@angular/core").WritableSignal<string>;
    resetButtonVersionsText: import("@angular/core").WritableSignal<string>;
    dataSource: MatTableDataSource<WrlApplicationInstanceSelectionInterface>;
    displayedColumns: string[];
    stateStore: WrlStateStore;
    showResetAllVersionsButton: import("@angular/core").WritableSignal<boolean>;
    private logger;
    private wrlLocationService;
    private storageService;
    private isWindowRefreshNeeded;
    ngOnInit(): void;
    onActiveVersionChange(selectedApplicationVersion: string, group: WrlApplicationInstanceSelectionInterface): void;
    onResetVersionClick(group: WrlApplicationInstanceSelectionInterface): void;
    onResetAllVersionsClick(): void;
    onCloseClick(): void;
    private deleteVersionOverride;
    private loadWebResources;
    private getGridData;
    static ɵfac: i0.ɵɵFactoryDeclaration<WrlVersionSelectionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WrlVersionSelectionComponent, "ifx-wrl-version-selection", never, {}, {}, never, never, true, never>;
}
export interface WrlApplicationInstanceSelectionInterface extends WrlApplicationInstanceWithVersions {
    selectedVersion: string | undefined;
    isDefaultVersionOverridden: boolean;
}
