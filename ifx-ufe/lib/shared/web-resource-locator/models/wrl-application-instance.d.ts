import { WebResource } from './web-resource';
export declare class WrlApplicationInstance {
    appName: string;
    resourceName: string;
    constructor(_appName: string, _resourceName: string);
}
export declare class WrlApplicationInstanceWithVersions extends WrlApplicationInstance {
    versions: WebResource[];
    constructor(_appName: string, _resourceName: string, _versions?: WebResource[]);
    setVersions(versions: WebResource[]): void;
}
