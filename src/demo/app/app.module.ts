import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViewportModule } from '@betadigitalproduction/ngx-viewport-service';

import { AppComponent }  from './app.component';
import { PlatformModule } from '@betadigitalproduction/ngx-platform-service';

@NgModule({
  imports: [
    BrowserModule,
    PlatformModule,
    ViewportModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
