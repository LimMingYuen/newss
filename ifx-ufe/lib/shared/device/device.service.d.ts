import * as i0 from "@angular/core";
export declare class DeviceService {
    private deviceType;
    sSODefault: boolean;
    constructor();
    isDesktop(): boolean;
    isMobile(): boolean;
    isTablet(): boolean;
    getDevice(): string;
    isSSODefault(): boolean;
    setSSODefault(useSSODefault: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DeviceService>;
}
