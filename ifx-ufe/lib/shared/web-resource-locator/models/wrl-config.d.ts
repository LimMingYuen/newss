export type WRLConfig = {
    env: 'stag' | 'test' | 'prod';
    site: string;
    configPath?: string;
    wrlServiceLocatorUri?: string;
    allowLocalResources?: boolean;
    onlyLocalResources?: boolean;
};
