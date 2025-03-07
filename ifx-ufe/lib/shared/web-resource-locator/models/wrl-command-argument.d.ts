import { WebResource } from './web-resource';
export declare class WrlCommandArgument {
    applicationName: string;
    resourceName: string;
    args: Object;
    isAnonymous: boolean;
    targetLocation: UfeWrlTargetLocationType | undefined;
    constructor(applicationName: string, resourceName: string, args?: Object, isAnonymous?: boolean, targetLocation?: UfeWrlTargetLocationType | undefined);
}
export type UfeWrlTargetLocationType = 'dialog-modal' | 'dialog-browser' | 'new-tab' | 'new-shell-tab' | 'not-found';
export declare class OpenWebResourceCommandArgument {
    webResource: WebResource;
    args: Object;
    targetLocation: UfeWrlTargetLocationType | undefined;
    constructor(webResource: WebResource, args: Object, targetLocation?: UfeWrlTargetLocationType | undefined);
}
