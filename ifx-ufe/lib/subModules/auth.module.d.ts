import { HttpClient } from '@angular/common/http';
import { StsConfigHttpLoader } from 'angular-auth-oidc-client';
import * as i0 from "@angular/core";
import * as i1 from "angular-auth-oidc-client";
import * as i2 from "@angular/router";
export declare const httpLoaderFactory: (httpClient: HttpClient) => StsConfigHttpLoader;
export declare class AuthConfigModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthConfigModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AuthConfigModule, never, [typeof i1.AuthModule, typeof i2.RouterModule], [typeof i1.AuthModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AuthConfigModule>;
}
