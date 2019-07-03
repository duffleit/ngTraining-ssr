import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PrebootModule } from 'preboot';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ENVIRONMENT_TOKEN } from 'src/environment-token';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    PrebootModule.withConfig({ appRoot: 'app-root' }),
    AppRoutingModule
  ],
  providers: [
    {provide: ENVIRONMENT_TOKEN, useValue: "CLIENT"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
