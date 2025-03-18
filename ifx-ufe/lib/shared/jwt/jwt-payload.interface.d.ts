export interface JwtPayloadInterface {
    iss?: string;
    sub?: string;
    aud?: string[] | string;
    exp?: number;
    nbf?: number;
    iat?: number;
    jti?: string;
}
export interface IfxJwtPayloadInterface extends JwtPayloadInterface {
    firstName?: string;
    lastName?: string;
    displayName?: string;
    department?: string;
    hostProfileName?: string;
    samAccountName?: string;
    subject?: string;
    client_id?: string;
}
