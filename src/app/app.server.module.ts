import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ENVIRONMENT_TOKEN } from 'src/environment-token';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: ENVIRONMENT_TOKEN, useValue: "SERVER"}
  ]
})
export class AppServerModule {}
