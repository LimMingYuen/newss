import { Observable } from 'rxjs';
import { AppLinkGroup } from '../../models/AppLink';
import { AppDescription } from '../../models/AppDescription';
import { AvailableUfe } from './models/available-ufe';
import { WebResource } from '../web-resource-locator/models/web-resource';
import { RootInjectorGuard } from '../type-guards/root-injector.guard';
import * as i0 from "@angular/core";
/**
 * FrontEndDiscoveryService allows Shells to get a list of all possible uFEs that can be instantiated.  This service
 * is only for use by the shell component and allows for one-time registration of new uFEs with the back-end API to
 * make them available to all shells.
 */
export declare class FrontEndDiscoveryService extends RootInjectorGuard<FrontEndDiscoveryService> {
    private http;
    private readonly window;
    private wrlSvc;
    private shellStateStore;
    private auth;
    private env;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    getAppsAsync(): Promise<AvailableUfe>;
    getApps(): Observable<AvailableUfe>;
    getLinkGroup(groupName: string): Observable<AppLinkGroup>;
    createAppDescriptionFromWebResource(resource: WebResource): AppDescription;
    private modifyUrl;
    private loadShellApplicationsAsync;
    private getShellApplicationsAsync;
    /**
     * This method merges the app list (frontend.json) with the data of the web resource locator. This is requird that we can merge the location information for the shell with the wrl data.
     * This is to ensure backward compatibility.
     * @param resource the web resource locator data
     */
    updateWebResourceAppList(resource: WebResource): void;
    private getApplicationListWithAssignedUrlAsync;
    static ɵfac: i0.ɵɵFactoryDeclaration<FrontEndDiscoveryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FrontEndDiscoveryService>;
}
