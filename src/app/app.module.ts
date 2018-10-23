import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { InViewportModule, WindowRef } from '@thisissoon/angular-inviewport';

import { ScrollSpyModule } from './scroll-spy';
import { AppComponent } from './app.component';

export const getWindow = () => window;

export const inViewportProviders: Provider[] = [
  { provide: WindowRef, useFactory: getWindow },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    InViewportModule.forRoot(inViewportProviders),
    ScrollSpyModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
