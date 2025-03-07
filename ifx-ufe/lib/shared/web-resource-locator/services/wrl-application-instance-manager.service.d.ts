import { WrlApplicationInstance, WrlApplicationInstanceWithVersions } from '../models/wrl-application-instance';
import * as i0 from "@angular/core";
export declare class WrlApplicationInstanceManagerService {
    private wrlStateStore;
    private envStore;
    private logger;
    private auth;
    private wlrWebResourcesResolver;
    private readonly LogEnvironmentOutput;
    constructor();
    private setupSubscriberWrlInitializedSubscription;
    private setupSubscriberDataSubscription;
    private shouldRegisterApplicationInstances;
    private tryRegisterApplicationInstances;
    private setWrlServiceEndointAsync;
    private registerApplicationInstancesAsync;
    private setWebResourcesForAppInstancesAsync;
    findVersionsForApplicationInstancesAsync(instances: WrlApplicationInstance[], isAnonymous: boolean): Promise<WrlApplicationInstanceWithVersions[]>;
    private resolveWebResourcesForAppInstancesAsync;
    private resolveAnonymousWebResources;
    private resolveAuthenticatedWebResources;
    private getExistingInstances;
    private getNotExistingInstances;
    private isInstanceExisting;
    private getUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<WrlApplicationInstanceManagerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WrlApplicationInstanceManagerService>;
}
