import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(AkitaNgDevtools.forRoot())],
});
