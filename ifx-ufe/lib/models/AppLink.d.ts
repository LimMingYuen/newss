export declare class AppLink {
    englishName: string;
    germanName: string;
    uri: URL;
    constructor(eName?: string, gName?: string, uri?: URL | null);
}
export declare class AppLinkGroup {
    links: AppLink[];
}
