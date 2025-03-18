export interface UfeEnvironment {
    ufeName: string | undefined;
    ufeResourceName: string | undefined;
    executionEnvironment: ExcecutionEnvironmentType;
    currentLanguage: LanguageType;
    linkGroup: string | undefined;
    isSilentRefreshActive: boolean;
    showLanguageControls: boolean | undefined;
    showHeader: boolean | undefined;
    isShellApp: boolean;
    instanceId: string;
    parentInstanceId: string | undefined | null;
}
export type LanguageType = 'EN' | 'DE';
export type ExcecutionEnvironmentType = 'SHELL' | 'SELF' | 'EMBEDDED' | 'NATIVE_SHELL' | undefined;
