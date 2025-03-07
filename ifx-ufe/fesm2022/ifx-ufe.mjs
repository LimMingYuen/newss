import * as i0 from '@angular/core';
import { inject, Component, Injectable, signal, computed, effect, DestroyRef, Pipe, ElementRef, Renderer2, Directive, Input, HostListener, input, output, NgModule, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import * as i3 from '@angular/material/icon';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import * as i1$1 from 'angular-auth-oidc-client';
import { OidcSecurityService, LogLevel, StsConfigHttpLoader, AuthModule, StsConfigLoader } from 'angular-auth-oidc-client';
import { BehaviorSubject, Subscription, tap, interval, take, skip, Subject, firstValueFrom, distinctUntilChanged, of, catchError, timeout, filter, takeUntil, switchMap, map } from 'rxjs';
import { toObservable, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import * as i4$1 from '@angular/router';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import * as i1 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialog, MatDialogModule, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import * as i2 from '@angular/material/button';
import { MatIconButton, MatButtonModule } from '@angular/material/button';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpHeaders, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule, DomPortalOutlet, ComponentPortal } from '@angular/cdk/portal';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as i4 from '@angular/material/table';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import * as i6 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i5 from '@angular/material/form-field';
import * as i7 from '@angular/material/core';
import { MatMenuTrigger, MatMenu, MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as i1$2 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { IfxClaimsService } from 'angular-isecure-authorization';
import * as i3$1 from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

/**
 * UfeCommand provides a structured method for communicating between the shell and the enclosed uFEs.
 */
class UfeCommand {
    constructor(snd = '', cmd = '', par = []) {
        this.params = [];
        this.sender = snd;
        this.command = cmd;
        this.params = par;
    }
}

var NotificationType;
(function (NotificationType) {
    NotificationType["Info"] = "info";
    NotificationType["Success"] = "success";
    NotificationType["Error"] = "error";
    NotificationType["Warning"] = "warning";
})(NotificationType || (NotificationType = {}));

class NotificationComponent {
    constructor() {
        this.snackBarRef = inject(MatSnackBarRef);
        this.notification = inject(MAT_SNACK_BAR_DATA);
    }
    close() {
        this.snackBarRef.dismiss();
    }
    get hasMessage() {
        const message = this.notification.message;
        return !!message && !!message.length;
    }
    get hasDetails() {
        const details = this.notification.details;
        return !!details && !!details.length;
    }
    get icon() {
        switch (this.notification.notificationType) {
            default:
            case NotificationType.Info:
                return 'info_outline';
            case NotificationType.Success:
                return 'check_circle_outline';
            case NotificationType.Warning:
                return 'error_outline';
            case NotificationType.Error:
                return 'warning_amber';
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: NotificationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: NotificationComponent, isStandalone: true, selector: "ifx-notification", ngImport: i0, template: "<div class=\"notification\">\r\n  <div class=\"icon\">\r\n    <mat-icon>{{ icon }}</mat-icon>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div class=\"title\">{{ notification.title }}</div>\r\n    @if (hasMessage) {\r\n      <div class=\"message\">\r\n        {{ notification.message }}\r\n      </div>\r\n    }\r\n    @if (hasDetails) {\r\n      <div class=\"details\">\r\n        <ul>\r\n          @for (detail of notification.details; track detail) {\r\n            <li>{{ detail }}</li>\r\n          }\r\n        </ul>\r\n      </div>\r\n    }\r\n  </div>\r\n  <div class=\"close\">\r\n    <mat-icon (click)=\"close()\">close</mat-icon>\r\n  </div>\r\n</div>\r\n", styles: ["::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface{background-color:transparent;padding:0}::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label{padding:0}::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification{border-width:2px;border-style:solid;background-color:#fff;color:#1d1d1d;display:flex}::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .icon{width:24px;padding:0 24px;display:flex;justify-content:center;align-items:center}::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .icon .mat-icon{min-width:24px}::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .content{padding:12px 0 12px 12px;display:flex;flex-direction:column;justify-content:center;overflow:hidden}::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .content .title{font-weight:700}::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .content .details>ul{margin-block-start:6px;margin-block-end:0}::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .close{height:24px;padding:12px;margin-left:auto}::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .close mat-icon{cursor:pointer}::ng-deep .mat-mdc-snack-bar-container.notification-error div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification{border-color:#cd002f}::ng-deep .mat-mdc-snack-bar-container.notification-error div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .icon{background-color:#cd002f;color:#fff}::ng-deep .mat-mdc-snack-bar-container.notification-info div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification{border-color:#378375}::ng-deep .mat-mdc-snack-bar-container.notification-info div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .icon{background-color:#378375;color:#fff}::ng-deep .mat-mdc-snack-bar-container.notification-warning div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification{border-color:#f07f3c}::ng-deep .mat-mdc-snack-bar-container.notification-warning div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .icon{background-color:#f07f3c;color:#1d1d1d}::ng-deep .mat-mdc-snack-bar-container.notification-success div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification{border-color:#aec067}::ng-deep .mat-mdc-snack-bar-container.notification-success div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .icon{background-color:#aec067;color:#1d1d1d}\n"], dependencies: [{ kind: "component", type: MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: NotificationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ifx-notification', imports: [MatIcon], template: "<div class=\"notification\">\r\n  <div class=\"icon\">\r\n    <mat-icon>{{ icon }}</mat-icon>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div class=\"title\">{{ notification.title }}</div>\r\n    @if (hasMessage) {\r\n      <div class=\"message\">\r\n        {{ notification.message }}\r\n      </div>\r\n    }\r\n    @if (hasDetails) {\r\n      <div class=\"details\">\r\n        <ul>\r\n          @for (detail of notification.details; track detail) {\r\n            <li>{{ detail }}</li>\r\n          }\r\n        </ul>\r\n      </div>\r\n    }\r\n  </div>\r\n  <div class=\"close\">\r\n    <mat-icon (click)=\"close()\">close</mat-icon>\r\n  </div>\r\n</div>\r\n", styles: ["::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface{background-color:transparent;padding:0}::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label{padding:0}::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification{border-width:2px;border-style:solid;background-color:#fff;color:#1d1d1d;display:flex}::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .icon{width:24px;padding:0 24px;display:flex;justify-content:center;align-items:center}::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .icon .mat-icon{min-width:24px}::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .content{padding:12px 0 12px 12px;display:flex;flex-direction:column;justify-content:center;overflow:hidden}::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .content .title{font-weight:700}::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .content .details>ul{margin-block-start:6px;margin-block-end:0}::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .close{height:24px;padding:12px;margin-left:auto}::ng-deep .mat-mdc-snack-bar-container div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .close mat-icon{cursor:pointer}::ng-deep .mat-mdc-snack-bar-container.notification-error div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification{border-color:#cd002f}::ng-deep .mat-mdc-snack-bar-container.notification-error div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .icon{background-color:#cd002f;color:#fff}::ng-deep .mat-mdc-snack-bar-container.notification-info div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification{border-color:#378375}::ng-deep .mat-mdc-snack-bar-container.notification-info div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .icon{background-color:#378375;color:#fff}::ng-deep .mat-mdc-snack-bar-container.notification-warning div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification{border-color:#f07f3c}::ng-deep .mat-mdc-snack-bar-container.notification-warning div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .icon{background-color:#f07f3c;color:#1d1d1d}::ng-deep .mat-mdc-snack-bar-container.notification-success div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification{border-color:#aec067}::ng-deep .mat-mdc-snack-bar-container.notification-success div.mdc-snackbar__surface div.mat-mdc-snack-bar-label.mdc-snackbar__label ifx-notification .notification .icon{background-color:#aec067;color:#1d1d1d}\n"] }]
        }], ctorParameters: () => [] });

class CommandHandlerNotificationService {
    constructor() {
        this.snackbar = inject(MatSnackBar);
        this.defaultDuration = 5000;
    }
    showNotification(data) {
        const isErrorType = data.notificationType === NotificationType.Error;
        const duration = isErrorType ? undefined : this.defaultDuration;
        const panelClass = `notification-${data.notificationType}`;
        this.snackbar.openFromComponent(NotificationComponent, {
            data,
            duration,
            panelClass,
            verticalPosition: 'top',
        });
    }
    hideNotification() {
        this.snackbar.dismiss();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CommandHandlerNotificationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CommandHandlerNotificationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CommandHandlerNotificationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class AuthToken {
    constructor() {
        this.kerberos = null;
        this.credentials = null;
        this.idToken = undefined;
    }
}
class IdAuthToken {
    constructor() {
        this.kerberos = null;
        this.credentials = null;
    }
}

class AuthStatus {
    constructor(kerberos = false, credentials = false) {
        this.kerberos = kerberos;
        this.credentials = credentials;
    }
}

class SubscriberData {
    constructor() {
        this.kerberos = new SubscriberInfo();
        this.credentials = new SubscriberInfo();
    }
}
class SubscriberInfo {
    constructor() {
        this.subscriberName = '';
        this.loginStatus = false;
        this.userName = '';
        this.clientId = '';
        this.hostProfileName = undefined; // only avaiblable for FAB PCs and equals to undefined otherwise
    }
}

class InvalidTokenError extends Error {
}

/**
 * this class is used to convert the base64 encoded string of a JWT to a JSON object
 * the code is takken from
 * https://github.com/auth0/jwt-decode/blob/v4.0.0/lib/index.ts
 */
class JwtDecoder {
    static b64DecodeUnicode(str) {
        return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
            let code = p.charCodeAt(0).toString(16).toUpperCase();
            if (code.length < 2) {
                code = '0' + code;
            }
            return '%' + code;
        }));
    }
    static base64UrlDecode(str) {
        let output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw new Error('base64 string is not of the correct length');
        }
        try {
            return JwtDecoder.b64DecodeUnicode(output);
        }
        catch (err) {
            return atob(output);
        }
    }
    static decode(token, options) {
        if (typeof token !== 'string') {
            throw new InvalidTokenError('Invalid token specified: must be a string');
        }
        options ||= {};
        const pos = options.header === true ? 0 : 1;
        const part = token.split('.')[pos];
        if (typeof part !== 'string') {
            throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
        }
        let decoded;
        try {
            decoded = JwtDecoder.base64UrlDecode(part);
        }
        catch (e) {
            throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
        }
        try {
            return JSON.parse(decoded);
        }
        catch (e) {
            throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
        }
    }
    static decodeSafe(token, options, logErrors = false) {
        let parsedToken = undefined;
        if (token == undefined) {
            return parsedToken;
        }
        try {
            parsedToken = JwtDecoder.decode(token, options);
        }
        catch (error) {
            if (logErrors) {
                console.warn('decoding of JWT failed with an error', error);
            }
        }
        return parsedToken;
    }
}

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    validUfeHostnamePattern: '^(localhost|.*.infineon.com)$',
    storageVariableNamePrefix: 'ifx-ufe-',
    useFrontEndJson: window['useFrontEndJson'],
    logging: window['logging'],
};
const UFE_ENVIRONMENT = { ...environment };
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

var IfxUfeLogLevel;
(function (IfxUfeLogLevel) {
    IfxUfeLogLevel[IfxUfeLogLevel["DEBUG"] = 0] = "DEBUG";
    IfxUfeLogLevel[IfxUfeLogLevel["INFO"] = 1] = "INFO";
    IfxUfeLogLevel[IfxUfeLogLevel["WARN"] = 2] = "WARN";
    IfxUfeLogLevel[IfxUfeLogLevel["ERROR"] = 3] = "ERROR";
    IfxUfeLogLevel[IfxUfeLogLevel["OFF"] = 4] = "OFF";
})(IfxUfeLogLevel || (IfxUfeLogLevel = {}));

class IfxUfeConsoleLogger {
    constructor() {
        this._instanceName = '';
    }
    debug(message, ...optionalParams) {
        optionalParams.length === 0
            ? console.debug('[DEBUG] ' + this.getMessageWithIsoDate(message))
            : console.debug('[DEBUG] ' + this.getMessageWithIsoDate(message), ...optionalParams);
    }
    info(message, ...optionalParams) {
        optionalParams.length === 0
            ? console.info('[INFO] ' + this.getMessageWithIsoDate(message))
            : console.info('[INFO] ' + this.getMessageWithIsoDate(message), ...optionalParams);
    }
    error(message, ...optionalParams) {
        optionalParams.length === 0
            ? console.error(this.getMessageWithIsoDate(message))
            : console.error(this.getMessageWithIsoDate(message), ...optionalParams);
    }
    warn(message, ...optionalParams) {
        optionalParams.length === 0
            ? console.warn(this.getMessageWithIsoDate(message))
            : console.warn(this.getMessageWithIsoDate(message), ...optionalParams);
    }
    getMessageWithIsoDate(message) {
        return `[${this._instanceName} - ${new Date().toISOString()}] ${message}`;
    }
    set instanceName(value) {
        this._instanceName = value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeConsoleLogger, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeConsoleLogger, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeConsoleLogger, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class IfxUfeLoggerService {
    constructor() {
        this.loggerProviders = [];
        this.consoleLogger = new IfxUfeConsoleLogger();
        this.registerLoggerProvider(this.consoleLogger);
    }
    setInstanceName(instanceName) {
        this.loggerProviders.forEach(provider => (provider.instanceName = instanceName));
        this.info(`current log level is ${this.getLogLevel}`);
    }
    debug(message, ...optionalParams) {
        if (this.getLogLevel > IfxUfeLogLevel.DEBUG)
            return;
        this.loggerProviders.forEach(provider => provider.debug(message, ...optionalParams));
    }
    info(message, ...optionalParams) {
        if (this.getLogLevel > IfxUfeLogLevel.INFO)
            return;
        this.loggerProviders.forEach(provider => provider.info(message, ...optionalParams));
    }
    warn(message, ...optionalParams) {
        if (this.getLogLevel > IfxUfeLogLevel.WARN)
            return;
        this.loggerProviders.forEach(provider => provider.warn(message, ...optionalParams));
    }
    error(message, ...optionalParams) {
        if (this.getLogLevel > IfxUfeLogLevel.ERROR)
            return;
        this.loggerProviders.forEach(provider => provider.error(message, ...optionalParams));
    }
    registerLoggerProvider(provider) {
        this.loggerProviders.push(provider);
    }
    unregisterLoggerProvider(provider) {
        const index = this.loggerProviders.indexOf(provider);
        if (index >= 0) {
            this.loggerProviders.splice(index, 1);
        }
    }
    get getLogLevel() {
        if (environment.logging == null) {
            return IfxUfeLogLevel.INFO;
        }
        return environment.logging.logLevel ?? IfxUfeLogLevel.OFF;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeLoggerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeLoggerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeLoggerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class RootInjectorGuard {
    constructor(typeName) {
        this.parent = inject(this.constructor, { optional: true, skipSelf: true });
        this.logger = inject(IfxUfeLoggerService);
        this.logger.debug(`[${typeName}] [${window.location.href}]: initialized`);
        if (this.parent) {
            throw Error(`[${typeName}]: trying to create multiple instances,
     but this service should be a singleton.`);
        }
    }
}

function isInIframe() {
    return window.self !== window.top;
}
function isSilentRefreshInProcess() {
    const currentUrl = new URL(window.location.href);
    const refferenceUrl = document.referrer ? new URL(document.referrer) : new URL('https://abc.com');
    const isSilentRefreshInUrl = currentUrl.pathname.toUpperCase().indexOf('/SILENTREFRESH') > -1 ||
        refferenceUrl.pathname.toUpperCase().indexOf('/SILENTREFRESH') > -1;
    const isOldTokenAvailable = !!window.sessionStorage.getItem(environment.storageVariableNamePrefix + 'oldToken');
    return isOldTokenAvailable || isSilentRefreshInUrl;
}
function generateUniqueId() {
    return 'ufe-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
}
/**
 * getQueryParams retrieves the query string parameters directly from the window object rather than the Angular
 * Router.
 */
function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}
function isCodeFlowResponse() {
    return !!getQueryParam('code');
}

class UfeEnvironmentStore extends RootInjectorGuard {
    constructor() {
        super('UfeEnvironmentStore');
        // initial state
        this.state = signal({
            ufeName: '',
            ufeResourceName: undefined,
            executionEnvironment: undefined,
            currentLanguage: 'EN',
            linkGroup: '',
            isSilentRefreshActive: false,
            showLanguageControls: undefined,
            isShellApp: false,
            showHeader: undefined,
            instanceId: generateUniqueId(),
            parentInstanceId: undefined,
        });
        // selectors
        this.ufeName = computed(() => this.state().ufeName);
        this.ufeResourceName = computed(() => this.state().ufeResourceName);
        this.ufeInstanceName = computed(() => (this.state().ufeResourceName ?? '') !== ''
            ? this.state().ufeName + '_' + this.state().ufeResourceName
            : this.state().ufeName);
        this.executionEnvironment = computed(() => this.state().executionEnvironment);
        this.currentLanguage = computed(() => this.state().currentLanguage);
        this.linkGroup = computed(() => this.state().linkGroup);
        this.showLanguageControls = computed(() => this.state().showLanguageControls);
        this.isNotSelfHosted = computed(() => this.state().executionEnvironment !== 'SELF' && this.state().executionEnvironment != null);
        this.isSelfHosted = computed(() => this.state().executionEnvironment === 'SELF');
        this.isShellApp = computed(() => this.state().isShellApp);
        this.isEnvironmentInitialized = computed(() => this.state().executionEnvironment !== undefined);
        this.isSilentRefreshEnabled = computed(() => this.state().isSilentRefreshActive && this.isSelfHosted());
        this.showHeader = computed(() => this.state().showHeader || (this.state().showHeader === undefined && this.isSelfHosted()));
        this.activeInstanceId = computed(() => this.state().instanceId);
        this.parentInstanceId = computed(() => this.state().parentInstanceId);
        this.checkForExistingEnvironmentStateValues();
        this.logger?.setInstanceName(this.ufeInstanceName() ?? '');
        const storedLanguage = window.localStorage.getItem(environment.storageVariableNamePrefix + 'currentLanguage');
        if (storedLanguage != null) {
            this.setCurrentLanguage(storedLanguage);
        }
        const storedShowHeader = window.sessionStorage.getItem(environment.storageVariableNamePrefix + 'showHeader');
        if (storedShowHeader != null) {
            this.setShowHeader(storedShowHeader === 'true');
        }
        effect(() => {
            this.logger.setInstanceName(this.ufeInstanceName() ?? '');
        });
    }
    // Reducers
    /**
     * setUfeName update the ufe name state
     * @param name application name
     */
    setUfeName(name) {
        this.state.update(state => ({ ...state, ufeName: name }));
    }
    /**
     * setUfeName update the ufe name state
     * @param name application name
     */
    setUfeResouceName(name) {
        this.state.update(state => ({ ...state, ufeResourceName: name }));
    }
    /**
     * setExecutionEnvironment update the environment  namestate
     * @param env environment name
     */
    setExecutionEnvironment(environmentName) {
        this.state.update(state => ({ ...state, executionEnvironment: environmentName }));
    }
    /**
     * setExecutionEnvironment update the current language state. Valid inputs are EN for English and DE for German
     * @param currentLanguage current language name
     */
    setCurrentLanguage(currentLanguage) {
        this.state.update(state => ({ ...state, currentLanguage: currentLanguage }));
        window.localStorage.setItem(environment.storageVariableNamePrefix + 'currentLanguage', currentLanguage);
    }
    /**
     * setExecutionEnvironment update the current language state
     * @param linkGroup current language name
     */
    setLinkGroup(linkGroup) {
        this.state.update(state => ({ ...state, linkGroup: linkGroup }));
    }
    /**
     * setShowLanguageControls determines whether language controls will be displayed for this uFE.  Language controls
     * @param status
     */
    setShowLanguageControls(status) {
        this.state.update(state => ({ ...state, showLanguageControls: status }));
    }
    /**
     * set silent refresh active status
     * @param status s
     */
    setSilentRefreshActive(status) {
        this.state.update(state => ({ ...state, isSilentRefreshActive: status }));
    }
    setIsShellApp(status) {
        this.state.update(state => ({ ...state, isShellApp: status }));
    }
    setShowHeader(status) {
        this.state.update(state => ({ ...state, showHeader: status }));
        window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'showHeader', status.toString());
    }
    setParentInstanceId() {
        const parentInstanceId = getQueryParam('wufeid');
        this.state.update(state => ({ ...state, parentInstanceId: parentInstanceId }));
    }
    checkForExistingEnvironmentStateValues() {
        const currentEnvironment = window.sessionStorage.getItem(environment.storageVariableNamePrefix + 'EXECUTION_ENVIRONMENT');
        if (currentEnvironment != null) {
            this.setExecutionEnvironment(currentEnvironment);
        }
        //Todo: only the instanceName identify the correct ufe instacne. Have to be refactored later.
        const appName = window.sessionStorage.getItem(environment.storageVariableNamePrefix + 'APP_NAME');
        if (appName != null) {
            this.setUfeName(appName);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeEnvironmentStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeEnvironmentStore, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeEnvironmentStore, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class EnvironmentManagerService {
    constructor() {
        this.environmentStore = inject(UfeEnvironmentStore);
        this.executionEnvironment$ = toObservable(this.environmentStore.executionEnvironment);
        this.appName$ = toObservable(this.environmentStore.ufeName);
        this.linkGroup$ = toObservable(this.environmentStore.linkGroup);
    }
    /**
     * setUfeName stores the app name passed in this UfeCommand in session storage.  This ufe name is the way the shell
     * knows this uFE, and is necessary for sending UfeCommands of any type to the shell.
     * @param name UfeCommand
     */
    setUfeName(name) {
        this.environmentStore.setUfeName(name);
        window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'APP_NAME', name);
    }
    /**
     * This method must be used with care! It takes the APP_NAME from the session storage. It only delivers reliable the correct name AFTER comming back from authentication redirect!
     * Use the method getAppName() instead.
     * @returns
     */
    getAppNameFromSessionStorage() {
        return window.sessionStorage.getItem(environment.storageVariableNamePrefix + 'APP_NAME');
    }
    /**
     * setExecutionEnvironment sets an EXECUTION_ENVIRONMENT key within session storage for use by the popUpWindow
     * component
     * @param env UfeCommand
     */
    setExecutionEnvironment(env) {
        const envValue = env?.toUpperCase();
        this.environmentStore.setExecutionEnvironment(envValue);
        if (envValue) {
            window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'EXECUTION_ENVIRONMENT', envValue.toString());
        }
        else {
            window.sessionStorage.removeItem(environment.storageVariableNamePrefix + 'EXECUTION_ENVIRONMENT');
        }
    }
    setSelfHostedEnvironment() {
        this.setExecutionEnvironment('SELF');
    }
    setShellHostedEnvironment() {
        this.setExecutionEnvironment('SHELL');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: EnvironmentManagerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: EnvironmentManagerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: EnvironmentManagerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class WrlCommandArgument {
    constructor(applicationName, resourceName, args = {}, isAnonymous = false, targetLocation = undefined) {
        this.applicationName = applicationName;
        this.resourceName = resourceName;
        this.args = args;
        this.isAnonymous = isAnonymous;
        this.targetLocation = targetLocation;
    }
}
class OpenWebResourceCommandArgument {
    constructor(webResource, args, targetLocation = undefined) {
        this.webResource = webResource;
        this.args = args;
        this.targetLocation = targetLocation;
    }
}

class ShellCommunicatorService extends RootInjectorGuard {
    constructor() {
        super('ShellCommunicatorService');
        this.window = inject(Window);
        this.envStore = inject(UfeEnvironmentStore);
    }
    /**
     * sendShellMessage allows the uFE to send messages to the embedding shell
     * @param message UfeCommand
     */
    sendShellMessage(message, targetWindow = 'DEFAULT') {
        let targetWindowRef = this.window.parent;
        let targetWindowType = targetWindow;
        switch (targetWindow) {
            case 'PARENT':
                targetWindowRef = this.window.parent;
                break;
            case 'SELF':
                targetWindowRef = this.window.self;
                break;
            case 'WINDOW_OPENER':
                if (this.window.opener &&
                    this.envStore.isNotSelfHosted() &&
                    this.envStore.executionEnvironment() !== undefined) {
                    targetWindowRef = this.window.opener;
                }
                else {
                    targetWindowRef = this.envStore.isSelfHosted() ? this.window.self : this.window.parent;
                    targetWindowType = this.envStore.isSelfHosted() ? 'SELF' : 'PARENT';
                }
                break;
            case 'DEFAULT':
            default:
                targetWindowRef = this.envStore.isSelfHosted() ? this.window.self : this.window.parent;
                targetWindowType = this.envStore.isSelfHosted() ? 'SELF' : 'PARENT';
                break;
        }
        if (targetWindowRef === null) {
            this.logger.warn(`sendShellMessage: targetWindowRef is null for command:${message.command} to sender:${message.sender} in ufe:${this.envStore.ufeInstanceName}`);
            return;
        }
        try {
            this.logger.debug(`>> Sending command:${message.command} to sender:${message.sender} ufe:${this.envStore.ufeName()} targetRefType:${targetWindowType}`);
            targetWindowRef.postMessage(message, '*');
        }
        catch (e) {
            console.error('Error in sending message to SHELL', e);
        }
    }
    /**
     * sendChildMessage allows the shell to send UfeCommands to this uFE
     * @param message UfeCommand
     * @param app AppDescription identifying the uFE to send the command to
     */
    sendChildMessage(message, app) {
        // get iframe element by id (AppName + WebResourceName)
        const child = document.getElementById(app.combinedName);
        // only handle ufe in iframe and not in the dialog/browser dialog
        // dialog - not need to handle because it have the same session
        if (child !== null && app.url != null && app.url !== '') {
            try {
                // send message to the iframe
                if (child.contentWindow) {
                    child.contentWindow.postMessage(message, app.url);
                }
            }
            catch (e) {
                console.error('Error sending message to child in iframe', e);
            }
        }
        else if (app.windowReference?.ref) {
            // send message to the window reference -- browser dialog
            try {
                app.windowReference.ref.postMessage(message, app.url);
            }
            catch (e) {
                console.error('Error sending message to window reference in another browser window', e);
            }
        }
    }
    /**
     * sendNotification sends a notification model to be displayed in a popup within the shell
     * @param notification NotificationModel: The notification model to be displayed in the popup
     */
    sendNotification(notification) {
        this.checkNoNameError();
        //TodDo: only the instanceName identify the correct ufe instacne. Have to be refactored later.
        const msg = new UfeCommand(this.envStore.ufeName() ?? '', 'NOTIFICATION', [notification]);
        this.sendShellMessage(msg);
    }
    /**
     * sendInfoNotification is a convenience method to display a general information notice for this uFE.
     * @param title String: The notification title to be displayed to the user
     * @param message String: The optional notification message to be displayed to the user
     * @param details String[]: The optional notification detail info list to be displayed to the user
     */
    sendInfoNotification(title, message, details) {
        const notification = {
            notificationType: NotificationType.Info,
            title,
            message,
            details,
        };
        this.sendNotification(notification);
    }
    /**
     * sendErrorNotification is a convenience method to display a general information notice for this uFE.
     * @param title String: The notification title to be displayed to the user
     * @param message String: The optional notification message to be displayed to the user
     * @param details String[]: The optional notification detail info list to be displayed to the user
     */
    sendErrorNotification(title, message, details) {
        const notification = {
            notificationType: NotificationType.Error,
            title,
            message,
            details,
        };
        this.sendNotification(notification);
    }
    /**
     * sendSuccessNotification is a convenience method to display a general information notice for this uFE.
     * @param title String: The notification title to be displayed to the user
     * @param message String: The optional notification message to be displayed to the user
     * @param details String[]: The optional notification detail info list to be displayed to the user
     */
    sendSuccessNotification(title, message, details) {
        const notification = {
            notificationType: NotificationType.Success,
            title,
            message,
            details,
        };
        this.sendNotification(notification);
    }
    /**
     * sendWarningNotification is a convenience method to display a general information notice for this uFE.
     * @param title String: The notification title to be displayed to the user
     * @param message String: The optional notification message to be displayed to the user
     * @param details String[]: The optional notification detail info list to be displayed to the user
     */
    sendWarningNotification(title, message, details) {
        const notification = {
            notificationType: NotificationType.Warning,
            title,
            message,
            details,
        };
        this.sendNotification(notification);
    }
    /**
     * closeOpenNotification sends a shell message to close current opened notifications
     */
    closeOpenNotification() {
        this.checkNoNameError();
        const msg = new UfeCommand(this.appName, 'NOTIFICATION_CLOSE', []);
        this.sendShellMessage(msg);
    }
    /**
     * openUfe sends a request to the shell to open this uFE
     * @param ufe string: The app name as registered with and provided by the Front End Discovery Service
     */
    openUfe(ufe) {
        this.checkNoNameError();
        let msg = new UfeCommand(this.appName, 'OPEN_UFE', [ufe]);
        this.sendShellMessage(msg);
    }
    /**
     * sendPeerMessage sends this message to this peer level uFE
     * @param ufe string: The app name of the app to send the message to as registered with and provided by the
     *                    Front End Discovery Service
     * @param message any: The message or data to be passed to the receiving uFE
     */
    sendPeerMessage(ufe, message) {
        //todo add metrics and monitoring of uFE communication
        this.logger.error('sendPeerMessage is not implemented yet');
        this.checkNoNameError();
        let msg = new UfeCommand(this.appName, 'PEER_MESSAGE', [ufe, message]);
        this.sendShellMessage(msg);
    }
    /**
     * sendPeerMessage sends this message to this peer level uFE or opens the web resource in a new tab in case it is not an uFE.
     * @param applicationName string: The app name of the app to send the message to as registered with and provided by the
     *                    Front End Discovery Service
     * @param webResourceName string: the name of the actual web resource of the application.
     * @param args Map<string, any> | any: The data to be passed to the receiving uFE or the arguments for opening a web resource. Note if you want to use a web resource other then uFE you need to pass the map.
     * @param isAnonymous boolean: defines if the Web Resource Locator should be approached anonymously or with JWT to get personalized or only default results.
     * @param targetLocation UfeWrlTargetLocationType: defines the target location where the web resource should be opened.
     */
    sendPeerMessageWRL(applicationName, webResourceName, args, isAnonymous = false, targetLocation = undefined) {
        //todo add metrics and monitoring of uFE communication
        this.checkNoNameError();
        let msg = new UfeCommand(this.appName, 'PEER_MESSAGE_WRL', [
            new WrlCommandArgument(applicationName, webResourceName, args, isAnonymous, targetLocation),
        ]);
        this.sendShellMessage(msg);
    }
    closeUfeWrl(applicationName, webResourceName) {
        this.checkNoNameError();
        let msg = new UfeCommand(this.appName, 'CLOSE_UFE_WRL', [applicationName, webResourceName]);
        this.sendShellMessage(msg);
    }
    /**
     * closeUfeDialog sends a shell message to close current opened ufe dialog
     */
    closeUfeDialog() {
        this.checkNoNameError();
        const msg = new UfeCommand(this.appName, 'CLOSE_UFE_DIALOG', []);
        this.sendShellMessage(msg);
    }
    /**
     * checkNoNameError ensures this.appName has been set.  This check should be called before any message is sent via
     * any of the convenience communication methods
     * @private
     */
    checkNoNameError() {
        if (this.appName == null || this.appName == '') {
            throw new Error('AppName not set in ShellCommunicatorService.');
        }
    }
    get appName() {
        //TodDo: only the instanceName identify the correct ufe instacne. Have to be refactored later.
        return this.envStore.ufeName() ?? '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ShellCommunicatorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ShellCommunicatorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ShellCommunicatorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class AuthenticationService extends RootInjectorGuard {
    constructor() {
        super('AuthenticationService');
        this.authenticationStatus = signal(new AuthStatus());
        this.destroyRef$ = inject(DestroyRef);
        this.authToken = signal(new AuthToken());
        this.subscriberData = new SubscriberData();
        this.currentSubscriberData = new BehaviorSubject(this.subscriberData);
        this.currentAuthToken = computed(() => this.authToken());
        this.currentAuthToken$ = toObservable(this.authToken);
        this.currentAuthenticationStatus = computed(() => this.authenticationStatus());
        this.activeConfigId = undefined;
        this.authInProgress = signal(false); // this state indicates that an authentication flow is in progress
        this.subscriptions = new Subscription();
        this.oidcSecurityService = inject(OidcSecurityService);
        this.envStore = inject(UfeEnvironmentStore);
        this.envManager = inject(EnvironmentManagerService);
        this.shellCommunicatorService = inject(ShellCommunicatorService);
        /**
         * isAuthInProgress returns a boolean representing whether an authentication flow is currently in progress
         * True if authentication is in progress false otherwise.  No navigation that may overlap an authentication process
         * should be attempted without checking this status as navigation during an authentication process will cause the
         * authentication process to fail in a partial state.  This method is consumed internally by the ifx-ufe library and
         * generally should not be called by client code.
         */
        this.isAuthInProgress = computed(() => this.authInProgress());
        this.configurations = this.oidcSecurityService.getConfigurations();
        toObservable(this.envStore.executionEnvironment)
            .pipe(takeUntilDestroyed(this.destroyRef$))
            .subscribe(() => {
            this.setTokenRefresh();
        });
    }
    ngOnDestroy() {
        this.stopTokenWatcher();
        this.subscriptions.unsubscribe();
        this.currentSubscriberData.complete();
    }
    /**
     * isAuthenticated returns an observable of AuthStatus indicating which identities are currently authenticated if any
     */
    get isAuthenticated$() {
        return toObservable(this.authenticationStatus);
    }
    /***
     *updateIsAuthenticated allows client code to update the isAuthenticated status.  This is called by the
     * MessageListenerDirective when it receives JWT tokens from the Shell
     * @param newStatus: boolean
     */
    setAuthenticationStatus(newStatus) {
        this.authenticationStatus.set(newStatus);
    }
    updateAuthenticationStatus(loginType, newStatus) {
        this.authenticationStatus.update(status => ({ ...status, [loginType]: newStatus }));
    }
    /**
     * initialAuthorization contacts the Pingfederate authentication service and attempts to authenticate the user with
     * Kerberos if available, or requests credentials if not.
     */
    initialAuthentication() {
        // This observable will be triggered on authentication callback.  Either success (isAuthenticated will be true) or failure
        const currentUrl = window.location.href;
        const checkAuthSub = this.oidcSecurityService
            .checkAuthMultiple(currentUrl)
            .subscribe((responses) => {
            if (responses.length > 0 && responses[0].isAuthenticated) {
                let loginType = responses[0].configId;
                this.subscriberData[loginType].subscriberName = responses[0].userData.sub;
                this.subscriberData[loginType].loginStatus = responses[0].isAuthenticated;
                this.subscriberData[loginType].userName = responses[0].userData.name;
                this.subscriberData[loginType].clientId = responses[0].userData.client_id;
                loginType = responses[0].configId;
                const authToken = new AuthToken();
                authToken[loginType] = responses[0].accessToken;
                authToken.idToken = new IdAuthToken();
                authToken.idToken[loginType] = responses[0].idToken;
                this.activeConfigId = responses[0].configId;
                this.authInProgress.set(false);
                // Don't update the observables until *all* the updates are made internally
                this.authToken.set(authToken);
                this.updateAuthenticationStatus(loginType, responses[0].isAuthenticated);
                this.logger.debug('*** initialAuthentication - next token found', !!responses[0].accessToken);
                this.currentSubscriberData.next(this.subscriberData);
                this.publishTokens();
            }
        });
        this.subscriptions.add(checkAuthSub);
    }
    /**
     * loginKerberos begins the authentication workflow for the kerberos identity
     */
    loginKerberos() {
        if (this.currentAuthToken()?.kerberos && isInIframe()) {
            this.logger.info('loginKerberos is requested by silent refresh');
        }
        if (this.currentAuthToken()?.credentials) {
            this.logger.warn('user is already authenticated with credentials, logout before!');
            return;
        }
        window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'loginKerberosUTC', new Date().toUTCString());
        window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'loginKerberos', this.localDateToUtc(new Date()).toString());
        this.setExecutionEnvironment();
        this.authInProgress.set(true);
        this.oidcSecurityService.authorize('kerberos');
        window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'auth', 'kerberos');
    }
    isLastLoginOlderThanInSeconds(seconds) {
        let loginDiff = Number.MAX_VALUE;
        try {
            const loginKerberos = window.sessionStorage.getItem(environment.storageVariableNamePrefix + 'loginKerberos');
            const loginCredentials = window.sessionStorage.getItem(environment.storageVariableNamePrefix + 'loginCredentials');
            const now = new Date(Date.now());
            const nowUtc = this.localDateToUtc(now);
            if (loginKerberos) {
                loginDiff = (nowUtc - parseInt(loginKerberos)) / 1000;
            }
            else if (loginCredentials) {
                loginDiff = (nowUtc - parseInt(loginCredentials)) / 1000;
            }
        }
        catch { }
        window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'lastLoginDiff', loginDiff.toString());
        return loginDiff > seconds;
    }
    /**
     * loginCredentials begins the authentication workflow for the credentials identity
     */
    loginCredentials() {
        if (this.currentAuthToken()?.kerberos) {
            this.logger.warn('user is already authenticated with kerberos, logout before!');
            return;
        }
        window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'loginCredentialsUTC', new Date().toUTCString());
        window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'loginCredentials', this.localDateToUtc(new Date()).toString());
        this.setExecutionEnvironment();
        this.authInProgress.set(true);
        this.oidcSecurityService.authorize('credentials');
        window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'auth', 'credentials');
    }
    /**
     * logout locally logs of the current active configuration.
     */
    logout() {
        this.invalidateTokens();
        this.oidcSecurityService.logoffLocal('kerberos');
        this.oidcSecurityService.logoffLocal('credentials');
        this.stopTokenWatcher();
        window.sessionStorage.removeItem(environment.storageVariableNamePrefix + 'loginKerberos');
        window.sessionStorage.removeItem(environment.storageVariableNamePrefix + 'loginCredentials');
        window.sessionStorage.removeItem(environment.storageVariableNamePrefix + 'loginKerberosUTC');
        window.sessionStorage.removeItem(environment.storageVariableNamePrefix + 'loginCredentialsUTC');
        window.sessionStorage.removeItem(environment.storageVariableNamePrefix + 'auth');
        this.activeConfigId = undefined;
        this.logger.info('signed out!');
    }
    /**
     * getAuthTokens returns an Observable of AuthToken that will contain all current JWT tokens
     */
    getAuthTokens() {
        return this.currentAuthToken$.pipe(tap(tokens => {
            this.logger.debug('getAuthTokens', tokens);
        }));
    }
    /**
     * getCredentialToken returns the current JWT for the credential identity if it exists, null otherwise
     */
    getCredentialToken() {
        return this.currentAuthToken().credentials;
    }
    /**
     * getKerberosToken returns the current JWT for the kerberos identity if it exists, null otherwise
     */
    getKerberosToken() {
        return this.currentAuthToken().kerberos;
    }
    /**
     * registerNewToken places this pre-authenticated JWT token into session storage for future use in authorization.
     * Note that this method only needs to be called when JWT tokens are passed from the Shell; if the ifx-ure library
     * handles the authentication (e.g. in the case of a stand-alone execution environment) the authentication library
     * will place the tokens in session storage.
     * @param tokens stringified AuthToken.
     * @private
     */
    registerNewToken(tokens) {
        let newToken;
        try {
            newToken = JSON.parse(tokens);
        }
        catch (error) {
            this.logger.error('Error in registerNewToken', error, tokens);
            return;
        }
        const newAuthStatus = new AuthStatus();
        newAuthStatus.kerberos = !!newToken.kerberos;
        newAuthStatus.credentials = !!newToken.credentials;
        this.updateSubscriberData(newToken);
        this.setAuthenticationStatus(newAuthStatus);
        this.authToken.set(newToken);
        this.publishTokens();
    }
    get isUserAuthenticated() {
        return (this.currentAuthToken()?.kerberos ?? false) || (this.currentAuthToken()?.credentials ?? false);
    }
    get getToken() {
        return this.getCredentialToken() ?? this.getKerberosToken();
    }
    /**
     * get subscriberData$ returns an observable of SubscriberData
     */
    get subscriberData$() {
        return this.currentSubscriberData.asObservable();
    }
    /**
     * checkTokenAndReturnExpiryStatus checks and removes tokens that are past their expiry, and updates the login status appropriately.
     * returns true if AuthToken is not valid, false otherwise
     */
    checkTokenAndReturnExpiryStatus(tokenType = null) {
        let targetToken = this.getToken;
        if (tokenType === 'credentials') {
            targetToken = this.getCredentialToken();
        }
        else if (tokenType === 'kerberos') {
            targetToken = this.getKerberosToken();
        }
        if (this.isTokenExpired(targetToken)) {
            //otherwise delete the tokens.  Note either token expiring will cause both to be invalidated
            this.invalidateTokens();
            return true;
        }
        return false;
    }
    // Create a function to initialize Person objects
    createSilentRefreshInfo(refreshTime, refreshInterval, refreshTimeoutMethod) {
        return { refreshTime, refreshInterval, refreshTimeoutMethod };
    }
    completeRefresh() {
        const silentRefreshFrameId = this.envStore.activeInstanceId();
        const handle = document.getElementById(silentRefreshFrameId);
        if (handle) {
            this.envStore.setSilentRefreshActive(false);
        }
        else {
            this.logger.warn(`Unable to find ${silentRefreshFrameId}`);
            return;
        }
        this.logger.info('Silent refresh of Auth token complete');
        //ensure that token is the latest one
        this.checkForExistingToken();
    }
    getJwtTokenFromSessionStorage(tokenName) {
        const token = window.sessionStorage.getItem(tokenName) ?? '';
        if (token) {
            try {
                const parsedToken = JSON.parse(token);
                return parsedToken?.authnResult?.access_token;
            }
            catch (error) {
                this.logger.error(`Invalid ${tokenName} Token`, error);
            }
        }
        return undefined;
    }
    isAuthFlowRunning() {
        return this.isAuthFlowRunningInternal('kerberos') || this.isAuthFlowRunningInternal('credentials');
    }
    getJwtIdTokenFromSessionStorage(tokenName) {
        const token = window.sessionStorage.getItem(tokenName) ?? '';
        if (token) {
            try {
                const parsedToken = JSON.parse(token);
                return parsedToken?.authnResult?.id_token;
            }
            catch (error) {
                this.logger.error(`Invalid ${tokenName} Token`, error);
            }
        }
        return undefined;
    }
    /**
     * publishTokens update the current authentication tokens stored in session storage
     * @private
     */
    publishTokens() {
        this.unsetSessionStorageToken('kerberos');
        this.unsetSessionStorageToken('credentials');
        this.setSessionStorageToken('kerberos');
        this.setSessionStorageToken('credentials');
    }
    /**
     * setsToken sets the AuthToken kerberos/credentials in session storage.
     * @private
     */
    setSessionStorageToken(tokenType) {
        const token = this.currentAuthToken()[tokenType];
        const idToken = this.currentAuthToken().idToken?.[tokenType];
        if (token != null && token != '') {
            if (this.envStore.isNotSelfHosted() || this.currentEnvironment === 'NATIVE_SHELL') {
                window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'shell-' + tokenType, token);
                window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'shell-id' + tokenType, idToken);
                window.sessionStorage.setItem('shell-' + tokenType, token); // ToDo: remove this line after iSecure authorization is supporting configurable prefix
            }
            else {
                window.sessionStorage.setItem(environment.storageVariableNamePrefix + 't' + tokenType, token);
                window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'tid' + tokenType, idToken);
                window.sessionStorage.setItem('t' + tokenType, token); // ToDo: remove this line after iSecure authorization is supporting configurable prefix
            }
            window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'publish' + tokenType + 'UTC', new Date().toUTCString());
        }
    }
    /**
     * delete kerberos/credentials in session storage.
     * @private
     */
    unsetSessionStorageToken(tokenType) {
        window.sessionStorage.removeItem(environment.storageVariableNamePrefix + 't' + tokenType);
        window.sessionStorage.removeItem(environment.storageVariableNamePrefix + 'tid' + tokenType);
        window.sessionStorage.removeItem(environment.storageVariableNamePrefix + 'shell-' + tokenType);
        window.sessionStorage.removeItem(environment.storageVariableNamePrefix + 'shell-id' + tokenType);
        window.sessionStorage.removeItem(environment.storageVariableNamePrefix + 'tokenLastPublish' + tokenType + 'UTC');
        window.sessionStorage.removeItem('shell-' + tokenType); // ToDo: remove this line after iSecure authorization is supporting configurable prefix
        window.sessionStorage.removeItem('t' + tokenType); // ToDo: remove this line after iSecure authorization is supporting configurable prefix
    }
    /**
     * checkForExistingToken checks if a JWT token has already been stored in session storage.  If a token is found, the
     * method take over the data in the token storing it within the system for future use.  Sets authInProgress to false
     * if a token is found as an existing token means the authentication workflow has already been completed.
     * @private
     */
    checkForExistingToken() {
        this.logger.debug('checkForExistingShellToken - checking for existing tokens');
        this.checkAndTryToTakeOverExistingToken('kerberos');
        this.checkAndTryToTakeOverExistingToken('credentials');
        if (this.isUserAuthenticated) {
            this.logger.debug('checkForExistingToken - next token found');
            this.updateSubscriberData(this.currentAuthToken());
            return true;
        }
        return false;
    }
    /**
     * Checks if the old token is valid and not expired, and tries to take over the token.
     *
     * @param tokenKey - The key of the token in the session storage.
     * @param tokenType - The type of the token.
     */
    checkAndTryToTakeOverExistingToken(tokenType) {
        const envTokenPrefix = this.envStore.isNotSelfHosted() ? 'shell-' : 't';
        const oldToken = window.sessionStorage.getItem(environment.storageVariableNamePrefix + envTokenPrefix + tokenType);
        const oldIdToken = window.sessionStorage.getItem(environment.storageVariableNamePrefix + envTokenPrefix + 'id' + tokenType);
        if (oldToken != null && oldToken != '' && !this.isTokenExpired(oldToken)) {
            const authToken = {
                ...this.currentAuthToken(),
                [tokenType]: oldToken,
                idToken: {
                    kerberos: this.currentAuthToken().idToken?.kerberos,
                    credentials: this.currentAuthToken().idToken?.credentials,
                    [tokenType]: oldIdToken,
                },
            };
            this.authToken.set(authToken);
            this.updateAuthenticationStatus(tokenType, true);
        }
        else {
            this.unsetSessionStorageToken(tokenType);
        }
    }
    isTokenExpired(token) {
        const expTime = AuthenticationService.getJwtTokenExpirationTimeInMilliseconds(token);
        if (AuthenticationService.isTokenTimeExpired(expTime)) {
            //if the token expired, log the token and the current time, and return true
            this.logger.debug('Token is expired', token, expTime, Date.now());
            return true;
        }
        return false;
    }
    static getJwtTokenExpirationTimeInMilliseconds(token) {
        const parsedToken = JwtDecoder.decodeSafe(token);
        return AuthenticationService.convertTokenTimeInMilliseconds(parsedToken?.exp);
    }
    static isTokenTimeExpired(tokenTime) {
        return AuthenticationService.convertTokenTimeInMilliseconds(tokenTime) <= Date.now();
    }
    static convertTokenTimeInMilliseconds(time) {
        time = time ?? Date.now();
        if (time.toString().length < Date.now().toString().length) {
            // convert seconds to milliseconds
            return time * 1000;
        }
        return time;
    }
    /**
     * Checks if the authentication process is in progress.
     *
     * @param tokenKey - The key used to retrieve the authentication token from the session storage.
     * @returns A boolean indicating whether the authentication process is in progress.
     */
    isAuthFlowRunningInternal(tokenKey) {
        const oldAuthObject = window.sessionStorage.getItem(tokenKey);
        if (oldAuthObject == null || oldAuthObject === '') {
            return false;
        }
        try {
            const libAuth = JSON.parse(oldAuthObject ?? '');
            return libAuth?.storageCodeFlowInProgress != null && libAuth?.storageCodeFlowInProgress === true;
        }
        catch (error) {
            this.logger.warn(`Error parsing ${tokenKey}`, error);
            return false;
        }
    }
    isAuthFlowOutdated(tokenKey) {
        const oldAuthObject = window.sessionStorage.getItem(tokenKey);
        if (oldAuthObject == null || oldAuthObject === '') {
            return false;
        }
        // invalid value for auth token have to be deleted
        if (oldAuthObject === '{}') {
            window.sessionStorage.removeItem(tokenKey);
            return false;
        }
        try {
            const libAuth = JSON.parse(oldAuthObject);
            const isOutdated = libAuth.access_token_expires_at && AuthenticationService.isTokenTimeExpired(libAuth.access_token_expires_at);
            if (isOutdated) {
                // remove the outdated token
                window.sessionStorage.removeItem(tokenKey);
            }
            return isOutdated;
        }
        catch (error) {
            this.logger.warn(`Error parsing ${tokenKey}`, error);
            // remove the invalid token
            window.sessionStorage.removeItem(tokenKey);
            return true;
        }
    }
    /**
     * updateSubscriberData reads the subscriber info (that information related to the user's identity and their
     * login status) from an AuthToken and stores this data within the system
     * @param token AuthToken
     * @private
     */
    updateSubscriberData(token) {
        this.updateKerberosSubscriberData(token?.kerberos);
        this.updateCredentialsSubscriberData(token?.credentials);
        if (!!token.credentials || !!token.kerberos) {
            this.currentSubscriberData.next(this.subscriberData);
        }
    }
    updateKerberosSubscriberData(kerberosToken) {
        if (kerberosToken != null) {
            const parsedKToken = JwtDecoder.decodeSafe(kerberosToken);
            this.subscriberData.kerberos.subscriberName = parsedKToken?.subject ?? '';
            this.subscriberData.kerberos.loginStatus = true;
            this.subscriberData.kerberos.userName = parsedKToken?.displayName ?? '';
            this.subscriberData.kerberos.clientId = parsedKToken?.client_id ?? '';
            this.subscriberData.kerberos.hostProfileName = parsedKToken?.hostProfileName;
        }
    }
    updateCredentialsSubscriberData(credentialsToken) {
        if (credentialsToken != null) {
            const parsedCToken = JwtDecoder.decodeSafe(credentialsToken);
            this.subscriberData.credentials.subscriberName = parsedCToken?.subject ?? '';
            this.subscriberData.credentials.loginStatus = true;
            this.subscriberData.credentials.userName = parsedCToken?.displayName ?? '';
            this.subscriberData.credentials.clientId = parsedCToken?.client_id ?? '';
            this.subscriberData.credentials.hostProfileName = parsedCToken?.hostProfileName;
        }
    }
    /**
     * clearSubscriberData removes the subscriber data from the system and notifies all observers
     * @private
     */
    clearSubscriberData() {
        this.subscriberData = new SubscriberData();
        this.currentSubscriberData.next(this.subscriberData);
    }
    /**
     * invalidateTokens will remove the current kerberos and credentials tokens from the system, reset isAuthenticated
     * to false, clear userData, and remove the tKerberos and tCredentials session variables.
     * @private
     */
    invalidateTokens() {
        this.logger.debug('invalidateTokens');
        this.unsetSessionStorageToken('kerberos');
        this.unsetSessionStorageToken('credentials');
        this.authToken.set(new AuthToken());
        this.setAuthenticationStatus(new AuthStatus());
        this.clearSubscriberData();
    }
    stopTokenWatcher() {
        window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'SilentRefreshIsActive', 'false');
        this.envStore.setSilentRefreshActive(false);
        this.tokenRefreshWatcher$?.unsubscribe();
        this.tokenRefreshWatcher$ = undefined;
    }
    /**
     * setTokenRefresh calculates the time 10 minutes before the current JWT token expires and sets a timeout to
     * trigger a silent token refresh at that time.
     * @private
     */
    setTokenRefresh() {
        // ensure that the enviroment is not yet undefined
        const isNotSelfHosted = this.envStore.isNotSelfHosted() || !this.envStore.isSelfHosted();
        // only kerberos and self hosted environments are silent refreshable
        if (this.getCredentialToken() || isNotSelfHosted || isSilentRefreshInProcess()) {
            this.stopTokenWatcher();
            return;
        }
        // watcher is already running
        if (this.tokenRefreshWatcher$ && !this.tokenRefreshWatcher$?.closed) {
            return;
        }
        window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'SilentRefreshIsActive', 'true');
        this.tokenRefreshWatcher$ = interval(1000 * 60)
            .pipe(takeUntilDestroyed(this.destroyRef$))
            .subscribe(() => {
            const tokenExpiryTime = AuthenticationService.getJwtTokenExpirationTimeInMilliseconds(this.getKerberosToken());
            const currentTime = Date.now();
            //This ensures that the token is refreshed 10 minutes (600000 ms) before its actual expiry. (7080000 = 118 minutes for testing purposes)
            const tokenExpiryIn = tokenExpiryTime - currentTime - 600000;
            if (tokenExpiryIn <= 60000) {
                this.forcedSilentRefresh();
            }
        });
    }
    forcedTokenRefresh() {
        if (this.envStore.isSelfHosted() && !this.getCredentialToken()) {
            this.forcedSilentRefresh();
        }
        if (this.envStore.isSelfHosted()) {
            // ToDo: refactor logout handling
        }
    }
    forcedSilentRefresh() {
        if (this.envStore.isSilentRefreshEnabled()) {
            this.envStore.setSilentRefreshActive(false);
            window.sessionStorage.removeItem(environment.storageVariableNamePrefix + 'oldToken');
        }
        const forcedSilentRefresh$ = interval(500)
            .pipe(takeUntilDestroyed(this.destroyRef$), take(1))
            .subscribe({
            next: () => {
                window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'SilentRefreshIsActive', 'true');
                this.logger.info('Silent refresh of AuthToken in process');
                window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'SilentRefreshInProcess', new Date(Date.now()).toString());
                this.envStore.setSilentRefreshActive(true);
                forcedSilentRefresh$?.unsubscribe();
            },
            error: error => {
                this.logger.error('Error in forcedSilentRefresh', error);
                forcedSilentRefresh$?.unsubscribe();
            },
        });
    }
    /**
     * clear the timeout process
     * @public
     */
    //
    stopTimeoutMethod(timeoutMethod) {
        if (timeoutMethod != null) {
            clearTimeout(timeoutMethod);
            this.logger.debug('TimeoutMethod is cleared', timeoutMethod);
        }
        return null;
    }
    get currentEnvironment() {
        return this.envStore.executionEnvironment();
    }
    localDateToUtc(date) {
        return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
    }
    setExecutionEnvironment() {
        this.envManager.setExecutionEnvironment(this.envStore.executionEnvironment() ?? 'SELF');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthenticationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthenticationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthenticationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class IPCService {
    constructor() {
        this.currentUfeCommand = new BehaviorSubject(new UfeCommand());
    }
    ngOnDestroy() {
        this.currentUfeCommand.complete();
    }
    /**
     * ufeCommands returns an observable of UfeCommand.  This method is subscribed to by various other parts of the
     * library so they can receive the UfeCommands passed on by the MessageListenerDirective
     */
    ufeCommands() {
        return this.currentUfeCommand.asObservable();
    }
    /**
     * relayCommand allows a UfeCommand to be relayed to all subscribers to the IPC.  Generally, this method is only
     * called by the MessageListenerDirective
     * @param cmd
     */
    relayCommand(cmd) {
        this.currentUfeCommand.next(cmd);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IPCService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IPCService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IPCService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class UrlCaptureService {
    constructor() {
        this.logger = inject(IfxUfeLoggerService);
        this.envStore = inject(UfeEnvironmentStore);
    }
    /**
     * setBaseRoute stores a route that will be returned from getUrl() if no other route has been set.  Unlike routes
     * set by storeUrl, the base route is retained after use.
     * @param url
     */
    setBaseRoute(url) {
        window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'baseRoute', url);
    }
    /**
     * storeUrl stores this URL for later reference by the application.  After this route has been retrieved via getUrl,
     * it is erased and this service will return the base route on future calls to getUrl if no new route is passed to
     * this method
     * @param url
     */
    storeUrl(url) {
        window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'deepLink', url);
    }
    /**
     * getUrl returns the previously stored URL.  If a route was passed to this service via storeUrl and not yet retrieved,
     * this is the route that will be returned.  Otherwise, the base route passed to setBaseRoute is returned.
     */
    getUrl() {
        let result = '';
        const deepLink = window.sessionStorage.getItem(environment.storageVariableNamePrefix + 'deepLink');
        if (deepLink) {
            result = deepLink ?? '';
            window.sessionStorage.removeItem(environment.storageVariableNamePrefix + 'deepLink');
        }
        else {
            result = window.sessionStorage.getItem(environment.storageVariableNamePrefix + 'baseRoute') ?? '';
        }
        return result;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UrlCaptureService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UrlCaptureService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UrlCaptureService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

var AuthMode;
(function (AuthMode) {
    // Auto Login via Kerberos
    AuthMode[AuthMode["Kerberos"] = 0] = "Kerberos";
    // login via Credentials
    AuthMode[AuthMode["Credentials"] = 1] = "Credentials";
    // Show page for user selection
    AuthMode[AuthMode["Ask"] = 2] = "Ask";
})(AuthMode || (AuthMode = {}));

function isUfeCommand(command) {
    return !!command.command && !!command.sender;
}
function isWrlCommandArgument(item) {
    return (!!item.applicationName &&
        !!item.resourceName &&
        !!item.args &&
        item.isAnonymous !== undefined);
}
function isWebResouce(item) {
    return !!item.appName && !!item.resourceName;
}
function isOpenWebResourceCommandArgument(item) {
    return (isWebResouce(item.webResource) &&
        item.args !== undefined);
}
function isWrlApplicationInstanceWithVersions(item) {
    return item.setVersions !== undefined;
}

class HelpItem {
    constructor(name, uri) {
        this.ufeName = name;
        this.url = uri;
    }
}

class DataCommunicationService {
    constructor() {
        this.ipc = inject(IPCService);
        this.auth = inject(AuthenticationService);
        this.environmentStore = inject(UfeEnvironmentStore);
        this.subscriberData = new SubscriberData();
        this.currentSubscriberData = new BehaviorSubject(this.subscriberData);
        this.currentCommand = new BehaviorSubject(new UfeCommand());
        this.allSubs = new Subscription();
        this.helpLinks = [];
        this.currentHelpLinks = new BehaviorSubject(this.helpLinks);
        this.environment$ = toObservable(this.environmentStore.executionEnvironment);
        const subscriberSub = this.auth.subscriberData$.subscribe(data => {
            this.subscriberData = data;
            this.currentSubscriberData.next(this.subscriberData);
        });
        this.allSubs.add(subscriberSub);
        const ufeSub = this.ipc.ufeCommands().subscribe(cmd => {
            if (cmd.command === 'HELP_LINK') {
                this.updateHelpLinks(cmd);
            }
            this.currentCommand.next(cmd);
        });
        this.allSubs.add(ufeSub);
    }
    ngOnDestroy() {
        this.allSubs.unsubscribe();
        this.currentCommand.complete();
        this.currentHelpLinks.complete();
    }
    /**
     * getEnviro returns a string indicating what environment this uFE is running in SELF if running stand alone,
     * SHELL if running under a web shell, EMBEDDED if running embedded in another environment such as a desktop
     * or iOS app.
     */
    getEnvironment() {
        return this.environmentStore.executionEnvironment() ?? '';
    }
    /**
     * getAuthToken returns an observable of AuthToken containing all JWT tokens received from the STS
     */
    getAuthToken() {
        return this.auth.currentAuthToken$;
    }
    /**
     * getKerberosToken returns the JWT token for the kerberos identity returned by the STS if such JWT has been received.
     * Null otherwise.
     */
    getKerberosToken() {
        return this.auth.currentAuthToken()?.kerberos;
    }
    /**
     * getCredential token returns the JWT token for the credential identity if such JWT has been received from the STS,
     * null otherwise
     */
    getCredentialToken() {
        return this.auth.currentAuthToken()?.credentials;
    }
    /**
     * ufeCommands returns an observable through which all uFE commands are passed from the framework to the client uFE
     */
    ufeCommands() {
        return this.currentCommand.asObservable();
    }
    /**
     * ufeCommands$ returns an observable which emits all new uFE commands from the framework to the client uFE
     */
    get ufeCommands$() {
        return this.currentCommand.pipe(skip(1));
    }
    /**
     * IsAuthenticated is an observable that updates whenever an authentication event occurs
     * @constructor
     */
    get IsAuthenticated$() {
        return this.auth.isAuthenticated$;
    }
    /**
     * currentAuthStatus provides a snapshot at the moment of calling of this uFE's authentication status.  This method
     * should be preferred for routing guards such as canActivate as it is synchronous and does not require a subscription
     * to an observable.  Asynchronous operations can be problematic for routing guards.
     */
    get currentAuthStatus() {
        return this.auth.currentAuthenticationStatus();
    }
    /**
     * getSubscriberData returns a SubscriberData object that gives the current status for user authentication.
     */
    getSubscriberData() {
        return this.subscriberData;
    }
    get subscriberData$() {
        return this.currentSubscriberData.asObservable();
    }
    loginCredentials() {
        this.auth.loginCredentials();
    }
    loginKerberos() {
        this.auth.loginKerberos();
    }
    refreshToken() {
        this.auth.forcedTokenRefresh();
    }
    logout() {
        this.auth.logout();
    }
    getHelpLinks() {
        return this.currentHelpLinks.asObservable();
    }
    get isUserAuthenticated() {
        return this.auth.isUserAuthenticated;
    }
    get currentExecutionEnvironment() {
        return this.environmentStore.executionEnvironment();
    }
    get ufeInstanceName() {
        return this.environmentStore.ufeInstanceName() ?? '';
    }
    updateHelpLinks(cmd) {
        let nextLink = new HelpItem(cmd.sender, cmd.params[0]);
        this.helpLinks.push(nextLink);
        this.currentHelpLinks.next(this.helpLinks);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DataCommunicationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DataCommunicationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DataCommunicationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class UfeCommandProcessorService extends RootInjectorGuard {
    constructor() {
        super('UfeCommandProcessorService');
        this.dataComm = inject(DataCommunicationService);
        this.commandHandlers = [];
        this.dataComm
            .ufeCommands()
            .pipe(takeUntilDestroyed())
            .subscribe((cmd) => {
            this.onUfeCommandMessage(cmd);
        });
    }
    registerHandler(handler) {
        this.commandHandlers.push(handler);
    }
    /**
     * onMessage responds to UfeCommands from instantiated Micro Front Ends.
     * @param msg UfeCommand
     */
    onUfeCommandMessage(ufeCommand) {
        if (!isUfeCommand(ufeCommand)) {
            return;
        }
        this.commandHandlers
            .filter(f => f.canProcess())
            .forEach(handler => {
            handler.handleCommand(ufeCommand);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeCommandProcessorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeCommandProcessorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeCommandProcessorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class AppCommandHandlerService extends RootInjectorGuard {
    constructor() {
        super('AppCommandHandlerService');
        this.envStore = inject(UfeEnvironmentStore);
    }
    canProcess() {
        return true;
    }
    handleCommand(ufeCommand) {
        switch (ufeCommand.command) {
            case 'SHOW_HEADER':
                this.envStore.setShowHeader(true);
                break;
            case 'HIDE_HEADER':
                this.envStore.setShowHeader(false);
                break;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AppCommandHandlerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AppCommandHandlerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AppCommandHandlerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class WindowRefTuple {
    constructor(nm, reference, url = '', targetEnv) {
        this.name = '';
        this.url = '';
        this.isLoaded = false;
        this.isActive = false;
        this.targetEnv = undefined;
        this.name = nm;
        this.ref = reference;
        this.url = url;
        this.targetEnv = targetEnv;
    }
}

class UfeDialogConfig {
    constructor() {
        this.width = '800px';
        this.height = '500px';
    }
}

/**
 * AppDescription contains the data necessary to identify and connect to a uFE
 */
class AppDescription {
    constructor(nm = '', rn = '', url = '', loc = undefined) {
        this.appName = '';
        this.resourceName = '';
        /**
         * the combined name of appName and resourceName conjunted with a underscore. If either one is empty a empty string is returned.
         */
        this.combinedName = '';
        this.url = '';
        this.location = undefined;
        this.isLoaded = false;
        this.loadOnShellInit = false;
        this.appName = nm;
        this.resourceName = rn;
        this.url = url;
        this.location = loc;
        this.combinedName = AppDescription.getCombinedName(this.appName, this.resourceName);
    }
    static create(appName, resourceName, url, location, dialogConfig = undefined) {
        const app = new AppDescription();
        app.appName = appName;
        app.resourceName = resourceName;
        app.url = url ?? '';
        app.location = location;
        app.combinedName = this.getCombinedName(appName, resourceName);
        app.dialogConfig = this.getDialogConfig(location, dialogConfig);
        return app;
    }
    static getCombinedName(appName, resourceName) {
        return appName.length !== 0 && resourceName.length !== 0 ? `${appName}_${resourceName}` : appName;
    }
    static getDialogConfig(location, dialogConfig) {
        if (location != null && location.startsWith('dialog')) {
            return dialogConfig ?? new UfeDialogConfig();
        }
        return undefined;
    }
    static copy(toCopy) {
        return this.create(toCopy.appName, toCopy.resourceName, toCopy.url, toCopy.location, toCopy.dialogConfig);
    }
}

class ShellStateStore extends RootInjectorGuard {
    constructor() {
        super('ShellStateStore');
        this._state = signal({
            availableUfe: [],
            availableUfeLoaded: false,
            scenariosLoaded: false,
            activeApps: [],
            layout: '',
        });
        this.availableUfe = computed(() => ({ AvailableUfe: this._state().availableUfe }));
        this.availableUfeLoaded = computed(() => this._state().availableUfeLoaded);
        this.scenariosLoaded = computed(() => this._state().scenariosLoaded);
        this.layout = computed(() => this._state().layout);
        this.appList = computed(() => this._state().availableUfe);
        this.activeApps = computed(() => this._state().activeApps);
        this.appSelected$ = new Subject();
        this.appDeselected$ = new Subject();
        const storedLayout = window.localStorage.getItem(environment.storageVariableNamePrefix + 'layout');
        if (storedLayout) {
            this.setLayout(storedLayout);
        }
    }
    setAvailableUfe(availableUfe) {
        this._state.update(state => ({
            ...state,
            availableUfe: availableUfe,
        }));
    }
    setAvailableUfeLoaded(availableUfeLoaded) {
        this._state.update(state => ({
            ...state,
            availableUfeLoaded: availableUfeLoaded,
        }));
    }
    setActiveApps(activeApps) {
        this._state.update(state => ({
            ...state,
            activeApps: activeApps,
        }));
    }
    setScenariosLoaded(scenariosLoaded) {
        this._state.update(state => ({
            ...state,
            scenariosLoaded: scenariosLoaded,
        }));
    }
    setLayout(layout) {
        this._state.update(state => ({
            ...state,
            layout: layout,
        }));
        window.localStorage.setItem(environment.storageVariableNamePrefix + 'layout', layout);
    }
    getUfeApp(name) {
        return this.appList().find(ufeApp => ufeApp.combinedName === name) ?? new AppDescription();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ShellStateStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ShellStateStore, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ShellStateStore, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class PeerCommunicatorService extends RootInjectorGuard {
    constructor() {
        super('PeerCommunicatorService');
        this.envStore = inject(UfeEnvironmentStore);
        this.peerReferences = [];
        this.messageBuffer = [];
        this.subscriptions = new Subscription();
        this.shellStateStore = inject(ShellStateStore);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    /**
     * openPeerInTab will open a peer uFE in a new tab.  A reference is kept to this tab to allow passing of data to the peer
     * @param msg UfeCommand with the command value 'OPEN_UFE' and the registered name of the target ufe as element 0 of
     * the params array
     * @private
     */
    openPeerInTab(msg, openInWindow, executionEnv) {
        const targetAppDescription = this.getAppDescription(msg.params[0]);
        let url;
        if (targetAppDescription?.url != null && this.canParseUrl(targetAppDescription.url)) {
            url = new URL(targetAppDescription.url);
            if (!!executionEnv) {
                url.searchParams.set('_ifxEnvironment', executionEnv);
            }
            if (executionEnv === 'SHELL') {
                url.searchParams.set('_ifxHeader', url.searchParams.get('_ifxHeader') ?? 'true');
            }
            return this.openPeerResourceInTab(msg.params[0], openInWindow, url, executionEnv);
        }
        else {
            this.logger.error(`Skip opening peer in tab. The url '${targetAppDescription?.url}' is not valid`);
            throw new Error(`Invalid URL for target uFE ${targetAppDescription?.combinedName ?? targetAppDescription?.appName ?? ''}`);
        }
    }
    /**
     * openPeerInTab will open a peer uFE in a new tab.  A reference is kept to this tab to allow passing of data to the peer
     * @param resourceName the name of the web resource
     * @param url the url which should be opened
     * @returns the opended instance or the already open instance
     */
    openPeerResourceInTab(resourceName, openNewWindow, url, targetEnv) {
        this.pruneDeadRefs();
        //if we already have a ref to a uFE do not open a new one
        const existingRef = this.peerReferences.filter(element => element.name == resourceName);
        if (existingRef.length != 0) {
            if (openNewWindow) {
                // Bring the newly opened window to the front
                existingRef[0].ref?.focus();
            }
            return existingRef[0];
        }
        let nextRef = null;
        if (url != null && url.hostname.match(environment.validUfeHostnamePattern)) {
            let ref;
            const width = 800;
            const height = 600;
            // Calculate the position to center the window
            const leftPosition = (screen.width - width) / 2;
            const topPosition = (screen.height - height) / 2;
            const windowFeatures = `toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=${width},height=${height},top=${topPosition},left=${leftPosition}`;
            if (openNewWindow) {
                ref = window.open(url, resourceName, windowFeatures);
                // Bring the newly opened window to the front
                ref?.focus();
            }
            else {
                ref = this.openNewWindow(url);
            }
            if (ref == null) {
                throw new Error('Could not open new window for peer uFE');
            }
            nextRef = new WindowRefTuple(resourceName, ref, url.href, targetEnv);
            this.peerReferences.push(nextRef);
        }
        else {
            if (url == null) {
                this.logger.error('Target uFE not available through the discovery service');
            }
            else {
                this.logger.error(`URL for target uFE [${resourceName}] is not matching /${environment.validUfeHostnamePattern}/ hostname pattern.`);
            }
        }
        return nextRef;
    }
    /**
     * sendPeerMessageInTab sends this UfeCommand to the peer uFE specified in UfeCommand.params[0] if that peer uFE
     * was opened by this uFE and a reference to the recipient is included in the list of active references.
     * @param msg UfeCommand The command to be sent to the peer uFE.  Must include the recipients registered name
     * in UfeCommand.params[0]
     * @private
     */
    sendPeerMessageInTab(msg, openInwindow, executionEnv) {
        const openMsg = new UfeCommand(this.ufeName, 'OPEN_UFE', [msg.params[0]]);
        this.openPeerInTab(openMsg, openInwindow, executionEnv);
        const targetWindowReference = this.peerReferences.find(ref => ref.name == msg.params[0]);
        if (targetWindowReference == null) {
            throw new Error('No Reference to the target uFE is available');
        }
        const targetDescription = this.getAppDescription(targetWindowReference.name);
        if (targetDescription == null) {
            throw new Error('Target uFE not available through the discovery service');
        }
        targetDescription.windowReference = targetWindowReference;
        //if the target is not yet loaded, buffer the message and return, this method will get called again once the
        //PEER_READY signal is received
        if (!targetWindowReference.isLoaded) {
            this.messageBuffer.push(msg);
            this.logger.debug('Buffered message for ' + msg.sender);
            return targetWindowReference;
        }
        //change the sender, so it will not be 'SELF'; otherwise the receiving uFE will attempt to forward this command.
        msg.sender = 'PEER_TAB';
        if (targetWindowReference.url != null) {
            try {
                targetWindowReference.ref?.postMessage(msg, targetWindowReference.url);
            }
            catch (e) {
                this.logger.error('Error sending message to peer_in_tab: ', e);
            }
        }
        else {
            this.logger.error(`Target uFE [${targetWindowReference.name}] url is null`);
        }
        return targetWindowReference;
    }
    closeAllPeerTabs() {
        for (const ref of this.peerReferences) {
            ref.ref?.close();
        }
        this.peerReferences = [];
    }
    /**
     * pruneDeadRefs iterates through the current list of activeReferences to peer uFE and removes any in which the
     * window has been closed.
     * @private
     */
    pruneDeadRefs() {
        let count = 0;
        for (let i = 0; i < this.peerReferences.length; ++i) {
            if (this.peerReferences[i].ref?.closed) {
                this.peerReferences.splice(i, 1);
                i--; //to repeat this index, we just spliced and every element moved down one index
                count++;
            }
        }
        return count;
    }
    openNewWindow(url) {
        return window.open(url.href);
    }
    /**
     * setPeerReady iterates through the current list of active peer references, once finding a reference whose name matches
     * that of the UfeCommand's sender field, it sets that references isLoaded field to true, indicating the reference
     * is ready to receive further commands
     * @param cmd UfeCommand: An UfeCommand where the command field is set to UFE_READY
     * @private
     */
    setPeerReady(cmd) {
        if (cmd.sender === 'SELF') {
            cmd.sender = this.ufeName;
        }
        for (const ref of this.peerReferences) {
            if (ref.name == cmd.sender) {
                ref.isLoaded = true;
                this.sendOpenerID(ref);
            }
        }
        let idx = 0;
        for (const msg of this.messageBuffer) {
            if (msg.params[0] == cmd.sender) {
                try {
                    this.sendPeerMessageInTab(msg, false);
                }
                catch (e) {
                    this.logger.error('Error sending buffered message: ' + e);
                }
                this.messageBuffer.splice(idx, 1);
            }
            idx++;
        }
    }
    registerOpener(cmd) {
        try {
            const ref = new WindowRefTuple(cmd.sender, window.opener, window.opener.location.href, 'SHELL');
            ref.isLoaded = true;
            this.peerReferences.push(ref);
        }
        catch {
            this.logger.warn('Error registering opener: ');
        }
    }
    sendOpenerID(app) {
        const cmd = new UfeCommand(this.ufeName, 'OPENER_ID', []);
        app.ref?.postMessage(cmd, '*');
    }
    get ufeName() {
        //TodDo: only the instanceName identify the correct ufe instacne. Have to be refactored later.
        return this.envStore.ufeName() ?? '';
    }
    /**
     * getAppDescription returns an AppDescription for the uFE that has the registered name passed in ufeName
     * @param appCombinedName string: The registered name of the uFE to return the AppDescription for
     * @private
     */
    getAppDescription(appCombinedName) {
        const app = this.shellStateStore
            .availableUfe()
            .AvailableUfe.find(availableApp => availableApp.combinedName === appCombinedName);
        return app;
    }
    canParseUrl(url) {
        return URL.canParse(url);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PeerCommunicatorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PeerCommunicatorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PeerCommunicatorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class UfeSafeUrlPipe {
    constructor() {
        this.sanitizer = inject(DomSanitizer);
        this.hostnamePattern = environment.validUfeHostnamePattern;
        this.logger = inject(IfxUfeLoggerService);
    }
    transform(url) {
        if (URL.canParse(url)) {
            const parsedUrl = new URL(url);
            if (parsedUrl.hostname.match(this.hostnamePattern)) {
                return this.sanitizer.bypassSecurityTrustResourceUrl(url);
            }
        }
        this.logger.error('Invalid URL', url);
        return url;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeSafeUrlPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "19.1.4", ngImport: i0, type: UfeSafeUrlPipe, isStandalone: true, name: "ifxUfeSafeUrl" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeSafeUrlPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'ifxUfeSafeUrl',
                }]
        }], ctorParameters: () => [] });

class UfeDialogCallArgs {
    constructor(app) {
        this.app = app;
    }
}
class UfeDialogComponent {
    constructor() {
        this.data = inject(MAT_DIALOG_DATA);
        this.logger = inject(IfxUfeLoggerService);
        if (!this.data || !this.data.app) {
            this.logger.error(`UfeDialogComponent requires arguments!`);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeDialogComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: UfeDialogComponent, isStandalone: true, selector: "ifx-ufe-dialog", ngImport: i0, template: "<div class=\"dialog-container\">\r\n  <div class=\"header-container\">\r\n    <mat-dialog-actions\r\n      align=\"end\"\r\n      class=\"mat-dialog-actions\">\r\n      <div>\r\n        <button\r\n          mat-icon-button\r\n          [mat-dialog-close]=\"true\"\r\n          cdkFocusInitial>\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-dialog-actions>\r\n  </div>\r\n\r\n  <div class=\"dialog-content\">\r\n    <mat-dialog-content class=\"mat-dialog-content\">\r\n      <iframe\r\n        [src]=\"data.app.url | ifxUfeSafeUrl\"\r\n        sandbox=\"allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation allow-top-navigation-by-user-activation\"\r\n        id=\"{{ data.app.combinedName }}\"\r\n        class=\"iframe-dialog-size\">\r\n      </iframe>\r\n    </mat-dialog-content>\r\n  </div>\r\n</div>\r\n", styles: [".dialog-container{display:flex;flex-direction:column;justify-content:flex-start;height:100%}.header-container{margin:0;padding:0}.dialog-content{padding:0;margin:0;max-height:100%;height:100%;overflow:hidden}.mat-dialog-actions{margin:0!important}mat-dialog-content{padding:0!important;margin:0!important;height:100%;width:100%;overflow:hidden}.iframe-dialog-size{height:100%;width:100%;padding:0!important;margin:0!important}\n"], dependencies: [{ kind: "directive", type: MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "component", type: MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "directive", type: MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "component", type: MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "pipe", type: UfeSafeUrlPipe, name: "ifxUfeSafeUrl" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ifx-ufe-dialog', imports: [MatDialogActions, MatIconButton, MatDialogClose, MatIcon, CdkScrollable, MatDialogContent, UfeSafeUrlPipe], template: "<div class=\"dialog-container\">\r\n  <div class=\"header-container\">\r\n    <mat-dialog-actions\r\n      align=\"end\"\r\n      class=\"mat-dialog-actions\">\r\n      <div>\r\n        <button\r\n          mat-icon-button\r\n          [mat-dialog-close]=\"true\"\r\n          cdkFocusInitial>\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-dialog-actions>\r\n  </div>\r\n\r\n  <div class=\"dialog-content\">\r\n    <mat-dialog-content class=\"mat-dialog-content\">\r\n      <iframe\r\n        [src]=\"data.app.url | ifxUfeSafeUrl\"\r\n        sandbox=\"allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation allow-top-navigation-by-user-activation\"\r\n        id=\"{{ data.app.combinedName }}\"\r\n        class=\"iframe-dialog-size\">\r\n      </iframe>\r\n    </mat-dialog-content>\r\n  </div>\r\n</div>\r\n", styles: [".dialog-container{display:flex;flex-direction:column;justify-content:flex-start;height:100%}.header-container{margin:0;padding:0}.dialog-content{padding:0;margin:0;max-height:100%;height:100%;overflow:hidden}.mat-dialog-actions{margin:0!important}mat-dialog-content{padding:0!important;margin:0!important;height:100%;width:100%;overflow:hidden}.iframe-dialog-size{height:100%;width:100%;padding:0!important;margin:0!important}\n"] }]
        }], ctorParameters: () => [] });

class AppLink {
    constructor(eName = '', gName = '', uri = null) {
        this.englishName = eName;
        this.germanName = gName;
        if (!uri) {
            this.uri = new URL('');
        }
        else {
            this.uri = uri;
        }
    }
}
class AppLinkGroup {
    constructor() {
        this.links = [];
    }
}

/**
 * Service for storing and retrieving active web resource versions.
 */
class ActiveWebResouceStorageService {
    constructor() {
        this.envStorage = inject(UfeEnvironmentStore);
    }
    /**
     * Saves the selected application version for a given web resource group.
     *
     * @param {WrlApplicationInstance} WrlApplicationInstance - The web resource group to save the version for.
     * @param {string} selectedApplicationVersion - The selected application version to save.
     * @returns {void}
     */
    saveVersion(applicationInstance, selectedApplicationVersion) {
        localStorage.setItem(this.getKeyName(applicationInstance), selectedApplicationVersion);
    }
    /**
     * Deletes the specified web resource group from the active web resource storage.
     *
     * @param WrlApplicationInstance - The web resource group to be deleted.
     */
    deleteVersion(applicationInstance) {
        localStorage.removeItem(this.getKeyName(applicationInstance));
    }
    /**
     * Retrieves the version of a web resource from the storage location.
     *
     * @param WrlApplicationInstance - The web resource group to retrieve the version for.
     * @returns The version of the web resource, or null if it is not found in the storage location.
     */
    getVersion(applicationInstance) {
        return localStorage.getItem(this.getKeyName(applicationInstance));
    }
    getKeyName(applicationInstance) {
        return `configuredWebResource:${this.envStorage.ufeInstanceName()}:${applicationInstance.appName}:${applicationInstance.resourceName}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ActiveWebResouceStorageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ActiveWebResouceStorageService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ActiveWebResouceStorageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class WrlApplicationInstance {
    constructor(_appName, _resourceName) {
        this.appName = _appName;
        this.resourceName = _resourceName;
    }
}
class WrlApplicationInstanceWithVersions extends WrlApplicationInstance {
    constructor(_appName, _resourceName, _versions = []) {
        super(_appName, _resourceName);
        this.versions = [];
        this.setVersions(_versions);
    }
    setVersions(versions) {
        const sortedByVersionDescendingResources = versions.sort((a, b) => b.applicationVersion.localeCompare(a.applicationVersion));
        this.versions = [
            ...sortedByVersionDescendingResources.filter(version => version.appName === this.appName && version.resourceName === this.resourceName),
        ];
    }
}

/**
 * Represents the state store for the Web Resource Locator (wrl).
 * The wrlStateStore class manages the state of the wrl, including environment type, site, configuration path, initialization status, mock resource settings, web resource groups, and resource selection strategy.
 * It provides methods to update the state and retrieve computed properties based on the state.
 */
class WrlStateStore {
    constructor() {
        // initial state
        this._state = signal({
            environmentType: undefined,
            site: undefined,
            configurationPath: undefined,
            initialized: false,
            allowMockResources: true,
            onlyMockResources: true,
            areDefaultVersionsOverridden: false,
            mockWebResources: [],
            applicationInstances: [],
            authenticatedUserId: undefined,
            resourceSelectionStrategy: this.defaultResourceSelectionStrategyFunc.bind(this),
            wrlAnonymousServiceEndpoint: undefined,
            wrlAuthenticatedServiceEndpoint: undefined,
        });
        this.envStore = inject(UfeEnvironmentStore);
        this.environmentType = computed(() => this._state().environmentType);
        this.site = computed(() => this._state().site);
        this.configurationPath = computed(() => this._state().configurationPath);
        this.initialized = computed(() => this._state().initialized);
        this.allowMockResources = computed(() => this._state().allowMockResources);
        this.onlyMockResources = computed(() => this._state().onlyMockResources);
        this.mockWebResources = computed(() => this._state().mockWebResources);
        this.applicationInstances = computed(() => this._state().applicationInstances);
        this.areDefaultVersionsOverridden = computed(() => this._state().areDefaultVersionsOverridden);
        this.resourceSelectionStrategy = computed(() => this._state().resourceSelectionStrategy);
        this.authenticatedUserId = computed(() => this._state().authenticatedUserId);
        this.wrlAnonymousServiceEndpoint = computed(() => this._state().wrlAnonymousServiceEndpoint);
        this.wrlAuthenticatedServiceEndpoint = computed(() => this._state().wrlAuthenticatedServiceEndpoint);
        this.isServiceEndpointUpdateNeeded = computed(() => {
            return ((this.wrlAnonymousServiceEndpoint() == null || this.wrlAuthenticatedServiceEndpoint() == null) &&
                this.envStore.isSelfHosted() &&
                this._state().initialized);
        });
        this.storageService = inject(ActiveWebResouceStorageService);
        this.showWrlVersionSelection = computed(() => this.envStore.isSelfHosted() && this._state().initialized);
    }
    get authenticatedUserId$() {
        return toObservable(this.authenticatedUserId);
    }
    /**
     * Sets the environment state.
     *
     * @param envState - The environment state to set.
     */
    setEnvironmentState(envState) {
        this._state.update(state => ({
            ...state,
            site: envState.site?.toLowerCase(),
            environmentType: envState.environmentType?.toLocaleLowerCase(),
            configurationPath: envState.configurationPath,
            initialized: envState.initialized,
            allowMockResources: envState.allowMockResources,
            onlyMockResources: envState.onlyMockResources,
            mockWebResources: [],
            webResourceGroups: [],
        }));
    }
    /**
     * Sets the mock web resources for the web resource locator state.
     *
     * @param mockWebResources - The array of mock web resources to set.
     */
    setMockResources(mockWebResources) {
        this._state.update(state => ({
            ...state,
            mockWebResources: mockWebResources,
        }));
        mockWebResources.forEach(mockResource => {
            mockResource.isLocal = true;
            const existingApplicationInstance = this.applicationInstances().find(group => group.appName === mockResource.appName && group.resourceName === mockResource.resourceName);
            if (existingApplicationInstance &&
                existingApplicationInstance.versions.findIndex(version => version.applicationVersion === mockResource.applicationVersion) === -1) {
                existingApplicationInstance.versions.push(mockResource);
                this.addOrReplaceApplicationInstance(existingApplicationInstance);
            }
            else {
                this.addOrReplaceApplicationInstance(new WrlApplicationInstanceWithVersions(mockResource.appName, mockResource.resourceName, [mockResource]));
            }
        });
    }
    /**
     * Adds or replaces a web resource group in the state store.
     * If a group with the same app name and resource name already exists, it updates the versions of the existing group.
     * Otherwise, it adds the new group to the state.
     *
     * @param webResourceGroup - The web resource group to add or replace.
     */
    addOrReplaceApplicationInstance(applicationInstance) {
        this._state.update(state => {
            const newApplicationInstances = [...state.applicationInstances];
            const existingInstance = this.getApplicationInstance(applicationInstance.appName, applicationInstance.resourceName);
            if (existingInstance != null) {
                existingInstance.setVersions(applicationInstance.versions);
            }
            else {
                newApplicationInstances.push(applicationInstance);
            }
            return {
                ...state,
                applicationInstances: newApplicationInstances,
            };
        });
    }
    addOrReplaceApplicationInstances(applicationInstances) {
        applicationInstances.forEach(appInstance => {
            this.addOrReplaceApplicationInstance(appInstance);
        });
    }
    setApplicationInstances(applicationInstances) {
        this._state.update(state => ({
            ...state,
            applicationInstances: applicationInstances,
        }));
    }
    setAndMergeApplicationInstanceVersions(applicationInstances) {
        const existingAppInstances = this.applicationInstances();
        applicationInstances.forEach(appInstance => {
            const existingAppInstance = existingAppInstances.find(item => item.appName === appInstance.appName && item.resourceName === appInstance.resourceName);
            if (existingAppInstance != null) {
                const mergedVersions = [...appInstance.versions, ...existingAppInstance.versions];
                const uniqueVersions = new Map();
                mergedVersions.forEach(version => {
                    uniqueVersions.set(version.applicationVersion, version);
                });
                existingAppInstance.versions = Array.from(uniqueVersions.values());
            }
            else {
                existingAppInstances.push(appInstance);
            }
        });
        this.setApplicationInstances(existingAppInstances);
    }
    /**
     * Sets the resource selection strategy for the wrl state store.
     *
     * @param resourceSelectionStrategy - The function that determines the resource selection strategy.
     * @returns void
     */
    setResourceSelectionStrategy(resourceSelectionStrategy) {
        this._state.update(state => ({
            ...state,
            resourceSelectionStrategy: resourceSelectionStrategy ?? this.defaultResourceSelectionStrategyFunc.bind(this),
        }));
    }
    /**
     * Sets the status of overriding default versions.
     *
     * @param {boolean} status - The status of overriding default versions.
     */
    setDefaultVersionsOverridden(status) {
        this._state.update(state => ({
            ...state,
            areDefaultVersionsOverridden: status,
        }));
    }
    setInitialized(initialized) {
        this._state.update(state => ({
            ...state,
            initialized: initialized,
        }));
    }
    /**
     * Default resource selection strategy function.
     *
     * @param resources - An array of WebResource objects.
     * @returns The selected WebResource object based on the default selection strategy.
     */
    defaultResourceSelectionStrategyFunc(resources) {
        if (!resources || resources.length === 0) {
            return undefined;
        }
        const appName = resources[0].appName;
        const resourceName = resources[0].resourceName;
        const userConfiguredResourceVerion = this.storageService.getVersion(new WrlApplicationInstanceWithVersions(appName, resourceName, []));
        let selectedResource = resources.find(res => res.applicationVersion === userConfiguredResourceVerion &&
            res.appName === appName &&
            res.resourceName === resourceName);
        if (selectedResource != null) {
            selectedResource.isDefaultVersionOverridden = true;
            this.setDefaultVersionsOverridden(true);
            return selectedResource;
        }
        const sortedByVersionDescendingResources = resources.sort((a, b) => b.applicationVersion.localeCompare(a.applicationVersion));
        selectedResource = sortedByVersionDescendingResources.find(res => res.anonymous);
        return selectedResource != null ? selectedResource : sortedByVersionDescendingResources[0];
    }
    getApplicationInstance(appName, resourceName) {
        return this.applicationInstances().find(appInstance => appInstance.appName === appName && appInstance.resourceName === resourceName);
    }
    setAuthenticatedUserId(authenticatedUserId) {
        this._state.update(state => ({
            ...state,
            authenticatedUserId: authenticatedUserId,
        }));
    }
    setWrlAuthenticatedServiceEndpoint(wrlAuthenticatedServiceEndpoint) {
        this._state.update(state => ({
            ...state,
            wrlAuthenticatedServiceEndpoint: wrlAuthenticatedServiceEndpoint,
        }));
    }
    setWrlAnonymousServiceEndpoint(wrlAnonymousServiceEndpoint) {
        this._state.update(state => ({
            ...state,
            wrlAnonymousServiceEndpoint: wrlAnonymousServiceEndpoint,
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: WrlStateStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: WrlStateStore, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: WrlStateStore, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

/**
 * Service for accessing the location transparent service of WRL and retrieving the appropriate site and environment specific endpoint for retrieving local application resources.
 */
class WrlLocationTransparentServiceUriResolverService {
    constructor() {
        this.httpClient = inject(HttpClient);
        this.loggerService = inject(IfxUfeLoggerService);
    }
    /**
     * Access the location transparent service of WRL and get the appropiate site and environment specific endpoint which should be used to retieve local application resources.
     * @param env - the infrastructure environment
     * @param site - the site code of the site which should be targeted
     * @returns the single WRL application resource URI
     */
    async getLocationTransparentServiceEndpoint(env, site) {
        let endpointUri = undefined;
        let locationTransparentEndpoint;
        try {
            locationTransparentEndpoint = this.getWrlLocationTransparentEndpoint(env);
            this.loggerService.debug('getWrlLocationTransparentEndpoint:Finding available wrl LocationTransparentUriResponse from uri', locationTransparentEndpoint);
            const serviceResponse = await this.getServiceResponse(locationTransparentEndpoint);
            // ToDO: Check if the site is available in the response
            if (serviceResponse?.services?.apl[site] == null) {
                this.loggerService.warn(`getLocationTransparentServiceEndpoint:There is no WRL service endpoint in transperent configuration  ${locationTransparentEndpoint} for site '${site}'.`, serviceResponse);
                return endpointUri;
            }
            const siteApl = serviceResponse?.services?.apl[site];
            if (siteApl?.version) {
                const endpoint = serviceResponse?.services?.endpoints[siteApl.version];
                endpointUri = this.getEndpointUri(siteApl.host, endpoint);
            }
            else {
                this.loggerService.warn(`getLocationTransparentServiceEndpoint:Invalid response for from uri ${locationTransparentEndpoint} for site '${site}'.`, siteApl);
            }
        }
        catch (error) {
            this.handleError(error, locationTransparentEndpoint, site);
        }
        return endpointUri;
    }
    async getServiceResponse(locationTransparentUri) {
        const serviceRequest$ = this.httpClient.get(locationTransparentUri);
        return firstValueFrom(serviceRequest$);
    }
    getEndpointUri(host, endpoint) {
        return {
            anonymous: host + endpoint?.anonymous,
            authenticated: host + endpoint?.authenticated,
        };
    }
    getWrlLocationTransparentEndpoint(env) {
        const hostNamePrefix = env !== 'prod' ? '-staging' : '';
        return `https://wrl-service-locator${hostNamePrefix}.infineon.com/locations`;
    }
    handleError(error, locationTransparentUri, site) {
        const httpError = error;
        this.loggerService.error('getLocationTransparentServiceEndpoint:Error getting data from ' +
            locationTransparentUri +
            ' environment in ' +
            site +
            ': ' +
            httpError?.status +
            ' - ' +
            httpError?.message +
            '.', httpError);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: WrlLocationTransparentServiceUriResolverService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: WrlLocationTransparentServiceUriResolverService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: WrlLocationTransparentServiceUriResolverService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

/**
 * Service for resolving resource URIs from the hosted WRL service.
 */
class WrlWebResourcesResolverService {
    constructor() {
        this.wrlTransparentUriResolver = inject(WrlLocationTransparentServiceUriResolverService);
        this.logger = inject(IfxUfeLoggerService);
        this.http = inject(HttpClient);
        this.auth = inject(AuthenticationService);
        this.wrlStateStore = inject(WrlStateStore);
        this.LogEnvironmentOutput = ' environment in ';
        this.logger.debug('constructor wrlResourceUrisResolverService');
    }
    async resolveAnonymusWebResourcesForAppInstance(locationServiceEndpoint, appInstance) {
        try {
            const isAnonymous = true;
            const requestOptions = {
                headers: this.getHttpHeader(isAnonymous),
            };
            const singleAppliacationGetWebResourcesRequestUri = locationServiceEndpoint.href + appInstance.appName + '/' + appInstance.resourceName;
            this.logger.debug('getLocationResources:calling ', singleAppliacationGetWebResourcesRequestUri);
            const serviceRequest$ = this.http.get(singleAppliacationGetWebResourcesRequestUri, requestOptions);
            const serviceResponse = await firstValueFrom(serviceRequest$);
            this.logger.debug('getLocationResources:Response from ' + singleAppliacationGetWebResourcesRequestUri, serviceResponse);
            const anonymousWebResource = [serviceResponse];
            this.extendWebResoucesWithWrlApplicationInstance(anonymousWebResource, appInstance);
            return new WrlApplicationInstanceWithVersions(appInstance.appName, appInstance.resourceName, anonymousWebResource);
        }
        catch (error) {
            const httpError = error;
            this.logger.error('Error getting location resources for ' +
                this.wrlStateStore.environmentType() +
                this.LogEnvironmentOutput +
                this.wrlStateStore.site() +
                ': ' +
                httpError.status +
                ' - ' +
                httpError.message +
                '. ' +
                httpError?.headers?.get('Www-Authenticate'));
            return new WrlApplicationInstanceWithVersions(appInstance.appName, appInstance.resourceName, []);
        }
    }
    async getAllUserAssignedWebResources(locationServiceEndpoint) {
        return await this.getWebResourcesForAppInstances(locationServiceEndpoint, []);
    }
    async getWebResourcesForAppInstances(locationServiceEndpoint, applicationInstances) {
        const result = [];
        try {
            const isAnonymous = false;
            const requestOptions = {
                headers: this.getHttpHeader(isAnonymous),
            };
            const includeAdditionalPrivateUrls = applicationInstances.length === 0;
            locationServiceEndpoint.searchParams.set('includeAdditionalPrivateUrls', includeAdditionalPrivateUrls.toString());
            this.logger.debug('getLocationResources:calling ', locationServiceEndpoint.href);
            const serviceRequest$ = this.http.post(locationServiceEndpoint.href, [...applicationInstances], requestOptions);
            const serviceResponse = await firstValueFrom(serviceRequest$);
            serviceResponse.forEach(appInstance => {
                this.extendWebResoucesWithWrlApplicationInstance(appInstance.versions, appInstance);
                result.push(new WrlApplicationInstanceWithVersions(appInstance.appName, appInstance.resourceName, appInstance.versions));
            });
        }
        catch (error) {
            const httpError = error;
            this.logger.error('Error getting location resources for ' +
                this.wrlStateStore.environmentType() +
                this.LogEnvironmentOutput +
                this.wrlStateStore.site() +
                ': ' +
                httpError.status +
                ' - ' +
                httpError.message +
                '. ' +
                httpError?.headers?.get('Www-Authenticate'));
        }
        return result;
    }
    async getWebResourcesServiceEndpoint(envType, site) {
        if (envType && site) {
            return await this.wrlTransparentUriResolver.getLocationTransparentServiceEndpoint(envType, site);
        }
        return undefined;
    }
    getHttpHeader(isAnonymous) {
        let headers = {};
        // todo manuel - we need to keep the isecure http interceptor in mind ... this might interfere
        if (isAnonymous) {
            return new HttpHeaders(headers);
        }
        const authToken = this.auth.getToken;
        if (authToken == null) {
            this.logger.warn('isAnonymous was set to false but no token available. Request will only return data for anonymous');
        }
        else {
            this.logger.debug('with token');
            headers = {
                Authorization: 'Bearer ' + authToken,
            };
        }
        return new HttpHeaders(headers);
    }
    /**
     * The WRL service does not include the call arguments name and resource name. Since we need them later in our logic we need to extend it here.
     * @param resource the WRL returned by the WRL service
     * @param applicationName
     * @param resourceName
     */
    extendWebResoucesWithWrlApplicationInstance(webResources, appInstance) {
        webResources.forEach(res => {
            res.appName = appInstance.appName;
            res.resourceName = appInstance.resourceName;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: WrlWebResourcesResolverService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: WrlWebResourcesResolverService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: WrlWebResourcesResolverService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class WrlApplicationInstanceManagerService {
    constructor() {
        this.wrlStateStore = inject(WrlStateStore);
        this.envStore = inject(UfeEnvironmentStore);
        this.logger = inject(IfxUfeLoggerService);
        this.auth = inject(AuthenticationService);
        this.wlrWebResourcesResolver = inject(WrlWebResourcesResolverService);
        this.LogEnvironmentOutput = ' environment in ';
        // WrlApplicationInstanceManagerService should only run in a SELF Hosted environment and not in a child uFE
        // if the self hosted environment run in a iframe the query parameter '_ifxEnvironment' have to be set to 'SELF'
        if (this.envStore.isSelfHosted() && !isSilentRefreshInProcess()) {
            this.setupSubscriberWrlInitializedSubscription();
            this.setupSubscriberDataSubscription();
        }
    }
    setupSubscriberWrlInitializedSubscription() {
        toObservable(this.wrlStateStore.initialized)
            .pipe(takeUntilDestroyed())
            .subscribe(() => {
            this.setWrlServiceEndointAsync();
        });
    }
    setupSubscriberDataSubscription() {
        this.auth.subscriberData$
            .pipe(distinctUntilChanged((_prev, curr) => {
            return (this.wrlStateStore.authenticatedUserId() === curr.credentials.subscriberName + curr.kerberos.subscriberName);
        }), takeUntilDestroyed())
            .subscribe(async (data) => {
            if (this.shouldRegisterApplicationInstances()) {
                await this.setWrlServiceEndointAsync();
                await this.tryRegisterApplicationInstances(data);
            }
            else {
                this.wrlStateStore.setApplicationInstances([]);
            }
        });
    }
    shouldRegisterApplicationInstances() {
        if (!this.wrlStateStore.initialized()) {
            this.logger.info('WRL service not yet initialized');
        }
        return this.wrlStateStore.initialized() && this.auth.isUserAuthenticated;
    }
    async tryRegisterApplicationInstances(data) {
        try {
            await this.registerApplicationInstancesAsync();
            const subscriberName = data.kerberos.subscriberName.trim() + data.credentials.subscriberName.trim();
            this.wrlStateStore.setAuthenticatedUserId(subscriberName);
        }
        catch (error) {
            this.logger.error('Error registering application instances for ' +
                this.wrlStateStore.environmentType() +
                this.LogEnvironmentOutput +
                this.wrlStateStore.site());
        }
    }
    async setWrlServiceEndointAsync() {
        const envType = this.wrlStateStore.environmentType();
        const site = this.wrlStateStore.site()?.toLocaleLowerCase();
        let wrlServiceEndpoint = undefined;
        this.logger.debug('Resolving WRL Service Endpoint for ' + envType + this.LogEnvironmentOutput + site);
        if (!this.wrlStateStore.isServiceEndpointUpdateNeeded()) {
            if (!this.wrlStateStore.initialized()) {
                this.logger.warn('WRL service not yet initialized');
            }
            return;
        }
        try {
            wrlServiceEndpoint = await this.wlrWebResourcesResolver.getWebResourcesServiceEndpoint(envType, site);
        }
        catch (error) {
            this.logger.error('Resolving WRL Service Endpoint throws an error.', error);
        }
        const anonymousServiceEndpoint = wrlServiceEndpoint?.anonymous;
        const authenticatedServiceEndpoint = wrlServiceEndpoint?.authenticated;
        if (anonymousServiceEndpoint == null ||
            authenticatedServiceEndpoint == null ||
            !URL.canParse(anonymousServiceEndpoint) ||
            !URL.canParse(authenticatedServiceEndpoint)) {
            throw new Error('Could not find WRL location service endpoint for ' +
                this.wrlStateStore.environmentType() +
                this.LogEnvironmentOutput +
                this.wrlStateStore.site());
        }
        this.wrlStateStore.setWrlAnonymousServiceEndpoint(new URL(anonymousServiceEndpoint));
        this.wrlStateStore.setWrlAuthenticatedServiceEndpoint(new URL(authenticatedServiceEndpoint));
    }
    async registerApplicationInstancesAsync() {
        const applicationInstances = [];
        this.wrlStateStore.mockWebResources().forEach(mockResource => {
            const appInstance = new WrlApplicationInstanceWithVersions(mockResource.appName, mockResource.resourceName);
            appInstance.versions = [mockResource];
            applicationInstances.push(appInstance);
        });
        if (this.wrlStateStore.onlyMockResources()) {
            this.wrlStateStore.setApplicationInstances(applicationInstances);
            return;
        }
        const allUserDirectlyAssignedAppInstances = await this.wlrWebResourcesResolver.getAllUserAssignedWebResources(this.getUrl(this.wrlStateStore.wrlAuthenticatedServiceEndpoint()));
        allUserDirectlyAssignedAppInstances.forEach(appInstance => {
            if (!applicationInstances.some(ai => ai.appName === appInstance.appName && ai.resourceName === appInstance.resourceName)) {
                applicationInstances.push(appInstance);
            }
        });
        await this.setWebResourcesForAppInstancesAsync(applicationInstances);
    }
    async setWebResourcesForAppInstancesAsync(applicationInstances) {
        const withoutVersions = applicationInstances.map(appInstance => new WrlApplicationInstance(appInstance.appName, appInstance.resourceName));
        const allApplicationInstancesWithVersions = (await this.wlrWebResourcesResolver.getWebResourcesForAppInstances(this.getUrl(this.wrlStateStore.wrlAuthenticatedServiceEndpoint()), withoutVersions)).filter(item => item.versions.length > 0);
        this.wrlStateStore.setAndMergeApplicationInstanceVersions([
            ...applicationInstances,
            ...allApplicationInstancesWithVersions,
        ]);
    }
    async findVersionsForApplicationInstancesAsync(instances, isAnonymous) {
        const notExistingInstances = this.getNotExistingInstances(instances);
        await this.resolveWebResourcesForAppInstancesAsync(notExistingInstances, isAnonymous);
        return this.getExistingInstances(instances);
    }
    async resolveWebResourcesForAppInstancesAsync(appInstances, isAnonymous) {
        await this.setWrlServiceEndointAsync();
        if (isAnonymous) {
            await this.resolveAnonymousWebResources(appInstances, this.getUrl(this.wrlStateStore.wrlAnonymousServiceEndpoint()));
        }
        else {
            await this.resolveAuthenticatedWebResources(appInstances, this.getUrl(this.wrlStateStore.wrlAuthenticatedServiceEndpoint()));
        }
    }
    async resolveAnonymousWebResources(appInstances, serviceEndpointUrl) {
        for (const appInstance of appInstances) {
            const resolvedAppInstance = await this.wlrWebResourcesResolver.resolveAnonymusWebResourcesForAppInstance(serviceEndpointUrl, appInstance);
            this.wrlStateStore.addOrReplaceApplicationInstance(resolvedAppInstance);
        }
    }
    async resolveAuthenticatedWebResources(appInstances, serviceEndpointUrl) {
        const foundAppInstances = await this.wlrWebResourcesResolver.getWebResourcesForAppInstances(serviceEndpointUrl, appInstances);
        foundAppInstances
            .filter(item => item.versions.length > 0)
            .forEach(foundAppInstance => {
            this.wrlStateStore.addOrReplaceApplicationInstance(foundAppInstance);
        });
    }
    getExistingInstances(instances) {
        const foundInstances = instances
            .map(instance => this.wrlStateStore.getApplicationInstance(instance.appName, instance.resourceName))
            .filter(instance => instance != undefined);
        return foundInstances.filter(instance => instance.versions.length > 0);
    }
    getNotExistingInstances(instances) {
        return instances.filter(instance => !this.isInstanceExisting(instance.appName, instance.resourceName));
    }
    isInstanceExisting(appName, resourceName) {
        const instance = this.wrlStateStore.getApplicationInstance(appName, resourceName);
        return instance != null && instance.versions.length > 0;
    }
    getUrl(url) {
        return url ?? new URL('');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: WrlApplicationInstanceManagerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: WrlApplicationInstanceManagerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: WrlApplicationInstanceManagerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

/**
 * The WebResourceService class provides methods for managing web resources.
 */
class WebResourceService {
    constructor() {
        this.http = inject(HttpClient);
        this.comm = inject(ShellCommunicatorService);
        this.envStore = inject(UfeEnvironmentStore);
        this.logger = inject(IfxUfeLoggerService);
        this.stateStore = inject(WrlStateStore);
        this.applicationInstanceManager = inject(WrlApplicationInstanceManagerService);
        this.resourceNotFoundHandler = undefined;
        this.destroyRef = inject(DestroyRef);
        window.sessionStorage.removeItem('WrlMockResources');
        effect(() => {
            this.logger.debug('WebResourceService:WRL detect this service init as ' + this.envStore.executionEnvironment());
        });
    }
    /**
     * Initializes the Web Resource Locator (WRL) service.
     *
     * @param env - The environment type.
     * @param site - The site name.
     * @param path - The configuration path (optional).
     * @param resourceSelectionStrategy - The resource selection strategy function (optional).
     * @param resourceNotFoundHandler - The resource not found handler function (optional).
     * @returns A promise that resolves when the initialization is complete.
     */
    async initWrl(env, site, path, resourceSelectionStrategy = undefined, resourceNotFoundHandler = undefined) {
        this.stateStore.setEnvironmentState({
            environmentType: env,
            site: site,
            configurationPath: path,
            initialized: false,
            allowMockResources: true,
            onlyMockResources: false,
        });
        if (resourceSelectionStrategy != null) {
            this.stateStore.setResourceSelectionStrategy(resourceSelectionStrategy);
        }
        if (!this.envStore.isSelfHosted()) {
            this.logger.info('WRL Service is only running in self hosted mode');
            return;
        }
        await this.loadWrlMockResources(path);
        if (!resourceNotFoundHandler) {
            this.resourceNotFoundHandler = (applicationName, resourceName) => {
                this.logger.error(`No web resource found for name: ${applicationName} and resource name: ${resourceName} in ${site}|${env}!`);
            };
        }
        else {
            this.resourceNotFoundHandler = resourceNotFoundHandler;
        }
        this.stateStore.setInitialized(true);
        this.logger.info('initWrl:WRL Service initialized with env: ' + env + ' site: ' + site + ' path: ' + path);
    }
    /**
     * Launches a web resource as a shell.
     *
     * @param sender - The sender of the request.
     * @param applicationName - The name of the application.
     * @param resourceName - The name of the resource.
     * @param args - The arguments for the web resource.
     * @param isAnonymous - Indicates whether the user is anonymous.
     * @param target - Indicates whether the user is anonymous.
     * @returns A promise that resolves when the web resource is launched.
     */
    async launchWebResourceAsShell(sender, applicationName, resourceName, args, isAnonymous, target = undefined) {
        const resource = await this.findWebResource(applicationName, resourceName, isAnonymous);
        this.openWebResource(sender, resource, args, target);
    }
    /**
     * Finds a web resource based on the provided application name, resource name, and anonymous flag.
     *
     * @param applicationName - The name of the application.
     * @param resourceName - The name of the resource.
     * @param isAnonymous - A flag indicating whether the resource can be accessed anonymously.
     * @returns A promise that resolves to the found web resource.
     * @throws An error if the resource is not found.
     */
    async findWebResource(applicationName, resourceName, isAnonymous) {
        const activeWebResources = await this.findActiveResourcesAsync([new WrlApplicationInstance(applicationName, resourceName)], isAnonymous);
        if (activeWebResources.length > 0) {
            return activeWebResources[0];
        }
        // the handler may not select any resource this could lead to an error
        if (this.resourceNotFoundHandler) {
            this.resourceNotFoundHandler(applicationName, resourceName);
        }
        throw new Error('Resource not found: ' + applicationName + ' ' + resourceName);
    }
    async findWebResourcesAsync(applicationInstances) {
        const foundWebResources = await this.findActiveResourcesAsync(applicationInstances, false);
        return foundWebResources;
    }
    /**
     * Tries to load the complete data from from WRL mock JSON file and filters the data to the requested application and resource.
     * @param applicationName
     * @param resourceName
     * @returns empty response if no file is defined or the JSON content if a path is defined in the config
     */
    getResourceUrisFromWrlMock(applicationName, resourceName) {
        const foundMockResources = this.stateStore
            .mockWebResources()
            .filter(res => res.appName === applicationName && res.resourceName === resourceName);
        if (foundMockResources.length === 0) {
            this.logger.warn(`No mock resources found for ${applicationName} and ${resourceName}`, this.stateStore.mockWebResources());
        }
        return foundMockResources;
    }
    async loadWrlMockResources(configurationPath) {
        // todo manuel - we need to ensure that only https localhost or *.infineon.com or fiapp protocol are loaded from the local wrl.json mock
        if (configurationPath == null || configurationPath === '' || !this.stateStore.allowMockResources()) {
            return;
        }
        try {
            const test = this.http;
            const httpRequest = test.get(configurationPath);
            const resources = await firstValueFrom(httpRequest);
            this.logger.info(`WRL mock resources loaded from ${configurationPath}`, resources);
            this.stateStore.setMockResources(resources);
            window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'WrlMockResources', configurationPath);
        }
        catch {
            this.logger.warn(`getting mock ${configurationPath} wrl resources failed. Skip handling of ${configurationPath} file.`);
        }
    }
    /**
     * Opens a web resource.
     *
     * @param sender - The sender of the web resource.
     * @param resource - The web resource to open.
     * @param args - Additional arguments for opening the web resource.
     */
    openWebResource(sender, resource, args, targetLocation = undefined) {
        const message = new UfeCommand(sender, 'OPEN_WEB_RESOURCE', [
            new OpenWebResourceCommandArgument(resource, args, targetLocation),
        ]);
        this.comm.sendShellMessage(message);
    }
    getActiveWebResourceVersion(instance) {
        return this.stateStore.resourceSelectionStrategy()(instance.versions);
    }
    async findActiveResourcesAsync(applicationInstances, isAnonymous) {
        const activeResources = [];
        const instances = await this.applicationInstanceManager.findVersionsForApplicationInstancesAsync(applicationInstances, isAnonymous);
        for (const instance of instances) {
            const activeResource = this.getActiveWebResourceVersion(instance);
            if (activeResource != null) {
                activeResources.push(activeResource);
            }
        }
        return activeResources;
    }
    isInIframe() {
        return isInIframe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: WebResourceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: WebResourceService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: WebResourceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

/**
 * FrontEndDiscoveryService allows Shells to get a list of all possible uFEs that can be instantiated.  This service
 * is only for use by the shell component and allows for one-time registration of new uFEs with the back-end API to
 * make them available to all shells.
 */
class FrontEndDiscoveryService extends RootInjectorGuard {
    constructor() {
        super('FrontEndDiscoveryService');
        this.http = inject(HttpClient);
        this.window = inject(Window);
        this.wrlSvc = inject(WebResourceService);
        this.shellStateStore = inject(ShellStateStore);
        this.auth = inject(AuthenticationService);
        this.env = inject(UfeEnvironmentStore);
        this.loadShellApplicationsAsync();
    }
    async getAppsAsync() {
        this.logger.debug('getApps:Retrieving available uFEs');
        if (!this.env.isShellApp() || !this.auth.isUserAuthenticated) {
            this.shellStateStore.setAvailableUfe([]);
            return this.shellStateStore.availableUfe();
        }
        await this.loadShellApplicationsAsync();
        const appList = await this.getApplicationListWithAssignedUrlAsync();
        this.shellStateStore.setAvailableUfe(appList);
        return this.shellStateStore.availableUfe();
    }
    getApps() {
        return toObservable(this.shellStateStore.availableUfe);
    }
    getLinkGroup(groupName) {
        //TODO This will become a back end service call to the discovery service.  This is currently just a stub for testing
        if (groupName == null || groupName === '') {
            return of(new AppLinkGroup());
        }
        const path = this.window.location.origin + `/assets/${groupName}.json`;
        return this.http.get(path).pipe(catchError(error => {
            this.logger.warn(`getLinkGroup for path ${path} responses an error`, error);
            return of(new AppLinkGroup());
        }));
    }
    createAppDescriptionFromWebResource(resource) {
        const app = AppDescription.create(resource.appName, resource.resourceName, resource.url, 'not-found');
        if (resource.webResourceType.toLowerCase() === 'ufe') {
            // we only need to add the ufeid to ufe classified resources
            this.modifyUrl(app);
        }
        return app;
    }
    modifyUrl(ufe) {
        if (URL.canParse(ufe.url)) {
            const url = new URL(ufe.url);
            url.searchParams.set('ufeid', ufe.combinedName);
            url.searchParams.set('wufeid', this.env.activeInstanceId());
            ufe.url = url.toString();
        }
        else {
            this.logger.error(`Invalid URL ${ufe.url} for uFE:${ufe.combinedName}`);
        }
    }
    async loadShellApplicationsAsync() {
        try {
            if (this.shellStateStore.availableUfeLoaded()) {
                return;
            }
            const apps = await this.getShellApplicationsAsync();
            this.shellStateStore.setAvailableUfe(apps.AvailableUfe);
            this.shellStateStore.setAvailableUfeLoaded(true);
            this.shellStateStore.setScenariosLoaded(false);
        }
        catch (error) {
            this.logger.error('loadShellApplicationsAsync:Error retrieving shell applications', error);
        }
    }
    async getShellApplicationsAsync() {
        let result = { AvailableUfe: [] };
        if (environment?.useFrontEndJson != undefined && !environment.useFrontEndJson) {
            return result;
        }
        try {
            const path = this.window.location.origin + '/assets/frontEnd.json';
            const request = this.http.get(path);
            result = await firstValueFrom(request);
        }
        catch (error) {
            this.logger.warn('loading rontEnd.json failed. This is expected for uFE shell');
        }
        return result;
    }
    /**
     * This method merges the app list (frontend.json) with the data of the web resource locator. This is requird that we can merge the location information for the shell with the wrl data.
     * This is to ensure backward compatibility.
     * @param resource the web resource locator data
     */
    updateWebResourceAppList(resource) {
        // todo manuel: we have two places where the appList is maintained and updated on the fly. this need to be merged into one place with one list.
        const app = this.createAppDescriptionFromWebResource(resource);
        const availableApps = this.shellStateStore.availableUfe().AvailableUfe;
        const isAppAlreadyExisting = availableApps.some(availableApp => availableApp.combinedName === app.combinedName);
        if (!isAppAlreadyExisting) {
            availableApps.push(app);
            this.shellStateStore.setAvailableUfe(availableApps);
        }
    }
    async getApplicationListWithAssignedUrlAsync() {
        const newList = [];
        const ufeApplicationList = this.shellStateStore
            .availableUfe()
            .AvailableUfe.map(app => new WrlApplicationInstance(app.appName, app.resourceName));
        const activeUfeWebResources = await this.wrlSvc.findWebResourcesAsync(ufeApplicationList);
        for (const ufeApp of this.shellStateStore.availableUfe().AvailableUfe) {
            const activeUfeWebResource = activeUfeWebResources.find(webResource => webResource.appName === ufeApp.appName && webResource.resourceName === ufeApp.resourceName);
            if (activeUfeWebResource == undefined) {
                this.logger.error(`There is no web resource for ${ufeApp.appName} ${ufeApp.resourceName}`);
                newList.push(ufeApp);
                continue;
            }
            const newApp = AppDescription.create(ufeApp.appName, ufeApp.resourceName, activeUfeWebResource.url, ufeApp.location, ufeApp.dialogConfig);
            this.modifyUrl(newApp);
            newList.push(newApp);
        }
        return newList;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FrontEndDiscoveryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FrontEndDiscoveryService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FrontEndDiscoveryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class PeerCommandHandlerService extends RootInjectorGuard {
    constructor() {
        super('PeerCommandHandlerService');
        this.peerCom = inject(PeerCommunicatorService);
        this.shellCom = inject(ShellCommunicatorService);
        this.envStore = inject(UfeEnvironmentStore);
        this.shellStateStore = inject(ShellStateStore);
        this.feDiscovery = inject(FrontEndDiscoveryService);
        this.ufeReadyNotification$ = new Subject();
        this.destroyRef = inject(DestroyRef);
        this.wrlSvc = inject(WebResourceService);
        this.auth = inject(AuthenticationService);
        this.dialog = inject(MatDialog);
    }
    canProcess() {
        return this.envStore.isSelfHosted();
    }
    handleCommand(ufeCommand) {
        switch (ufeCommand.command) {
            case 'PEER_MESSAGE':
                this.handlePeerMessage(ufeCommand);
                break;
            case 'PEER_READY':
                this.peerCom.setPeerReady(ufeCommand);
                break;
            case 'PEER_MESSAGE_IN_TAB': {
                /** The second boolean parameter is defined here to distinguish between
                 * the dialog-modal and dialog-browser, and by default it is false (dialog-modal). */
                this.peerCom.sendPeerMessageInTab(ufeCommand, false);
                break;
            }
            case 'UFE_READY':
                this.handleUfeReadyAsync(ufeCommand);
                break;
            case 'PEER_MESSAGE_WRL':
                this.handlePeerMessageWrl(ufeCommand);
                break;
            case 'CLOSE_UFE_WRL':
                this.handleCloseUfeWrl(ufeCommand);
                break;
            case 'OPEN_WEB_RESOURCE':
                this.logger.info('OPEN_WEB_RESOURCE', ufeCommand);
                this.openWebResource(ufeCommand);
                break;
            case 'OPEN_UFE':
                this.handleOpenUfe(ufeCommand);
                break;
            case 'OPENER_ID':
                this.peerCom.registerOpener(ufeCommand);
                break;
            case 'OPEN_UFE_IN_TAB': {
                /** The second boolean parameter is defined here to distinguish between the
                 * dialog-modal and dialog-browser, and by default it is false (dialog-modal).*/
                this.peerCom.openPeerInTab(ufeCommand, false);
                break;
            }
            case 'AUTH_TOKEN_REQUIRED':
                this.sendAuthToken(this.getRequestingUfe(ufeCommand));
                break;
            case 'REFRESH_COMPLETE':
                this.logger.debug('SHELL REFRESH_COMPLETE completeRefresh', window.location.href, this.shellStateStore.activeApps());
                this.shellStateStore.activeApps().forEach(app => {
                    this.sendAuthToken(app);
                });
                break;
        }
    }
    async openWebResource(ufeCommand) {
        let wrlCommand = ufeCommand.params[0];
        if (!isOpenWebResourceCommandArgument(wrlCommand)) {
            // to be backward compatible
            wrlCommand = new OpenWebResourceCommandArgument(ufeCommand.params[0], ufeCommand.params[1]);
        }
        const webResourceToOpen = wrlCommand.webResource;
        const webResourceArgs = wrlCommand.args;
        const webResourceTargetLocation = wrlCommand.targetLocation;
        this.feDiscovery.updateWebResourceAppList(webResourceToOpen);
        const tabName = webResourceToOpen.appName.trim() + '_' + webResourceToOpen.resourceName.trim();
        if (webResourceToOpen.webResourceType.toLowerCase() == 'ufe') {
            // find updated target data and location, launch as dialog if needed
            const ufeToOpen = this.shellStateStore.appList().find(ad => ad.combinedName == tabName);
            if (ufeToOpen == undefined) {
                this.logger.error('Could not find the uFE', tabName);
                return;
            }
            const targetLocation = ufeToOpen.location === 'not-found' ? (webResourceTargetLocation ?? ufeToOpen.location) : ufeToOpen.location;
            if (targetLocation == 'dialog-modal') {
                const peerMessageCommand = new UfeCommand(this.envStore.ufeInstanceName(), 'PEER_MESSAGE', [
                    tabName,
                    wrlCommand.args,
                ]);
                this.showUfeDialog(peerMessageCommand, this.resolveUfeToOpenUrl(ufeToOpen, webResourceToOpen, webResourceArgs));
            }
            else if (targetLocation == 'dialog-browser') {
                try {
                    const peerMessageCommand = new UfeCommand(this.envStore.ufeInstanceName(), 'PEER_MESSAGE', [
                        tabName,
                        wrlCommand.args,
                    ]);
                    ufeToOpen.windowReference = this.peerCom.sendPeerMessageInTab(peerMessageCommand, true, 'SHELL');
                }
                catch (error) {
                    this.shellCom.sendWarningNotification(`Could not open the the uFE ${ufeToOpen.appName} in a new tab`);
                    this.logger.error('Could not open the the uFE', ufeToOpen.appName, error);
                }
            }
            else if (targetLocation === 'new-tab' || targetLocation === 'not-found' || targetLocation === 'new-shell-tab') {
                // we now map the OPEN_WEB_RESOURCE message to a PEER_MESSAGE to keep it transparent to the library consumers
                // we also need to override the web resource to be the actual web resource identifier
                const peerMessageCommand = new UfeCommand(ufeCommand.sender, 'PEER_MESSAGE', [tabName, wrlCommand.args]);
                const targetEnvType = targetLocation === 'new-shell-tab' ? 'SHELL' : 'SELF';
                this.peerCom.sendPeerMessageInTab(peerMessageCommand, false, targetEnvType);
            }
            else {
                // we now map the OPEN_WEB_RESOURCE message to a PEER_MESSAGE to keep it transparent to the library consumers
                // we also need to override the web resource to be the actual web resource identifier
                // ToDo: is this else still needed?
                const peerMessageCommand = new UfeCommand(ufeCommand.sender, 'PEER_MESSAGE', [tabName, wrlCommand.args]);
                this.handlePeerMessage(peerMessageCommand);
            }
        }
        else {
            const url = this.resolveWebResourceQueryParams(webResourceToOpen, webResourceArgs);
            window.open(url, tabName);
        }
    }
    resolveUfeToOpenUrl(ufeToOpen, webResourceToOpen, peerMessageArgs) {
        const targetUfeToOpen = AppDescription.copy(ufeToOpen);
        const webResourceWithUfeUrl = { ...webResourceToOpen, url: ufeToOpen.url };
        targetUfeToOpen.url = this.resolveWebResourceQueryParams(webResourceWithUfeUrl, peerMessageArgs).href;
        return targetUfeToOpen;
    }
    resolveWebResourceQueryParams(webResource, peerMessageArgs) {
        let webResourceUrl = webResource.url;
        // todo manuel - we need to add some sort of argument check here - see description of other identical comment
        this.logger.info('resource is of type not ufe');
        if (webResource.args && !peerMessageArgs) {
            console.error(`The resource ${webResource.appName} + ${webResource.resourceName} requires ${webResource.args.length} arguments but no were provided`);
        }
        if (webResource.args && peerMessageArgs) {
            const argsMap = new Map();
            for (const [key, value] of Object.entries(peerMessageArgs)) {
                argsMap.set(key, value);
            }
            webResource.args.forEach((arg) => {
                const value = argsMap.get(arg.name);
                if (value === undefined) {
                    console.error(`The resource ${webResource.appName} + ${webResource.resourceName} requires argument ${arg.name}, but the call provided no value for it`);
                }
                else {
                    webResourceUrl = this.replaceAll(webResourceUrl, '<' + arg.name + '>', value);
                }
            });
        }
        return new URL(webResourceUrl);
    }
    replaceAll(text, toReplace, replacement) {
        return text.split(toReplace).join(replacement);
    }
    showUfeDialog(cmd, target) {
        if (!target.dialogConfig) {
            target.dialogConfig = new UfeDialogConfig();
        }
        this.sendPeerMessageAfterUfeReady(target.combinedName, cmd);
        this.ufeDialog = this.dialog.open(UfeDialogComponent, {
            height: target.dialogConfig.height,
            width: target.dialogConfig.width,
            data: {
                app: target,
            },
        });
    }
    /**
     * handlePeerMessage passes this UfeCommand from one uFE to another
     * @param msg UfeCommand the command to be passed
     * @private
     */
    async handlePeerMessage(msg) {
        const receiverUfeApp = this.getTargetUfe(msg);
        const senderUfeApp = this.getRequestingUfe(msg);
        // ignore the message processing if the sender is not valid
        const isSenderUfeInValid = !senderUfeApp.combinedName;
        if (isSenderUfeInValid) {
            return;
        }
        await this.handleOpenUfe(msg, false).then(isOpen => {
            if (!isOpen) {
                //couldn't open the uFE, so we can't send the message, send a reply to the originator and throw an error
                const response = new UfeCommand('SHELL', 'PEER_MESSAGE', [false]);
                this.shellCom.sendChildMessage(response, senderUfeApp);
                throw new Error('Unable to open Peer uFE to send message');
            }
        });
        const response = new UfeCommand('SHELL', 'PEER_MESSAGE', [true]);
        //send the message to the peer
        this.shellCom.sendChildMessage(msg, receiverUfeApp);
        //send the confirmation to the originator
        this.shellCom.sendChildMessage(response, senderUfeApp);
    }
    getTargetUfe(msg) {
        return this.shellStateStore.getUfeApp(msg.params[0]);
    }
    getRequestingUfe(msg) {
        return this.shellStateStore.getUfeApp(msg.sender);
    }
    /**
     * handleOpenUfe checks if the uFE indicated in the OPEN_UFE command is currently active within the shell.  If it is,
     * handleOpenUfe will surface the uFE.  If not, it will open the uFE.
     * @param msg UfeCommand with either OPEN_UFE or PEER_MESSAGE as the value of the command field
     * @param sendResponse boolean A reply UfeCommand is sent to the requesting uFE if true, no response is sent if false
     * @private
     */
    async handleOpenUfe(msg, sendResponse = true) {
        const target = this.getTargetUfe(msg);
        const originator = this.getRequestingUfe(msg);
        const isValidTarget = !!target.combinedName;
        if (!isValidTarget) {
            return false;
        }
        if (sendResponse) {
            const reply = new UfeCommand('SHELL', 'OPEN_UFE', [false]);
            this.shellCom.sendChildMessage(reply, originator);
        }
        await this.openTargetIfNotActive(target);
        if (sendResponse) {
            this.sendOpenUfeResponse(target, msg, originator);
        }
        return true;
    }
    async openTargetIfNotActive(target) {
        const foundApp = this.shellStateStore.appList().some(app => app.combinedName == target.combinedName);
        if (!this.shellStateStore.appList().some(app => app.combinedName == target.combinedName)) {
            this.logger.error('openTargetIfNotActive', target, foundApp);
            await this.onAppSelect(target);
        }
    }
    sendOpenUfeResponse(target, msg, originator) {
        const reply = new UfeCommand('SHELL', 'OPEN_UFE', [true]);
        if (target.location == 'new-tab') {
            reply.params[1] = msg.params;
        }
        this.shellCom.sendChildMessage(reply, originator);
    }
    /**
     * onAppSelect determines if this app is already active in the shell or not.  If the app is already active, the app
     * is removed from the shell. If not onAppSelect instantiates this app within the shell and sends commands to the app
     * to update language theme settings, and set the JWT authentication token.
     * @param app AppDescription the app to be instantiated
     */
    async onAppSelect(app) {
        //if the app is already active, this is a signal to close it
        const activeApps = this.shellStateStore.activeApps();
        const isActive = activeApps.findIndex((item) => item.combinedName == app.combinedName);
        if (isActive != -1) {
            activeApps.splice(isActive, 1);
            this.shellStateStore.appDeselected$.next(app);
            this.shellStateStore.setActiveApps(activeApps);
            return;
        }
        //otherwise add the app to the shell
        activeApps.push(app);
        this.shellStateStore.appSelected$.next(app);
        this.shellStateStore.setActiveApps(activeApps);
    }
    /**
     * Sends the peer message after the UFE_READY message was returned. In case it would never be sent it gives up waiting after 60 seconds.
     * @param targetAppName - the unique name of the ufe which should receive the message
     * @param message - the peer message which should be sent
     */
    sendPeerMessageAfterUfeReady(targetAppName, message) {
        // send the ufeReadyMessage once the ufe was opened
        this.ufeReadyNotification$
            .pipe(timeout(60000))
            .pipe(tap(val => this.logger.debug('Waiting for ufeReadyNotification', val)))
            .pipe(filter(ufeName => ufeName === targetAppName))
            .pipe(take(1), takeUntilDestroyed(this.destroyRef))
            .subscribe(_ => this.handlePeerMessage(message));
    }
    /**
     * handlePeerMessage passes this UfeCommand from one uFE to another
     * @param msg UfeCommand the command to be passed
     * @private
     */
    async handlePeerMessageWrl(msg) {
        let wrlCommandArgument = msg.params[0];
        if (!isWrlCommandArgument(wrlCommandArgument)) {
            // to be backward compatible
            wrlCommandArgument = new WrlCommandArgument(msg.params[0] /*applicationName*/, msg.params[1] /*webResourceName*/, msg.params[2] /*args*/, msg.params[3] /*isAnonymous*/);
        }
        this.wrlSvc.launchWebResourceAsShell(msg.sender, wrlCommandArgument.applicationName, wrlCommandArgument.resourceName, wrlCommandArgument.args, wrlCommandArgument.isAnonymous, wrlCommandArgument.targetLocation);
    }
    handleCloseUfeWrl(msg) {
        const app = new AppDescription(msg.params[0], msg.params[1]);
        const activeApp = this.shellStateStore.activeApps().find(ad => ad.combinedName == app.combinedName);
        if (!activeApp?.windowReference) {
            this.logger.info(`Ufe ${app.combinedName} is not open in window reference`);
            return;
        }
        const logoutMessage = new UfeCommand('SHELL', 'LOGOUT', []);
        this.shellCom.sendChildMessage(logoutMessage, app);
        // close the window if it is a dialog-browser child after logout
        activeApp.windowReference?.ref?.close();
    }
    async processUfeReady(app, sender) {
        app.isLoaded = true;
        this.parameterizeApp(app);
        const isInCurrentAppList = this.shellStateStore.activeApps().some(ad => ad.combinedName == app.combinedName);
        if (!isInCurrentAppList) {
            await this.onAppSelect(app);
        }
        // shell internal subscription to be notified once a ufe is loaded
        this.logger.debug('ufeReadyNotification next', sender);
        this.ufeReadyNotification$.next(sender);
    }
    async handleUfeReadyAsync(msg) {
        this.logger.debug('----- handleUfeReadyAsync', msg.sender);
        for (const app of this.shellStateStore.appList()) {
            this.logger.debug('----- SHELL Receive UFE_READY', app.combinedName, msg.sender);
            if (app.combinedName === msg.sender) {
                await this.processUfeReady(app, msg.sender);
                break;
            }
        }
    }
    /**
     * parameterizeApp ensures this app is passed the current application state variables including
     * current language, JWT Token, and Environment
     * @param app AppDescription
     * @private
     */
    parameterizeApp(app) {
        this.setEnvironment(app); //must set the environment before pushing other information
        const languageNotification = new UfeCommand('shell', 'LANGUAGE_TOGGLE', [this.envStore.currentLanguage()]);
        this.shellCom.sendChildMessage(languageNotification, app);
        this.sendAuthToken(app);
    }
    /**
     * setEnvironment sets this app's EXECUTION_ENVIRONMENT variable to SHELL
     * @param app AppDescription the uFE to set the execution environment variable for.
     * @private
     */
    setEnvironment(app) {
        const msg = new UfeCommand('SHELL', 'EXECUTION_ENVIRONMENT', ['SHELL']);
        this.shellCom.sendChildMessage(msg, app);
    }
    sendAuthToken(app) {
        const authToken = this.auth.currentAuthToken();
        const data = JSON.stringify(authToken);
        const notification = new UfeCommand('SHELL', 'JWT_TOKEN', [data]);
        this.shellCom.sendChildMessage(notification, app);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PeerCommandHandlerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PeerCommandHandlerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PeerCommandHandlerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class CommandObserverService {
    constructor() {
        this.commands$ = new Subject();
    }
    add(command, type) {
        this.commands$.next({ ...command, type: type });
    }
    watch$() {
        return this.commands$;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CommandObserverService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CommandObserverService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CommandObserverService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class MessageListenerDirective {
    /**
     * executionEnv represents the current execution environment.  Possible values are SELF, SHELL, NATIVE_SHELL, and
     * EMBEDDED.
     * @private
     */
    // private executionEnv: string = 'SELF';
    /**
     * onReceiveMessage listens for window:message events and reacts to them according to the contents of the message
     * @param $event
     */
    onReceiveMessage($event) {
        const data = $event.data;
        if (isUfeCommand(data)) {
            if (data.sender === this.ufeName) {
                data.sender = 'SELF';
            }
            this.logger.debug('--- Received message', data.sender, data.command);
            switch (data.sender) {
                case 'SHELL':
                    this.handleShellCommand(data);
                    break;
                case 'SELF':
                    this.handleSelfCommand(data);
                    break;
                default:
                    this.handleUfePeerCommand(data);
                    break;
            }
        }
    }
    constructor() {
        this.element = inject(ElementRef);
        this.render = inject(Renderer2);
        this.commandHandlerNotificationService = inject(CommandHandlerNotificationService);
        this.auth = inject(AuthenticationService);
        this.comm = inject(ShellCommunicatorService);
        this.ipc = inject(IPCService);
        this.route = inject(ActivatedRoute);
        this.url = inject(UrlCaptureService);
        this.envManager = inject(EnvironmentManagerService);
        this.router = inject(Router);
        this.envStore = inject(UfeEnvironmentStore);
        this.logger = inject(IfxUfeLoggerService);
        /**
         * The name of this uFE as provided by the uFE programmer
         */
        this.ufeName = 'SELF';
        /**
         * The default route users should be directed to if no other route is specified once a user is authenticated
         */
        this.baseRoute = '';
        /**
         * autoDockout defines who should handle DOCKOUT_REQUEST UfeCommands that are received. True if the library should
         * handle the command, false otherwise.  The ifx-ufe library can only properly handle a DOCKOUT_REQUEST if all
         * necessary state information is captured in the uFE's current URL
         */
        this.autoDockout = true;
        /**
         * linkGroup is a string representing a valid linkGroup name registered with the FrontEndDiscoveryService.  Note that
         * as the actual back-end service is not yet built, it is currently mocked using the file assets/defaultGroup.json
         */
        this.linkGroup = '';
        /**
         * showLanguageControls defines whether the language toggle controls should be displayed in the UfeHeaderComponent.
         * True to display the controls, false otherwise.
         */
        this.showLanguageControls = true;
        /**
         * helpLink is a string representation of the URL lining to the help document for this uFE
         */
        this.helpLink = '';
        /**
         *  define the authorization login mode Kerberos|Credentials|Ask
         *  Kerberos == auto login
         *  Credentials == user/password
         *  Ask == Selection page
         */
        this.authMode = AuthMode.Kerberos;
        /**
         * subscriptions is used as a collector - all subscriptions created in the code are added to this subscription so they
         * can all be unsubscribed from at once in ngOnDestroy
         * @private
         */
        this.subscriptions = new Subscription();
        this.ufeCommandProcessor = inject(UfeCommandProcessorService);
        this.appCommandHandler = inject(AppCommandHandlerService);
        this.peerCommandHandler = inject(PeerCommandHandlerService);
        this.commandObserverService = inject(CommandObserverService);
        effect(() => {
            //If the environment is set to NATIVE_SHELL, and we have an opener, this window is a dockout instance, we need
            //to send a UFE_READY signal back to the opener so they can send us any additional configuration details we need
            //note this test *must* be done in the executionEnvironment$ handler to guarantee the execution environment is not
            //undefined when the test is executed.
            if (this.envStore.executionEnvironment() == 'NATIVE_SHELL' && window.opener != null) {
                const reply = new UfeCommand(this.ufeName, 'UFE_READY');
                try {
                    this.comm.sendShellMessage(reply, 'WINDOW_OPENER');
                }
                catch (e) {
                    this.logger.error('Error posting UFE_READY to opener', e);
                }
            }
        });
        this.addAuthSubscription();
        this.ufeCommandProcessor.registerHandler(this.appCommandHandler);
        this.ufeCommandProcessor.registerHandler(this.peerCommandHandler);
    }
    ngOnInit() {
        this.logger.info('init message-listener for' + this.ufeName);
        //This allows us to check for an execution environment passed via query string before the redirect to a deeper
        //route.  This check and update is necessary or routes that have deeper links than the base and also a query string
        //that sets the environment (e.g. localhost:4200/core?_ifxEnvironment=NATIVE_SHELL) will lose the environment
        //variable after they are stopped by a uFE's canActivate guard.  The guard will store the path, but not the query
        //string, then redirect the browser to the login component.  The login component will have no knowledge that it is
        //operating in any environment other than SELF and will thus execute the login flow.  This flow should not be executed
        //if the environment is anything other than SELF.  Since this library has no control over how client code implements
        //canActivate guards, the environment must be set *before* the router has the chance to redirect the browser to the
        //guard.
        const params = this.getQueryParams();
        if (params.get('_ifxEnvironment') != null) {
            this.envManager.setExecutionEnvironment(params.get('_ifxEnvironment'));
        }
        //since the _ifxHeader variable can be passed via query string, we have to handle it the same way as the execution
        //environment variable for all the same reasons
        if (params.get('_ifxHeader') != null) {
            const headerVisibility = params.get('_ifxHeader') === 'true' ? 'SHOW_HEADER' : 'HIDE_HEADER';
            const cmd = new UfeCommand(this.ufeName, headerVisibility, []);
            this.relayMessage(cmd);
        }
        //store the base route for future use
        this.url.setBaseRoute(this.baseRoute);
        const ufeid = 'ufeid';
        // preserve the ufeid after we got back from login redirect
        //SOURCE: https://stackoverflow.com/questions/22079477/session-is-lost-after-an-oauth-redirect
        if (params.get(ufeid) != null) {
            // we got our app name by the shell right now with the initial call
            // NOTE: If we are running inside the shell, there will be no redirect and two uFEs of same origin URL will not interfere, even if they overwrite the appName value in the session storage.
            this.ufeName = params.get(ufeid);
            this.logger.info('we got our app name by the shell right now with the initial call: ' + this.ufeName);
        }
        else if (this.envManager.getAppNameFromSessionStorage() != null) {
            // the app name was provided by the shell previously and we just came back from oidc redirect
            this.ufeName = this.envManager.getAppNameFromSessionStorage() ?? 'uFE-DefaultAppNameValue';
            this.logger.info('the app name was provided by the shell previously and we just came back from oidc redirect: ' + this.ufeName);
        }
        else {
            // we did not got an app name from the shell nor we have it already in the session storage
            this.logger.info('we did not got an app name from the shell nor we have it already in the session storage: ' + this.ufeName);
        }
        //ToDo: only the instanceName identify the correct ufe instacne. Have to be refactored later.
        this.envManager.setUfeName(this.ufeName); // must be also executed for the first case, because otherwise we would not trigger the observers.
        //this checks if we were redirected back to the app after a login was initiated and completes the
        //login flow if so.
        const rSub = this.route.queryParams.subscribe(params => {
            //this has been added to create usecase without auth parameter
            //it will used now the window.location.href to get correct auth result
            if (params['code'] != null && params['state'] != null) {
                this.auth.initialAuthentication();
            }
        });
        this.subscriptions.add(rSub);
        this.envStore.setLinkGroup(this.linkGroup);
        this.envStore.setShowLanguageControls(this.showLanguageControls);
        this.sendReadySignal();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    addAuthSubscription() {
        //if we have an opener, it is possible we have been opened by a peer.  Send the PEER_READY command once we have
        // completed the authentication workflow. If in fact we were opened by a shell rather than a peer, the shell will
        // ignore this message
        if (window.opener == null) {
            return;
        }
        const authSub = this.auth.isAuthenticated$
            .pipe(filter(isAuth => isAuth.kerberos || isAuth.credentials), take(1))
            .subscribe(isAuth => {
            if (window.opener != null && (isAuth.kerberos || isAuth.credentials)) {
                this.logger.debug('Send PEER_READY to Opener', this.ufeName);
                const reply = new UfeCommand(this.ufeName, 'PEER_READY', []);
                try {
                    window.opener.postMessage(reply, '*');
                }
                catch (e) {
                    this.logger.error('Error posting PEER_READY to opener', e);
                }
            }
        });
        this.subscriptions.add(authSub);
    }
    /**
     * relayMessage posts this ufeCommand to the IPC for consumption by subscribers
     * @param data
     */
    relayMessage(data) {
        this.ipc.relayCommand(data);
    }
    /**
     * handleShellCommand dispatches UfeCommands from the shell to their respective handler methods
     * @param ufeCommand
     * @private
     */
    handleShellCommand(ufeCommand) {
        this.commandObserverService.add(ufeCommand, 'SHELL');
        this.logger.debug('+++MESSAGE LISTENER+++ handleShellCommand ' + ufeCommand.command, ufeCommand.sender, ufeCommand);
        switch (ufeCommand.command) {
            case 'JWT_TOKEN': {
                this.auth.registerNewToken(ufeCommand.params[0]);
                break;
            }
            case 'EXECUTION_ENVIRONMENT': {
                this.envManager.setExecutionEnvironment(ufeCommand.params[0]);
                this.relayMessage(ufeCommand);
                break;
            }
            case 'OPEN_DIALOG': {
                this.onOpenDialog();
                break;
            }
            case 'CLOSE_DIALOG': {
                this.onCloseDialog();
                break;
            }
            case 'NOTIFICATION_CLOSE': {
                this.commandHandlerNotificationService.hideNotification();
                break;
            }
            case 'REFRESH_COMPLETE': {
                this.auth.completeRefresh();
                this.relayMessage(ufeCommand);
                break;
            }
            case 'LOGOUT': {
                this.logout();
                break;
            }
            case 'DOCKOUT_REQUEST': {
                if (this.autoDockout) {
                    this.handleDockoutRequest();
                }
                else {
                    this.relayMessage(ufeCommand);
                }
                break;
            }
            case 'LANGUAGE_TOGGLE': {
                this.envStore.setCurrentLanguage(ufeCommand.params[0]);
                this.relayMessage(ufeCommand);
                break;
            }
            default: {
                this.relayMessage(ufeCommand);
            }
        }
    }
    /**
     * handleSelfCommand dispatches UfeCommands received from this application to their respective handler methods
     * @param ufeCommand
     * @private
     */
    handleSelfCommand(ufeCommand) {
        this.commandObserverService.add(ufeCommand, 'SELF');
        this.logger.debug('+++MESSAGE LISTENER+++ handleSelfCommand ' + ufeCommand.command, ufeCommand.sender, ufeCommand);
        switch (ufeCommand.command) {
            case 'NOTIFICATION': {
                const notification = ufeCommand.params[0];
                this.commandHandlerNotificationService.showNotification(notification);
                break;
            }
            case 'NOTIFICATION_CLOSE': {
                this.commandHandlerNotificationService.hideNotification();
                break;
            }
            case 'OPEN_UFE': {
                /** The second boolean parameter is defined here to distinguish between the
                 * dialog-modal and dialog-browser, and by default it is false (dialog-modal).*/
                // this.peerCom.openPeerInTab(ufeCommand, false);
                ufeCommand.command = 'OPEN_UFE_IN_TAB';
                this.relayMessage(ufeCommand);
                break;
            }
            case 'PEER_MESSAGE': {
                /** The second boolean parameter is defined here to distinguish between
                 * the dialog-modal and dialog-browser, and by default it is false (dialog-modal). */
                // this.peerCom.sendPeerMessageInTab(ufeCommand, false);
                ufeCommand.command = 'PEER_MESSAGE_IN_TAB';
                this.relayMessage(ufeCommand);
                break;
            }
            case 'OPEN_DIALOG': {
                this.blockMainUi();
                this.relayMessage(ufeCommand);
                break;
            }
            case 'CLOSE_DIALOG': {
                this.unblockMainUi();
                this.relayMessage(ufeCommand);
                break;
            }
            case 'CLOSE_UFE_DIALOG': {
                window.close();
                break;
            }
            case 'UFE_READY': {
                //Only set the execution environment to self if it has not already been set.  In a NATIVE_SHELL environment
                //this uFE will receive its own UfeCommands as the iOS shell operates outside the browser context (ergo the
                //uFE is in the top level context).
                if (this.envStore.executionEnvironment() == undefined) {
                    this.envManager.setExecutionEnvironment('SELF');
                }
                break;
            }
            case 'PEER_READY': {
                this.logger.info('PEER_READY', ufeCommand);
                // this.peerCom.setPeerReady(ufeCommand);
                this.relayMessage(ufeCommand);
                break;
            }
            case 'LOGIN_REQUIRED': {
                this.logger.info('LOGIN_REQUIRED', this.authMode);
                this.login(this.authMode);
                break;
            }
            case 'LANGUAGE_TOGGLE': {
                this.envStore.setCurrentLanguage(ufeCommand.params[0]);
                this.relayMessage(ufeCommand);
                break;
            }
            case 'OPENER_ID':
                ufeCommand.sender = this.ufeName;
                this.relayMessage(ufeCommand);
                break;
            case 'PEER_MESSAGE_WRL':
                this.relayMessage(ufeCommand);
                break;
            case 'OPEN_WEB_RESOURCE':
                this.relayMessage(ufeCommand);
                break;
            case 'REFRESH_COMPLETE': {
                this.auth.completeRefresh();
                this.relayMessage(ufeCommand);
                break;
            }
            default: {
                this.relayMessage(ufeCommand);
            }
        }
    }
    /**
     * ufePeerCommand dispatches UfeCommands received from all sources other than self or shell to their respective
     * handler methods
     * @param ufeCommand
     * @private
     */
    handleUfePeerCommand(ufeCommand) {
        this.commandObserverService.add(ufeCommand, 'PEER');
        this.logger.debug('+++MESSAGE LISTENER+++ handleUfePeerCommand ' + ufeCommand.command, ufeCommand.sender, ufeCommand);
        switch (ufeCommand.command) {
            case 'PEER_READY':
                // this.peerCom.setPeerReady(ufeCommand);
                this.relayMessage(ufeCommand);
                break;
            case 'OPENER_ID':
                // this.peerCom.registerOpener(ufeCommand);
                this.relayMessage(ufeCommand);
                break;
            case 'AUTH_TOKEN_REQUIRED':
                this.relayMessage(ufeCommand);
                break;
            default:
                this.relayMessage(ufeCommand);
                break;
        }
    }
    /**
     * onOpenDialog makes the hierarchy that this directive is attached to invisible by adding the 'invisible' css class
     * to the root element.  This is a required step in allowing a uFE modal dialog
     * @private
     */
    onOpenDialog() {
        this.render.addClass(this.element.nativeElement, 'invisible');
    }
    /**
     * onCloseDialog removes the 'invisible' class from the element this directive is attached to.  This must be called
     * as part of the process of closing a uFE dialog.
     * @private
     */
    onCloseDialog() {
        this.render.removeClass(this.element.nativeElement, 'invisible');
    }
    /**
     * blockMainUi makes dialog boxes spawned in external windows modal by blocking the main UI of this component.  This
     * will only apply if this.executionEnvironment == EMBEDDED
     * @private
     */
    blockMainUi() {
        const enviro = this.envStore.executionEnvironment();
        if (enviro != 'EMBEDDED') {
            return;
        }
        this.blocker = document.createElement('div');
        this.blocker.id = 'blocker';
        this.blocker.className = 'blocker';
        this.element.nativeElement.appendChild(this.blocker);
    }
    /**
     * unblockMainUi removes the blocking div created by blockMainUi if it exists.  This will only apply if
     * this.executionEnvironment == EMBEDDED
     * @private
     */
    unblockMainUi() {
        const enviro = window.sessionStorage.getItem(environment.storageVariableNamePrefix + 'EXECUTION_ENVIRONMENT');
        if (enviro != 'EMBEDDED') {
            return;
        }
        if (this.blocker != null) {
            this.blocker.remove();
        }
    }
    /**
     * sendReadySignal sends a UfeCommand to the top level context indicating that this UFE is loaded and ready to receive
     * commands.  This command will be received by the shell or embedding application in the case of those execution scenarios
     * or by this uFE in the case of a standalone scenario.
     * @private
     */
    sendReadySignal() {
        const readySignal = new UfeCommand(this.ufeName, 'UFE_READY');
        this.logger.debug('sendReadySignal', readySignal);
        this.comm.sendShellMessage(readySignal, 'WINDOW_OPENER');
        if (this.helpLink !== '') {
            const helpLinkSignal = new UfeCommand(this.ufeName, 'HELP_LINK', [this.helpLink]);
            this.comm.sendShellMessage(helpLinkSignal, 'WINDOW_OPENER');
        }
    }
    /**
     * login initiates the authentication workflow for the kerberos identity
     * @private
     */
    login(mode) {
        if (mode && mode === AuthMode.Ask) {
            this.router.navigateByUrl('auth-sel');
            return;
        }
        if (mode === AuthMode.Credentials) {
            this.auth.loginCredentials();
        }
        else {
            this.auth.loginKerberos();
        }
    }
    /**
     * logout logs the current user out of this uFE by redirecting the browser to the logout component where the details
     * of the workflow are handled
     * @private
     */
    logout() {
        this.router.navigateByUrl('logout');
    }
    /**
     * handleDockoutRequest responds to a UfeCommand of the type DOCKOUT_REQUEST by issuing a UfeCommand of the type
     * DOCKOUT_REPLY with the current URL as the first parameter in the params array
     * @private
     */
    handleDockoutRequest() {
        const currentUrl = window.location.href;
        const reply = new UfeCommand(this.ufeName, 'DOCKOUT_REPLY', [currentUrl]);
        this.comm.sendShellMessage(reply);
    }
    /**
     * getQueryParams retrieves the query string parameters directly from the window object rather than the Angular
     * Router.
     */
    getQueryParams() {
        /*
         * Retrieving the query string parameters directly from the window object is necessary as the methods exposed by the
         * Angular Router will not provide the query string params before rerouting the user's browser if they navigate
         * directly to a deeper link than the base route, while the window object *will* provide the query string parameters
         * in time.  Getting the query string params before reroute is essential to being able to correctly set an execution
         * environment that was passed via query string
         * */
        return new URLSearchParams(window.location.search);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: MessageListenerDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.1.4", type: MessageListenerDirective, isStandalone: true, selector: "[ufeMessageListener]", inputs: { ufeName: "ufeName", baseRoute: "baseRoute", autoDockout: "autoDockout", linkGroup: "linkGroup", showLanguageControls: "showLanguageControls", helpLink: "helpLink", authMode: "authMode" }, host: { listeners: { "window:message": "onReceiveMessage($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: MessageListenerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ufeMessageListener]',
                }]
        }], ctorParameters: () => [], propDecorators: { ufeName: [{
                type: Input
            }], baseRoute: [{
                type: Input
            }], autoDockout: [{
                type: Input
            }], linkGroup: [{
                type: Input
            }], showLanguageControls: [{
                type: Input
            }], helpLink: [{
                type: Input
            }], authMode: [{
                type: Input
            }], onReceiveMessage: [{
                type: HostListener,
                args: ['window:message', ['$event']]
            }] } });

const IFX_LOGO_SVG = `
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   height="100%"
   viewBox="0 0 377.94666 165.30667"
   xml:space="preserve"
   id="svg2"
   version="1.1"><defs
     id="defs6" /><g
     transform="matrix(1.3333333,0,0,-1.3333333,0,165.30667)"
     id="g10"><g
       transform="scale(0.1)"
       id="g12"><path
         id="path14"
         style="fill:#ed153e;fill-opacity:1;fill-rule:nonzero;stroke:none"
         d="m 617.457,1064.45 c -0.023,0.03 -0.047,0.05 -0.047,0.08 18.34,6.67 67.996,24.59 110.59,39.04 53.352,18.07 125.586,40.23 125.586,40.23 210.594,58.08 443.644,91.83 660.884,90.24 -250.48,14.91 -478.23,0.39 -676.716,-35.58 0,0 -66.422,-10.76 -137.477,-29.15 0,0 -34.293,-9.28 -55.172,-15.12 -20.851,-5.83 -49.507,-14.28 -49.507,-14.28 -20.387,-6.32 -40.254,-12.95 -59.754,-19.77 19.769,-19.52 32.254,-46.31 33.359,-76.05 15.781,6.95 31.86,13.74 48.254,20.36 M 2834.65,409.5 C 2783.11,363.117 2661.94,270.523 2404.73,194.41 2140.97,116.352 1819.96,82.2813 1505.9,82.2813 709.313,82.2813 194.543,315.945 158.699,625.117 c -13.469,116.18 78.192,228.668 230.364,324.707 -26.86,20.188 -44.387,52.026 -45.055,88.036 C 124.328,922.719 0,771.063 0,617.215 0,276.555 609.359,-12.1289 1514.47,0.398438 1829.22,4.75 2092.14,49.8789 2330.33,127.031 c 282.88,91.617 460.6,224.438 504.32,282.469" /><path
         id="path16"
         style="fill:#1c63b7;fill-opacity:1;fill-rule:nonzero;stroke:none"
         d="m 456.672,1123.06 c -45.942,0 -83.141,-37.23 -83.141,-83.14 0,-45.893 37.199,-83.119 83.141,-83.119 45.891,0 83.113,37.226 83.113,83.119 0,45.91 -37.222,83.14 -83.113,83.14 M 419.938,414.777 h 78.316 v 487.075 l -78.316,-10.368 z m 337.535,412.231 c -35.895,0 -72.504,-20.731 -92.52,-45.449 -0.691,20.73 -7.586,40.671 -9.652,47.836 l -73.196,-19.129 c 4.137,-22.328 10.368,-49.411 10.368,-98.059 v -297.43 h 77.996 v 299.817 c 18.636,23.121 41.433,35.871 56.625,35.871 10.363,0 20.011,-2.387 25.554,-10.363 6.204,-8.766 8.961,-21.52 8.961,-52.59 V 414.777 h 78.02 v 309.395 c 0,27.082 -2.758,54.211 -18.637,74.129 -13.812,17.554 -35.898,28.707 -63.519,28.707 m 299.517,103.625 c 13.79,0 28.29,-4.778 37.28,-11.942 l 22.08,60.59 c -20.7,15.141 -44.19,21.519 -73.19,21.519 -20.02,0 -41.41,-4.78 -60.051,-19.945 -18.66,-15.929 -38.675,-47.812 -38.675,-108.402 0,-25.527 1.402,-53.422 1.402,-53.422 h -26.934 v -68.566 h 26.934 V 414.777 h 80.064 v 335.688 h 58.69 l 14.5,68.566 h -73.19 v 62.188 c 0,31.094 11.74,49.414 31.09,49.414 m 102.3,-515.856 h 79.37 v 412.231 l -79.37,-10.363 z m 39.34,564.282 c -29,0 -52.46,-23.071 -52.46,-51.778 0,-28.703 22.77,-51.773 51.08,-51.773 28.98,0 52.47,23.07 52.47,51.773 0,28.707 -22.78,51.778 -51.09,51.778 m 304.96,-152.051 c -35.89,0 -72.5,-20.731 -92.52,-45.449 -0.69,20.73 -7.58,40.671 -9.65,47.836 l -73.22,-19.129 c 4.14,-22.328 10.37,-49.411 10.37,-98.059 v -297.43 h 78.02 v 299.817 c 18.63,23.121 41.43,35.871 56.62,35.871 10.37,0 20.02,-2.387 25.56,-10.363 6.23,-8.766 8.96,-21.52 8.96,-52.59 V 414.777 h 78.02 v 309.395 c 0,27.082 -2.76,54.211 -18.64,74.129 -13.81,17.554 -35.9,28.707 -63.52,28.707 m 290.34,3.176 c -40.03,0 -73.17,-17.528 -97.35,-53.399 -25.53,-38.285 -37.27,-89.273 -37.27,-158.648 0,-134.004 52.49,-212.91 144.3,-212.91 42.81,0 80.11,16.742 114.63,54.211 l -31.08,58.203 c -24.17,-25.508 -48.32,-39.887 -76.64,-39.887 -24.17,0 -44.19,13.566 -55.91,38.285 -9.7,20.731 -11.76,44.633 -11.76,71 v 7.981 h 180.18 v 17.527 c 0,88.508 -11.02,137.918 -39.31,174.601 -21.42,27.918 -51.8,43.036 -89.79,43.036 m -51.08,-170.59 c 1.4,71.742 16.59,104.437 51.79,104.437 20.02,0 32.45,-11.152 40.04,-29.496 6.22,-15.953 8.98,-43.031 8.98,-74.941 z m 369.95,170.59 c -102.19,0 -138.09,-112.387 -137.4,-212.047 0.69,-98.922 29,-213.723 136.69,-213.723 105.64,0 139.47,112.41 139.47,215.32 0,137.918 -57.98,210.45 -138.76,210.45 m 53.16,-210.45 c 0,-42.32 0,-143.578 -51.8,-143.578 -55.91,0 -54.54,101.258 -54.54,145.157 0,41.457 0,137.156 52.47,137.156 55.93,0 53.87,-94.887 53.87,-138.735 m 379.9,178.567 c -13.79,17.554 -35.89,28.707 -63.52,28.707 -35.92,0 -72.5,-20.731 -92.52,-45.449 -0.69,20.73 -7.61,40.671 -9.65,47.836 l -73.19,-19.129 c 4.13,-22.328 10.36,-49.411 10.36,-98.059 v -297.43 h 78 v 299.817 c 18.66,23.121 41.43,35.871 56.62,35.871 10.34,0 20.02,-2.387 25.56,-10.363 6.2,-8.766 8.96,-21.52 8.96,-52.59 V 414.777 h 78.02 v 309.395 c 0,27.082 -2.76,54.211 -18.64,74.129" /></g></g></svg>
`;

/**
 * Represents the store for authenticated user details.
 * This store holds the state of the current authenticated user
 * and provides selectors to access different user details.
 */
class AuthenticatedUserDetailsStore {
    // Reduces
    constructor() {
        // services
        this.auth = inject(AuthenticationService);
        this.logger = inject(IfxUfeLoggerService);
        // initial state
        this.state = signal({
            hostProfileName: undefined,
            firstName: undefined,
            lastName: undefined,
            displayName: undefined,
            department: undefined,
            accountName: undefined,
            loginType: undefined,
        });
        // selectors
        this.hostProfileName = computed(() => this.state().hostProfileName);
        this.firstName = computed(() => this.state().firstName);
        this.lastName = computed(() => this.state().lastName);
        this.displayName = computed(() => this.state().displayName);
        this.department = computed(() => this.state().department);
        this.accountName = computed(() => this.state().accountName);
        this.destroy$ = new Subject();
        this.auth
            .getAuthTokens()
            .pipe(takeUntil(this.destroy$))
            .subscribe({
            next: (authToken) => {
                this.logger.debug('[AuthenticatedUserDetailsStore]: Received auth token:');
                const containsKerberosToken = authToken.kerberos?.trim().length > 0;
                const containsCredentialsToken = authToken.credentials?.trim().length > 0;
                let jwtToken = '';
                let loginType;
                if (containsKerberosToken) {
                    jwtToken = authToken.kerberos;
                    loginType = 'kerberos';
                }
                else if (containsCredentialsToken) {
                    jwtToken = authToken.credentials;
                    loginType = 'credentials';
                }
                const decoded = JwtDecoder.decodeSafe(jwtToken);
                this.state.update(state => ({
                    ...state,
                    firstName: decoded?.firstName,
                    lastName: decoded?.lastName,
                    displayName: decoded?.displayName,
                    department: decoded?.department,
                    hostProfileName: decoded?.hostProfileName,
                    accountName: decoded?.samAccountName,
                    loginType: loginType,
                }));
            },
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthenticatedUserDetailsStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthenticatedUserDetailsStore, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthenticatedUserDetailsStore, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class WrlVersionSelectionComponent {
    constructor() {
        this.titleValue = signal('wrl Version Selection');
        this.closeButtonText = signal('close');
        this.resetAllVersionsButtonText = signal('reset all versions to default');
        this.resetButtonVersionsText = signal('reset to default');
        this.dataSource = new MatTableDataSource();
        this.displayedColumns = ['appName', 'resourceName', 'versions'];
        this.stateStore = inject(WrlStateStore);
        this.showResetAllVersionsButton = signal(false);
        this.logger = inject(IfxUfeLoggerService);
        this.wrlLocationService = inject(WebResourceService);
        this.storageService = inject(ActiveWebResouceStorageService);
        this.isWindowRefreshNeeded = false;
    }
    ngOnInit() {
        this.loadWebResources();
    }
    onActiveVersionChange(selectedApplicationVersion, group) {
        this.logger.debug('wrl-version-selection - onActiveVersionChange', selectedApplicationVersion, group);
        if (selectedApplicationVersion) {
            group.selectedVersion = selectedApplicationVersion;
            group.isDefaultVersionOverridden = true;
            this.storageService.saveVersion(group, selectedApplicationVersion);
            this.showResetAllVersionsButton.set(true);
            this.isWindowRefreshNeeded = true;
        }
    }
    onResetVersionClick(group) {
        this.logger.debug('wrl-version-selection - onResetVersion', group);
        this.deleteVersionOverride(group);
        this.loadWebResources();
    }
    onResetAllVersionsClick() {
        this.logger.debug('wrl-version-selection - onResetAllVersionsClick');
        this.dataSource.data.forEach(group => {
            if (group.isDefaultVersionOverridden) {
                this.deleteVersionOverride(group);
            }
        });
        this.loadWebResources();
    }
    onCloseClick() {
        if (this.isWindowRefreshNeeded) {
            this.logger.debug('wrl-version-selection - onCloseClick');
            window.location.reload();
        }
    }
    deleteVersionOverride(appInstance) {
        this.storageService.deleteVersion(appInstance);
        this.isWindowRefreshNeeded = true;
    }
    loadWebResources() {
        this.showResetAllVersionsButton.set(false);
        this.dataSource.data = this.getGridData();
    }
    getGridData() {
        const applicationInstancesWithVersions = this.stateStore
            .applicationInstances()
            .filter(appInstance => appInstance.versions.length > 0)
            .sort((a, b) => a.appName.toUpperCase().localeCompare(b.appName.toUpperCase()) ||
            a.resourceName.toUpperCase().localeCompare(b.resourceName.toUpperCase()));
        const gridData = [];
        applicationInstancesWithVersions.forEach(appInstance => {
            const activeResource = this.wrlLocationService.getActiveWebResourceVersion(appInstance);
            if (activeResource?.isDefaultVersionOverridden) {
                this.showResetAllVersionsButton.set(true);
            }
            const dataRow = {
                ...appInstance,
                selectedVersion: activeResource?.applicationVersion,
                isDefaultVersionOverridden: activeResource?.isDefaultVersionOverridden || false,
            };
            gridData.push(dataRow);
        });
        return gridData;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: WrlVersionSelectionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: WrlVersionSelectionComponent, isStandalone: true, selector: "ifx-wrl-version-selection", ngImport: i0, template: "<div class=\"dialog-container\">\r\n  <mat-dialog-actions>\r\n    <div class=\"title-wrapper\">\r\n      <div>\r\n        <h1 mat-dialog-title>{{ titleValue() }}</h1>\r\n      </div>\r\n      <div>\r\n        <button\r\n          mat-icon-button\r\n          [mat-dialog-close]=\"true\"\r\n          (click)=\"onCloseClick()\"\r\n          cdkFocusInitial>\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </mat-dialog-actions>\r\n  <mat-dialog-content>\r\n    <div class=\"content-container\">\r\n      <table\r\n        mat-table\r\n        [dataSource]=\"dataSource\">\r\n        <ng-container\r\n          matColumnDef=\"appName\"\r\n          class=\"app-name-cell\">\r\n          <th\r\n            mat-header-cell\r\n            *matHeaderCellDef>\r\n            App Name\r\n          </th>\r\n          <td\r\n            mat-cell\r\n            *matCellDef=\"let element\">\r\n            {{ element.appName }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container\r\n          matColumnDef=\"resourceName\"\r\n          class=\"resource-name-cell\">\r\n          <th\r\n            mat-header-cell\r\n            *matHeaderCellDef>\r\n            Resource Name\r\n          </th>\r\n          <td\r\n            mat-cell\r\n            *matCellDef=\"let element\">\r\n            {{ element.resourceName }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"versions\">\r\n          <th\r\n            mat-header-cell\r\n            *matHeaderCellDef>\r\n            Versions\r\n          </th>\r\n\r\n          <td\r\n            mat-cell\r\n            *matCellDef=\"let element\"\r\n            class=\"versions-cell\">\r\n            <div class=\"version-selection-cell-wrapper\">\r\n              <div>\r\n                <mat-label>Select a version</mat-label>\r\n                <mat-select\r\n                  [value]=\"element.selectedVersion\"\r\n                  (selectionChange)=\"onActiveVersionChange($event.value, element)\">\r\n                  @for (item of element.versions; track item) {\r\n                    <mat-option value=\"{{ item.applicationVersion }}\">{{ item.applicationVersion }}</mat-option>\r\n                  }\r\n                </mat-select>\r\n              </div>\r\n              <div>\r\n                @if (element.isDefaultVersionOverridden) {\r\n                  <button\r\n                    mat-flat-button\r\n                    color=\"primary\"\r\n                    class=\"cell-button\"\r\n                    (click)=\"onResetVersionClick(element)\">\r\n                    {{ resetButtonVersionsText() }}\r\n                  </button>\r\n                }\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr\r\n          mat-header-row\r\n          *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr\r\n          mat-row\r\n          *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n      </table>\r\n    </div>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions>\r\n    <div class=\"footer-wrapper\">\r\n      <div>\r\n        @if (showResetAllVersionsButton()) {\r\n          <button\r\n            mat-flat-button\r\n            color=\"primary\"\r\n            (click)=\"onResetAllVersionsClick()\">\r\n            {{ resetAllVersionsButtonText() }}\r\n          </button>\r\n        }\r\n        <button\r\n          mat-flat-button\r\n          color=\"primary\"\r\n          [mat-dialog-close]=\"true\"\r\n          (click)=\"onCloseClick()\">\r\n          {{ closeButtonText() }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </mat-dialog-actions>\r\n</div>\r\n", styles: [".footer-wrapper{display:flex;justify-content:flex-end;width:100%}.title-wrapper{display:flex;width:100%;justify-content:space-between}.version-selection-cell-wrapper{display:flex;justify-content:space-between;width:100%}.dialog-container{display:flex;flex-direction:column;justify-content:space-between;height:100%}.versions-cell{width:40%}.cell-button{margin:.2em}\n"], dependencies: [{ kind: "ngmodule", type: MatDialogModule }, { kind: "directive", type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i4.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i4.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i4.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i4.MatColumnDef, selector: "[matColumnDef]", inputs: ["matColumnDef"] }, { kind: "directive", type: i4.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i4.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i4.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i4.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i4.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i4.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "component", type: i6.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i7.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: WrlVersionSelectionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ifx-wrl-version-selection', imports: [MatDialogModule, MatButtonModule, MatIconModule, MatTableModule, MatSelectModule], template: "<div class=\"dialog-container\">\r\n  <mat-dialog-actions>\r\n    <div class=\"title-wrapper\">\r\n      <div>\r\n        <h1 mat-dialog-title>{{ titleValue() }}</h1>\r\n      </div>\r\n      <div>\r\n        <button\r\n          mat-icon-button\r\n          [mat-dialog-close]=\"true\"\r\n          (click)=\"onCloseClick()\"\r\n          cdkFocusInitial>\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </mat-dialog-actions>\r\n  <mat-dialog-content>\r\n    <div class=\"content-container\">\r\n      <table\r\n        mat-table\r\n        [dataSource]=\"dataSource\">\r\n        <ng-container\r\n          matColumnDef=\"appName\"\r\n          class=\"app-name-cell\">\r\n          <th\r\n            mat-header-cell\r\n            *matHeaderCellDef>\r\n            App Name\r\n          </th>\r\n          <td\r\n            mat-cell\r\n            *matCellDef=\"let element\">\r\n            {{ element.appName }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container\r\n          matColumnDef=\"resourceName\"\r\n          class=\"resource-name-cell\">\r\n          <th\r\n            mat-header-cell\r\n            *matHeaderCellDef>\r\n            Resource Name\r\n          </th>\r\n          <td\r\n            mat-cell\r\n            *matCellDef=\"let element\">\r\n            {{ element.resourceName }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"versions\">\r\n          <th\r\n            mat-header-cell\r\n            *matHeaderCellDef>\r\n            Versions\r\n          </th>\r\n\r\n          <td\r\n            mat-cell\r\n            *matCellDef=\"let element\"\r\n            class=\"versions-cell\">\r\n            <div class=\"version-selection-cell-wrapper\">\r\n              <div>\r\n                <mat-label>Select a version</mat-label>\r\n                <mat-select\r\n                  [value]=\"element.selectedVersion\"\r\n                  (selectionChange)=\"onActiveVersionChange($event.value, element)\">\r\n                  @for (item of element.versions; track item) {\r\n                    <mat-option value=\"{{ item.applicationVersion }}\">{{ item.applicationVersion }}</mat-option>\r\n                  }\r\n                </mat-select>\r\n              </div>\r\n              <div>\r\n                @if (element.isDefaultVersionOverridden) {\r\n                  <button\r\n                    mat-flat-button\r\n                    color=\"primary\"\r\n                    class=\"cell-button\"\r\n                    (click)=\"onResetVersionClick(element)\">\r\n                    {{ resetButtonVersionsText() }}\r\n                  </button>\r\n                }\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr\r\n          mat-header-row\r\n          *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr\r\n          mat-row\r\n          *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n      </table>\r\n    </div>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions>\r\n    <div class=\"footer-wrapper\">\r\n      <div>\r\n        @if (showResetAllVersionsButton()) {\r\n          <button\r\n            mat-flat-button\r\n            color=\"primary\"\r\n            (click)=\"onResetAllVersionsClick()\">\r\n            {{ resetAllVersionsButtonText() }}\r\n          </button>\r\n        }\r\n        <button\r\n          mat-flat-button\r\n          color=\"primary\"\r\n          [mat-dialog-close]=\"true\"\r\n          (click)=\"onCloseClick()\">\r\n          {{ closeButtonText() }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </mat-dialog-actions>\r\n</div>\r\n", styles: [".footer-wrapper{display:flex;justify-content:flex-end;width:100%}.title-wrapper{display:flex;width:100%;justify-content:space-between}.version-selection-cell-wrapper{display:flex;justify-content:space-between;width:100%}.dialog-container{display:flex;flex-direction:column;justify-content:space-between;height:100%}.versions-cell{width:40%}.cell-button{margin:.2em}\n"] }]
        }] });

class JwtCounterComponent {
    constructor() {
        this.auth = inject(AuthenticationService);
        this.logger = inject(IfxUfeLoggerService);
        this.invalidTokenCounterValue = '00:00:00';
        this.jwtCounter = signal(this.invalidTokenCounterValue);
        this.showRefreshIcon = signal(true);
        this.showCounterIcon = signal(true);
        interval(1000).pipe(takeUntilDestroyed()).subscribe(() => {
            try {
                const token = this.auth.getToken;
                const expTime = AuthenticationService.getJwtTokenExpirationTimeInMilliseconds(token);
                this.jwtCounter.set(this.getJwtCounter(expTime));
            }
            catch (error) {
                this.logger.error('Error in JwtCounterComponent', error);
            }
        });
    }
    onClickRefresh() {
        this.auth.forcedTokenRefresh();
    }
    getJwtCounter(expiryDate) {
        const now = new Date().getTime();
        const distance = expiryDate - now;
        if (distance <= 0) {
            this.showRefreshIcon.set(true);
            return this.invalidTokenCounterValue;
        }
        this.showRefreshIcon.set(false);
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const jwtCounter = `${this.transform(hours.toString())}:${this.transform(minutes.toString())}:${this.transform(seconds.toString())}`;
        return jwtCounter;
    }
    transform(n) {
        return n.padStart(2, '0');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: JwtCounterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: JwtCounterComponent, isStandalone: true, selector: "ifx-ufe-jwt-counter", ngImport: i0, template: "<div class=\"content-container\">\r\n  <div>\r\n    @if (showCounterIcon()) {\r\n      <p>{{ jwtCounter() }}</p>\r\n    }\r\n  </div>\r\n  <div>\r\n    @if (showRefreshIcon()) {\r\n      <button\r\n        mat-icon-button\r\n        color=\"primary\"\r\n        (click)=\"onClickRefresh()\"\r\n        class=\"refresh-button\">\r\n        <mat-icon>refresh</mat-icon>\r\n      </button>\r\n    }\r\n  </div>\r\n</div>\r\n", styles: [":host{margin-left:.2em;margin-right:.2em;font-size:.8em}.content-container{display:flex;justify-content:space-between;flex-direction:row;align-items:center}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: JwtCounterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ifx-ufe-jwt-counter', imports: [MatButtonModule, MatIconModule], template: "<div class=\"content-container\">\r\n  <div>\r\n    @if (showCounterIcon()) {\r\n      <p>{{ jwtCounter() }}</p>\r\n    }\r\n  </div>\r\n  <div>\r\n    @if (showRefreshIcon()) {\r\n      <button\r\n        mat-icon-button\r\n        color=\"primary\"\r\n        (click)=\"onClickRefresh()\"\r\n        class=\"refresh-button\">\r\n        <mat-icon>refresh</mat-icon>\r\n      </button>\r\n    }\r\n  </div>\r\n</div>\r\n", styles: [":host{margin-left:.2em;margin-right:.2em;font-size:.8em}.content-container{display:flex;justify-content:space-between;flex-direction:row;align-items:center}\n"] }]
        }], ctorParameters: () => [] });

class UfeAuthComponent {
    constructor() {
        this.wrlState = inject(WrlStateStore);
        this.comm = inject(ShellCommunicatorService);
        this.url = inject(UrlCaptureService);
        this.router = inject(Router);
        this.auth = inject(AuthenticationService);
        this.authDetailsStore = inject(AuthenticatedUserDetailsStore);
        this.envStore = inject(UfeEnvironmentStore);
        this.dialog = inject(MatDialog);
        this.externalLinks = input();
        this.helpLinks = input();
        this.hideJwtCounter = input(false);
        this.logout = output();
        this.logoutLabel = 'Logout';
        this.showLogout = computed(() => this.authDetailsStore.accountName() != undefined && this.envStore.isSelfHosted());
        this.userIconUrl = computed(() => this.createIconUrl(this.authDetailsStore.accountName()));
        this.authDetails = computed(() => this.getAuthDetails());
        this.currentLanguage = computed(() => this.envStore.currentLanguage());
        this.showWrlVersionSelectionDialog = computed(() => this.wrlState.showWrlVersionSelection());
        effect(() => {
            this.logoutLabel = this.envStore.currentLanguage() == 'DE' ? 'Ausloggen' : 'Logout';
        });
        this.addEventListener();
    }
    addEventListener() {
        // add event listener only if it is not a shell app and it is self hosted
        if (!this.envStore.isShellApp() && this.envStore.isSelfHosted()) {
            window.addEventListener('beforeunload', () => {
                if (!this.auth.isAuthInProgress()) {
                    this.auth.logout();
                    window.sessionStorage.clear();
                }
            });
        }
    }
    onLanguageToggle(language) {
        this.updateLanguage(language);
    }
    onLogout() {
        this.url.storeUrl(this.router.url);
        this.logout.emit();
    }
    onShowWrlVersionSelectionDialog() {
        const dialogConfig = new UfeDialogConfig();
        this.dialog.open(WrlVersionSelectionComponent, {
            height: '70%',
            width: '70%',
            minHeight: dialogConfig.height,
            minWidth: dialogConfig.width,
            data: {},
        });
    }
    updateLanguage(language) {
        const command = new UfeCommand('SELF', 'LANGUAGE_TOGGLE', [language]);
        this.comm.sendShellMessage(command);
    }
    createIconUrl(accountName) {
        if (accountName == undefined || accountName === '') {
            return null;
        }
        const stringUrl = 'https://profilepictures.infineon.com/api/profilepicture/' + accountName + '/s';
        return new URL(stringUrl);
    }
    getAuthDetails() {
        let displayName = this.authDetailsStore.displayName();
        const accountName = this.authDetailsStore.accountName();
        const department = this.authDetailsStore.department();
        const hostProfileName = this.authDetailsStore.hostProfileName();
        const firstName = this.authDetailsStore.firstName();
        const lastName = this.authDetailsStore.lastName();
        let result = [];
        // use first and last name as display name if first and last name are not undefined|null
        if (firstName?.trim() != null && lastName?.trim() != null) {
            displayName = `${firstName} ${lastName}`;
        }
        result = [displayName, department, accountName, hostProfileName];
        return result.filter(item => item != null && item.trim() !== '').map(item => item);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeAuthComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: UfeAuthComponent, isStandalone: true, selector: "ifx-ufe-auth", inputs: { externalLinks: { classPropertyName: "externalLinks", publicName: "externalLinks", isSignal: true, isRequired: false, transformFunction: null }, helpLinks: { classPropertyName: "helpLinks", publicName: "helpLinks", isSignal: true, isRequired: false, transformFunction: null }, hideJwtCounter: { classPropertyName: "hideJwtCounter", publicName: "hideJwtCounter", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { logout: "logout" }, ngImport: i0, template: "@if(userIconUrl() && !hideJwtCounter()) {\r\n<ifx-ufe-jwt-counter/>\r\n}\r\n<button\r\n  mat-icon-button\r\n  [matMenuTriggerFor]=\"controlMenu\"\r\n  class=\"ifx-ufe-auth-button\"\r\n  data-testid=\"ifx-ufe-auth-button\">\r\n  <div class=\"avatar-container\">\r\n    @if (userIconUrl()) {\r\n      <div>\r\n        <img\r\n          class=\"user-icon\"\r\n          src=\"{{ userIconUrl() }}\"\r\n          alt=\"user icon\" />\r\n      </div>\r\n    }\r\n    @if (!userIconUrl()) {\r\n      <mat-icon\r\n        class=\"material-icons-outlined\"\r\n        fontIcon=\"account_circle\"\r\n        style=\"transform: scale(1.75)\"></mat-icon>\r\n    }\r\n  </div>\r\n</button>\r\n@if (showLogout() && userIconUrl()) {\r\n  <button mat-icon-button color=\"primary\" (click)=\"onLogout()\" class=\"logout-button\"><mat-icon>logout</mat-icon></button>\r\n}\r\n\r\n<mat-menu\r\n  #controlMenu\r\n  id=\"ifxUfeAuthMenu\"\r\n  data-testid=\"ifx-ufe-auth-menu\">\r\n  <div class=\"menu\">\r\n    <div class=\"menu-user-id-container\">\r\n      <div\r\n        class=\"avatar-container\"\r\n        data-testid=\"avatar-container\">\r\n        @if (userIconUrl()) {\r\n          <div>\r\n            <img\r\n              class=\"user-icon\"\r\n              src=\"{{ userIconUrl() }}\"\r\n              alt=\"user icon\" />\r\n          </div>\r\n        }\r\n        @if (!userIconUrl()) {\r\n          <mat-icon\r\n            class=\"material-icons-outlined\"\r\n            fontIcon=\"account_circle\"></mat-icon>\r\n        }\r\n      </div>\r\n\r\n      <div\r\n        class=\"avatarDetailsContainer\"\r\n        data-testid=\"avatar-details-container\">\r\n        @for (item of this.authDetails(); track $index) {\r\n          <p>{{ item }}</p>\r\n        }\r\n      </div>\r\n    </div>\r\n\r\n    <hr style=\"width: 85%\" />\r\n\r\n    @if (this.envStore.showLanguageControls()) {\r\n      <button\r\n        mat-menu-item\r\n        [matMenuTriggerFor]=\"languages\"\r\n        data-testid=\"language-menu-button\">\r\n        <mat-icon class=\"ifx-icon\">flag</mat-icon>\r\n        <span>Language/Sprache</span>\r\n      </button>\r\n    }\r\n    @if (externalLinks()?.links?.length ?? 0 > 0) {\r\n      <button\r\n        mat-menu-item\r\n        [matMenuTriggerFor]=\"linkMenu\"\r\n        data-testid=\"external-links-menu-button\">\r\n        Links\r\n      </button>\r\n    }\r\n\r\n    @for (link of helpLinks(); track $index) {\r\n      <a\r\n        mat-menu-item\r\n        href=\"{{ link.url }}\"\r\n        target=\"_blank\"\r\n        data-testid=\"help-menu-link\"\r\n        >{{ link.ufeName }}</a\r\n      >\r\n    }\r\n\r\n    @if (showWrlVersionSelectionDialog()) {\r\n      <hr style=\"width: 85%\" />\r\n      <button\r\n        mat-menu-item\r\n        (click)=\"onShowWrlVersionSelectionDialog()\">\r\n        <mat-icon class=\"ifx-icon\">construction</mat-icon>\r\n        <span>{{ currentLanguage() === 'EN' ? ' Version Selection' : 'Versionsauswahl' }}</span>\r\n      </button>\r\n    }\r\n\r\n    @if (showLogout()) {\r\n      <hr style=\"width: 85%\" />\r\n      <button\r\n        mat-menu-item\r\n        (click)=\"onLogout()\">\r\n        <mat-icon class=\"ifx-icon\">logout</mat-icon>\r\n        <span>{{ logoutLabel }}</span>\r\n      </button>\r\n    }\r\n  </div>\r\n</mat-menu>\r\n\r\n<mat-menu\r\n  #linkMenu\r\n  data-testid=\"ifx-ufe-auth-link-menu\">\r\n  @for (link of externalLinks()?.links ?? []; track link) {\r\n    <a\r\n      mat-menu-item\r\n      href=\"{{ link.uri }}\"\r\n      target=\"_blank\"\r\n      >{{ currentLanguage() === 'EN' ? link.englishName : link.germanName }}</a\r\n    >\r\n  }\r\n</mat-menu>\r\n\r\n<mat-menu\r\n  #languages\r\n  data-testid=\"ifx-ufe-auth-lang-menu\">\r\n  <button\r\n    mat-menu-item\r\n    (click)=\"onLanguageToggle('EN')\">\r\n    English\r\n  </button>\r\n  <button\r\n    mat-menu-item\r\n    (click)=\"onLanguageToggle('DE')\">\r\n    Deutsch\r\n  </button>\r\n</mat-menu>\r\n", styles: [":host{height:100%;margin:0;display:flex;align-items:center}.user-icon{clip-path:circle();width:auto;height:auto;margin-top:-.1em}.menu-user-id-container{color:#000;display:flex;justify-content:space-between;padding:.25em}.menu-user-id-container .avatar-container{margin:.5em}.menu-user-id-container .avatarDetailsContainer{justify-content:space-between;margin:.25em .5em auto}.menu{display:flex;flex-direction:column;justify-content:space-between}.ifx-icon{margin-right:.5em}.logout-button{margin-left:.5em}\n"], dependencies: [{ kind: "component", type: MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "directive", type: MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }, { kind: "component", type: MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "component", type: MatMenuItem, selector: "[mat-menu-item]", inputs: ["role", "disabled", "disableRipple"], exportAs: ["matMenuItem"] }, { kind: "component", type: JwtCounterComponent, selector: "ifx-ufe-jwt-counter" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeAuthComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ifx-ufe-auth', imports: [MatIconButton, MatMenuTrigger, MatIcon, MatMenu, MatMenuItem, JwtCounterComponent], template: "@if(userIconUrl() && !hideJwtCounter()) {\r\n<ifx-ufe-jwt-counter/>\r\n}\r\n<button\r\n  mat-icon-button\r\n  [matMenuTriggerFor]=\"controlMenu\"\r\n  class=\"ifx-ufe-auth-button\"\r\n  data-testid=\"ifx-ufe-auth-button\">\r\n  <div class=\"avatar-container\">\r\n    @if (userIconUrl()) {\r\n      <div>\r\n        <img\r\n          class=\"user-icon\"\r\n          src=\"{{ userIconUrl() }}\"\r\n          alt=\"user icon\" />\r\n      </div>\r\n    }\r\n    @if (!userIconUrl()) {\r\n      <mat-icon\r\n        class=\"material-icons-outlined\"\r\n        fontIcon=\"account_circle\"\r\n        style=\"transform: scale(1.75)\"></mat-icon>\r\n    }\r\n  </div>\r\n</button>\r\n@if (showLogout() && userIconUrl()) {\r\n  <button mat-icon-button color=\"primary\" (click)=\"onLogout()\" class=\"logout-button\"><mat-icon>logout</mat-icon></button>\r\n}\r\n\r\n<mat-menu\r\n  #controlMenu\r\n  id=\"ifxUfeAuthMenu\"\r\n  data-testid=\"ifx-ufe-auth-menu\">\r\n  <div class=\"menu\">\r\n    <div class=\"menu-user-id-container\">\r\n      <div\r\n        class=\"avatar-container\"\r\n        data-testid=\"avatar-container\">\r\n        @if (userIconUrl()) {\r\n          <div>\r\n            <img\r\n              class=\"user-icon\"\r\n              src=\"{{ userIconUrl() }}\"\r\n              alt=\"user icon\" />\r\n          </div>\r\n        }\r\n        @if (!userIconUrl()) {\r\n          <mat-icon\r\n            class=\"material-icons-outlined\"\r\n            fontIcon=\"account_circle\"></mat-icon>\r\n        }\r\n      </div>\r\n\r\n      <div\r\n        class=\"avatarDetailsContainer\"\r\n        data-testid=\"avatar-details-container\">\r\n        @for (item of this.authDetails(); track $index) {\r\n          <p>{{ item }}</p>\r\n        }\r\n      </div>\r\n    </div>\r\n\r\n    <hr style=\"width: 85%\" />\r\n\r\n    @if (this.envStore.showLanguageControls()) {\r\n      <button\r\n        mat-menu-item\r\n        [matMenuTriggerFor]=\"languages\"\r\n        data-testid=\"language-menu-button\">\r\n        <mat-icon class=\"ifx-icon\">flag</mat-icon>\r\n        <span>Language/Sprache</span>\r\n      </button>\r\n    }\r\n    @if (externalLinks()?.links?.length ?? 0 > 0) {\r\n      <button\r\n        mat-menu-item\r\n        [matMenuTriggerFor]=\"linkMenu\"\r\n        data-testid=\"external-links-menu-button\">\r\n        Links\r\n      </button>\r\n    }\r\n\r\n    @for (link of helpLinks(); track $index) {\r\n      <a\r\n        mat-menu-item\r\n        href=\"{{ link.url }}\"\r\n        target=\"_blank\"\r\n        data-testid=\"help-menu-link\"\r\n        >{{ link.ufeName }}</a\r\n      >\r\n    }\r\n\r\n    @if (showWrlVersionSelectionDialog()) {\r\n      <hr style=\"width: 85%\" />\r\n      <button\r\n        mat-menu-item\r\n        (click)=\"onShowWrlVersionSelectionDialog()\">\r\n        <mat-icon class=\"ifx-icon\">construction</mat-icon>\r\n        <span>{{ currentLanguage() === 'EN' ? ' Version Selection' : 'Versionsauswahl' }}</span>\r\n      </button>\r\n    }\r\n\r\n    @if (showLogout()) {\r\n      <hr style=\"width: 85%\" />\r\n      <button\r\n        mat-menu-item\r\n        (click)=\"onLogout()\">\r\n        <mat-icon class=\"ifx-icon\">logout</mat-icon>\r\n        <span>{{ logoutLabel }}</span>\r\n      </button>\r\n    }\r\n  </div>\r\n</mat-menu>\r\n\r\n<mat-menu\r\n  #linkMenu\r\n  data-testid=\"ifx-ufe-auth-link-menu\">\r\n  @for (link of externalLinks()?.links ?? []; track link) {\r\n    <a\r\n      mat-menu-item\r\n      href=\"{{ link.uri }}\"\r\n      target=\"_blank\"\r\n      >{{ currentLanguage() === 'EN' ? link.englishName : link.germanName }}</a\r\n    >\r\n  }\r\n</mat-menu>\r\n\r\n<mat-menu\r\n  #languages\r\n  data-testid=\"ifx-ufe-auth-lang-menu\">\r\n  <button\r\n    mat-menu-item\r\n    (click)=\"onLanguageToggle('EN')\">\r\n    English\r\n  </button>\r\n  <button\r\n    mat-menu-item\r\n    (click)=\"onLanguageToggle('DE')\">\r\n    Deutsch\r\n  </button>\r\n</mat-menu>\r\n", styles: [":host{height:100%;margin:0;display:flex;align-items:center}.user-icon{clip-path:circle();width:auto;height:auto;margin-top:-.1em}.menu-user-id-container{color:#000;display:flex;justify-content:space-between;padding:.25em}.menu-user-id-container .avatar-container{margin:.5em}.menu-user-id-container .avatarDetailsContainer{justify-content:space-between;margin:.25em .5em auto}.menu{display:flex;flex-direction:column;justify-content:space-between}.ifx-icon{margin-right:.5em}.logout-button{margin-left:.5em}\n"] }]
        }], ctorParameters: () => [] });

class IfxUfeAuthRefreshComponent {
    constructor() {
        this.silentRefeshRoute = window.origin + '/silentRefresh';
        this.envStore = inject(UfeEnvironmentStore);
        this.enableSilentRefreshActive = computed(() => this.envStore.isSilentRefreshEnabled());
    }
    get silentRefreshFrameId() {
        return this.envStore.activeInstanceId();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeAuthRefreshComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: IfxUfeAuthRefreshComponent, isStandalone: true, selector: "ifx-ufe-auth-refresh", ngImport: i0, template: "@if (enableSilentRefreshActive()) {\r\n <iframe\r\n   [id]=\"silentRefreshFrameId\"\r\n   class=\"invisible\"\r\n   [src]=\"silentRefeshRoute | ifxUfeSafeUrl\"></iframe>\r\n}\r\n", styles: [":host{visibility:hidden;margin:0;padding:0;width:0;height:0}\n"], dependencies: [{ kind: "pipe", type: UfeSafeUrlPipe, name: "ifxUfeSafeUrl" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeAuthRefreshComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ifx-ufe-auth-refresh', imports: [UfeSafeUrlPipe], template: "@if (enableSilentRefreshActive()) {\r\n <iframe\r\n   [id]=\"silentRefreshFrameId\"\r\n   class=\"invisible\"\r\n   [src]=\"silentRefeshRoute | ifxUfeSafeUrl\"></iframe>\r\n}\r\n", styles: [":host{visibility:hidden;margin:0;padding:0;width:0;height:0}\n"] }]
        }] });

class UfeHeaderComponent {
    constructor() {
        this.ipc = inject(IPCService);
        this.envStore = inject(UfeEnvironmentStore);
        this.frontEnd = inject(FrontEndDiscoveryService);
        this.sanitizer = inject(DomSanitizer);
        this.router = inject(Router);
        this.title = input('');
        this.isIfxLogoVisible = input(true);
        this.hideJwtCounter = input(false);
        this.logout = output();
        this._externalLinks = signal(new AppLinkGroup());
        this.helpLinks = [];
        this.showDefaultVersionOverriddenIcon = computed(() => this.wrlState.showWrlVersionSelection() && this.wrlState.areDefaultVersionsOverridden());
        this.subscriptions = new Subscription();
        this.wrlState = inject(WrlStateStore);
        this.isVisible = computed(() => this.envStore.showHeader());
        this.externalLinks = computed(() => this._externalLinks());
        this.ifxLogo = this.getLogo();
        //sub to the current execution environment to determine if we need to display this header
        const linkGroup$ = toObservable(this.envStore.linkGroup);
        const linkGroupsSub = linkGroup$.subscribe(linkGroup => {
            if (linkGroup != null && linkGroup.trim() !== '') {
                const linksSub = this.frontEnd.getLinkGroup(linkGroup).subscribe(group => {
                    this._externalLinks.set(group);
                });
                this.subscriptions.add(linksSub);
            }
        });
        this.subscriptions.add(linkGroupsSub);
    }
    ngOnInit() {
        //sub to the ipc so we can reactively add/hide the header after the uFE is already running if need be
        const commandSub = this.ipc.ufeCommands().subscribe((cmd) => {
            if (cmd.command === 'HELP_LINK') {
                const commandParamsValue = cmd.params[0];
                if (commandParamsValue instanceof HelpItem) {
                    this.helpLinks = [commandParamsValue];
                }
                else if (typeof commandParamsValue === 'string') {
                    this.helpLinks = [{ ufeName: 'Help', url: new URL(commandParamsValue) }];
                }
                else if (Array.isArray(commandParamsValue)) {
                    this.helpLinks = commandParamsValue;
                }
            }
        });
        this.subscriptions.add(commandSub);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    onLogout() {
        if (this.envStore.isNotSelfHosted()) {
            return;
        }
        if (this.envStore.isShellApp()) {
            this.logout.emit();
        }
        else {
            this.router.navigateByUrl('logout');
        }
    }
    getLogo() {
        const rawSvg = IFX_LOGO_SVG;
        return this.sanitizer.bypassSecurityTrustHtml(rawSvg);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: UfeHeaderComponent, isStandalone: true, selector: "ifx-ufe-header", inputs: { title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null }, isIfxLogoVisible: { classPropertyName: "isIfxLogoVisible", publicName: "isIfxLogoVisible", isSignal: true, isRequired: false, transformFunction: null }, hideJwtCounter: { classPropertyName: "hideJwtCounter", publicName: "hideJwtCounter", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { logout: "logout" }, ngImport: i0, template: "<!--Header Bar and controls-->\r\n<div>\r\n  <div class=\"invisible\">\r\n    <ifx-ufe-auth-refresh></ifx-ufe-auth-refresh>\r\n  </div>\r\n\r\n  @if (isVisible()) {\r\n    <mat-toolbar\r\n      [@headerSlideIn]=\"isVisible()\"\r\n      class=\"toolbar-container\">\r\n      <div class=\"toolbar-left-container\">\r\n        <div class=\"toolbar-left-logo-container\">\r\n          <ng-content select=\"[toolbarLeftLogoContainer]\"></ng-content>\r\n        </div>\r\n        @if (isIfxLogoVisible()) {\r\n          <div\r\n            class=\"logo-container\"\r\n            [innerHtml]=\"ifxLogo\"></div>\r\n        }\r\n        <div class=\"title-container\">\r\n          <h2>{{ title() }}</h2>\r\n        </div>\r\n        <div class=\"toolbar-right-title-container\">\r\n          <ng-content select=\"[toolbarRightTitleContainer]\"></ng-content>\r\n        </div>\r\n      </div>\r\n      <div class=\"toolbar-center-container\">\r\n        <ng-content select=\"[toolbarCenterContainer]\"></ng-content>\r\n      </div>\r\n      <div class=\"toolbar-right-container\">\r\n        <div class=\"toolbar-left-auth-container\">\r\n          <ng-content select=\"[toolbarLeftAuthContainer]\"></ng-content>\r\n        </div>\r\n        <div class=\"ufe-auth-container\">\r\n          @if (showDefaultVersionOverriddenIcon()) {\r\n            <button\r\n              mat-icon-button\r\n              color=\"primary\">\r\n              <mat-icon>construction</mat-icon>\r\n            </button>\r\n          }\r\n          <ifx-ufe-auth\r\n            class=\"ifx-ufe-auth\"\r\n            [externalLinks]=\"externalLinks()\"\r\n            [helpLinks]=\"helpLinks\"\r\n            [hideJwtCounter]=\"hideJwtCounter()\"\r\n            (logout)=\"onLogout()\">\r\n          </ifx-ufe-auth>\r\n        </div>\r\n      </div>\r\n    </mat-toolbar>\r\n  }\r\n</div>\r\n", styles: [".toolbar-container{border-top:1px solid #dcd5d7;border-bottom:1px solid #dcd5d7;display:flex;justify-content:space-between;align-items:center;margin-top:.1em;margin-bottom:.5em;position:relative}.toolbar-left-container{display:flex;float:left;align-items:center}.toolbar-center-container{float:left;display:flex;align-items:center}.toolbar-right-container{display:flex;float:right;align-items:center;height:100%}.logo-container{height:2em;margin-left:.5em}.title-container{margin-left:.5em;margin-right:.5em}.ufe-auth-container{margin-left:.5em;padding:0;height:100%;display:flex;align-items:center}#_ifxUfeSilentRefresh{visibility:hidden;display:none}.ifx-icon{margin-right:.2em}\n"], dependencies: [{ kind: "component", type: MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "component", type: MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: UfeAuthComponent, selector: "ifx-ufe-auth", inputs: ["externalLinks", "helpLinks", "hideJwtCounter"], outputs: ["logout"] }, { kind: "component", type: IfxUfeAuthRefreshComponent, selector: "ifx-ufe-auth-refresh" }], animations: [
            trigger('headerSlideIn', [
                state('void', style({ top: '-4em', opacity: 0 })),
                state('active', style({ top: 0, opacity: 1 })),
                transition('void => *', animate('500ms')),
            ]),
        ] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ifx-ufe-header', animations: [
                        trigger('headerSlideIn', [
                            state('void', style({ top: '-4em', opacity: 0 })),
                            state('active', style({ top: 0, opacity: 1 })),
                            transition('void => *', animate('500ms')),
                        ]),
                    ], imports: [MatToolbar, MatIconButton, MatIcon, UfeAuthComponent, IfxUfeAuthRefreshComponent], template: "<!--Header Bar and controls-->\r\n<div>\r\n  <div class=\"invisible\">\r\n    <ifx-ufe-auth-refresh></ifx-ufe-auth-refresh>\r\n  </div>\r\n\r\n  @if (isVisible()) {\r\n    <mat-toolbar\r\n      [@headerSlideIn]=\"isVisible()\"\r\n      class=\"toolbar-container\">\r\n      <div class=\"toolbar-left-container\">\r\n        <div class=\"toolbar-left-logo-container\">\r\n          <ng-content select=\"[toolbarLeftLogoContainer]\"></ng-content>\r\n        </div>\r\n        @if (isIfxLogoVisible()) {\r\n          <div\r\n            class=\"logo-container\"\r\n            [innerHtml]=\"ifxLogo\"></div>\r\n        }\r\n        <div class=\"title-container\">\r\n          <h2>{{ title() }}</h2>\r\n        </div>\r\n        <div class=\"toolbar-right-title-container\">\r\n          <ng-content select=\"[toolbarRightTitleContainer]\"></ng-content>\r\n        </div>\r\n      </div>\r\n      <div class=\"toolbar-center-container\">\r\n        <ng-content select=\"[toolbarCenterContainer]\"></ng-content>\r\n      </div>\r\n      <div class=\"toolbar-right-container\">\r\n        <div class=\"toolbar-left-auth-container\">\r\n          <ng-content select=\"[toolbarLeftAuthContainer]\"></ng-content>\r\n        </div>\r\n        <div class=\"ufe-auth-container\">\r\n          @if (showDefaultVersionOverriddenIcon()) {\r\n            <button\r\n              mat-icon-button\r\n              color=\"primary\">\r\n              <mat-icon>construction</mat-icon>\r\n            </button>\r\n          }\r\n          <ifx-ufe-auth\r\n            class=\"ifx-ufe-auth\"\r\n            [externalLinks]=\"externalLinks()\"\r\n            [helpLinks]=\"helpLinks\"\r\n            [hideJwtCounter]=\"hideJwtCounter()\"\r\n            (logout)=\"onLogout()\">\r\n          </ifx-ufe-auth>\r\n        </div>\r\n      </div>\r\n    </mat-toolbar>\r\n  }\r\n</div>\r\n", styles: [".toolbar-container{border-top:1px solid #dcd5d7;border-bottom:1px solid #dcd5d7;display:flex;justify-content:space-between;align-items:center;margin-top:.1em;margin-bottom:.5em;position:relative}.toolbar-left-container{display:flex;float:left;align-items:center}.toolbar-center-container{float:left;display:flex;align-items:center}.toolbar-right-container{display:flex;float:right;align-items:center;height:100%}.logo-container{height:2em;margin-left:.5em}.title-container{margin-left:.5em;margin-right:.5em}.ufe-auth-container{margin-left:.5em;padding:0;height:100%;display:flex;align-items:center}#_ifxUfeSilentRefresh{visibility:hidden;display:none}.ifx-icon{margin-right:.2em}\n"] }]
        }], ctorParameters: () => [] });

class fauxMatDialogRef {
    constructor() {
        this.dataReturn = new BehaviorSubject(null);
    }
    close(data = null) {
        this.dataReturn.next(data);
        if (this.windowRef != null) {
            this.windowRef.close();
        }
    }
    afterClosed() {
        return this.dataReturn.asObservable();
    }
}

class DialogDataPlaceholder {
    constructor() { }
}

let routes$1 = [];
const httpLoaderFactory = (httpClient) => {
    const configKerberos$ = httpClient
        .get(`${window.location.origin}/assets/profileConfig.json`)
        .pipe(switchMap((config) => httpClient.get(`${window.location.origin}/${config.kerberosLocation}`).pipe(map((customConfig) => {
        customConfig.LogLevel = environment.production ? LogLevel.Error : LogLevel.Debug;
        return customConfig;
    }))));
    const configCredentials$ = httpClient
        .get(`${window.location.origin}/assets/profileConfig.json`)
        .pipe(switchMap((config) => httpClient.get(`${window.location.origin}/${config.credentialLocation}`).pipe(map((customConfig) => {
        customConfig.LogLevel = environment.production ? LogLevel.Error : LogLevel.Debug;
        return customConfig;
    }))));
    return new StsConfigHttpLoader([configKerberos$, configCredentials$]);
};
class AuthConfigModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthConfigModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.1.4", ngImport: i0, type: AuthConfigModule, imports: [i1$1.AuthModule, i4$1.RouterModule], exports: [AuthModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthConfigModule, imports: [AuthModule.forRoot({
                loader: {
                    provide: StsConfigLoader,
                    useFactory: httpLoaderFactory,
                    deps: [HttpClient],
                },
            }),
            RouterModule.forChild(routes$1), AuthModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthConfigModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        AuthModule.forRoot({
                            loader: {
                                provide: StsConfigLoader,
                                useFactory: httpLoaderFactory,
                                deps: [HttpClient],
                            },
                        }),
                        RouterModule.forChild(routes$1),
                    ],
                    exports: [AuthModule],
                }]
        }] });

class LoginComponent {
    constructor() {
        this.url = inject(UrlCaptureService);
        this.router = inject(Router);
        this.shellComm = inject(ShellCommunicatorService);
        this.auth = inject(AuthenticationService);
        this.envStore = inject(UfeEnvironmentStore);
        this.subscriptions = new Subscription();
        this.logger = inject(IfxUfeLoggerService);
        this.activateLoginWatcher();
        this.activateNaviationToUrlWatcher();
    }
    activateLoginWatcher() {
        toObservable(this.envStore.executionEnvironment)
            .pipe(takeUntilDestroyed())
            .subscribe(() => {
            if (this.envStore.isSelfHosted() && !isCodeFlowResponse()) {
                this.logger.info('No valid token found, requesting a new login.');
                this.shellComm.sendShellMessage(new UfeCommand(this.envStore.ufeInstanceName() ?? '', 'LOGIN_REQUIRED', []), 'SELF');
            }
            else if (this.envStore.isNotSelfHosted()) {
                this.auth.checkForExistingToken();
            }
        });
    }
    activateNaviationToUrlWatcher() {
        this.auth.isAuthenticated$.pipe(takeUntilDestroyed()).subscribe(() => {
            const t = window.location.href;
            if (this.auth.isUserAuthenticated) {
                const url = this.url.getUrl();
                if (url) {
                    this.router.navigateByUrl(url);
                }
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: LoginComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: LoginComponent, isStandalone: true, selector: "ifx-ufe-login", ngImport: i0, template: "<p>Please wait while the system logs you in...</p>\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: LoginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ifx-ufe-login', template: "<p>Please wait while the system logs you in...</p>\r\n" }]
        }], ctorParameters: () => [] });

class SilentRefreshComponent {
    constructor() {
        this.auth = inject(AuthenticationService);
        this.comm = inject(ShellCommunicatorService);
        this.token = new AuthToken();
        this.logger = inject(IfxUfeLoggerService);
        this.startRefreshTimeout = null;
        this.destroyRef = inject(DestroyRef);
        this.url = inject(UrlCaptureService);
        this.envStore = inject(UfeEnvironmentStore);
        this.logger.debug('Silent refresh component created');
        this.auth.checkForExistingToken();
    }
    ngAfterViewInit() {
        this.auth
            .getAuthTokens()
            .pipe(tap(() => this.logger.debug('silent refresh new token')), takeUntilDestroyed(this.destroyRef))
            .subscribe(tkn => {
            this.token = tkn;
            this.checkToken();
        });
    }
    checkToken() {
        //if we have an old token stored, we've been redirected here after the refresh completed.  Push the token to the
        //parent context
        const oldToken = window.sessionStorage.getItem(environment.storageVariableNamePrefix + 'oldToken');
        if (oldToken != null) {
            this.logger.debug('tryPublishToken');
            this.tryPublishToken();
        }
        else {
            //otherwise we are just starting the refresh process so store the old token and start the refresh workflow
            this.logger.info('Starting silent refresh');
            this.startRefresh();
        }
    }
    tryPublishToken() {
        const oldToken = window.sessionStorage.getItem(environment.storageVariableNamePrefix + 'oldToken');
        const successful = this.compareTokens(oldToken);
        if (!successful) {
            this.logger.info('Old token is the same as the current token, not publishing token');
            return false;
        }
        window.sessionStorage.removeItem(environment.storageVariableNamePrefix + 'oldToken');
        const strToken = JSON.stringify(this.token);
        //We spoof the sender as SHELL to take advantage of the existing process for registering tokens here
        let cmd = new UfeCommand('SHELL', 'JWT_TOKEN', [strToken]);
        this.comm.sendShellMessage(cmd, 'PARENT');
        //last we tell the main application to remove the iframe with this component in it.
        cmd = new UfeCommand('SHELL', 'REFRESH_COMPLETE', []);
        this.comm.sendShellMessage(cmd, 'PARENT');
        return true;
    }
    startRefresh() {
        try {
            this.storeOldToken();
            this.attemptRefresh();
        }
        catch (e) {
            const timeoutInSeconds = 5;
            this.logger.error(`Error starting silent refresh, try it again in ${timeoutInSeconds}s`, e);
            this.auth.stopTimeoutMethod(this.startRefreshTimeout);
            this.startRefreshTimeout = window.setTimeout(() => {
                this.startRefresh();
            }, timeoutInSeconds * 1000);
        }
    }
    attemptRefresh() {
        this.url.storeUrl(`silentRefresh?wufeid=${this.envStore.parentInstanceId()}`);
        this.auth.loginKerberos();
    }
    storeOldToken() {
        const kToken = this.auth.getKerberosToken();
        if (kToken == null) {
            this.logger.error('Kerberos token is null, cannot store old token');
        }
        window.sessionStorage.setItem(environment.storageVariableNamePrefix + 'oldToken', kToken ?? '');
    }
    /***
     * compareTokens returns true if the old token is different from the current token false otherwise.
     * @private
     */
    compareTokens(oldToken) {
        return this.token.kerberos != null && this.token.kerberos !== oldToken;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SilentRefreshComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: SilentRefreshComponent, isStandalone: true, selector: "ifx-ufe-silent-refresh", ngImport: i0, template: "<p>attempting to renew auth token...</p>\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SilentRefreshComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ifx-ufe-silent-refresh', template: "<p>attempting to renew auth token...</p>\r\n" }]
        }], ctorParameters: () => [] });

class DeviceService {
    constructor() {
        // if (navigator.userAgent.includes('Windows') || navigator.userAgent.includes('Linux')) {
        //   this.deviceType = 'desktop';
        // } else if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('Android')) {
        //   this.deviceType = 'mobile';
        // } else if (navigator.userAgent.includes('iPad')) {
        //   this.deviceType = 'tablet';
        // }
        this.deviceType = 'desktop';
        if (localStorage.getItem(environment.storageVariableNamePrefix + 'useSSODefault') === null) {
            this.setSSODefault(true);
        }
        this.sSODefault = Boolean(localStorage.getItem(environment.storageVariableNamePrefix + 'useSSODefault') === 'true');
    }
    isDesktop() {
        return this.deviceType === 'desktop';
    }
    isMobile() {
        return this.deviceType === 'mobile';
    }
    isTablet() {
        return this.deviceType === 'tablet';
    }
    getDevice() {
        return this.deviceType;
    }
    isSSODefault() {
        return this.sSODefault;
    }
    setSSODefault(useSSODefault) {
        localStorage.setItem(environment.storageVariableNamePrefix + 'useSSODefault', '' + useSSODefault);
        this.sSODefault = useSSODefault;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DeviceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DeviceService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DeviceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

const LOGIN_LOGO_SVG = `
<svg width="130" height="130" version="1.1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <metadata>
  <rdf:RDF>
   <cc:Work rdf:about="">
    <dc:format>image/svg+xml</dc:format>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <dc:title/>
   </cc:Work>
  </rdf:RDF>
 </metadata>
 <g>
  <path d="m24 0-19.5 8.7273v13.091c0 12.109 8.32 23.433 19.5 26.182 11.18-2.7491 19.5-14.073 19.5-26.182v-13.091l-19.5-8.7273" fill="#ab377a"/>
  <path d="m24.035 1.9592-17.944 8.0019v12.003c0 11.103 7.6559 21.485 17.944 24.006 0.06435-24.832 0.12725-26.405 0-44.01" fill="#478f7c" stroke-width="1.9971"/>
  <path d="m24.035 1.9592c0.0037 21.3-0.06986 28.38 0 44.01 10.288-2.5206 17.944-12.903 17.944-24.006v-12.003l-17.944-8.0019" fill="#fff"/>
  <path d="m16.435 24.334c-0.04272-0.32274-0.06409-0.65623-0.06409-1.0112 0-0.34425 0.02145-0.6885 0.07477-1.0112l-2.1687-1.6997c-0.19229-0.15061-0.24571-0.44107-0.12818-0.65623l2.0512-3.5716c0.12818-0.23667 0.39527-0.31197 0.6303-0.23667l2.5448 0.9817c0.53416-0.4088 1.1004-0.75305 1.7307-1.0112l0.38459-2.7325c0.04274-0.25819 0.2564-0.44015 0.51279-0.44107l2.0088-0.0072c0.0208 10.961 0.0156 8.0679-1.1e-5 20.709l-2.0004 0.0041c-0.2564 5.32e-4 -0.47006-0.18288-0.5021-0.44107l-0.3846-2.7325c-0.63029-0.25818-1.2072-0.60244-1.7307-1.0112l-2.5533 1.0328c-0.23503 0.08607-0.5021 0-0.6303-0.23667l-2.0512-3.5716c-0.1282-0.23667-0.07477-0.50562 0.12818-0.65622zm7.5854 2.8786c-0.0017-2.4031 0.0035-5.8857 7.6e-5 -7.5499-0.25846 0-0.51054 0.02284-0.75395 0.06683-1.7487 0.31603-3.0497 1.7235-3.0497 3.5933 0 2.13 1.57 3.8046 3.6598 3.8813z" fill="#fff"/>
  <path d="m31.606 24.334c0.04272-0.32274 0.0641-0.65623 0.0641-1.0112 0-0.34425-0.02145-0.6885-0.07477-1.0112l2.1687-1.6997c0.19229-0.15061 0.24571-0.44107 0.12818-0.65623l-2.0512-3.5716c-0.12818-0.23667-0.39528-0.31198-0.63031-0.23667l-2.5448 0.9817c-0.53416-0.4088-1.1004-0.75305-1.7307-1.0112l-0.38459-2.7325c-0.04274-0.25819-0.25639-0.44015-0.51279-0.44107l-2.0088-0.0072c-0.0208 10.961-0.0156 8.0679 1.1e-5 20.709l2.0004 0.0041c0.2564 5.32e-4 0.47006-0.18288 0.50211-0.44107l0.3846-2.7325c0.6303-0.25818 1.2072-0.60244 1.7307-1.0112l2.5533 1.0328c0.23503 0.08607 0.50211 0 0.6303-0.23668l2.0512-3.5715c0.1282-0.23667 0.07477-0.50561-0.12818-0.65622zm-7.5855 2.8786c0.0017-2.352-0.02036-5.9283 7.6e-5 -7.5499 0.25846 0 0.51054 0.02284 0.75396 0.06683 1.7487 0.31603 3.0497 1.7235 3.0497 3.5933 0 2.13-1.6885 3.8899-3.8037 3.8899z" fill="#478f7c" stroke-width="0"/>
 </g>
</svg>
`;

class IfxUfeLoginTypeSelectorComponent {
    constructor() {
        this.auth = inject(AuthenticationService);
        this.envStore = inject(UfeEnvironmentStore);
        this.deviceService = inject(DeviceService);
        this.sanitizer = inject(DomSanitizer);
        this.showSpinner = signal(false);
        this.loginLogo = signal(this.getLogo());
        this.ssoMessage = 'Login with SSO';
        this.credentialMessage = 'Login with User+Password';
        this.isSSODefault = false;
        this.isSSODefault = this.deviceService.isSSODefault();
        effect(() => {
            const lang = this.envStore.currentLanguage();
            this.onLanguageToggle(lang);
        });
    }
    ngOnInit() {
        this.showSpinner.set(false);
    }
    loginKerberos() {
        this.showSpinner.set(true);
        // perform the login with the kerberos configuration id
        this.auth.loginKerberos();
    }
    loginCredentials() {
        this.showSpinner.set(true);
        // perform the login with the kerberos configuration id
        this.auth.loginCredentials();
    }
    getLogo() {
        const rawSvg = LOGIN_LOGO_SVG;
        return this.sanitizer.bypassSecurityTrustHtml(rawSvg);
    }
    onLanguageToggle(language) {
        if (language == 'EN') {
            this.ssoMessage = 'Login with SSO';
            this.credentialMessage = 'Login with User+Password';
        }
        if (language == 'DE') {
            this.ssoMessage = ('Melden Sie sich mit SSO an');
            this.credentialMessage = 'Melden Sie sich mit User+Passwort an';
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeLoginTypeSelectorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: IfxUfeLoginTypeSelectorComponent, isStandalone: true, selector: "ifx-ufe-login-type-selector", ngImport: i0, template: "<div>\r\n  @if (!showSpinner()) {\r\n    <div class=\"login-container\">\r\n      <div class=\"login-logo-container h-100 w-100\">\r\n        <div\r\n          class=\"login-logo\"\r\n          [innerHtml]=\"loginLogo()\"></div>\r\n        </div>\r\n        <div>\r\n          <section class=\"login-btn\">\r\n            <button\r\n              mat-flat-button\r\n              color=\"primary\"\r\n              (click)=\"loginKerberos()\"\r\n              data-testid=\"loginSSO\">\r\n              {{ ssoMessage }}\r\n            </button>\r\n\r\n            <button\r\n              mat-flat-button\r\n              color=\"primary\"\r\n              (click)=\"loginCredentials()\"\r\n              data-testid=\"loginUserPwd\">\r\n              {{ credentialMessage }}\r\n            </button>\r\n          </section>\r\n        </div>\r\n    </div>\r\n  } @else {\r\n    <div class=\"w-100 h-100\">\r\n      <p class=\"flex-center\">\r\n        <mat-spinner></mat-spinner>\r\n      </p>\r\n    </div>\r\n  }\r\n</div>\r\n", styles: [".login-container{width:340px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);padding:1.5rem;border:1px solid gray}.login-btn{display:grid;gap:1.5rem}button{width:100%}.login-logo-container{display:flex;justify-content:center}.login-logo{margin-top:1.5rem;margin-bottom:.5rem}\n"], dependencies: [{ kind: "ngmodule", type: MatProgressSpinnerModule }, { kind: "component", type: i1$2.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeLoginTypeSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ifx-ufe-login-type-selector', imports: [MatProgressSpinnerModule, MatButtonModule], template: "<div>\r\n  @if (!showSpinner()) {\r\n    <div class=\"login-container\">\r\n      <div class=\"login-logo-container h-100 w-100\">\r\n        <div\r\n          class=\"login-logo\"\r\n          [innerHtml]=\"loginLogo()\"></div>\r\n        </div>\r\n        <div>\r\n          <section class=\"login-btn\">\r\n            <button\r\n              mat-flat-button\r\n              color=\"primary\"\r\n              (click)=\"loginKerberos()\"\r\n              data-testid=\"loginSSO\">\r\n              {{ ssoMessage }}\r\n            </button>\r\n\r\n            <button\r\n              mat-flat-button\r\n              color=\"primary\"\r\n              (click)=\"loginCredentials()\"\r\n              data-testid=\"loginUserPwd\">\r\n              {{ credentialMessage }}\r\n            </button>\r\n          </section>\r\n        </div>\r\n    </div>\r\n  } @else {\r\n    <div class=\"w-100 h-100\">\r\n      <p class=\"flex-center\">\r\n        <mat-spinner></mat-spinner>\r\n      </p>\r\n    </div>\r\n  }\r\n</div>\r\n", styles: [".login-container{width:340px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);padding:1.5rem;border:1px solid gray}.login-btn{display:grid;gap:1.5rem}button{width:100%}.login-logo-container{display:flex;justify-content:center}.login-logo{margin-top:1.5rem;margin-bottom:.5rem}\n"] }]
        }], ctorParameters: () => [] });

class LogoutComponent {
    constructor() {
        this.auth = inject(AuthenticationService);
        this.envStore = inject(UfeEnvironmentStore);
        this.loggr = inject(IfxUfeLoggerService);
    }
    ngOnInit() {
        if (this.envStore.executionEnvironment() == null) {
            this.loggr.warn('Environment not set in logout component!');
            return;
        }
        if (this.envStore.isSelfHosted()) {
            //we only call auth.logout in the self-hosted scenario In all other scenarios JWT management is handled by the
            //enclosing environment (shell, native shell, native application etc.)
            this.auth.logout();
        }
    }
    ngAfterViewInit() {
        window.setTimeout(() => {
            window.sessionStorage.clear();
        }, 500);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: LogoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: LogoutComponent, isStandalone: true, selector: "ifx-ufe-logout", ngImport: i0, template: "@if (this.envStore.isSelfHosted()) {\r\n  <ifx-ufe-login-type-selector></ifx-ufe-login-type-selector>\r\n} @else {\r\n  <span>Logging Out, Please Wait</span>\r\n}\r\n", styles: [""], dependencies: [{ kind: "component", type: IfxUfeLoginTypeSelectorComponent, selector: "ifx-ufe-login-type-selector" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: LogoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ifx-ufe-logout', imports: [IfxUfeLoginTypeSelectorComponent], template: "@if (this.envStore.isSelfHosted()) {\r\n  <ifx-ufe-login-type-selector></ifx-ufe-login-type-selector>\r\n} @else {\r\n  <span>Logging Out, Please Wait</span>\r\n}\r\n" }]
        }], ctorParameters: () => [] });

class UfeUnauthorizedComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeUnauthorizedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: UfeUnauthorizedComponent, isStandalone: true, selector: "ifx-ufe-unauthorized", ngImport: i0, template: "<div class=\"content\">\r\n  <div class=\"icon\">&#9940;</div>\r\n  <div class=\"text\">\r\n    <h1>Unauthorized</h1>\r\n    <h4>You do not have permission to access this page.</h4>\r\n  </div>\r\n</div>\r\n", styles: [":host{height:100%;display:flex;justify-content:center;align-items:flex-start}:host .content{display:flex;flex-direction:row;margin-top:10%;padding:1em;border:2px solid darkgray;border-radius:.75em}:host .content .icon{font-size:5em;margin:auto 0}:host .content .text{margin-left:1em}:host .content .text h1{margin-bottom:0}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeUnauthorizedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ifx-ufe-unauthorized', imports: [], template: "<div class=\"content\">\r\n  <div class=\"icon\">&#9940;</div>\r\n  <div class=\"text\">\r\n    <h1>Unauthorized</h1>\r\n    <h4>You do not have permission to access this page.</h4>\r\n  </div>\r\n</div>\r\n", styles: [":host{height:100%;display:flex;justify-content:center;align-items:flex-start}:host .content{display:flex;flex-direction:row;margin-top:10%;padding:1em;border:2px solid darkgray;border-radius:.75em}:host .content .icon{font-size:5em;margin:auto 0}:host .content .text{margin-left:1em}:host .content .text h1{margin-bottom:0}\n"] }]
        }] });

const routes = [
    { path: 'silentRefresh', component: SilentRefreshComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'auth-sel', component: IfxUfeLoginTypeSelectorComponent },
    { path: 'unauthorized', component: UfeUnauthorizedComponent },
];
class IfxUfeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeModule, imports: [CommonModule,
            DragDropModule,
            PortalModule,
            MatButtonModule,
            MatSnackBarModule,
            MatToolbarModule,
            MatSlideToggleModule,
            MatDialogModule,
            MatIconModule,
            MatButtonModule,
            MatProgressSpinnerModule,
            AuthConfigModule, i4$1.RouterModule, MatMenuModule,
            MessageListenerDirective,
            UfeHeaderComponent,
            UfeAuthComponent,
            NotificationComponent,
            LoginComponent,
            SilentRefreshComponent,
            LogoutComponent,
            UfeDialogComponent,
            UfeSafeUrlPipe,
            JwtCounterComponent], exports: [MessageListenerDirective, UfeHeaderComponent, UfeAuthComponent, UfeSafeUrlPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeModule, providers: [
            { provide: Window, useValue: window },
            { provide: MatDialogRef, useClass: fauxMatDialogRef },
            { provide: MAT_DIALOG_DATA, useClass: DialogDataPlaceholder },
            provideHttpClient(withInterceptorsFromDi()),
        ], imports: [CommonModule,
            DragDropModule,
            PortalModule,
            MatButtonModule,
            MatSnackBarModule,
            MatToolbarModule,
            MatSlideToggleModule,
            MatDialogModule,
            MatIconModule,
            MatButtonModule,
            MatProgressSpinnerModule,
            AuthConfigModule,
            RouterModule.forChild(routes),
            MatMenuModule,
            UfeHeaderComponent,
            UfeAuthComponent,
            NotificationComponent,
            LogoutComponent,
            UfeDialogComponent,
            JwtCounterComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [MessageListenerDirective, UfeHeaderComponent, UfeAuthComponent, UfeSafeUrlPipe],
                    imports: [
                        CommonModule,
                        DragDropModule,
                        PortalModule,
                        MatButtonModule,
                        MatSnackBarModule,
                        MatToolbarModule,
                        MatSlideToggleModule,
                        MatDialogModule,
                        MatIconModule,
                        MatButtonModule,
                        MatProgressSpinnerModule,
                        AuthConfigModule,
                        RouterModule.forChild(routes),
                        MatMenuModule,
                        MessageListenerDirective,
                        UfeHeaderComponent,
                        UfeAuthComponent,
                        NotificationComponent,
                        LoginComponent,
                        SilentRefreshComponent,
                        LogoutComponent,
                        UfeDialogComponent,
                        UfeSafeUrlPipe,
                        JwtCounterComponent
                    ],
                    providers: [
                        { provide: Window, useValue: window },
                        { provide: MatDialogRef, useClass: fauxMatDialogRef },
                        { provide: MAT_DIALOG_DATA, useClass: DialogDataPlaceholder },
                        provideHttpClient(withInterceptorsFromDi()),
                    ],
                }]
        }] });

class StyleSheetAndLinkCaptureService {
    constructor() { }
    /**
     * getStyleSheets finds all links where rel='stylesheet' (i.e. remote stylesheets) in this document, packages
     * them into an array, and returns the array
     * @param doc
     */
    getStyleSheets(doc) {
        let output = [];
        doc.querySelectorAll('link').forEach(htmlElement => {
            if (htmlElement.rel === 'stylesheet') {
                let styleSheetElement = doc.createElement('link');
                let absoluteUrl = new URL(htmlElement.href).href;
                styleSheetElement.rel = 'stylesheet';
                styleSheetElement.href = absoluteUrl;
                output.push(styleSheetElement);
            }
        });
        return output;
    }
    /**
     * getLinks finds all link tags in this document, packages them into an array and returns the array
     * @param doc
     */
    getLinks(doc) {
        let output = [];
        doc.head.querySelectorAll('link').forEach(htmlLink => {
            let headLink = doc.createElement('link');
            headLink.href = new URL(htmlLink.href).href;
            output.push(headLink);
        });
        return output;
    }
    /**
     * getScripts finds all script tags in this document, packages them into an array and returns the array
     * @param doc
     */
    getScripts(doc) {
        let output = [];
        doc.head.querySelectorAll('script').forEach(script => {
            let s = doc.createElement('script');
            s.src = script.src;
            output.push(s);
        });
        return output;
    }
    /**
     * getStyleBlocks finds all stylesheet tags in this document, packages them into an array, and returns the array
     * @param doc
     */
    getStyleBlocks(doc) {
        let output = [];
        doc.head.querySelectorAll('style').forEach(style => {
            let s = doc.createElement('style');
            s.textContent = style.textContent;
            output.push(s);
        });
        return output;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: StyleSheetAndLinkCaptureService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: StyleSheetAndLinkCaptureService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: StyleSheetAndLinkCaptureService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class UfeDialogWindowService {
    constructor() {
        this.componentFactoryResolver = inject(ComponentFactoryResolver);
        this.applicationRef = inject(ApplicationRef);
        this.injector = inject(Injector);
        this.slCapture = inject(StyleSheetAndLinkCaptureService);
        this.comm = inject(ShellCommunicatorService);
        this.mDialog = inject(MatDialog);
        this.envStore = inject(UfeEnvironmentStore);
        this.height = 400;
        this.width = 400;
        this.subscriptions = new Subscription();
    }
    /**
     * openDialog determines which execution environment this instance is running in (embedded, shell, or stand alone)
     * and opens the appropriate dialog box for the environment whether a shell dialog or an external window.
     */
    openDialog(component, config) {
        if (this.envStore.executionEnvironment() == 'EMBEDDED') {
            //ToDo: clarify if it is obsolete
            return this.createExternal(component, config);
        }
        else {
            return this.createShellDialog(component, config);
        }
    }
    /**
     * createExternal() generates the external window the angular content will be projected into
     */
    createExternal(component, config = {}) {
        this.height = config.height == null ? 400 : parseInt(config.height);
        this.width = config.width == null ? 400 : parseInt(config.width);
        let externalWindow = window.open('', '', `left=300,top=300,scrollbars,width=${this.width},height=${this.height}`);
        if (externalWindow == null) {
            throw new Error('Could not open external window!');
        }
        this.attachCloseHandlerToExternal(externalWindow);
        // create a PortalHost with the body of the new window document
        const host = new DomPortalOutlet(externalWindow.document.body, this.componentFactoryResolver, this.applicationRef, this.injector);
        /*Attach the portal. NOTE: the portal must be attached to the window before calling getStyleSheets().  Attaching the
        portal after importing the styles will cause many of the styles to be missing the first time the window opens,
        though it will work properly on subsequent openings.  */
        let portal = new ComponentPortal(component);
        let cRef = host.attach(portal);
        let newFmdr = new fauxMatDialogRef();
        newFmdr.windowRef = externalWindow;
        newFmdr.componentInstance = cRef.instance;
        let data = null;
        if (config.data != null) {
            data = config.data;
        }
        //find the MatDialogRef instance in this component and replace it with the new one
        for (const prop in cRef.instance) {
            if (cRef.instance[prop] instanceof fauxMatDialogRef) {
                cRef.instance[prop] = newFmdr;
            }
            //find the data instance and replace it with the real data
            if (cRef.instance[prop] instanceof DialogDataPlaceholder) {
                cRef.instance[prop] = data;
            }
        }
        //add the title to the window if one was provided
        if (config.data != null && config.data.title != null) {
            let domTitle = externalWindow.document.createElement('title');
            // @ts-ignore
            domTitle.text = config.data.title;
            externalWindow.document.head.appendChild(domTitle);
        }
        this.getStyleSheets(externalWindow);
        let msg = new UfeCommand(this.ufeName, 'OPEN_DIALOG', []);
        this.comm.sendShellMessage(msg);
        return newFmdr;
    }
    /**
     * createShellDialog sends a request to the shell to allow a uFE dialog box, then renders the content contained
     * within the template outlet
     * @private
     */
    createShellDialog(component, config = new MatDialogConfig()) {
        let msg = new UfeCommand(this.ufeName, 'OPEN_DIALOG', []);
        this.comm.sendShellMessage(msg);
        config.disableClose = true;
        const dRef = this.mDialog.open(component, config);
        // this ensures the cleanup activities are performed.
        // the cleanup task need to be done in the before closed event to prevent timing issues if another dialog is opened immediately
        const beforeClosedSub = dRef.beforeClosed().subscribe(() => {
            this.sendCloseDialogMessage();
        });
        this.subscriptions.add(beforeClosedSub);
        return dRef;
    }
    /**
     * getStyleSheets grabs all the style sheets, links and style blocks in the parent window for injection into an
     * external popup window
     * @param externalWindow Window reference: the window to inject the stylesheets and links into
     * @private
     */
    getStyleSheets(externalWindow) {
        //get stylesheets from parent window, nothing imports automatically
        let sheets = this.slCapture.getStyleSheets(document);
        sheets.forEach(sheet => {
            externalWindow?.document.head.appendChild(sheet);
        });
        //get links from parent window
        let links = this.slCapture.getLinks(document);
        links.forEach(link => {
            externalWindow?.document.head.appendChild(link);
        });
        //get scripts from parent window
        let scripts = this.slCapture.getScripts(document);
        scripts.forEach(script => {
            externalWindow?.document.head.appendChild(script);
        });
        //get style blocks from parent window
        let styleBlocks = this.slCapture.getStyleBlocks(document);
        styleBlocks.forEach(block => {
            externalWindow?.document.head.appendChild(block);
        });
        //these classes are required in the body element to work with the igx UI framework
        externalWindow?.document.body.classList.add('igx-typography');
        externalWindow?.document.body.classList.add('mat-typography');
    }
    /**
     * attachCloseHandlerToExternal ensures the required cleanup activities are performed when an external dialog box is
     * closed, even if it is not closed through the dialog reference (i.e. closed through window controls).
     * @param win Window: a reference to the window to attach the handler to
     * @private
     */
    attachCloseHandlerToExternal(win) {
        // Ensure the UI blocker is removed and showWindowContent is set to false when the window is closed.
        win.addEventListener('beforeunload', () => {
            this.sendCloseDialogMessage();
        });
    }
    /**
     * sendCloseDialogMessage sends a CLOSE_DIALOG UfeCommand to the shell
     * @private
     */
    sendCloseDialogMessage() {
        //send the message to the MessageListener to remove the modal dialog UI blocker
        let msg = new UfeCommand(this.ufeName, 'CLOSE_DIALOG', []);
        this.comm.sendShellMessage(msg);
    }
    get ufeName() {
        //TodDo: only the instanceName identify the correct ufe instacne. Have to be refactored later.
        return this.envStore.ufeName() ?? '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeDialogWindowService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeDialogWindowService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeDialogWindowService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

/**
 * Trim char in string
 */
function trimChar(value, charToRemove) {
    while (value.charAt(0) === charToRemove) {
        value = value.substring(1);
    }
    while (value.charAt(value.length - 1) === charToRemove) {
        value = value.substring(0, value.length - 1);
    }
    return value;
}
function isNullOrUndefinedOrEmpty(value) {
    return value == null || value.trim() === '';
}

/**
 * Service for retrieving authenticated user information.
 */
class AuthUserInformationService {
    constructor() {
        this.authStateStore = inject(AuthenticatedUserDetailsStore);
        /**
         * Retrieves the host profile name from the auth state store.
         * It is only avaiblable for FAB PCs and equals to undefined otherwise
         * @returns The host profile name.
         */
        this.getHostProfileName = this.authStateStore.hostProfileName;
        /**
         * Retrieves the display name of the authenticated user.
         * @returns The display name of the authenticated user.
         */
        this.getDisplayName = this.authStateStore.displayName;
        /**
         * Retrieves the department information of the authenticated user..
         * @returns The department information.
         */
        this.getDepartment = this.authStateStore.department;
        /**
         * Retrieves the first name of the authenticated user.
         * @returns The first name of the authenticated user.
         */
        this.getFirstName = this.authStateStore.firstName;
        /**
         * Retrieves the last name of the authenticated user.
         * @returns The last name of the authenticated user.
         */
        this.getLastName = this.authStateStore.lastName;
        /**
         * Gets the AD Account Name (Active Directory sam account name) of the authenticated user.
         */
        this.getAccountName = this.authStateStore.accountName;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthUserInformationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthUserInformationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthUserInformationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

/**
 * The public ufe environment service which allows to read and modify all attributes of an ufe which can be influenced by the using application directly.
 */
class UfeEnvironmentService {
    constructor() {
        this.environmentStateStore = inject(UfeEnvironmentStore);
    }
    getUfeInstanceName() {
        return this.environmentStateStore.ufeInstanceName();
    }
    getWrlAppName() {
        return this.getName(0);
    }
    getWrlResourceName() {
        return this.getName(1);
    }
    /*
    public getUniqueInstanceId(): string | undefined {
      return undefined;
    } */
    getName(index) {
        const appName = this.getUfeInstanceName();
        if (appName) {
            // temporary solution until we refactor this to dedicated fields.
            // the WRL does not allow _ therfore we can use this as a defined delimiter
            // backward compatibility
            if (appName.indexOf('_') === -1) {
                if (index === 0) {
                    return appName;
                }
                else {
                    return undefined;
                }
            }
            const split = appName?.split('_');
            return split[index];
        }
        return undefined;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeEnvironmentService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeEnvironmentService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UfeEnvironmentService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class AbstractShellView {
    constructor() {
        this.shellStateStore = inject(ShellStateStore);
        this.envStore = inject(UfeEnvironmentStore);
        /**
         * Emits when an app is selected
         * @protected
         */
        this.appDeSelected$ = this.shellStateStore.appDeselected$;
        /**
         * Emits when an app is deselected
         * @protected
         */
        this.appSelected$ = this.shellStateStore.appSelected$;
        /**
         * The current environment for the shell
         * @protected
         */
        this.shellEnvironment = inject(UfeEnvironmentService);
        /**
         * Defines the current display language for the UI.  Only 'EN' or 'DE' are valid values
         * @public
         */
        this.currentLanguage = computed(() => this.envStore.currentLanguage());
        this.currentLanguage$ = toObservable(this.envStore.currentLanguage);
        /**
         * List of all possible apps as returned by the FrontEndDiscoveryService
         * @public
         */
        this.appList = computed(() => this.shellStateStore.appList());
        /**
         * Observable of the app list
         * @protected
         */
        this.appList$ = toObservable(this.shellStateStore.appList);
        /**
         * List of all apps currently instantiated within this shell view
         * @public
         */
        this.activeApps = computed(() => this.shellStateStore.activeApps());
        /**
         * Observable of active apps
         * @protected
         */
        this.activeApps$ = toObservable(this.shellStateStore.activeApps);
        /**
         * Used to control which layout is displayed
         * @public
         */
        this.layout = computed(() => this.shellStateStore.layout());
        /**
         * Observable of the layout
         * @protected
         */
        this.layout$ = toObservable(this.shellStateStore.layout);
    }
    /**
     * sets the current language for the UI
     * @param layout
     */
    setLayout(layout) {
        this.shellStateStore.setLayout(layout);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AbstractShellView, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AbstractShellView }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AbstractShellView, decorators: [{
            type: Injectable
        }] });

class AbstractShell extends AbstractShellView {
    constructor(discoverySvc, feCom, data, router, wrlSvc, dialog) {
        super();
        this.discoverySvc = discoverySvc;
        this.feCom = feCom;
        this.data = data;
        this.router = router;
        this.wrlSvc = wrlSvc;
        this.dialog = dialog;
        this.auth = inject(AuthenticationService);
        // private envStore: UfeEnvironmentStore = inject(UfeEnvironmentStore);
        // private shellStateStore = inject(ShellStateStore);
        this.wlrStateStore = inject(WrlStateStore);
        this.isLogoutTriggeredByBeforeUnload = false;
        /**
         * Data on the currently logged in subscriber
         * @public
         */
        this.subscriberData = new SubscriberData();
        /**
         * the name that should be displayed for the currently logged in user
         *  @public
         */
        this.displayName = '';
        this.subscriberName = '';
        this.userIconUrl = null;
        /**
         * used to collect all subscriptions and unsubscribe on destroy
         * @protected
         */
        this.subs = new Subscription();
        /**
         *  Service for retrieving authenticated user information.
         */
        this.authUserInfo = inject(AuthUserInformationService);
        /**
         * Logger service for logging messages
         * @protected
         */
        this.logger = inject(IfxUfeLoggerService);
        this.envStore.setIsShellApp(true);
        this.shellStateStore.setScenariosLoaded(false);
        this.initShell();
    }
    addEventListener() {
        /*
         *   We cannot use @HostListener because this need to be used in a directive or components and this is a service
         *   https://stackoverflow.com/questions/39592972/is-it-possible-to-use-hostlistener-in-a-service-or-how-to-use-dom-events-in-an
         */
        window.addEventListener('beforeunload', () => {
            if (!this.auth.isAuthInProgress()) {
                this.auth.logout();
                this.isLogoutTriggeredByBeforeUnload = true;
                this.onLogout();
            }
            else {
                this.auth.invalidateTokens();
            }
        });
    }
    initShell() {
        this.addEventListener();
        this.subscribeToAuthChangesForGettingUfeApps();
        this.subscribeToCommands();
        this.subscribeToSubscriberData();
        this.initializeLayout();
    }
    subscribeToAuthChangesForGettingUfeApps() {
        const authSub = this.wlrStateStore.authenticatedUserId$.pipe().subscribe(authenticatedUserId => {
            if (!isNullOrUndefinedOrEmpty(authenticatedUserId)) {
                this.discoverySvc.getAppsAsync().then(() => {
                    if (!this.shellStateStore.scenariosLoaded()) {
                        this.loadAllScenarios();
                    }
                });
            }
        });
        this.subs.add(authSub);
    }
    subscribeToCommands() {
        const commandSub = this.data.ufeCommands().subscribe((cmd) => {
            this.onMessage(cmd);
        });
        this.subs.add(commandSub);
    }
    subscribeToSubscriberData() {
        const subscriberSub = this.data.subscriberData$.subscribe(dat => {
            this.subscriberData = dat;
            this.userIconUrl = this.createIconUrl();
            if (this.subscriberData.credentials.loginStatus === true) {
                this.displayName = this.subscriberData.credentials.userName;
                this.subscriberName = this.subscriberData.credentials.subscriberName;
            }
            else if (this.subscriberData.kerberos.loginStatus === true) {
                this.displayName = this.subscriberData.kerberos.userName;
                this.subscriberName = this.subscriberData.kerberos.subscriberName;
            }
        });
        this.subs.add(subscriberSub);
    }
    initializeLayout() {
        const shellLayout = this.shellStateStore.layout();
        if (!shellLayout) {
            this.shellStateStore.setLayout(this.defaultLayout);
        }
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    /**
    *  The current authentication status of the user
    * @public
    */
    get isAuthenticated() {
        return this.auth.currentAuthToken();
    }
    /**
     * onLanguageToggle handles updating all instantiated uFEs when the language setting is changed within the shell
     */
    onLanguageToggle(newLanguage) {
        this.envStore.setCurrentLanguage(newLanguage);
        this.shellStateStore.activeApps().forEach(app => {
            this.sendLanguageUpdate(app);
        });
    }
    /**
     * sendChildMessage sends a UfeCommand to the passed App.  Note the app must be instantiated within the shell
     * for the message to be sent
     * @param message UfeCommand
     * @param app AppDescription
     */
    sendChildMessage(message, app) {
        this.feCom.sendChildMessage(message, app);
    }
    /**
     * onMessage responds to UfeCommands from instantiated Micro Front Ends.
     * @param msg UfeCommand
     */
    async onMessage(msg) {
        if (!isUfeCommand(msg))
            return;
        this.logger.debug('+++SHELL+++ Received Message ' + msg.command, msg.sender, isUfeCommand(msg), msg);
        switch (msg.command) {
            case 'NOTIFICATION':
                this.openNotification(msg);
                break;
            case 'OPEN_DIALOG':
                this.maximizeUfe(this.getRequestingUfe(msg));
                break;
            case 'CLOSE_DIALOG':
                this.minimizeUfe(this.getRequestingUfe(msg));
                break;
            case 'NOTIFICATION_CLOSE':
                this.openNotification(msg);
                break;
        }
    }
    /**
     * onLayoutChange responds to user input to change the layout.  The new layout is recorded in session storage and
     * pushed to subscribers of this.layout.
     * @param layout
     */
    onLayoutChange(layout) {
        this.shellStateStore.setLayout(layout);
    }
    onLogout() {
        this.feCom.sendWarningNotification('Logging Out, Please Wait');
        this.shellStateStore.setScenariosLoaded(false);
        this.activeApps().forEach(app => {
            try {
                this.closeUfeApp(app);
            }
            catch (error) {
                this.logger.error('Error during logout', error, app);
            }
        });
        if (this.isLogoutTriggeredByBeforeUnload) {
            window.sessionStorage.clear();
        }
        else {
            window.setTimeout(() => {
                this.feCom.closeOpenNotification();
                this.shellStateStore.setActiveApps([]);
                this.router.navigateByUrl('/logout');
            }, 700);
        }
    }
    closeUfeApp(app) {
        const msg = new UfeCommand('SHELL', 'LOGOUT', []);
        this.logger.info('Sending LOGOUT to ' + app.combinedName, !!app.windowReference);
        this.feCom.sendChildMessage(msg, app);
        // close the window if it is a dialog-browser child after logout
        app.windowReference?.ref?.close();
    }
    /**
     * maximizeUfe expands this uFE to cover the full screen, so it can display a modal dialog box
     * @param app AppDescription: The uFE to be maximized
     * @private
     */
    maximizeUfe(app) {
        const appId = app.combinedName + '.container';
        const element = document.getElementById(appId);
        if (element == null) {
            this.logger.warn('Could not find element with id ' + appId);
            return;
        }
        element.classList.add('maximized', 'maximized-container');
        const msg = new UfeCommand('SHELL', 'OPEN_DIALOG', []);
        this.sendChildMessage(msg, app);
    }
    /**
     * minimizeUfe returns a previously maximized uFE (see maximizeUfe) to it's normal state
     * @param app AppDescription: the uFE to be minimized
     * @private
     */
    minimizeUfe(app) {
        const appId = app.combinedName + '.container';
        const element = document.getElementById(appId);
        if (element == null) {
            this.logger.warn('Could not find element with id ' + appId);
            return;
        }
        element.classList.remove('maximized', 'maximized-container');
        const msg = new UfeCommand('SHELL', 'CLOSE_DIALOG', []);
        this.sendChildMessage(msg, app);
    }
    /**
     * sendLanguageUpdate is a helper function that sends a UfeCommand to this app informing it of which laguage to use
     * Necessary as language notifications occur in different parts of the code.
     * @param app
     * @private
     */
    sendLanguageUpdate(app) {
        const languageNotification = new UfeCommand('shell', 'LANGUAGE_TOGGLE', [this.currentLanguage]);
        this.sendChildMessage(languageNotification, app);
    }
    /**
     * getRequestingUfe is a helper function that will return the AppDescription of a uFE that sent this UfeCommand
     * @param msg UfeCommand
     * @private
     */
    getRequestingUfe(msg) {
        return this.shellStateStore.getUfeApp(msg.sender);
    }
    /**
     * getTargetUfe takes a UfeCommand of the type OPEN_UFE and returns an AppDescription of the target app in parmas[0]
     * @param msg UfeMessage
     * @private
     */
    getTargetUfe(msg) {
        return this.shellStateStore.getUfeApp(msg.params[0]);
    }
    /**
     * OpenNotification
     * @param msg UfeMessage where command = 'NOTIFICATION', params[0] = text of notification and params[1] = notification style class
     * @private
     */
    openNotification(msg) {
        //by changing the sender to SELF and resending the command the
        // ufe Framework will open the notification in this app (i.e. the Shell)
        msg.sender = 'SELF';
        this.feCom.sendShellMessage(msg);
    }
    /**
     * loadAllScenarios loads all ufe appropriate to this shell
     * @private
     */
    loadAllScenarios() {
        this.shellStateStore.setActiveApps(this.appList());
        this.shellStateStore.setScenariosLoaded(true);
    }
    createIconUrl() {
        const userName = this.subscriberData.credentials.subscriberName == ''
            ? this.subscriberData.kerberos.subscriberName
            : this.subscriberData.credentials.subscriberName;
        const stringUrl = 'https://profilepictures.infineon.com/api/profilepicture/' + userName + '/s';
        return new URL(stringUrl);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AbstractShell, deps: [{ token: FrontEndDiscoveryService }, { token: ShellCommunicatorService }, { token: DataCommunicationService }, { token: i4$1.Router }, { token: WebResourceService }, { token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AbstractShell }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AbstractShell, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: FrontEndDiscoveryService }, { type: ShellCommunicatorService }, { type: DataCommunicationService }, { type: i4$1.Router }, { type: WebResourceService }, { type: i1.MatDialog }] });

/**
 * Service to redirect routes
 */
class AuthRedirectService {
    constructor() {
        this.router = inject(Router);
        this.urlCaptureService = inject(UrlCaptureService);
    }
    /**
     * setCurrentRouteAsRedirectUri
     */
    setCurrentRouteAsRedirectUri() {
        const currentRoute = this.router.getCurrentNavigation()?.extractedUrl.toString().substring(1) ?? '';
        this.urlCaptureService.storeUrl(currentRoute);
    }
    /**
     * redirectToLogin
     */
    redirectToLogin() {
        this.router.navigateByUrl('');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthRedirectService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthRedirectService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AuthRedirectService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class IfxUfeAuthGuard {
    constructor() {
        this.authService = inject(AuthenticationService);
        this.authRedirectService = inject(AuthRedirectService);
        this.logger = inject(IfxUfeLoggerService);
        this.activeConfigId = 'kerberos';
    }
    async canActivate(route, state) {
        if (this.authService.isUserAuthenticated) {
            this.activeConfigId = this.authService.activeConfigId ?? 'kerberos';
            return Promise.resolve(true);
        }
        else {
            this.authRedirectService.setCurrentRouteAsRedirectUri();
            this.authRedirectService.redirectToLogin();
            return Promise.resolve(false);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeAuthGuard, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeAuthGuard, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeAuthGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class IfxUfeClaimsAuthGuard extends IfxUfeAuthGuard {
    constructor() {
        super(...arguments);
        this.claimService = inject(IfxClaimsService);
    }
    async canActivate(route, state) {
        let canActivate = false;
        try {
            canActivate = await super.canActivate(route, state);
        }
        catch (error) {
            this.logger.error('Error while checking authentication', error);
            return false;
        }
        if (!canActivate) {
            return false;
        }
        try {
            return await this.claimService.hasClaimsForGuard(route, state);
        }
        catch (error) {
            this.logger.error('Error while checking claims', error);
            return false;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeClaimsAuthGuard, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeClaimsAuthGuard, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: IfxUfeClaimsAuthGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class ShowCommandMessagesComponent {
    constructor() {
        this.commandObserver = inject(CommandObserverService);
        this.displayedMessageColumns = ['type', 'sender', 'command', 'params'];
        this.messages = signal(new Array());
        this.showCommandMessages = signal(false);
        this.commandObserver
            .watch$()
            .pipe(takeUntilDestroyed(), filter(cmd => !!cmd.command))
            .subscribe(command => {
            this.messages.update(messages => [...messages, command]);
        });
    }
    getJsonValue(value) {
        return JSON.stringify(value);
    }
    onToggleShowMessages() {
        this.showCommandMessages.update(show => !show);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ShowCommandMessagesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: ShowCommandMessagesComponent, isStandalone: true, selector: "ifx-ufe-show-command-messages", ngImport: i0, template: "@if (showCommandMessages()) {\r\n  <button\r\n    (click)=\"onToggleShowMessages()\"\r\n    mat-stroked-button\r\n    color=\"primary\">\r\n    Hide uFE Messages\r\n  </button>\r\n  <table\r\n    mat-table\r\n    matSort\r\n    matSortActive=\"type\"\r\n    matSortDisableClear\r\n    matSortDirection=\"desc\"\r\n    [dataSource]=\"messages()\">\r\n    <!--- Note that these columns can be defined in any order.\r\n       The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <ng-container matColumnDef=\"type\">\r\n      <th\r\n        mat-header-cell\r\n        *matHeaderCellDef>\r\n        Type\r\n      </th>\r\n      <td\r\n        mat-cell\r\n        *matCellDef=\"let element\">\r\n        {{ element.type }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"sender\">\r\n      <th\r\n        mat-header-cell\r\n        *matHeaderCellDef>\r\n        Sender\r\n      </th>\r\n      <td\r\n        mat-cell\r\n        *matCellDef=\"let element\">\r\n        {{ element.sender }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"command\">\r\n      <th\r\n        mat-header-cell\r\n        *matHeaderCellDef>\r\n        Command\r\n      </th>\r\n      <td\r\n        mat-cell\r\n        *matCellDef=\"let element\">\r\n        {{ element.command }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"params\">\r\n      <th\r\n        mat-header-cell\r\n        *matHeaderCellDef>\r\n        Params\r\n      </th>\r\n      <td\r\n        mat-cell\r\n        *matCellDef=\"let element\">\r\n        {{ getJsonValue(element.params) }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr\r\n      mat-header-row\r\n      *matHeaderRowDef=\"displayedMessageColumns\"></tr>\r\n    <tr\r\n      mat-row\r\n      *matRowDef=\"let row; columns: displayedMessageColumns\"></tr>\r\n  </table>\r\n} @else {\r\n  <button\r\n    (click)=\"onToggleShowMessages()\"\r\n    mat-stroked-button\r\n    color=\"primary\">\r\n    Show uFE Messages\r\n  </button>\r\n}\r\n", styles: [""], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i4.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i4.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i4.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i4.MatColumnDef, selector: "[matColumnDef]", inputs: ["matColumnDef"] }, { kind: "directive", type: i4.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i4.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i4.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i4.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i4.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i4.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatSortModule }, { kind: "directive", type: i3$1.MatSort, selector: "[matSort]", inputs: ["matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortDisabled"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "ngmodule", type: MatPaginatorModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ShowCommandMessagesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ifx-ufe-show-command-messages', imports: [MatTableModule, MatButtonModule, MatSortModule, MatPaginatorModule], template: "@if (showCommandMessages()) {\r\n  <button\r\n    (click)=\"onToggleShowMessages()\"\r\n    mat-stroked-button\r\n    color=\"primary\">\r\n    Hide uFE Messages\r\n  </button>\r\n  <table\r\n    mat-table\r\n    matSort\r\n    matSortActive=\"type\"\r\n    matSortDisableClear\r\n    matSortDirection=\"desc\"\r\n    [dataSource]=\"messages()\">\r\n    <!--- Note that these columns can be defined in any order.\r\n       The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <ng-container matColumnDef=\"type\">\r\n      <th\r\n        mat-header-cell\r\n        *matHeaderCellDef>\r\n        Type\r\n      </th>\r\n      <td\r\n        mat-cell\r\n        *matCellDef=\"let element\">\r\n        {{ element.type }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"sender\">\r\n      <th\r\n        mat-header-cell\r\n        *matHeaderCellDef>\r\n        Sender\r\n      </th>\r\n      <td\r\n        mat-cell\r\n        *matCellDef=\"let element\">\r\n        {{ element.sender }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"command\">\r\n      <th\r\n        mat-header-cell\r\n        *matHeaderCellDef>\r\n        Command\r\n      </th>\r\n      <td\r\n        mat-cell\r\n        *matCellDef=\"let element\">\r\n        {{ element.command }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"params\">\r\n      <th\r\n        mat-header-cell\r\n        *matHeaderCellDef>\r\n        Params\r\n      </th>\r\n      <td\r\n        mat-cell\r\n        *matCellDef=\"let element\">\r\n        {{ getJsonValue(element.params) }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr\r\n      mat-header-row\r\n      *matHeaderRowDef=\"displayedMessageColumns\"></tr>\r\n    <tr\r\n      mat-row\r\n      *matRowDef=\"let row; columns: displayedMessageColumns\"></tr>\r\n  </table>\r\n} @else {\r\n  <button\r\n    (click)=\"onToggleShowMessages()\"\r\n    mat-stroked-button\r\n    color=\"primary\">\r\n    Show uFE Messages\r\n  </button>\r\n}\r\n" }]
        }], ctorParameters: () => [] });

/*
 * Public API Surface of ifx-ufe
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AbstractShell, AbstractShellView, AppDescription, AppLink, AppLinkGroup, AuthMode, AuthStatus, AuthToken, AuthUserInformationService, DataCommunicationService, FrontEndDiscoveryService, HelpItem, IdAuthToken, IfxUfeAuthGuard, IfxUfeAuthRefreshComponent, IfxUfeClaimsAuthGuard, IfxUfeConsoleLogger, IfxUfeLogLevel, IfxUfeLoggerService, IfxUfeModule, JwtCounterComponent, LoginComponent, LogoutComponent, MessageListenerDirective, OpenWebResourceCommandArgument, ShellCommunicatorService, ShowCommandMessagesComponent, StyleSheetAndLinkCaptureService, SubscriberData, SubscriberInfo, environment as UFE_ENVIRONMENT, UfeAuthComponent, UfeCommand, UfeDialogWindowService, UfeEnvironmentService, UfeHeaderComponent, UfeSafeUrlPipe, UfeUnauthorizedComponent, UrlCaptureService, WebResourceService, WindowRefTuple, WrlCommandArgument };
//# sourceMappingURL=ifx-ufe.mjs.map
