import { IfxUfeLoggerService } from '../logging/ifx-ufe-logger.service';
export declare class RootInjectorGuard<T> {
    private parent;
    protected logger: IfxUfeLoggerService;
    constructor(typeName: string);
}
