import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { IfxUfeModule } from 'ifx-ufe';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule, IfxUfeModule, AppRoutingModule), provideAnimations()],
}).catch(err => console.error(err));
