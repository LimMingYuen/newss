import { IfxUfeLoggerInterface } from './ifx-ufe-logger.interface';
import * as i0 from "@angular/core";
export declare class IfxUfeLoggerService {
    private loggerProviders;
    private consoleLogger;
    constructor();
    setInstanceName(instanceName: string): void;
    debug(message: string, ...optionalParams: unknown[]): void;
    info(message: string, ...optionalParams: unknown[]): void;
    warn(message: string, ...optionalParams: unknown[]): void;
    error(message: string, ...optionalParams: unknown[]): void;
    registerLoggerProvider(provider: IfxUfeLoggerInterface): void;
    unregisterLoggerProvider(provider: IfxUfeLoggerInterface): void;
    private get getLogLevel();
    static ɵfac: i0.ɵɵFactoryDeclaration<IfxUfeLoggerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IfxUfeLoggerService>;
}
