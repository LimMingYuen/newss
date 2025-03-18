export interface IfxUfeLoggerInterface {
    debug(message: string, ...optionalParams: unknown[]): void;
    info(message: string, ...optionalParams: unknown[]): void;
    error(message: string, ...optionalParams: unknown[]): void;
    warn(message: string, ...optionalParams: unknown[]): void;
    instanceName: string | undefined;
}
