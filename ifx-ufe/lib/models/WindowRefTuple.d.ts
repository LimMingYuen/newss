import { ExcecutionEnvironmentType } from "./ufe-environment.interface";
export declare class WindowRefTuple {
    name: string;
    ref: Window | null;
    url: string;
    isLoaded: boolean;
    isActive: boolean;
    targetEnv: ExcecutionEnvironmentType | undefined;
    constructor(nm: string, reference: Window, url?: string, targetEnv?: ExcecutionEnvironmentType | undefined);
}
