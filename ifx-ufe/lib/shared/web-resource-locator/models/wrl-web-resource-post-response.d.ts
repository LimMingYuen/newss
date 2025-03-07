import { WebResource } from './web-resource';
import { WrlApplicationInstanceWithVersions } from './wrl-application-instance';
/**
 * WebResource contains the data of web resource locator API
 */
export declare class WrlWebResourcesPostResponse extends WrlApplicationInstanceWithVersions {
    constructor(_appName?: string, _resourceName?: string, _versions?: WebResource[]);
}
