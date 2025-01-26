import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withHashLocation } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(), // Enable HttpClient globally
    provideRouter([], withHashLocation()), // Configure routing (if any)
  ],
};
