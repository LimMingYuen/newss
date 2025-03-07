import { LocationTransparentUriServiceEndpoint } from '../models/location-transparent-uri-response';
import * as i0 from "@angular/core";
export declare class WrlLocationTransparentServiceUriResolverService {
    private httpClient;
    private loggerService;
    /**
     * Access the location transparent service of WRL and get the appropiate site and environment specific endpoint which should be used to retieve local application resources.
     * @param env - the infrastructure environment
     * @param site - the site code of the site which should be targeted
     * @returns the single WRL application resource URI
     */
    getLocationTransparentServiceEndpoint(env: string, site: string): Promise<LocationTransparentUriServiceEndpoint | undefined>;
    private getServiceResponse;
    private getEndpointUri;
    private getWrlLocationTransparentEndpoint;
    private handleError;
    static ɵfac: i0.ɵɵFactoryDeclaration<WrlLocationTransparentServiceUriResolverService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WrlLocationTransparentServiceUriResolverService>;
}
