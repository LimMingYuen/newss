import { DestroyRef } from '@angular/core';
import { WebResource } from '../models/web-resource';
import { WrlApplicationInstance, WrlApplicationInstanceWithVersions } from '../models/wrl-application-instance';
import { UfeWrlTargetLocationType } from '../models/wrl-command-argument';
import * as i0 from "@angular/core";
export declare class WebResourceService {
    private http;
    private comm;
    private envStore;
    private logger;
    private stateStore;
    private applicationInstanceManager;
    private resourceNotFoundHandler;
    destroyRef: DestroyRef;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    /**
     * Initializes the Web Resource Locator (WRL) service.
     *
     * @param env - The environment type.
     * @param site - The site name.
     * @param path - The configuration path (optional).
     * @param resourceSelectionStrategy - The resource selection strategy function (optional).
     * @param resourceNotFoundHandler - The resource not found handler function (optional).
     * @returns A promise that resolves when the initialization is complete.
     */
    initWrl(env: string, site: string, path: string | undefined, resourceSelectionStrategy?: ((resources: Array<WebResource>, currentActiveResourceVersion?: WebResource) => WebResource | undefined) | undefined, resourceNotFoundHandler?: ((applicationName: string, resourceName: string) => void) | undefined): Promise<void>;
    /**
     * Launches a web resource as a shell.
     *
     * @param sender - The sender of the request.
     * @param applicationName - The name of the application.
     * @param resourceName - The name of the resource.
     * @param args - The arguments for the web resource.
     * @param isAnonymous - Indicates whether the user is anonymous.
     * @param target - Indicates whether the user is anonymous.
     * @returns A promise that resolves when the web resource is launched.
     */
    launchWebResourceAsShell(sender: string, applicationName: string, resourceName: string, args: Object, isAnonymous: boolean, target?: UfeWrlTargetLocationType | undefined): Promise<void>;
    /**
     * Finds a web resource based on the provided application name, resource name, and anonymous flag.
     *
     * @param applicationName - The name of the application.
     * @param resourceName - The name of the resource.
     * @param isAnonymous - A flag indicating whether the resource can be accessed anonymously.
     * @returns A promise that resolves to the found web resource.
     * @throws An error if the resource is not found.
     */
    findWebResource(applicationName: string, resourceName: string, isAnonymous: boolean): Promise<WebResource>;
    findWebResourcesAsync(applicationInstances: WrlApplicationInstance[]): Promise<WebResource[]>;
    /**
     * Tries to load the complete data from from WRL mock JSON file and filters the data to the requested application and resource.
     * @param applicationName
     * @param resourceName
     * @returns empty response if no file is defined or the JSON content if a path is defined in the config
     */
    getResourceUrisFromWrlMock(applicationName: string, resourceName: string): WebResource[];
    loadWrlMockResources(configurationPath: string | undefined): Promise<void>;
    /**
     * Opens a web resource.
     *
     * @param sender - The sender of the web resource.
     * @param resource - The web resource to open.
     * @param args - Additional arguments for opening the web resource.
     */
    openWebResource(sender: string, resource: WebResource, args: Object, targetLocation?: UfeWrlTargetLocationType | undefined): void;
    getActiveWebResourceVersion(instance: WrlApplicationInstanceWithVersions): WebResource | undefined;
    private findActiveResourcesAsync;
    isInIframe(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<WebResourceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WebResourceService>;
}
