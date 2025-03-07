import { NotificationModel } from '../../models/notification.model';
import * as i0 from "@angular/core";
export declare class NotificationComponent {
    private snackBarRef;
    notification: NotificationModel;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    close(): void;
    get hasMessage(): boolean;
    get hasDetails(): boolean;
    get icon(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationComponent, "ifx-notification", never, {}, {}, never, never, true, never>;
}
