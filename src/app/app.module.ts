import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InViewportModule } from '@thisissoon/angular-inviewport';

import { ScrollSpyModule } from './scroll-spy';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InViewportModule, ScrollSpyModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}
