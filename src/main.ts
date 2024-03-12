import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

export function getBaseUrl(){
  return "http://localhost:5000/api/"
}

const provider = [
  {
    provide:'baseUrl',useFactory:getBaseUrl,desp:[]
  }
]

platformBrowserDynamic(provider).bootstrapModule(AppModule)
  .catch(err => console.error(err));
