import { WebResource } from './web-resource';
import { WrlApplicationInstanceWithVersions } from './wrl-application-instance';
export interface WrlState {
    environmentType: string | undefined;
    site: string | undefined;
    configurationPath: string | undefined;
    wrlServiceLocatorUri: string | undefined;
    initialized: boolean;
    areDefaultVersionsOverridden: boolean;
    authenticatedUserId: string | undefined;
    allowLocalResources: boolean;
    onlyLocalResources: boolean;
    localWebResources: WebResource[];
    applicationInstances: WrlApplicationInstanceWithVersions[];
    wrlAnonymousServiceEndpoint: URL | undefined;
    wrlAuthenticatedServiceEndpoint: URL | undefined;
    resourceSelectionStrategy: (resources: Array<WebResource>) => WebResource | undefined;
}
