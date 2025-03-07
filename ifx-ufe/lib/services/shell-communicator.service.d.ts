import { AppDescription } from '../models/AppDescription';
import { UfeCommand } from '../models/UfeCommand';
import { RootInjectorGuard } from '../shared/type-guards/root-injector.guard';
import { UfeWrlTargetLocationType } from '../shared/web-resource-locator/models/wrl-command-argument';
import * as i0 from "@angular/core";
export declare class ShellCommunicatorService extends RootInjectorGuard<ShellCommunicatorService> {
    private readonly window;
    private envStore;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    /**
     * sendShellMessage allows the uFE to send messages to the embedding shell
     * @param message UfeCommand
     */
    sendShellMessage(message: UfeCommand, targetWindow?: 'PARENT' | 'SHELL' | 'SELF' | 'DEFAULT' | 'WINDOW_OPENER'): void;
    /**
     * sendChildMessage allows the shell to send UfeCommands to this uFE
     * @param message UfeCommand
     * @param app AppDescription identifying the uFE to send the command to
     */
    sendChildMessage(message: UfeCommand, app: AppDescription): void;
    /**
     * sendNotification sends a notification model to be displayed in a popup within the shell
     * @param notification NotificationModel: The notification model to be displayed in the popup
     */
    private sendNotification;
    /**
     * sendInfoNotification is a convenience method to display a general information notice for this uFE.
     * @param title String: The notification title to be displayed to the user
     * @param message String: The optional notification message to be displayed to the user
     * @param details String[]: The optional notification detail info list to be displayed to the user
     */
    sendInfoNotification(title: string, message?: string, details?: string[]): void;
    /**
     * sendErrorNotification is a convenience method to display a general information notice for this uFE.
     * @param title String: The notification title to be displayed to the user
     * @param message String: The optional notification message to be displayed to the user
     * @param details String[]: The optional notification detail info list to be displayed to the user
     */
    sendErrorNotification(title: string, message?: string, details?: string[]): void;
    /**
     * sendSuccessNotification is a convenience method to display a general information notice for this uFE.
     * @param title String: The notification title to be displayed to the user
     * @param message String: The optional notification message to be displayed to the user
     * @param details String[]: The optional notification detail info list to be displayed to the user
     */
    sendSuccessNotification(title: string, message?: string, details?: string[]): void;
    /**
     * sendWarningNotification is a convenience method to display a general information notice for this uFE.
     * @param title String: The notification title to be displayed to the user
     * @param message String: The optional notification message to be displayed to the user
     * @param details String[]: The optional notification detail info list to be displayed to the user
     */
    sendWarningNotification(title: string, message?: string, details?: string[]): void;
    /**
     * closeOpenNotification sends a shell message to close current opened notifications
     */
    closeOpenNotification(): void;
    /**
     * openUfe sends a request to the shell to open this uFE
     * @param ufe string: The app name as registered with and provided by the Front End Discovery Service
     */
    openUfe(ufe: string): void;
    /**
     * sendPeerMessage sends this message to this peer level uFE
     * @param ufe string: The app name of the app to send the message to as registered with and provided by the
     *                    Front End Discovery Service
     * @param message any: The message or data to be passed to the receiving uFE
     */
    sendPeerMessage(ufe: string, message: any): void;
    /**
     * sendPeerMessage sends this message to this peer level uFE or opens the web resource in a new tab in case it is not an uFE.
     * @param applicationName string: The app name of the app to send the message to as registered with and provided by the
     *                    Front End Discovery Service
     * @param webResourceName string: the name of the actual web resource of the application.
     * @param args Map<string, any> | any: The data to be passed to the receiving uFE or the arguments for opening a web resource. Note if you want to use a web resource other then uFE you need to pass the map.
     * @param isAnonymous boolean: defines if the Web Resource Locator should be approached anonymously or with JWT to get personalized or only default results.
     * @param targetLocation UfeWrlTargetLocationType: defines the target location where the web resource should be opened.
     */
    sendPeerMessageWRL(applicationName: string, webResourceName: string, args: Map<string, any> | any, isAnonymous?: boolean, targetLocation?: UfeWrlTargetLocationType | undefined): void;
    closeUfeWrl(applicationName: string, webResourceName: string): void;
    /**
     * closeUfeDialog sends a shell message to close current opened ufe dialog
     */
    closeUfeDialog(): void;
    /**
     * checkNoNameError ensures this.appName has been set.  This check should be called before any message is sent via
     * any of the convenience communication methods
     * @private
     */
    private checkNoNameError;
    private get appName();
    static ɵfac: i0.ɵɵFactoryDeclaration<ShellCommunicatorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ShellCommunicatorService>;
}
