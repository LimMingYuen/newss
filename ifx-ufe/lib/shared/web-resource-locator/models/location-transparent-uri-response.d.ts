export interface LocationTransparentUriServiceEndpoint {
    anonymous: string;
    authenticated: string;
}
export interface LocationTransparentUriServices {
    version: string;
    endpoints: {
        [key: string]: LocationTransparentUriServiceEndpoint;
    };
    apl: {
        [key: string]: LocationTransparentUriAplHost;
    };
}
export interface LocationTransparentUriAplHost {
    host: string;
    version: string;
}
export interface LocationTransparentUriResponse {
    services: LocationTransparentUriServices;
}
