import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IfxUfeModule } from 'ifx-ufe';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UfeAppRootComponent } from './ufe-root/ufe-root.component';
import { HttpClient } from '@angular/common/http';
import { IfxAuthorizationConfig, IfxAuthorizationModule, IfxLogLevel } from 'angular-isecure-authorization';
import { map } from 'rxjs';
import { environment } from './environments/environment';

// load the isecure configuration file the same way as the authentication files
export const httpLoaderFactoryISecure = (httpClient: HttpClient) =>
  httpClient.get<IfxAuthorizationConfig>(`${window.location.origin}/assets/profiles/isecure.json`).pipe(
    map((customConfig: IfxAuthorizationConfig) => {
      customConfig.logLevel = environment.production ? IfxLogLevel.Error : IfxLogLevel.Info;
      return customConfig;
    })
  );
