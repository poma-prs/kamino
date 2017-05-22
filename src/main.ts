import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import {WINDOW} from "./app/api/session.service";
import {API_BASE_URL} from "./app/api/api.service";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([
  {
    provide: WINDOW,
    useValue: window,
  },
  {
    provide: API_BASE_URL,
    useValue: environment.apiBaseUrl,
  },

]).bootstrapModule(AppModule);
