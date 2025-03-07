import { WrlState } from '../models/wrl-state';
import { WebResource } from '../models/web-resource';
import { WrlApplicationInstanceWithVersions } from '../models/wrl-application-instance';
import { UfeEnvironmentStore } from '../../../stores/ufe-environment.store';
import * as i0 from "@angular/core";
export declare class WrlStateStore {
    private _state;
    envStore: UfeEnvironmentStore;
    environmentType: import("@angular/core").Signal<string | undefined>;
    site: import("@angular/core").Signal<string | undefined>;
    configurationPath: import("@angular/core").Signal<string | undefined>;
    initialized: import("@angular/core").Signal<boolean>;
    allowMockResources: import("@angular/core").Signal<boolean>;
    onlyMockResources: import("@angular/core").Signal<boolean>;
    mockWebResources: import("@angular/core").Signal<WebResource[]>;
    applicationInstances: import("@angular/core").Signal<WrlApplicationInstanceWithVersions[]>;
    areDefaultVersionsOverridden: import("@angular/core").Signal<boolean>;
    resourceSelectionStrategy: import("@angular/core").Signal<(resources: Array<WebResource>) => WebResource | undefined>;
    authenticatedUserId: import("@angular/core").Signal<string | undefined>;
    wrlAnonymousServiceEndpoint: import("@angular/core").Signal<URL | undefined>;
    wrlAuthenticatedServiceEndpoint: import("@angular/core").Signal<URL | undefined>;
    isServiceEndpointUpdateNeeded: import("@angular/core").Signal<boolean>;
    get authenticatedUserId$(): import("rxjs").Observable<string | undefined>;
    private storageService;
    /**
     * Sets the environment state.
     *
     * @param envState - The environment state to set.
     */
    setEnvironmentState(envState: WrlState): void;
    showWrlVersionSelection: import("@angular/core").Signal<boolean>;
    /**
     * Sets the mock web resources for the web resource locator state.
     *
     * @param mockWebResources - The array of mock web resources to set.
     */
    setMockResources(mockWebResources: WebResource[]): void;
    /**
     * Adds or replaces a web resource group in the state store.
     * If a group with the same app name and resource name already exists, it updates the versions of the existing group.
     * Otherwise, it adds the new group to the state.
     *
     * @param webResourceGroup - The web resource group to add or replace.
     */
    addOrReplaceApplicationInstance(applicationInstance: WrlApplicationInstanceWithVersions): void;
    addOrReplaceApplicationInstances(applicationInstances: WrlApplicationInstanceWithVersions[]): void;
    setApplicationInstances(applicationInstances: WrlApplicationInstanceWithVersions[]): void;
    setAndMergeApplicationInstanceVersions(applicationInstances: WrlApplicationInstanceWithVersions[]): void;
    /**
     * Sets the resource selection strategy for the wrl state store.
     *
     * @param resourceSelectionStrategy - The function that determines the resource selection strategy.
     * @returns void
     */
    setResourceSelectionStrategy(resourceSelectionStrategy: (resources: Array<WebResource>, currentActiveResourceVersion?: WebResource) => WebResource | undefined): void;
    /**
     * Sets the status of overriding default versions.
     *
     * @param {boolean} status - The status of overriding default versions.
     */
    setDefaultVersionsOverridden(status: boolean): void;
    setInitialized(initialized: boolean): void;
    /**
     * Default resource selection strategy function.
     *
     * @param resources - An array of WebResource objects.
     * @returns The selected WebResource object based on the default selection strategy.
     */
    defaultResourceSelectionStrategyFunc(resources: Array<WebResource>): WebResource | undefined;
    getApplicationInstance(appName: string, resourceName: string): WrlApplicationInstanceWithVersions | undefined;
    setAuthenticatedUserId(authenticatedUserId: string): void;
    setWrlAuthenticatedServiceEndpoint(wrlAuthenticatedServiceEndpoint: URL): void;
    setWrlAnonymousServiceEndpoint(wrlAnonymousServiceEndpoint: URL): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WrlStateStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WrlStateStore>;
}
