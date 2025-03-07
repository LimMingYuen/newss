import * as i0 from "@angular/core";
export declare class UrlCaptureService {
    private logger;
    private envStore;
    /**
     * setBaseRoute stores a route that will be returned from getUrl() if no other route has been set.  Unlike routes
     * set by storeUrl, the base route is retained after use.
     * @param url
     */
    setBaseRoute(url: string): void;
    /**
     * storeUrl stores this URL for later reference by the application.  After this route has been retrieved via getUrl,
     * it is erased and this service will return the base route on future calls to getUrl if no new route is passed to
     * this method
     * @param url
     */
    storeUrl(url: string): void;
    /**
     * getUrl returns the previously stored URL.  If a route was passed to this service via storeUrl and not yet retrieved,
     * this is the route that will be returned.  Otherwise, the base route passed to setBaseRoute is returned.
     */
    getUrl(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<UrlCaptureService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UrlCaptureService>;
}
