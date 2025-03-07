import { UfeWrlTargetLocationType } from '../shared/web-resource-locator/models/wrl-command-argument';
import { UfeDialogConfig } from './UfeDialogConfig';
import { WindowRefTuple } from './WindowRefTuple';
/**
 * AppDescription contains the data necessary to identify and connect to a uFE
 */
export declare class AppDescription {
    appName: string;
    resourceName: string;
    /**
     * the combined name of appName and resourceName conjunted with a underscore. If either one is empty a empty string is returned.
     */
    combinedName: string;
    url: string;
    location: UfeWrlTargetLocationType | string | undefined;
    isLoaded: boolean;
    loadOnShellInit: boolean;
    dialogConfig: UfeDialogConfig | undefined;
    windowReference: WindowRefTuple | undefined;
    constructor(nm?: string, rn?: string, url?: string, loc?: undefined);
    static create(appName: string, resourceName: string, url: string | undefined, location: UfeWrlTargetLocationType | undefined | string, dialogConfig?: UfeDialogConfig | undefined): AppDescription;
    private static getCombinedName;
    private static getDialogConfig;
    static copy(toCopy: AppDescription): AppDescription;
}
