import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import weeCardTheme from './theme/theme';
import { routes } from './routing/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: weeCardTheme,
        options: {
          darkModeSelector: false,
        },
      },
    }),
    provideRouter(routes),
  ],
};
