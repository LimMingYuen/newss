export type AuthenticatedUserDetails = {
    hostProfileName?: string;
    firstName: string | undefined;
    lastName: string | undefined;
    displayName: string | undefined;
    department: string | undefined;
    accountName: string | undefined;
    loginType: AuthenticationType;
};
export type AuthenticationType = 'kerberos' | 'credentials' | undefined;
