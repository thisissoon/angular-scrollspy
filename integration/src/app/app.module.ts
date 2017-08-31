import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollSpyModule, WindowRef } from '@thisissoon/angular-scrollspy';

import { AppComponent }  from './app.component';

export const getWindow = () => window;
const providers: Provider[] = [
  { provide: WindowRef, useFactory: (getWindow) },
];

@NgModule({
  imports: [
    BrowserModule,
    ScrollSpyModule.forRoot(providers)
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
