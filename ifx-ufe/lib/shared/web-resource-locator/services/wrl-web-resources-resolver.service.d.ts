import { LocationTransparentUriServiceEndpoint } from '../models/location-transparent-uri-response';
import { WrlApplicationInstance, WrlApplicationInstanceWithVersions } from '../models/wrl-application-instance';
import * as i0 from "@angular/core";
export declare class WrlWebResourcesResolverService {
    private wrlTransparentUriResolver;
    private logger;
    private http;
    private auth;
    private wrlStateStore;
    private readonly LogEnvironmentOutput;
    constructor();
    resolveAnonymusWebResourcesForAppInstance(locationServiceEndpoint: URL, appInstance: WrlApplicationInstance): Promise<WrlApplicationInstanceWithVersions>;
    getAllUserAssignedWebResources(locationServiceEndpoint: URL): Promise<WrlApplicationInstanceWithVersions[]>;
    getWebResourcesForAppInstances(locationServiceEndpoint: URL, applicationInstances: WrlApplicationInstance[]): Promise<WrlApplicationInstanceWithVersions[]>;
    getWebResourcesServiceEndpoint(envType: string | undefined, site: string | undefined): Promise<LocationTransparentUriServiceEndpoint | undefined>;
    private getHttpHeader;
    /**
     * The WRL service does not include the call arguments name and resource name. Since we need them later in our logic we need to extend it here.
     * @param resource the WRL returned by the WRL service
     * @param applicationName
     * @param resourceName
     */
    private extendWebResoucesWithWrlApplicationInstance;
    static ɵfac: i0.ɵɵFactoryDeclaration<WrlWebResourcesResolverService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WrlWebResourcesResolverService>;
}
