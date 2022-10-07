import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmailSubscribeComponent } from './email-subscribe/email-subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailSubscribeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
