import { WRLParameter } from './wrl-parameter';
/**
 * WebResource contains the data of web resource locator API
 */
export declare class WebResource {
    appName: string;
    resourceName: string;
    url: string;
    anonymous: boolean;
    webResourceType: string;
    version: number;
    applicationVersion: string;
    isLocal: boolean;
    isDefaultVersionOverridden: boolean;
    args: WRLParameter[];
    constructor(_appName?: string, _resourceName?: string, _url?: string, _anonymous?: boolean, _webResourceType?: string, _version?: number, _applicationVersion?: string, _args?: WRLParameter[]);
}
