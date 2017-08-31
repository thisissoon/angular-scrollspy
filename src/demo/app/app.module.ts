import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollSpyModule, WindowRef } from 'angular-scrollspy';

export const getWindow = () => window;
const providers: Provider[] = [
  { provide: WindowRef, useFactory: (getWindow) },
];

import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ScrollSpyModule.forRoot(providers)
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
