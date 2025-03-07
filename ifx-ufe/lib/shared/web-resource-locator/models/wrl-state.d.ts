import { WebResource } from './web-resource';
import { WrlApplicationInstanceWithVersions } from './wrl-application-instance';
export interface WrlState {
    environmentType: string | undefined;
    site: string | undefined;
    configurationPath: string | undefined;
    initialized: boolean;
    areDefaultVersionsOverridden: boolean;
    authenticatedUserId: string | undefined;
    allowMockResources: boolean;
    onlyMockResources: boolean;
    mockWebResources: WebResource[];
    applicationInstances: WrlApplicationInstanceWithVersions[];
    wrlAnonymousServiceEndpoint: URL | undefined;
    wrlAuthenticatedServiceEndpoint: URL | undefined;
    resourceSelectionStrategy: (resources: Array<WebResource>) => WebResource | undefined;
}
