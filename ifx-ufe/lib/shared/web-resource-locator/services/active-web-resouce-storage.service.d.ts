import { WrlApplicationInstance } from '../models/wrl-application-instance';
import * as i0 from "@angular/core";
export declare class ActiveWebResouceStorageService {
    private envStorage;
    /**
     * Saves the selected application version for a given web resource group.
     *
     * @param {WrlApplicationInstance} WrlApplicationInstance - The web resource group to save the version for.
     * @param {string} selectedApplicationVersion - The selected application version to save.
     * @returns {void}
     */
    saveVersion(applicationInstance: WrlApplicationInstance, selectedApplicationVersion: string): void;
    /**
     * Deletes the specified web resource group from the active web resource storage.
     *
     * @param WrlApplicationInstance - The web resource group to be deleted.
     */
    deleteVersion(applicationInstance: WrlApplicationInstance): void;
    /**
     * Retrieves the version of a web resource from the storage location.
     *
     * @param WrlApplicationInstance - The web resource group to retrieve the version for.
     * @returns The version of the web resource, or null if it is not found in the storage location.
     */
    getVersion(applicationInstance: WrlApplicationInstance): string | null;
    private getKeyName;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActiveWebResouceStorageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ActiveWebResouceStorageService>;
}
