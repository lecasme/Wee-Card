import { bootstrapApplication } from '@angular/platform-browser';
import {App} from './presentation/components/app.component';
import {appConfig} from './presentation/configuration/app.config';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
