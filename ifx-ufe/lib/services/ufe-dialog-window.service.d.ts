import { ComponentType } from '@angular/cdk/portal';
import { MatDialogConfig } from '@angular/material/dialog';
import { IfxDialogRef } from '../models/ifxDialogRef';
import * as i0 from "@angular/core";
export declare class UfeDialogWindowService {
    private componentFactoryResolver;
    private applicationRef;
    private injector;
    private slCapture;
    private comm;
    private mDialog;
    private envStore;
    private height;
    private width;
    private subscriptions;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    /**
     * openDialog determines which execution environment this instance is running in (embedded, shell, or stand alone)
     * and opens the appropriate dialog box for the environment whether a shell dialog or an external window.
     */
    openDialog(component: ComponentType<any>, config?: MatDialogConfig): IfxDialogRef;
    /**
     * createExternal() generates the external window the angular content will be projected into
     */
    private createExternal;
    /**
     * createShellDialog sends a request to the shell to allow a uFE dialog box, then renders the content contained
     * within the template outlet
     * @private
     */
    private createShellDialog;
    /**
     * getStyleSheets grabs all the style sheets, links and style blocks in the parent window for injection into an
     * external popup window
     * @param externalWindow Window reference: the window to inject the stylesheets and links into
     * @private
     */
    private getStyleSheets;
    /**
     * attachCloseHandlerToExternal ensures the required cleanup activities are performed when an external dialog box is
     * closed, even if it is not closed through the dialog reference (i.e. closed through window controls).
     * @param win Window: a reference to the window to attach the handler to
     * @private
     */
    private attachCloseHandlerToExternal;
    /**
     * sendCloseDialogMessage sends a CLOSE_DIALOG UfeCommand to the shell
     * @private
     */
    private sendCloseDialogMessage;
    private get ufeName();
    static ɵfac: i0.ɵɵFactoryDeclaration<UfeDialogWindowService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UfeDialogWindowService>;
}
