export declare class AuthToken {
    kerberos: any;
    credentials: any;
    idToken?: IdAuthToken;
}
export declare class IdAuthToken {
    kerberos: any;
    credentials: any;
}
export type AuthTokenType = 'kerberos' | 'credentials';
