import { IfxUfeLoggerInterface } from './ifx-ufe-logger.interface';
import * as i0 from "@angular/core";
export declare class IfxUfeConsoleLogger implements IfxUfeLoggerInterface {
    private _instanceName;
    constructor();
    debug(message: string, ...optionalParams: unknown[]): void;
    info(message: string, ...optionalParams: unknown[]): void;
    error(message: string, ...optionalParams: unknown[]): void;
    warn(message: string, ...optionalParams: unknown[]): void;
    private getMessageWithIsoDate;
    set instanceName(value: string);
    static ɵfac: i0.ɵɵFactoryDeclaration<IfxUfeConsoleLogger, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IfxUfeConsoleLogger>;
}
