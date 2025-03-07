import { AppDescription } from '../../models/AppDescription';
import { IfxUfeLoggerService } from '../../shared/logging/ifx-ufe-logger.service';
import * as i0 from "@angular/core";
export declare class UfeDialogCallArgs {
    app: AppDescription;
    constructor(app: AppDescription);
}
export declare class UfeDialogComponent {
    data: UfeDialogCallArgs;
    logger: IfxUfeLoggerService;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    static ɵfac: i0.ɵɵFactoryDeclaration<UfeDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UfeDialogComponent, "ifx-ufe-dialog", never, {}, {}, never, never, true, never>;
}
