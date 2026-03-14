import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {providePrimeNG} from 'primeng/config';
import {definePreset} from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fff1f2',
      100: '#ffe4e6',
      200: '#fecdd3',
      300: '#fda4af',
      400: '#fb7185',
      500: '#f43f5e',
      600: '#e11d48',
      700: '#be123c',
      800: '#9f1239',
      900: '#881337',
      950: '#4c0519'
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#f4f4f6',
          100: '#e8e9ed',
          200: '#d2d3db',
          300: '#b2b3c0',
          400: '#8b8da0',
          500: '#6c6e84',
          600: '#585a72',
          700: '#48495d',
          800: '#3c3d4e',
          900: '#343544',
          950: '#1e1f2b'
        }
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '#f4f4f6',
          100: '#e8e9ed',
          200: '#d2d3db',
          300: '#b2b3c0',
          400: '#8b8da0',
          500: '#6c6e84',
          600: '#585a72',
          700: '#48495d',
          800: '#3c3d4e',
          900: '#343544',
          950: '#1e1f2b'
        }
      }
    }
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: '.dark-mode'
        }
      }
    })
  ]
};
