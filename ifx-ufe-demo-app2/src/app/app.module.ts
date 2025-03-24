import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IfxUfeModule } from 'ifx-ufe';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UfeAppRootComponent } from './ufe-root/ufe-root.component';
import { IfxAuthorizationConfig, IfxAuthorizationModule, IfxLogLevel } from 'angular-isecure-authorization';
import { environment } from './environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

export const httpLoaderFactoryISecure = (httpClient: HttpClient) =>
  httpClient.get<IfxAuthorizationConfig>(`${window.location.origin}/assets/profiles/isecure.json`).pipe(
    map((customConfig: IfxAuthorizationConfig) => {
      customConfig.logLevel = environment.production ? IfxLogLevel.Error : IfxLogLevel.Info;
      return customConfig;
    })
  );
