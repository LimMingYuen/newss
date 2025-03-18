import { NotificationModel } from '../models/notification.model';
import * as i0 from "@angular/core";
export declare class CommandHandlerNotificationService {
    private snackbar;
    readonly defaultDuration = 5000;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    showNotification(data: NotificationModel): void;
    hideNotification(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommandHandlerNotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CommandHandlerNotificationService>;
}
